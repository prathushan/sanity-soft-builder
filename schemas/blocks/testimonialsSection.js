export const testimonialsSection = {
    name: 'testimonialsSection',
    title: 'Testimonials Section',
    type: 'object',
    fieldsets: [
      { name: 'content', title: 'Content', options: { collapsible: true, default: true } },
      { name: 'style', title: 'Style', options: { collapsible: true } },
      { name: 'advanced', title: 'Advanced', options: { collapsible: true } },
    ],
    fields: [
      {
        name: 'title',
        title: 'Section Title',
        type: 'string',
        fieldset: 'content',
      },
      {
        name: 'testimonials',
        title: 'Testimonials',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              { name: 'quote', title: 'Quote', type: 'text' },
              { name: 'name', title: 'Name', type: 'string' },
              { name: 'title', title: 'Title/Position', type: 'string' },
              { name: 'image', title: 'Image', type: 'image' },
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
  
      // -------- Advanced --------
      {
        name: 'advanced',
        title: 'Advanced Options',
        type: 'object',
        fieldset: 'advanced',
        fields: [
          { name: 'margin', title: 'Margin', type: 'string' },
          { name: 'padding', title: 'Padding', type: 'string' },
          { name: 'zIndex', title: 'Z-Index', type: 'number' },
          { name: 'cssId', title: 'CSS ID', type: 'string' },
          { name: 'cssClass', title: 'CSS Class', type: 'string' },
        ],
      },
    ],
  };
  