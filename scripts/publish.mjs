#!/usr/bin/env zx
const diff = await $`git diff --name-only HEAD~ HEAD`

const dirName = diff.stdout.split('/')[1]

await $`git add solutions/${dirName}/solution.ts`
await $`git commit -m "${dirName}"`
