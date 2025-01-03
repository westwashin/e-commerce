import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'e-commerce',

  projectId: '5c7ovgg6',
  dataset: 'products',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
