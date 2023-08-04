import ProjectItem from "./ProjectItem";
import { useTranslation } from "react-i18next";

export default function Projects(){
    const {t} =  useTranslation("projects");
    return (
        <section id="projects" className="w-screen flex flex-col items-center rounded-lg">
            <div className="bg-zinc-100 dark:bg-zinc-700 w-4/5 md:w-11/12 flex flex-col items-center rounded-lg">
            <h2 className="bg-zinc-200 dark:bg-zinc-600 px-2 py-1 mt-2 rounded-3xl text-2xl font-semibold">{t('highlighted-projects')}</h2>
            <div className="flex flex-col gap-2 p-3">
                <ProjectItem 
                    name="Sistema Estágio"
                    technologies={["React", "Nextjs", "TailwindCSS", "Typescript", "MongoDB", "Firebase"]}
                    github="https://github.com/HenryLucca/sistema-estagio/tree/master"
                    deploy="https://sistema-estagio.vercel.app/"
                    imagePreview="/website-preview/sistema-estagio-preview.jpg"
                    description={t('sistema-estagio-description')}
                    />
                <ProjectItem
                    name="Secret Word"
                    technologies={["React", "Nextjs", "MongoDB", "CSS"]}
                    github="https://github.com/HenryLucca/Secret-Word-Game"
                    deploy="https://secret-word-game.vercel.app/"
                    imagePreview="/website-preview/secret-word-preview.jpg"
                    description={t('secret-word-description')}
                    />
                <ProjectItem
                    name="Pokédex UWP"
                    technologies={["C#", "XAML", "UWP", "MVVM", "SQLite"]}
                    github="https://github.com/HenryLucca/Pokedex_Grupo_3"
                    imagePreview="/website-preview/pokedex-uwp-preview.jpg"
                    description={t('pokedex-uwp-description')}
                    />
                
            </div>

            </div>
        </section>
    )
}