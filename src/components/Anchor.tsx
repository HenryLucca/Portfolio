interface AnchorProps {
    content: string;
    href: string;
    className?: string;
}

export default function Anchor(props: AnchorProps){
    return (
        <a href={props.href}
            className={`text-2xl font-semibold hover:text-gray-400 ${props.className}`}
        >
            {props.content}
        </a>
    )
}