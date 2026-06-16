import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import { spawnSync } from 'node:child_process'

let input = ''

process.stdin.on('data', chunk => {
  input += chunk
})

process.stdin.on('end', () => {
  let event = {}

  try {
    event = JSON.parse(input || '{}')
  } catch {
    event = {}
  }

  const marker = path.join(process.cwd(), '.claude', '.needs-build')

  if (!fs.existsSync(marker)) {
    process.exit(0)
  }

  if (event.stop_hook_active === true) {
    process.exit(0)
  }

  const result = spawnSync('npm', ['run', 'build'], {
    cwd: process.cwd(),
    shell: true,
    encoding: 'utf8'
  })

  if (result.status !== 0) {
    console.error('Build failed after website code changes. Fix the build before finishing.')
    console.error(result.stdout || '')
    console.error(result.stderr || '')
    process.exit(2)
  }

  fs.rmSync(marker, { force: true })
  process.exit(0)
})
