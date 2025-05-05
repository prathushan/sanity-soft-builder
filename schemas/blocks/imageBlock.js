export default {
  name: 'imageBlock',
  title: 'Image Block',
  type: 'object',
  fields: [
    // -------- Content --------
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'altText',
      title: 'Alt Text',
      type: 'string',
    },
    {
      name: 'link',
      title: 'Image Link (optional)',
      type: 'url',
    },

    // -------- Style --------
    {
      name: 'alignment',
      title: 'Image Alignment',
      type: 'string',
      options: {
        list: ['left', 'center', 'right'],
      },
    },
    {
      name: 'width',
      title: 'Width',
      type: 'string',
      description: 'Example: 100%, 300px, auto',
    },
    {
      name: 'height',
      title: 'Height',
      type: 'string',
      description: 'Example: auto, 300px, 40vh',
    },
    {
      name: 'borderRadius',
      title: 'Border Radius',
      type: 'string',
      description: 'Example: 8px, 50% for circular images',
    },
    {
      name: 'boxShadow',
      title: 'Box Shadow',
      type: 'string',
      description: 'Example: 0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    {
      name: 'hoverEffect',
      title: 'Hover Effect',
      type: 'string',
      options: {
        list: [
          { title: 'None', value: 'none' },
          { title: 'Zoom', value: 'zoom' },
          { title: 'Fade', value: 'fade' },
          { title: 'Grayscale', value: 'grayscale' },
          { title: 'Blur', value: 'blur' },
        ],
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
