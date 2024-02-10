import Image from "next/image"
import { Button, H3, H4, P } from ".."
import Link from "next/link"

export type BackgroundCardProps = {
    title: string,
    subtitle: string,
    description: React.ReactNode,
    dateRange: string
}

export default function BackgroundCard ({ title, subtitle, description, dateRange }: BackgroundCardProps) {
    return (
        <div
        className={'w-full h-full bg-background-secondary flex flex-row items-center justify-center gap-10'}
        >
            <div
            className={'flex flex-col gap-1 w-full'}
            >   
                <div
                className={'flex gap-8'}
                >
                    <div
                    className={'max-w-[200px] w-full'}
                    >
                        <P className={'text-md text-background-secondary-400'}>
                            {dateRange}
                        </P>
                    </div>
                    

                    <div
                    className={'flex flex-col gap-6 flex-1'}
                    >
                        <div>
                            <P
                            className={'text-md leading-[1.8]'}
                            
                            >
                                {title}
                            </P>
                            <P className={'text-sm text-background-secondary-300'}>
                                {subtitle}
                            </P>
                        </div>
                        <div className={'text-md leading-[1.8] text-background-secondary-300'}>
                            {description}
                        </div>
                    </div>
                </div>
                
               
            </div>
        </div>
    )
}