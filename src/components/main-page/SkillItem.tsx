interface SkillItemProps {
    name: string;
    icon: any;
    iconSize?: number;
    className?: string;
}

export default function SkillItem(props: SkillItemProps){
    return (
        <li className={`${props.className? props.className : "flex flex-col justify-center items-center text-center w-1/3 px-10 py-1 rounded-full"}`}>
                <span className="font-bold bg-zinc-200 dark:bg-zinc-600 rounded-full px-2 py-1">{props.name}</span>
                <div className="bg-zinc-200 dark:bg-zinc-600 rounded-full p-2.5">
                    <props.icon size={props.iconSize? props.iconSize : 15} />
                </div>

        </li>
    )
}