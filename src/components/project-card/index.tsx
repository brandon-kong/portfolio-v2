import Image from "next/image"
import { H3, H4, P } from ".."
import Link from "next/link"

export type ProjectCardProps = {
    title: string,
    description: string,
    tags: string[],
    image: string,
    link: string
}

export default function ProjectCard ({ title, description, tags, image, link }: ProjectCardProps) {
    return (
        <Link href={link}>
            <div
            className={'group w-full bg-background-secondary flex flex-col items-center justify-center gap-5'}
            >
                <div className={'aspect-[1.3/1] w-full relative bg-background-secondary-300 rounded-xl overflow-hidden'} >
                    <Image src={image} alt={title} fill={true} className={'w-full h-full absolute group-hover:scale-110 transition-transform duration-500'} />
                </div>

                <div
                className={'flex flex-col gap-1 w-full'}
                >
                    <P className={'font-medium'}>{title}</P>
                    <P className={'text-md text-background-secondary-300'}>{description}</P>
                </div>
            </div>
        </Link>
    )
}