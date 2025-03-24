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

export function getTemplate(colors: any): Theme['style'] {
  colors.sidebarBackground ??= colors.background

  return {
    'hint': colors.symbol,
    'error': colors.delete,
    'ignored': colors.symbol,
    'created': colors.insert,
    'deleted': colors.delete,
    'modified': colors.change,
    'text': colors.foreground,
    // contains inline_completions
    'predictive': colors.symbol,
    // file tree selected
    'element.selected': `${colors.accent}40`,
    'editor.gutter': colors.background,
    'editor.background': colors.background,
    'editor.foreground': colors.foreground,
    'editor.line_number': `${colors.foreground}33`,
    'editor.indent_guide_active': colors.accent,
    'editor.hover_line_number': `${colors.foreground}88`,
    'editor.active_line_number': `${colors.foreground}AF`,
    'editor.document_highlight.read_background': `${colors.accent}20`,
    'pane.focused_border': null,
    'panel.focused_border': null,
    'panel.background': colors.sidebarBackground,
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
      'constant': {
        color: colors.constant,
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
      'keyword': {
        color: colors.keyword,
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
      'constructor': {
        color: colors.storage,
        font_style: null,
        font_weight: null,
      },
      'function': {
        color: colors.function,
        font_style: null,
        font_weight: null,
      },
      'tag': {
        color: colors.tag,
        font_style: null,
        font_weight: null,
      },
      'enum': {
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
      'text': {
        color: colors.foreground,
        font_style: null,
        font_weight: null,
      },
      'operator': {
        color: colors.symbol,
        font_style: null,
        font_weight: null,
      },
      'type': {
        color: colors.type,
        font_style: null,
        font_weight: null,
      },
      'number': {
        color: colors.number,
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
      'title': {
        color: colors.storage,
        font_style: null,
        font_weight: null,
      },
      'hint': {
        color: colors.symbol,
        font_style: null,
        font_weight: null,
      },
      'embedded': {
        color: colors.symbol,
        font_style: null,
        font_weight: null,
      },
      'predictive': {
        color: colors.symbol,
        font_style: null,
        font_weight: null,
      },
    },
  }
}
