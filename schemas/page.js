// schemas/page.js
export default {
  name: 'page',
  type: 'document',
  title: 'Page',
  fields: [
    { name: 'title', type: 'string' },
    { 
      name: 'slug', 
      type: 'slug', 
      options: { source: 'title', maxLength: 96 }
    },
    {
      name: 'content',
      title: 'Page Content',
      type: 'array',
      of: [{ type: 'builderBlock' }] // ✅ Use the central builderBlock here
    }
  ]
}
