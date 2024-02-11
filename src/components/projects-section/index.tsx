import { SlideIn, ProjectCard } from "..";
import { getAllProjects } from "@/util/projects";

export default async function ProjectsSection () {
    const projects = await getAllProjects() || [];

    return (
        <div
        className={'grid grid-cols-1 lg:grid-cols-2 gap-8'}>
            {projects.map((work, index) => {
                return (
                    <ProjectCard
                    key={index}
                    project={work}
                    />
                )
            })}
        </div>
    )
}