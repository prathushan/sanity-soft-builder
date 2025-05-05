export default {
  name: 'spacerBlock',
  title: 'Spacer Block',
  type: 'object',
  fields: [
    // -------- Content --------
    {
      name: 'height',
      title: 'Height',
      type: 'string',
      description: 'Set the height of the spacer (e.g., 100px, 50vh)',
    },

    // -------- Style --------
    {
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'string',
    },
    {
      name: 'border',
      title: 'Border',
      type: 'string',
      description: 'Define a border for the spacer (e.g., 1px solid #000)',
    },

    // -------- Advanced --------
    {
      name: 'advanced',
      title: 'Advanced Options',
      type: 'object',
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
