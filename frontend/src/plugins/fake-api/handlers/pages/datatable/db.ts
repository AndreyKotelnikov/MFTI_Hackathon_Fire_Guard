import type { SalesDetails } from '@db/pages/datatable/types'

interface DB {
  salesDetails: SalesDetails[]
}

export const db: DB = {
  salesDetails: []
}
