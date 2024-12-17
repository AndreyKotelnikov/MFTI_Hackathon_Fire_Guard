import type { KanbanData } from '@db/apps/kanban/types'

export const database: KanbanData = {
  boards: [
    {
      id: 1,
      title: 'In Progress',
      itemsIds: [1, 2],
    },
    {
      id: 2,
      title: 'In Review',
      itemsIds: [3, 4],
    },
    {
      id: 3,
      title: 'Done',
      itemsIds: [5, 6],
    },
  ],
  items: [
  ],
}
