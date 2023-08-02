import {
  CSharpIcon,
  GitIcon,
  GithubIcon,
  JavaIcon,
  LanguageIcon,
  MongoDBIcon,
  MySQLIcon,
  NextJsIcon,
  NodeJSIcon,
  ReactIcon,
  TailwindIcon,
  TypeScriptIcon,
  VSCodeIcon,
} from "@/icons/icons";
import SkillItem from "./SkillItem";

export default function Skills() {
  return (
    <section className="bg-zinc-100 dark:bg-zinc-700 px-4 min-w-fit max-w-full rounded-2xl p-0.5 mt-12">
      <h1 className="text-3xl md:text-4xl border-b-4 "> Skills</h1>
      <div className="flex flex-col gap-4 mt-4 xl:flex-row xl:gap-24">
        <div>
          <h2 className="text-2xl md:text-3xl">Front-end</h2>
          <ul className="list-none list-inside flex flex-row justify-evenly flex-wrap">
            <SkillItem name="React" icon={ReactIcon} iconSize={15} />
            <SkillItem name="Next.js" icon={NextJsIcon} iconSize={15} />
            <SkillItem name="TailwindCSS" icon={TailwindIcon} iconSize={15} />
            {/* pending: html, css */}
          </ul>
        </div>

        <div className="hidden xl:block border-l-2 border-gray-300/50 mb-4">
          {/* Vertical separator */}
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl">Back-end</h2>
          <ul className="list-none list-inside flex flex-row flex-wrap justify-evenly">
            <SkillItem name="Node.js" icon={NodeJSIcon} iconSize={15} />
            <SkillItem name="TypeScript" icon={TypeScriptIcon} iconSize={15} />
            <SkillItem name="MySQL" icon={MySQLIcon} iconSize={15} />
            <SkillItem name="MongoDB" icon={MongoDBIcon} iconSize={15} />
            <SkillItem name="Java" icon={JavaIcon} iconSize={15} />
            <SkillItem name="C#" icon={CSharpIcon} iconSize={15} />
          </ul>
        </div>

        <div className="hidden xl:block border-l-2 border-gray-300/50 mb-4">
          {/* Vertical separator */}
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl">Others</h2>
          <ul className="list-none list-inside flex flex-row flex-wrap justify-evenly">
            <SkillItem name="Git" icon={GitIcon} iconSize={15} />
            <SkillItem name="GitHub" icon={GithubIcon} iconSize={15} />
            <SkillItem name="VSCode" icon={VSCodeIcon} iconSize={15} />
            <SkillItem name="English" icon={LanguageIcon} iconSize={15} />
          </ul>
        </div>
      </div>
    </section>
  );
}
