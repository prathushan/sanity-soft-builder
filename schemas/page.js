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
      type: 'builderBlock'  // now it's an array of blocks directly
    }
  ]
}
