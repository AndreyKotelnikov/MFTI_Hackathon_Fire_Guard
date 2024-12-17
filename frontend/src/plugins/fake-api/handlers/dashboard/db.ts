import type { ProjectAnalytics } from '@db/dashboard/type'


interface DB {
  analytics: ProjectAnalytics[]
}

export const db: DB = {
  analytics: [],
}
