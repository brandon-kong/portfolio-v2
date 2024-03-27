import cn from "@/util/cn";
import Link from "next/link";

const shared = "select-none inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium transition-all duration-300 outline-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50";
const textboxShared = "min-h-[150px] p-4 whitespace-pre-line resize-none overflow-auto";

const variants = {
    "solid": "bg-background-secondary-light-200 dark:bg-background-secondary-800 hover:bg-background-secondary-light-100 dark:hover:bg-background-secondary-700/90 text-black dark:text-white shadow-sm ring-primary-300",
};

const sizes = {
    sm: "h-9 px-5 text-xs",
    md: "h-11 py-5 px-6",
    lg: "h-12 px-8",
    icon: "h-9 w-9 flex items-center justify-center",
}

type VariantKey = keyof typeof variants
type SizeKey = keyof typeof sizes

export type InputProps = {
    className?: string
    required?: boolean
    name?: string
    type?: string
    placeholder?: string
    variant?: VariantKey
    label?: string
    size?: SizeKey
    children?: React.ReactNode
    target?: string
    value?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
};

export type TextboxProps = {
    className?: string
    required?: boolean
    name?: string
    placeholder?: string
    variant?: VariantKey
    label?: string
    size?: SizeKey
    children?: React.ReactNode
    target?: string
    value?: string
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
};

const Input = ({ className, variant = "solid", size = "md", label, ...rest }: InputProps) => {
    return (
        <div
        className={'flex flex-col gap-2 w-full'}
        >
        <label
        className={'select-none'}
        >{label}</label>
        <input className={cn(shared, sizes[size], variants[variant], className)}
        {...rest}
        />
        </div>
       
    )
}

const Textbox = ({ className, variant = "solid", size = "md", label, ...rest }: TextboxProps) => {
    return (
        <div
        className={'flex flex-col gap-2 w-full'}
        >
         <label
        className={'select-none'}
        >{label}</label>
        <textarea className={cn(shared, textboxShared, variants[variant], className)}
        {...rest}
        />
        </div>
    )
}

export default Input

export {Textbox}