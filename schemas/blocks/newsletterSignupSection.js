// -------- Newsletter Signup Section --------
export const newsletterSignupSection = {
  name: 'newsletterSignupSection',
  title: 'Newsletter Signup Section',
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
      name: 'ctaText',
      title: 'Call to Action Text',
      type: 'string',
      fieldset: 'content',
    },
    {
      name: 'emailPlaceholder',
      title: 'Email Placeholder Text',
      type: 'string',
      fieldset: 'content',
    },
    {
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
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

export default newsletterSignupSection;
