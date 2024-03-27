import Image from "next/image"
import { H3, H4, P } from ".."
import Link from "next/link"
import { Project } from "@/types"

export type ProjectCardProps = {
    project: Project;
}

export default function ProjectCard ({ project }: ProjectCardProps) {
    return (
        <Link href={`/projects/${project.slug}`}>
            <div
            className={'group w-full  flex flex-col items-center justify-center gap-5'}
            >
                <div className={'aspect-[1.3/1] w-full relative bg-background-secondary-300 rounded-xl overflow-hidden'} >
                    <Image src={project.head_image} alt={project.name} fill={true} className={'w-full h-full absolute group-hover:scale-110 transition-transform duration-500'} />
                </div>

                <div
                className={'flex flex-col gap-1 w-full'}
                >
                    <P className={'font-medium'}>{project.name}</P>
                    <P className={'text-md text-background-secondary-300'}>{project.description}</P>
                </div>
            </div>
        </Link>
    )
}