interface AnchorProps {
    content: string;
    href: string;
    className?: string;
}

export default function Anchor(props: AnchorProps){
    return (
        <a href={props.href}
            className={`
                text-ll sm:text-xl md:text-2xl font-semibold hover:text-gray-400 ${props.className}
                p-1.5 rounded-md
                bg-zinc-100 dark:bg-zinc-700    
            `}
        >
            {props.content}
        </a>
    )
}