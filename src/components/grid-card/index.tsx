import Image from "next/image"
import { Button, H3, H4, P } from ".."
import Link from "next/link"
import cn from "@/util/cn"

export type GridCardProps = {
    className?: string,
    children?: React.ReactNode
}

export default function GridCard ({ className, children }: GridCardProps) {
    return (
        <div
        className={cn('w-full h-full p-5 bg-background-secondary-900/50', className)}
        >
            { children }
        </div>
    )
}