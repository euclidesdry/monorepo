import type { Config } from 'jest'

import { name } from './package.json'

export default async (): Promise<Config> => ({
  displayName: name,
})
