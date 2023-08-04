import { i18n } from 'i18next'
import { useTranslation } from 'react-i18next'

/**
 * Manually changing the language and store the selected on localStorage
 */
const changeLanguage = (i18n: i18n, language: string) => {
  window.localStorage.setItem('lang', language);
  i18n.changeLanguage(language);
}

const languages = [
  { code: 'en', translateKey: 'english' },
  { code: 'pt-BR', translateKey: 'português' },
];

export const LanguageSwitch = () => {
  const { t, i18n } = useTranslation();
  const locale = typeof window !== 'undefined' && window.localStorage.getItem('lang') || undefined;
  return (
    <div>
      {locale === "pt-BR" ? (
        <button
          data-id={`en-button`}
          className={i18n.language === "en" ? "active" : undefined}
          onClick={() => changeLanguage(i18n, "en")}
          key={"en"}
        >
          <img
            src="/flags/us_flag.png"
            decoding="async"
            width="28rem"
            height="28rem"
          />
        </button>
      ) : (
        <button
          data-id={`pt-BR-button`}
          className={i18n.language === "pt-BR" ? "active" : undefined}
          onClick={() => changeLanguage(i18n, "pt-BR")}
          key={"pt-BR"}
        >
          <img
            src="/flags/br_flag.png"
            decoding="async"
            width="28rem"
            height="28rem"
            alt="Brazilian Flag"
          ></img>
        </button>
      )}
    </div>
  );
}