import Anchor from "./Anchor";

export default function Navbar(){
    return (
        <nav className="flex justify-between items-center border-b dark:border-zinc-50/25 p-2">
            <p className="text-xl sm:text-2xl ml-2.5">Henry Lucca</p>
            <div className="flex gap-4 mr-1.5 md:mr-2.5">
                <Anchor content="About" href="#about"/>
                <Anchor content="Projects" href="#projects"/>
                <Anchor content="Contact" href="#contact"/>
            </div>
        </nav>
    )
}