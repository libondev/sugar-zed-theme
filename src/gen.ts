import fs from 'node:fs'
import { getTemplate, metadata, type Theme } from './template'
import {
  sugarDark,
  sugarDarkFocus,
  sugarLight,
  sugarLightFocus
} from './variables'

export function rewriteColorTheme() {
  const themes: Theme[] = [
    {
      name: 'Sugar Dark',
      appearance: 'dark',
      style: getTemplate(sugarDark),
    },
    {
      name: 'Sugar Light',
      appearance: 'light',
      style: getTemplate(sugarLight),
    },
    {
      name: 'Sugar Dark Focus',
      appearance: 'dark',
      style: getTemplate(sugarDarkFocus),
    },
    {
      name: 'Sugar Light Focus',
      appearance: 'light',
      style: getTemplate(sugarLightFocus),
    },
  ]

  metadata.themes = themes

  fs.writeFileSync(
    'themes/sugar.json',
    JSON.stringify(metadata, null, 2)
  )
}

rewriteColorTheme()
