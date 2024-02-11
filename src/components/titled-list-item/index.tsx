import Image from "next/image"
import { Button, H2, H3, H4, P } from ".."
import Link from "next/link"

export type TitledListItemProps = {
    title: string,
    description?: string,
    number?: number,
}

export default function TitledListitem ({ title, description, number }: TitledListItemProps) {
    return (
        <div
        className={'w-full bg-background-secondary flex flex-col lg:flex-row items-start justify-center gap-6'}
        >
            <div
            className={'bg-primary-800/30 h-10 w-10 flex place-content-center items-center rounded-full text-primary-300 text-lg aspect-square'}
            >
                { number }
            </div>
            <div
            className={'flex flex-col gap-2 w-full'}
            >   
                <div
                className={'flex flex-col gap-2'}
                >
                    <div
                    className={'w-full'}
                    >
                        <P className={'text-white font-medium'}>
                            {title}
                        </P>
                    </div>
                </div>

                <div
                className={'flex flex-col gap-2'}
                >
                    <P className={'text-background-secondary-300 font-medium text-md leading-[1.8]'}>
                        {description}
                    </P>
                </div>
                
               
            </div>
        </div>
    )
}