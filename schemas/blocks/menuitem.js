
export default {
    name: 'menuitem',
    title: 'Menu Item',
    type: 'object',
    fields: [
      {
        name: 'title',
        title: 'Label',
        type: 'string'
      },
      {
        name: 'page',
        title: 'Linked Page',
        type: 'reference',
        to: [{ type: 'page' }]
      },
      {
        name: 'hasSubmenu',
        type: 'boolean',
        title: 'Has Submenu'
      },
      {
        name: 'submenuItems',
        title: 'Submenu Items',
        type: 'array',
        of: [{ type: 'menuitem' }],
        hidden: ({ parent }) => !parent?.hasSubmenu
      }
    ]
  }
  
