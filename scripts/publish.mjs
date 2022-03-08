#!/usr/bin/env zx
const content = await $`git status`

const nameReg = /\d+-((medium)|(hard)|(easy))-\w+/i

await $`clear`

const [dirName] = content.stdout.match(nameReg)
await $`git add solutions/${dirName}/solution.ts`
await $`git commit -m "feat: ${dirName}"`
await $`git push`
