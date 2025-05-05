import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'
import { colorInput } from '@sanity/color-input' // ✅ Add this import

export default defineConfig({
  name: 'default',
  title: 'sanity-soft-builder',

  projectId: 'cc184dud',
  dataset: 'production',

  plugins: [
    deskTool(),
    visionTool(),
    colorInput() // ✅ Register the color input plugin here
  ],

  schema: {
    types: schemaTypes,
  },
})
