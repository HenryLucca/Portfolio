// ni18n.config.ts
import type { Ni18nOptions } from 'ni18n'

export const ni18nConfig: Ni18nOptions = {
  supportedLngs: ['en', 'pt-BR'],
  ns: ['common', 'about', 'presentation-card', 'navbar'],
  react: {
    useSuspense: false,
  },
}