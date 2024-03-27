import cn from "@/util/cn";
import Link from "next/link";

const shared = "select-none inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium transition-colors duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50";

const variants = {
    "primary": "bg-primary hover:bg-primary/90 text-black shadow-sm",
    "background": "bg-background-secondary-light-200  dark:bg-background-secondary-800 hover:bg-background-secondary-light-300 dark:hover:bg-background-secondary-700/90 text-black dark:text-white shadow-sm",
    "primary-light": "bg-primary-100 hover:bg-primary-200 text-primary-900 shadow-sm",
    "secondary": "bg-secondary-500 hover:bg-secondary-600 text-black shadow-sm",
    "ghost": "bg-transparent hover:bg-gray-100 text-gray-700",
    "outline": "bg-transparent border border-primary-500 dark:border-primary-400 text-primary-600 dark:text-primary-400 hover:border-primary-600 dark:hover:border-primary-500",
    "outline-mono": "bg-transparent border border-background-secondary-600 dark:border-background-secondary-800 text-background-secondary-400 dark:text-background-secondary-100 hover:border-background-secondary-700 dark:hover:border-background-secondary-500",
    "link": "bg-transparent text-primary-700 underline inline-flex h-fit px-0",
    "danger": "bg-red-500 hover:bg-red-600 text-white shadow-sm",
};

const sizes = {
    sm: "h-9 px-5 text-xs",
    md: "h-11 py-5 px-6",
    lg: "h-12 px-8",
    icon: "h-9 w-9 flex items-center justify-center",
}

type VariantKey = keyof typeof variants
type SizeKey = keyof typeof sizes

export type ButtonProps = {
    className?: string
    variant?: VariantKey
    size?: SizeKey
    children?: React.ReactNode
    onClick?: () => void
    href?: string
    target?: string
    
};

const Button = ({ className, target, variant = "primary", size = "md", children, onClick, href }: ButtonProps) => {
    
    if (href) {
        return (
            <Link target={target} href={href} className={cn(shared, sizes[size], variants[variant], className)} onClick={onClick}>
                {children}
            </Link>
        )
    }
    return (
        <button className={cn(shared, sizes[size], variants[variant], className)} onClick={onClick}>
            {children}
        </button>
    )
}

const ElevatedButton = ({ className, variant = "primary", size = "md", children, onClick }: ButtonProps) => {
    return (
        <button className={cn(shared, className)} onClick={onClick}>
            <a className="relative" href="#">
                <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-black"></span>
                <span className="fold-bold relative inline-block h-full w-full rounded border-2 border-black bg-yellow-400 px-3 py-1 text-base font-bold text-black transition duration-100 hover:bg-yellow-400 hover:text-yellow-900">
                    {children}
                </span>
            </a>
        </button>
    )
}

export default Button