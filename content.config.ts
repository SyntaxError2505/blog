import { defineContentConfig, defineCollection } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: 'page',
      source: 'blog/*.md'
    }),
    rest: defineCollection({
      type: 'page',
      source: '**.md'
    })
  }
})