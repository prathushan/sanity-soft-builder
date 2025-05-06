// schemas/builderBlock.js
export default {
  name: 'builderBlock',
  type: 'object',
  title: 'Builder Block',
  fields: [
    {
      name: 'block',
      title: 'Block',
      type: 'array',
      of: [
        { type: 'heroSection' },
        { type: 'textBlock' },
        { type: 'imageBlock' },
        { type: 'videoBlock' },
        { type: 'buttonBlock' },
        { type:  'contactForm'},
        { type: 'columnBlock' },
        { type: 'containerBlock' },
        { type: 'headingBlock' },
        { type: 'spacerBlock' },
        { type: 'fontUpload' }, 
        { type: 'footerSetting' },
        { type: 'menu' },
        { type: 'menuitem' },
        { type: 'post' },
        { type: 'siteSettings' }
        // { type: 'mediaAsset' }, 
      ]
    }
  ]
}
