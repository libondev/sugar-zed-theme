import fs from 'node:fs'
import { metadata, getTemplate, type Theme } from './template'
import {
  sugarDark,
  sugarLight,
  focusDark,
  focusLight
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
      style: getTemplate(focusDark),
    },
    {
      name: 'Sugar Light Focus',
      appearance: 'light',
      style: getTemplate(focusLight),
    },
  ]

  metadata.themes = themes

  fs.writeFileSync(
    'themes/sugar.json',
    JSON.stringify(metadata, null, 2)
  )
}

rewriteColorTheme()
