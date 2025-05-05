
export default {
    name: 'fontUpload',
    type: 'object',
    title: 'Custom Font Upload',
    fields: [
      {
        name: 'fontName',
        type: 'string',
        title: 'Font Name (used in CSS font-family)'
      },
      {
        name: 'fontFile',
        type: 'file',
        title: 'Font File',
        options: {
          accept: '.woff,.woff2,.ttf,.otf'
        }
      }
    ]
  }
  
