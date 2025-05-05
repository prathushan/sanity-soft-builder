export default {
    name: 'headingBlock',
    title: 'Heading Block',
    type: 'object',
    fields: [
      // -------- Content --------
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'link',
        title: 'Link (Optional)',
        type: 'url',
      },
      {
        name: 'htmlTag',
        title: 'HTML Tag',
        type: 'string',
        options: {
          list: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
        },
        initialValue: 'h2',
      },
  
      // -------- Style --------
      {
        name: 'alignment',
        title: 'Text Alignment',
        type: 'string',
        options: {
          list: ['left', 'center', 'right', 'justify'],
        },
      },
      {
        name: 'textColor',
        title: 'Text Color',
        type: 'object',
        fields: [
          {
            name: 'preset',
            title: 'Preset Colors',
            type: 'string',
            options: {
              list: [
                { title: 'Black', value: '#000000' },
                { title: 'White', value: '#ffffff' },
                { title: 'Gray', value: '#888888' },
                { title: 'Red', value: '#ff0000' },
                { title: 'Custom', value: 'custom' },
              ],
            },
          },
          {
            name: 'custom',
            title: 'Custom Color',
            type: 'color',
            hidden: ({ parent }) => parent?.preset !== 'custom',
          },
        ],
      },
      {
        name: 'typography',
        title: 'Typography',
        type: 'object',
        fields: [
          {
            name: 'fontFamily',
            title: 'Font Family',
            type: 'string',
            description: 'Can be a system font or Google font name.',
          },
          {
            name: 'fontWeight',
            title: 'Font Weight',
            type: 'string',
            options: {
              list: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
            },
          },
          {
            name: 'fontSize',
            title: 'Font Size',
            type: 'string',
            description: 'E.g., 16px, 1.2rem, etc.',
          },
          {
            name: 'lineHeight',
            title: 'Line Height',
            type: 'string',
          },
          {
            name: 'letterSpacing',
            title: 'Letter Spacing',
            type: 'string',
          },
          {
            name: 'textTransform',
            title: 'Text Transform',
            type: 'string',
            options: {
              list: ['none', 'capitalize', 'uppercase', 'lowercase'],
            },
          },
          {
            name: 'fontStyle',
            title: 'Font Style',
            type: 'string',
            options: {
              list: ['normal', 'italic', 'oblique'],
            },
          },
        ],
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
  