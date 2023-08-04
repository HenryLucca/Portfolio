import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation("about");
  return (
    <section id="about" className="mt-6">
      <h2 className="text-3xl font-semibold text-center mb-12">
        {t("aboutTitle")}
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="flex flex-col items-center md:items-start">
          <p className="text-xl font-semibold text-center md:text-left mb-4">
            {t("about-presentation")}
          </p>
          <p className="text-xl font-semibold text-center md:text-left mb-4">
            {t("about-presentation-2")}
          </p>
          <p className="text-xl font-semibold text-center md:text-left mb-4">
            {t("about-presentation-3")}
          </p>
          <p className="text-xl font-semibold text-center md:text-left mb-4">
            {t("about-presentation-4")}
          </p>
          <p className="text-xl font-semibold text-center md:text-left mb-4">
            {t("about-presentation-5")}
          </p>
        </div>
        <div className="flex flex-col items-center md:items-end">
          <Image
            src="/about_photo.jpg"
            alt="Foto de Henry Lucca"
            width={300}
            height={300}
            className="rounded-full w-72 h-72 object-cover"
          />
          <p className="text-xl font-semibold text-center md:text-right mt-4">
            Henry Lucca
          </p>
        </div>
      </div>
    </section>
  );
}
