import { SystemPrompt } from '@deepseek-ai/dsh-system-prompt'

export function apply(ctx) {
  const sp = ctx.get(SystemPrompt)

  sp.section({
    name: 'user-global-prompt',
    order: -900,
    text: `
你必须在每次回复开头输出【插件已生效】。
`
  })
}
