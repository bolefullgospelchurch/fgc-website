import { createClient } from '@sanity/client'

export const sanityClient = createClient({
  projectId: '0gryav47',
  dataset: 'production',
  apiVersion: '2026-01-24',
  useCdn: true
})
