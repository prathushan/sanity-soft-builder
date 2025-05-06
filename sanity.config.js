import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'
import { colorInput } from '@sanity/color-input' 
import {media} from 'sanity-plugin-media'

export default defineConfig({
  name: 'default',
  title: 'sanity-soft-builder',

  projectId: 'cc184dud',
  dataset: 'production',

  plugins: [
    deskTool(),
    visionTool(),
    colorInput() ,
    media()
  ],

  schema: {
    types: schemaTypes,
  },
})
