export default {
  name: 'buttonBlock',
  title: 'Button Block',
  type: 'object',
  fields: [
    // -------- Content --------
    {
      name: 'text',
      title: 'Button Text',
      type: 'string',
    },
    {
      name: 'url',
      title: 'Button Link',
      type: 'url',
    },
    {
      name: 'openInNewTab',
      title: 'Open in New Tab',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'icon',
      title: 'Icon (optional)',
      type: 'string',
      description: 'Enter icon name or class (e.g. "fa fa-arrow-right")',
    },

    // -------- Style --------
    {
      name: 'alignment',
      title: 'Alignment',
      type: 'string',
      options: {
        list: ['left', 'center', 'right'],
      },
    },
    {
      name: 'padding',
      title: 'Padding (e.g. 10px 20px)',
      type: 'string',
    },
    {
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'string',
      description: 'Example: #ff0000 or rgba(0,0,0,0.5)',
    },
    {
      name: 'hoverBackgroundColor',
      title: 'Background Color (Hover)',
      type: 'string',
    },
    {
      name: 'textColor',
      title: 'Text Color',
      type: 'string',
    },
    {
      name: 'hoverTextColor',
      title: 'Text Color (Hover)',
      type: 'string',
    },
    {
      name: 'border',
      title: 'Border (e.g. 1px solid #000)',
      type: 'string',
    },
    {
      name: 'borderRadius',
      title: 'Border Radius (e.g. 8px)',
      type: 'string',
    },
    {
      name: 'fontSize',
      title: 'Font Size (e.g. 16px)',
      type: 'string',
    },
    {
      name: 'fontWeight',
      title: 'Font Weight (e.g. 400, bold)',
      type: 'string',
    },
    {
      name: 'fontFamily',
      title: 'Font Family',
      type: 'string',
      description: 'e.g. Arial, Roboto, or custom uploaded font class',
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
