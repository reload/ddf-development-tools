#!/usr/bin/env zx

const number = await $`gh pr view --json=number --jq '.number'`
const lagoonBaseUrl = 'https://ui.lagoon.dplplat01.dpl.reload.dk/projects/dpl-cms'


$`open ${lagoonBaseUrl}/dpl-cms-pr-${number}`

