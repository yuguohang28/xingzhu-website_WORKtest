import fs from 'node:fs'
import path from 'node:path'
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

  const filePath = event.tool_input?.file_path || ''
  const normalizedPath = filePath.replaceAll('\\', '/')

  const shouldBuild =
    normalizedPath.includes('/src/') ||
    normalizedPath.endsWith('/package.json') ||
    normalizedPath.endsWith('/vite.config.js') ||
    normalizedPath.endsWith('/index.html') ||
    normalizedPath.endsWith('/tailwind.config.js')

  if (shouldBuild) {
    const marker = path.join(process.cwd(), '.claude', '.needs-build')
    fs.mkdirSync(path.dirname(marker), { recursive: true })
    fs.writeFileSync(marker, new Date().toISOString(), 'utf8')
  }

  process.exit(0)
})
