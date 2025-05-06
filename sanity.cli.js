import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'cc184dud',
    dataset: 'production'
  },
  autoUpdates: true,
})
