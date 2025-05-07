export default {
    name: 'imageWithTextSection',
    title: 'Image With Text Section',
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
        name: 'text',
        title: 'Text',
        type: 'text',
        fieldset: 'content',
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: { hotspot: true },
        fieldset: 'content',
      },
      {
        name: 'imagePosition',
        title: 'Image Position',
        type: 'string',
        options: {
          list: [
            { title: 'Left', value: 'left' },
            { title: 'Right', value: 'right' },
          ],
          layout: 'radio',
        },
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
  
      // -------- Style --------
      {
        name: 'backgroundColor',
        title: 'Background Color',
        type: 'string',
        fieldset: 'style',
      },
      {
        name: 'textColor',
        title: 'Text Color',
        type: 'string',
        fieldset: 'style',
      },
      {
        name: 'alignment',
        title: 'Text Alignment',
        type: 'string',
        options: {
          list: ['left', 'center', 'right'],
        },
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
        name: 'textTypography',
        title: 'Text Typography',
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
  };
  