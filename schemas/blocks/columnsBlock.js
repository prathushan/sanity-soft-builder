export default {
  name: 'columnBlock',
  title: 'Column Block',
  type: 'object',
  fields: [
    // -------- Content --------
    {
      name: 'columns',
      title: 'Columns',
      type: 'array',
      of: [
        {
          type: 'object',
          title: 'Column',
          fields: [
            {
              name: 'width',
              title: 'Width (e.g. 33%, 50%, auto)',
              type: 'string',
            },
            {
              name: 'content',
              title: 'Column Content',
              type: 'array',
              of: [{ type: 'builderBlock' }],
            },
          ],
        },
      ],
    },

    // -------- Style --------
    {
      name: 'columnGap',
      title: 'Column Gap',
      type: 'string',
      description: 'e.g. 20px or 1rem',
    },
    {
      name: 'alignment',
      title: 'Horizontal Alignment',
      type: 'string',
      options: {
        list: ['start', 'center', 'end', 'space-between', 'space-around'],
      },
    },
    {
      name: 'verticalAlignment',
      title: 'Vertical Alignment',
      type: 'string',
      options: {
        list: ['top', 'center', 'bottom', 'stretch'],
      },
    },

    // -------- Advanced --------
    {
      name: 'advanced',
      title: 'Advanced Options',
      type: 'object',
      fields: [
        {
          name: 'margin',
          title: 'Margin (top right bottom left)',
          type: 'string',
        },
        {
          name: 'padding',
          title: 'Padding (top right bottom left)',
          type: 'string',
        },
        {
          name: 'zIndex',
          title: 'Z-Index',
          type: 'number',
        },
        {
          name: 'position',
          title: 'Position',
          type: 'string',
          options: {
            list: ['static', 'relative', 'absolute', 'fixed', 'sticky'],
          },
        },
        {
          name: 'cssId',
          title: 'CSS ID',
          type: 'string',
        },
        {
          name: 'cssClass',
          title: 'CSS Class',
          type: 'string',
        },
      ],
    },
  ],
}
