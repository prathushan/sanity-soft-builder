export default {
  name: 'textBlock',
  title: 'Text Block',
  type: 'object',
  fields: [
    // -------- Content --------
    {
      name: 'text',
      title: 'Text Content',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H1', value: 'h1' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'Quote', value: 'blockquote' },
          ],
          marks: {
            decorators: [
              { title: 'Bold', value: 'strong' },
              { title: 'Italic', value: 'em' },
              { title: 'Underline', value: 'underline' },
              { title: 'Code', value: 'code' },
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL',
                  },
                  {
                    name: 'openInNewTab',
                    type: 'boolean',
                    title: 'Open in new tab',
                    initialValue: false,
                  },
                ],
              },
            ],
          },
        },
        { type: 'image' }, // Inline image
      ],
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
              { title: 'Blue', value: '#007bff' },
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
