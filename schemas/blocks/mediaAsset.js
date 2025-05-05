// schemas/mediaAsset.js
export default {
    name: 'mediaAsset',
    title: 'Media Asset',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'mediaType',
        title: 'Media Type',
        type: 'string',
        options: {
          list: [
            { title: 'Image', value: 'image' },
            { title: 'Video', value: 'video' },
            { title: 'File', value: 'file' },
          ],
          layout: 'radio',
        },
      },
      {
        name: 'image',
        title: 'Image File',
        type: 'image',
        hidden: ({ parent }) => parent?.mediaType !== 'image',
      },
      {
        name: 'video',
        title: 'Video File',
        type: 'file',
        hidden: ({ parent }) => parent?.mediaType !== 'video',
      },
      {
        name: 'file',
        title: 'Generic File',
        type: 'file',
        hidden: ({ parent }) => parent?.mediaType !== 'file',
      },
    ],
    preview: {
      select: {
        title: 'title',
        media: 'image',
      },
    },
  };
  