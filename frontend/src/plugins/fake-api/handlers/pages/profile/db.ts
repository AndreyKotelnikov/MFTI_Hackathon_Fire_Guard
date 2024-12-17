import type {
  ConnectionsTab,
  ProfileHeader,
  ProfileTab, ProjectTableRow, ProjectsTab, TeamsTab,
} from '@db/pages/profile/types'

interface DataType {
  profileHeader: ProfileHeader
  profile: ProfileTab
  teams: TeamsTab[]
  projects: ProjectsTab[]
  connections: ConnectionsTab[]
}

interface DB {
  data: DataType
  projectTable: ProjectTableRow[]
}

export const db: DB = {
  data: {
    profileHeader: {
      fullName: 'John Doe',
      location: 'Vatican City',
      joiningDate: 'Joined April 2021',
      designation: 'UX Designer',
      profileImg: '',
      coverImg: '',
    },
    profile: {
      about: [
        { property: 'Full Name', value: 'John Doe', icon: 'tabler-user' },
        { property: 'Status', value: 'active', icon: 'tabler-check' },
        { property: 'Role', value: 'Developer', icon: 'tabler-crown' },
        { property: 'Country', value: 'USA', icon: 'tabler-flag' },
        { property: 'Language', value: 'English', icon: 'tabler-language' },
      ],
      contacts: [
        { property: 'Contact', value: '(123) 456-7890', icon: 'tabler-phone-call' },
        { property: 'Skype', value: 'john.doe', icon: 'tabler-messages' },
        { property: 'Email', value: 'john.doe@example.com', icon: 'tabler-mail' },
      ],
      teams: [
        { property: 'Backend Developer', value: '(126 Members)', icon: 'tabler-brand-github', color: 'secondary' },
        { property: 'VueJS Developer', value: '(98 Members)', icon: 'tabler-brand-vue', color: 'success' },
      ],
      overview: [
        { property: 'Task Compiled', value: '13.5k', icon: 'tabler-check' },
        { property: 'Connections', value: '897', icon: 'tabler-users' },
        { property: 'Projects Compiled', value: '146', icon: 'tabler-layout-grid' },
      ],
      connections: [
      ],
      teamsTech: [      ],
    },
    teams: [
    ],
    projects: [
    ],
    connections: [],
  },
  projectTable: [
  ],
}
