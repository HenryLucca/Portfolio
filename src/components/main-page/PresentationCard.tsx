import { DownloadIcon, GithubIcon, LinkedInIcon, UserCircleIcon } from "@/icons/icons";
import downloadCV from "@/func/downloadCV"
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function PresentationCard() {
  const { t } = useTranslation("presentation-card");
        
  return (
    <section
      className={`
          bg-zinc-100 dark:bg-zinc-700 pb-4
        `}
    >
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 bg-zinc-100 dark:bg-zinc-700 py-8 px-16 sm:p-16 rounded-md ">
        <Image
          src="/profile.jpg"
          alt="Henry Lucca"
          width={144}
          height={144}
          className={`rounded-full border-4 border-zinc-50 
        w-36 h-36 md:max-w-48 md:h-48
        `}
        />

        <div className="flex flex-col items-center justify-center gap-5">
          <div className="flex flex-col lg:flex-row items-baseline justify-center gap-2 text-xl font-bold">
            <span>{t("greeting")}</span>
            <p className="flex flex-col justify-center items-center text-center gap-1 sm:flex-row">
              <span className="text-4xl md:ml-2">Henry Lucca</span>
              <span className="text-4xl md:ml-2">🥳</span>
            </p>
          </div>

          <p className="text-lg sm:text-2xl w-12/12 sm:w-9/12 text-center">
            {t("presentation")}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-2 sm:flex-row justify-center items-center">
        <a
          href="#contact"
          className="flex gap-0.5 bg-zinc-200 dark:bg-zinc-600 rounded-lg p-1"
        >
          <span>{t("contact-me")}</span>
          <UserCircleIcon />
        </a>

        <a
          onClick={downloadCV}
          className="flex gap-0.5 bg-violet-300 dark:bg-violet-500 rounded-lg p-1 cursor-pointer"
        >
          <span>Download CV</span>
          <DownloadIcon />
        </a>
        
        <div className="flex gap-4">
          <a
            href="https://github.com/HenryLucca"
            className="bg-zinc-300 dark:bg-zinc-500 p-1 rounded-full flex justify-center items-center"
          >
            <GithubIcon size={8} />
          </a>
          <a
            href="https://www.linkedin.com/in/henry-lucca-a7093b220/"
            className="bg-zinc-300 dark:bg-zinc-500 p-1 rounded-full flex justify-center items-center"
          >
            <LinkedInIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
