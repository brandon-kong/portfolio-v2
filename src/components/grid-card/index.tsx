import cn from "@/util/cn"

export type GridCardProps = {
    className?: string,
    children?: React.ReactNode
}

export default function GridCard ({ className, children }: GridCardProps) {
    return (
        <div
        className={cn('w-full p-5 bg-background-secondary-light-200 dark:bg-background-secondary-900/50 text-background-secondary-400 dark:text-background-secondary-300', className)}
        >
            { children }
        </div>
    )
}