import Image from "next/image"
import { Button, H2, H3, H4, P } from ".."
import Link from "next/link"

export type ProjectBackgroundCardProps = {
    title: string,
    children: React.ReactNode
}

export default function ProjectBackgroundCard ({ title, children }: ProjectBackgroundCardProps) {
    return (
        <div
        className={'w-full h-full flex items-center justify-center gap-4'}
        >
            <div
            className={'flex flex-col gap-1 w-full'}
            >   
                <div
                className={'flex flex-col lg:flex-row gap-8'}
                >
                    <div
                    className={'max-w-[240px] w-full'}
                    >
                        <H2 className={''}>
                            {title}
                        </H2>
                    </div>
                    

                    <div
                    className={'flex flex-col gap-6 flex-1 text-background-secondary-300'}
                    >
                        {children}
                    </div>
                </div>
                
               
            </div>
        </div>
    )
}