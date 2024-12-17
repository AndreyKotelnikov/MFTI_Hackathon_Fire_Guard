import type { SearchResults } from '@db/app-bar-search/types'

interface DB {
  searchItems: SearchResults[]
}

export const db: DB = {
  searchItems: [],
}
