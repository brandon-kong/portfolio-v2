import Image from "next/image"
import { Button, H3, H4, P } from ".."
import Link from "next/link"
import cn from "@/util/cn"

export type TestimonialCardProps = {
    className?: string,
    content: string,
    name: string,
    image?: string,
    title: string,
}

export default function TestimonialCard ({ className, content, name, title, image = '' }: TestimonialCardProps) {
    return (
        <div
        className={cn('flex flex-col gap-5 w-full rounded-xl p-10 bg-background-secondary-900/50', className)}
        >
            <P>
                {content}
            </P>

            <div
            className={'flex items-center gap-4 mt-4'}
            >
                <Image src={'https://via.placeholder.com/56'} width={56} height={56} alt={name} className={'w-14 h-14 rounded-full'} />
                <div
                className={'flex flex-col items-start gap-1'}
                >
                     <P className={'text-md'}>
                    {name}
                    </P>
                    <P className={'text-sm text-background-secondary-300'}>
                        {title}
                    </P>
                </div>
               
            </div>
        </div>
    )
}