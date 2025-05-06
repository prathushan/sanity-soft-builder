import { FaTags } from 'react-icons/fa'; 
export default {
    name: 'category',
    title: 'Category',
    type: 'document',
    __experimental_hidden: true, // This hides the schema from the sidebar
    icon: FaTags,
    fields: [
      { name: 'title', type: 'string', title: 'Title' },
      {
        name: 'slug',
        type: 'slug',
        title: 'Slug',
        options: { source: 'title', maxLength: 96 },
      },
    ],
  }
  