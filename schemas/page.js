// schemas/page.js
import { FaFileAlt } from 'react-icons/fa';
export default {
  name: 'page',
  type: 'document',
  title: 'Page',
  icon: FaFileAlt,
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
      of: [{ type: 'builderBlock' }] 
    },
    {
      name: 'seo',
      title: 'SEO Settings',
      type: 'object',
      fields: [
        {name: 'metaTitle', type: 'string'},
        {name: 'metaDescription', type: 'text'},
        {name: 'ogImage', type: 'image'},
        {
          name: 'canonicalUrl',
          type: 'url',
          description: 'Canonical URL for this page'
        }
      ]
    }
    
  ]
}
