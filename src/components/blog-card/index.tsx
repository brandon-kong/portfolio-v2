import { Button, H3, P } from ".."

export type BlogCardProps = {
    title: string,
    description: string,
    tags: string[],
    image: string,
    link: string,
    date: string
}

export default function BlogCard ({ title, description, tags, image, link, date }: BlogCardProps) {
    return (
        <div
        className={'w-full h-full bg-background-secondary flex flex-col-reverse sidebar-shown:flex-row items-center justify-center gap-10'}
        >
            <div
            className={'flex flex-col gap-1 w-full'}
            >   
                <div
                className={'flex flex-col gap-3'}
                >
                    <P className={'text-sm font-semibold text-background-secondary-400'}>{date}</P>

                    <div
                    className={'flex flex-col gap-2'}
                    >
                        <H3
                        
                        >
                            {title}
                        </H3>
                        <P className={'text-md leading-[1.8] text-background-secondary-300'}>
                            {description}
                        </P>
                        <Button
                        href={link}
                        variant={'outline-mono'}
                        className={'w-full sidebar-shown:w-fit mt-4'}
                        >
                            Read More About This Blog
                        </Button>
                    </div>
                </div>
                
               
            </div>

            <div className={'aspect-[1.333333/1] w-full sidebar-shown:w-[420px] relative bg-background-secondary-300 rounded-xl overflow-hidden'} >
                <img src={image} alt={title} className={'w-full h-full absolute object-cover transition-transform duration-500'} />
            </div>
        </div>
    )
}