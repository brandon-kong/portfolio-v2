const variantDict = {
    "primary": "bg-primary-300/60 text-black",
}

type Variant = keyof typeof variantDict;

export default function Tag({ children, variant = "primary" }: {
    children: React.ReactNode,
    variant?: Variant
}) {
    return (
        <span
        className={`flex justify-center items-center gap-2 w-fit px-3 h-6 rounded-full text-sm font-normal ${variantDict[variant]}`}
        >
            <div className={'w-[6px] aspect-square bg-primary-200 rounded-full'}>
                 
            </div>
            {children}
        </span>
    )
}