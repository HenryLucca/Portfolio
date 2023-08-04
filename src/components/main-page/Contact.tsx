import { GithubIcon, LinkedInIcon } from "@/icons/icons";
import EmailForm from "./EmailForm";

import { useTranslation } from "react-i18next";

export default function Contact(){
    const {t} = useTranslation("contact");
    return (
      <section
        id="contact"
        className="flex flex-col items-center rounded-lg bg-zinc-100 dark:bg-zinc-700"
      >
        <h1 className="p-1 bg-zinc-200 dark:bg-zinc-600 rounded-lg m-1.5">{t('contact')}</h1>
        <div className="flex flex-col items-center justify-center text-center gap-4">
          <p>{t('more-about-me')}</p>
          <div className="flex justify-center gap-4">
            <a
              href="https://github.com/HenryLucca"
              className="bg-zinc-300 dark:bg-zinc-500 p-1 rounded-full flex justify-center items-center"
            >
              Github
              <GithubIcon size={8} />
            </a>
            <a
              href="https://www.linkedin.com/in/henry-lucca-a7093b220/"
              className="bg-zinc-300 dark:bg-zinc-500 p-1 rounded-full flex justify-center items-center"
            >
              LinkedIn
              <LinkedInIcon />
            </a>
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            <p>{t('send-me')}</p>
            <EmailForm />
          </div>
        </div>
      </section>
    );
}