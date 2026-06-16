import process from 'node:process'

let input = ''

process.stdin.on('data', chunk => {
  input += chunk
})

process.stdin.on('end', () => {
  let event = {}

  try {
    event = JSON.parse(input || '{}')
  } catch {
    process.exit(0)
  }

  const command = event.tool_input?.command || ''

  const dangerousPatterns = [
    /rm\s+-rf/i,
    /Remove-Item\s+.*-Recurse/i,
    /rmdir\s+\/s/i,
    /del\s+\/s/i,
    /git\s+reset\s+--hard/i,
    /git\s+clean\s+-fd/i,
    /format\s+[a-z]:/i
  ]

  const isDangerous = dangerousPatterns.some(pattern => pattern.test(command))

  if (isDangerous) {
    console.error('Blocked by Xingzhu website hook: dangerous destructive command is not allowed.')
    process.exit(2)
  }

  process.exit(0)
})
