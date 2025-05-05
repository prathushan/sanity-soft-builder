export default {
  name: 'videoBlock',
  title: 'Video Block',
  type: 'object',
  fields: [
    // -------- Content --------
    {
      name: 'videoType',
      title: 'Video Type',
      type: 'string',
      options: {
        list: [
          { title: 'YouTube', value: 'youtube' },
          { title: 'Vimeo', value: 'vimeo' },
          { title: 'MP4 Upload', value: 'upload' },
        ],
      },
    },
    {
      name: 'videoUrl',
      title: 'Video URL (YouTube/Vimeo)',
      type: 'url',
      hidden: ({ parent }) => parent?.videoType === 'upload',
    },
    {
      name: 'videoFile',
      title: 'Upload MP4',
      type: 'file',
      options: {
        accept: 'video/mp4',
      },
      hidden: ({ parent }) => parent?.videoType !== 'upload',
    },
    {
      name: 'overlayImage',
      title: 'Overlay Image (Poster)',
      type: 'image',
      description: 'Shown before video is played',
    },
    {
      name: 'autoplay',
      title: 'Autoplay',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'muted',
      title: 'Mute Video',
      type: 'boolean',
      initialValue: true,
    },
    {
      name: 'loop',
      title: 'Loop Video',
      type: 'boolean',
      initialValue: false,
    },

    // -------- Style --------
    {
      name: 'alignment',
      title: 'Video Alignment',
      type: 'string',
      options: {
        list: ['left', 'center', 'right'],
      },
    },
    {
      name: 'width',
      title: 'Width',
      type: 'string',
      description: 'Example: 100%, 640px',
    },
    {
      name: 'height',
      title: 'Height',
      type: 'string',
      description: 'Example: auto, 360px',
    },
    {
      name: 'borderRadius',
      title: 'Border Radius',
      type: 'string',
      description: 'Example: 8px',
    },
    {
      name: 'boxShadow',
      title: 'Box Shadow',
      type: 'string',
      description: 'Example: 0 4px 10px rgba(0,0,0,0.2)',
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
