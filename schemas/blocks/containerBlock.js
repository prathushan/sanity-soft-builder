export default {
    name: 'containerBlock',
    title: 'Container Block',
    type: 'object',
    fields: [
      // -------- Content --------
      {
        name: 'containerWidth',
        title: 'Container Width',
        type: 'string',
        options: {
          list: ['Boxed', 'Full Width'],
        },
      },
      {
        name: 'customWidth',
        title: 'Custom Width',
        type: 'string',
        description: 'Specify width in px, %, rem, etc.',
      },
      {
        name: 'maxHeight',
        title: 'Max Height',
        type: 'string',
        description: 'Set max height in px, %, rem, etc.',
      },
      {
        name: 'direction',
        title: 'Direction',
        type: 'string',
        options: {
          list: ['row', 'row-reverse', 'column', 'column-reverse'],
        },
      },
      {
        name: 'justifyContent',
        title: 'Justify Content',
        type: 'string',
        options: {
          list: [
            'flex-start',
            'center',
            'flex-end',
            'space-between',
            'space-around',
            'space-evenly',
          ],
        },
      },
      {
        name: 'alignItems',
        title: 'Align Items',
        type: 'string',
        options: {
          list: ['stretch', 'flex-start', 'center', 'flex-end', 'baseline'],
        },
      },
      {
        name: 'gap',
        title: 'Gap (Row / Column)',
        type: 'object',
        fields: [
          { name: 'row', type: 'string', title: 'Row Gap' },
          { name: 'column', type: 'string', title: 'Column Gap' },
        ],
      },
      {
        name: 'wrap',
        title: 'Wrap',
        type: 'boolean',
        description: 'Enable flex-wrap',
      },
  
      // -------- Style --------
      {
        name: 'background',
        title: 'Background',
        type: 'object',
        fields: [
          {
            name: 'bgType',
            title: 'Background Type',
            type: 'string',
            options: {
              list: ['color', 'image', 'video', 'slider'],
            },
          },
          {
            name: 'bgColor',
            title: 'Background Color',
            type: 'color',
            hidden: ({ parent }) => parent?.bgType !== 'color',
          },
          {
            name: 'bgImage',
            title: 'Background Image',
            type: 'image',
            hidden: ({ parent }) => parent?.bgType !== 'image',
          },
          {
            name: 'bgVideo',
            title: 'Background Video',
            type: 'file',
            hidden: ({ parent }) => parent?.bgType !== 'video',
          },
          {
            name: 'bgSlider',
            title: 'Background Slider',
            type: 'array',
            of: [{ type: 'image' }],
            hidden: ({ parent }) => parent?.bgType !== 'slider',
          },
        ],
      },
      {
        name: 'border',
        title: 'Border',
        type: 'object',
        fields: [
          { name: 'width', type: 'string', title: 'Border Width' },
          { name: 'style', type: 'string', title: 'Border Style' },
          { name: 'color', type: 'color', title: 'Border Color' },
          { name: 'radius', type: 'string', title: 'Border Radius' },
        ],
      },
  
      // -------- Advanced --------
      {
        name: 'layout',
        title: 'Layout (Margin / Padding)',
        type: 'object',
        fields: [
          { name: 'margin', type: 'string', title: 'Margin (top right bottom left)' },
          { name: 'padding', type: 'string', title: 'Padding (top right bottom left)' },
        ],
      },
      {
        name: 'order',
        title: 'Order',
        type: 'number',
      },
      {
        name: 'size',
        title: 'Size',
        type: 'string',
        description: 'Width/Height size for responsive behavior.',
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
        name: 'zIndex',
        title: 'Z-Index',
        type: 'number',
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
  }
  