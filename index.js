import { SystemPrompt } from '@deepseek-ai/dsh-system-prompt'

export function apply(ctx) {
  const sp = ctx.get(SystemPrompt)

  sp.section({
    name: 'user-global-prompt',
    order: -900,
    text: `
Global System Prompt Plugin Loaded

请始终使用中文回复。
`
  })
}
