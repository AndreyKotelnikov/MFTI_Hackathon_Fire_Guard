import type { Email } from '@db/apps/email/types'



interface DB {
  emails: Email[]
}

export const db: DB = {
  emails: [],
}
