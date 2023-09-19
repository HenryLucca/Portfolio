import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { appWithI18Next, useSyncLanguage } from 'ni18n'
import { ni18nConfig } from '../../ni18n.config'

function App({ Component, pageProps }: AppProps) {
  // const locale = typeof window !== 'undefined' ? window.location.pathname.split('/')[1] : 'en'
  const locale = typeof window !== 'undefined' && window.localStorage.getItem('lang') || undefined;
  if (locale){
    useSyncLanguage(locale);
  } else {
    useSyncLanguage('pt-BR');
  }
  return <Component {...pageProps} />
}

export default appWithI18Next(App, ni18nConfig)
