import type { Theme } from './template'
import fs from 'node:fs'
import { getTemplate, metadata } from './template'
import {
  sugarDark,
  sugarDarkFocus,
  sugarLight,
  sugarLightFocus,
} from './variables'

export function rewriteColorTheme() {
  const themes: Theme[] = [
    {
      name: 'Sugar Dark',
      ...getTemplate(sugarDark, 'dark'),
    },
    {
      name: 'Sugar Light',
      ...getTemplate(sugarLight, 'light'),
    },
    {
      name: 'Sugar Dark Focus',
      ...getTemplate(sugarDarkFocus, 'dark'),
    },
    {
      name: 'Sugar Light Focus',
      ...getTemplate(sugarLightFocus, 'light'),
    },
  ]

  metadata.themes = themes

  fs.writeFileSync(
    'themes/sugar.json',
    JSON.stringify(metadata, null, 2),
  )
}

rewriteColorTheme()
