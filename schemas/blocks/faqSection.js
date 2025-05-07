// -------- FAQ (Collapsible Content) Section --------
export const faqSection = {
    name: 'faqSection',
    title: 'FAQ Section',
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
        title: 'Section Title',
        type: 'string',
        fieldset: 'content',
      },
      {
        name: 'items',
        title: 'FAQ Items',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              { name: 'question', title: 'Question', type: 'string' },
              { name: 'answer', title: 'Answer', type: 'text' },
              { 
                name: 'isExpandedByDefault', 
                title: 'Expanded by Default', 
                type: 'boolean',
                description: 'If true, the answer will be shown by default.'
              },
              { 
                name: 'highlight', 
                title: 'Highlight Item', 
                type: 'boolean',
                description: 'Highlight this FAQ item (e.g., with a different background or border).'
              },
            ],
          },
        ],
        fieldset: 'content',
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
  
  export default faqSection;
  