export default {
  name: 'heroSection',
  title: 'Hero Section',
  type: 'object',
  fieldsets: [
    { name: 'content', title: 'Content', options: { collapsible: true, default: true } },
    { name: 'style', title: 'Style', options: { collapsible: true } },
    { name: 'advanced', title: 'Advanced', options: { collapsible: true } },
  ],
  fields: [
    // -------- Content --------
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      fieldset: 'content',
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text',
      fieldset: 'content',
    },
    {
      name: 'buttons',
      title: 'Buttons',
      type: 'array',
      fieldset: 'content',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'text', title: 'Text', type: 'string' },
            { name: 'url', title: 'Link', type: 'url' },
            { name: 'openInNewTab', title: 'Open in New Tab', type: 'boolean' },
          ],
        },
      ],
    },
    {
      name: 'backgroundType',
      title: 'Background Type',
      type: 'string',
      options: {
        list: ['color', 'image', 'video', 'gradient'],
      },
      fieldset: 'content',
    },
    {
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'string',
      hidden: ({ parent }) => parent?.backgroundType !== 'color',
      fieldset: 'content',
    },
    {
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      hidden: ({ parent }) => parent?.backgroundType !== 'image',
      fieldset: 'content',
    },
    {
      name: 'backgroundVideo',
      title: 'Background Video',
      type: 'file',
      options: {
        accept: 'video/mp4',
      },
      hidden: ({ parent }) => parent?.backgroundType !== 'video',
      fieldset: 'content',
    },
    {
      name: 'backgroundGradient',
      title: 'Gradient (CSS string)',
      type: 'string',
      hidden: ({ parent }) => parent?.backgroundType !== 'gradient',
      fieldset: 'content',
    },

    // -------- Style --------
    {
      name: 'height',
      title: 'Height',
      type: 'string',
      description: 'Example: 100vh, 600px',
      fieldset: 'style',
    },
    {
      name: 'alignment',
      title: 'Content Alignment',
      type: 'string',
      options: {
        list: ['left', 'center', 'right'],
      },
      fieldset: 'style',
    },
    {
      name: 'textColor',
      title: 'Text Color',
      type: 'string',
      fieldset: 'style',
    },
    {
      name: 'titleTypography',
      title: 'Title Typography',
      type: 'object',
      fieldset: 'style',
      fields: [
        { name: 'fontFamily', type: 'string', title: 'Font Family' },
        { name: 'fontSize', type: 'string', title: 'Font Size' },
        { name: 'fontWeight', type: 'string', title: 'Font Weight' },
        { name: 'lineHeight', type: 'string', title: 'Line Height' },
      ],
    },
    {
      name: 'subtitleTypography',
      title: 'Subtitle Typography',
      type: 'object',
      fieldset: 'style',
      fields: [
        { name: 'fontFamily', type: 'string', title: 'Font Family' },
        { name: 'fontSize', type: 'string', title: 'Font Size' },
        { name: 'fontWeight', type: 'string', title: 'Font Weight' },
        { name: 'lineHeight', type: 'string', title: 'Line Height' },
      ],
    },

    // -------- Advanced --------
    {
      name: 'advanced',
      title: 'Advanced Options',
      type: 'object',
      fieldset: 'advanced',
      fields: [
        { name: 'margin', title: 'Margin (top right bottom left)', type: 'string' },
        { name: 'padding', title: 'Padding (top right bottom left)', type: 'string' },
        { name: 'zIndex', title: 'Z-Index', type: 'number' },
        {
          name: 'position',
          title: 'Position',
          type: 'string',
          options: {
            list: ['static', 'relative', 'absolute', 'fixed', 'sticky'],
          },
        },
        { name: 'cssId', title: 'CSS ID', type: 'string' },
        { name: 'cssClass', title: 'CSS Class', type: 'string' },
      ],
    },
  ],
}