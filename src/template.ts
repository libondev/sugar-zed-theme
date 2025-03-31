import { terminalColors } from './variables'

interface ThemeDefine {
  $schema: string
  name: string
  author: string
  themes: Theme[]
}

interface Player {
  cursor: string
  selection: string
  background: string
}

interface Syntax {
  color: string
  font_style: string | null
  font_weight: string | null
}

export interface Style {
  players?: Player[]
  syntax?: Record<string, Syntax>
  [key: string]: any
}

export interface Theme {
  name: string
  appearance: 'dark' | 'light'
  style: Style
}

export const metadata: ThemeDefine = {
  $schema: 'https://zed.dev/schema/themes/v0.2.0.json',
  name: 'Sugar Theme',
  author: 'Libon',
  themes: [],
}

export function getTemplate(
  colors: Record<string, string>,
  appearance: Theme['appearance'],
): Omit<Theme, 'name'> {
  colors.sidebarBackground ??= colors.background

  return {
    appearance,
    style: {
      'hint': colors.symbol,
      'error': colors.deleted,
      'ignored': colors.ignored,
      'created': colors.created,
      'deleted': colors.deleted,
      'warning': colors.warning,
      'modified': colors.changed,
      'text': colors.foreground,
      'icon': colors.foreground,
      'text.muted': colors.ignored,
      'icon.muted': colors.ignored,
      // contains inline_completions
      'predictive': colors.symbol,
      // file tree selected
      'element.selected': `${colors.accent}40`,
      'editor.gutter.background': colors.background,
      'editor.background': colors.background,
      'editor.foreground': colors.foreground,
      'editor.indent_guide_active': colors.accent,
      'editor.line_number': colors.symbol,
      'editor.hover_line_number': colors.foreground,
      'editor.active_line_number': `${colors.accent}cf}`,
      'editor.document_highlight.read_background': `${colors.accent}28`,
      'pane.focused_border': null,
      'panel.focused_border': null,
      'panel.background': colors.sidebarBackground,
      'scrollbar.track.border': '#0000',
      'scrollbar.track.background': '#0000',
      'scrollbar.thumb.background': '#88888840',
      'scrollbar.thumb.hover_background': '#88888880',
      'search.match_background': colors.sidebarBackground,
      'tab_bar.background': colors.sidebarBackground,
      'tab.inactive_background': colors.sidebarBackground,
      'tab.active_background': colors.background,
      'title_bar.background': colors.sidebarBackground,
      'title_bar.inactive_background': `${colors.sidebarBackground}af`,
      'toolbar.background': colors.background,
      'terminal.foreground': colors.foreground,
      'terminal.background': colors.background,
      ...genTerminalColors(appearance),
      'version_control.added': colors.created,
      'version_control.modified': colors.changed,
      'version_control.deleted': colors.deleted,
      'syntax': {
        'attribute': {
          color: colors.attribute,
          font_style: null,
          font_weight: null,
        },
        'boolean': {
          color: colors.boolean,
          font_style: null,
          font_weight: null,
        },
        'comment': {
          color: colors.comment,
          font_style: null,
          font_weight: null,
        },
        'comment.doc': {
          color: colors.comment,
          font_style: null,
          font_weight: null,
        },
        'constant': {
          color: colors.constant,
          font_style: null,
          font_weight: null,
        },
        'constructor': {
          color: colors.storage,
          font_style: null,
          font_weight: null,
        },
        'embedded': {
          color: colors.symbol,
          font_style: null,
          font_weight: null,
        },
        'emphasis': {
          color: colors.storage,
          font_style: null,
          font_weight: null,
        },
        'emphasis.strong': {
          color: colors.caller,
          font_style: null,
          font_weight: null,
        },
        'enum': {
          color: colors.type,
          font_style: null,
          font_weight: null,
        },
        'function': {
          color: colors.function,
          font_style: null,
          font_weight: null,
        },
        'hint': {
          color: colors.symbol,
          font_style: null,
          font_weight: null,
        },
        'keyword': {
          color: colors.keyword,
          font_style: null,
          font_weight: null,
        },
        'link_text': {
          color: colors.variable,
          font_style: null,
          font_weight: null,
        },
        'link_uri': {
          color: colors.type,
          font_style: null,
          font_weight: null,
        },
        'number': {
          color: colors.number,
          font_style: null,
          font_weight: null,
        },
        'operator': {
          color: colors.symbol,
          font_style: null,
          font_weight: null,
        },
        'predictive': {
          color: colors.symbol,
          font_style: null,
          font_weight: null,
        },
        'property': {
          color: colors.property,
          font_style: null,
          font_weight: null,
        },
        'punctuation': {
          color: colors.symbol,
          font_style: null,
          font_weight: null,
        },
        'punctuation.bracket': {
          color: colors.symbol,
          font_style: null,
          font_weight: null,
        },
        'punctuation.delimiter': {
          color: colors.symbol,
          font_style: null,
          font_weight: null,
        },
        'punctuation.list_marker': {
          color: colors.symbol,
          font_style: null,
          font_weight: null,
        },
        'punctuation.special': {
          color: colors.symbol,
          font_style: null,
          font_weight: null,
        },
        'string': {
          color: colors.string,
          font_style: null,
          font_weight: null,
        },
        'string.regex': {
          color: colors.string,
          font_style: null,
          font_weight: null,
        },
        'string.special.symbol': {
          color: colors.symbol,
          font_style: null,
          font_weight: null,
        },
        'tag': {
          color: colors.tag,
          font_style: null,
          font_weight: null,
        },
        'text': {
          color: colors.foreground,
          font_style: null,
          font_weight: null,
        },
        'text.literal': {
          color: colors.string,
          font_style: null,
          font_weight: null,
        },
        // 'title': {
        //   color: colors.storage,
        //   font_style: null,
        //   font_weight: null,
        // },
        'type': {
          color: colors.type,
          font_style: null,
          font_weight: null,
        },
        'variable': {
          color: colors.variable,
          font_style: null,
          font_weight: null,
        },
        'variable.special': {
          color: colors.caller,
          font_style: null,
          font_weight: null,
        },
      },
    },
  }
}

function genTerminalColors(appearance: Theme['appearance']) {
  let colors = terminalColors

  if (appearance.includes('light')) {
    colors = JSON.parse(JSON.stringify(terminalColors))

    for (const key in colors) {
      const [normal, bright, dim] = colors[key]
      colors[key] = [normal, dim, bright]
    }
  }

  return Object.keys(colors).reduce((acc, cur) => {
    acc[`terminal.ansi.${cur}`] = colors[cur][0]
    acc[`terminal.ansi.bright_${cur}`] = colors[cur][1]
    acc[`terminal.ansi.dim_${cur}`] = colors[cur][2]

    return acc
  }, {})
}
