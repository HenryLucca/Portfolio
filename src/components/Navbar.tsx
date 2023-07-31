import Anchor from "./Anchor";

export default function Navbar(){
    return (
        <nav className="flex justify-between items-center border-b p-1">
            <p className="text-2xl ml-1">Henry Lucca</p>
            <div className="flex gap-4 mr-1">
                <Anchor content="About" href="#about"/>
                <Anchor content="Projects" href="#projects"/>
                <Anchor content="Contact" href="#contact"/>
            </div>
        </nav>
    )
}