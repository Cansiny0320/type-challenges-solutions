import { writeFile, mkdir } from 'fs/promises'

const [name] = process.argv.slice(2)

await mkdir(`solutions/${name}`)

await writeFile(`solutions/${name}/solution.ts`, '')
