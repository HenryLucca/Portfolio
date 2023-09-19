import { GithubIcon, GlobalIcon } from "@/icons/icons";
import Image from "next/image";

interface ProjectItemProps {
  name: string;
  technologies: string[];
  github: string;
  deploy?: string;
  imagePreview: string;
  description: string;
}

// Practicing different approach to create a component that receives props with typescript
// TODO: Change approach, separate responsabilities. Move the tecnologyColor function to a utils file.
const ProjectItem: React.FC<ProjectItemProps> = ({
  name,
  technologies,
  github,
  deploy,
  imagePreview,
  description,
}) => {
  const tecnologyColor = (tecnology: string) => {
    switch (tecnology) {
      case "React":
        return "bg-gradient-to-r from-blue-600 to-blue-400";
      case "Nextjs":
        return "bg-gradient-to-r from-gray-800 to-gray-700";
      case "TailwindCSS":
        return "bg-blue-400";
      case "Typescript":
        return "bg-gradient-to-r from-blue-600 to-blue-900";
      case "MongoDB":
        return "bg-gradient-to-r from-green-400 to-green-600";
      case "Firebase":
        return "bg-yellow-600/90";
      case "CSS":
        return "bg-gradient-to-r from-blue-400 to-blue-600";
      case "C#":
        return "bg-gradient-to-r from-blue-600 to-blue-900";
      case "XAML":
        return "bg-gradient-to-r from-blue-400 to-blue-700";
      case "MVVM":
        return "bg-gradient-to-r from-emerald-400 via-cyan-500 to-amber-500";
      case "SQLite":
        return "bg-gradient-to-r from-blue-400 to-blue-700";
      default:
        return "bg-gray-400";
    }
  };

  return (
    <div className="max-w-full mx-auto bg-zinc-200 dark:bg-zinc-600 rounded-xl p-2 shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="md:flex-shrink-0 flex justify-center items-center">
          <Image
            width={192}
            height={192}
            className="w-full h-fit object-cover md:w-48"
            src={`${imagePreview}`}
            alt={`${name} Preview`}
          />
        </div>
        <div className="p-1">
          <div className="uppercase tracking-wide text-sm text-indigo-500 dark:text-indigo-200 font-semibold bg-zinc-300 dark:bg-zinc-500 rounded-md w-fit px-1">
            {name}
          </div>
          <div className="flex justify-start flex-wrap mt-2">
            {technologies.map((technology, index) => (
              <span
                key={index}
                className={`text-xs font-medium mr-2 mb-2 py-0.5 px-1.5 sm:py-1 sm:px-2.5 rounded-md text-zinc-50 ${tecnologyColor(
                  technology
                )}`}
              >
                {technology}
              </span>
            ))}
          </div>
          <p className="mt-2 text-gray-500 dark:text-gray-200 bg-zinc-300 dark:bg-zinc-500 rounded-md p-0.5 ">
            {description}
          </p>
        </div>
      </div>
      <div>
        <div className="flex justify-between mt-2">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center gap-0.5 text-xs font-semibold bg-zinc-300 dark:bg-zinc-500 rounded-md p-1 px-2 mr-1.5"
          >
            <GithubIcon size={6} />
            <span className="font-bold py-0.5 px-1 bg-zinc-400 rounded-lg">
              Github
            </span>
          </a>
          {deploy && (
            <a
              href={deploy}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center gap-0.5 text-xs font-semibold bg-zinc-300 dark:bg-zinc-500 rounded-md p-1 px-2 mr-1.5"
            >
              <GlobalIcon />
              <span className="font-bold py-0.5 px-1 bg-zinc-400 rounded-lg">
                Deploy
              </span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
