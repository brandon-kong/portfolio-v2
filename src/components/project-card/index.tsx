import { H3, H4, P } from ".."

export type ProjectCardProps = {
    title: string,
    description: string,
    tags: string[],
    image: string,
    link: string
}

export default function ProjectCard ({ title, description, tags, image, link }: ProjectCardProps) {
    return (
        <div
        className={'w-full h-full bg-background-secondary flex flex-col items-center justify-center gap-5'}
        >
            <div className={'aspect-[1.3/1] w-full relative bg-background-secondary-300 rounded-xl overflow-hidden'} >
                <img src={image} alt={title} className={'w-full h-full absolute'} />
            </div>

            <div
            className={'flex flex-col gap-1 w-full'}
            >
                <P className={'font-medium'}>{title}</P>
                <P className={'text-md text-background-secondary-300'}>{description}</P>
            </div>
        </div>
    )
}