import Anchor from "./Anchor";
import { useTranslation } from "react-i18next";

export default function Navbar(){
    const {t} =  useTranslation("navbar");
    return (
        <>
            <nav className="flex justify-between items-center border-b dark:border-zinc-50/25 p-2">
                <p className="text-xl sm:text-2xl ml-2.5">Henry Lucca</p>
                <div className="flex gap-4 mr-1.5 md:mr-2.5">
                    <Anchor content={t('about')} href="#about"/>
                    <Anchor content={t('projects')} href="#projects"/>
                    <Anchor content={t('contact')} href="#contact"/>
                </div>
            </nav>
        </>
    )
}