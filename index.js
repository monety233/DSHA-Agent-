export function apply(ctx) {
  ctx.systemPrompt.section({
    name: 'user-global-prompt',
    order: -900,
    text: `
Global System Prompt Plugin Loaded

请始终使用中文回复。
`
  })
}
