import type { Highlighter } from 'shiki'
import { renderToHtml, getHighlighter } from 'shiki'

let highlighter: Highlighter
export async function highlight(code: string) {
  if (!highlighter) {
    highlighter = await getHighlighter({
      langs: ['tsx'],
      theme: 'dark-plus',
    })
  }

  const tokens = highlighter.codeToThemedTokens(code, 'tsx', 'dark-plus', {
    includeExplanation: false,
  })
  const html = renderToHtml(tokens, { bg: '#212121' })

  return html
}