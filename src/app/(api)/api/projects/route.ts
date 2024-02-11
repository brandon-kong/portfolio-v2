import fs from 'fs';
import path from 'path';

import { NextRequest } from "next/server";
import { Project } from '@/types';

type Params = {
    slug: string[];
}

export async function GET(request: NextRequest, { params }: { params: Params } ) {
    // Get all slugs from the file system

    const projectsDirectory = path.join(process.cwd(), 'src', 'data', 'projects');
    const fileNames = fs.readdirSync(projectsDirectory);

    // Get all projects
    const projects: Project[] = fileNames.map(fileName => {
        const filePath = path.join(projectsDirectory, fileName);
        const fileContents = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(fileContents);
    });

    return new Response(JSON.stringify(projects), {
        status: 200,
        headers: {
            'content-type': 'application/json'
        }
    });
}