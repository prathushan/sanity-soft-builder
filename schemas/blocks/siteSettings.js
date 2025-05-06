
import { FaCog } from 'react-icons/fa';

export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  icon: FaCog,
  fields: [
    { name: 'siteName', type: 'string', title: 'Site Name' },
    {
      name: 'favicon',
      type: 'image',
      title: 'Favicon',
      
    },
    {
      name: 'logo',
      type: 'image',  
      title: 'Logo',
    },
    {
      name: 'fonts',
      title: 'Fonts',
      type: 'object',
      fields: [
        {
          name: 'uploadedFonts',
          title: 'Custom Uploaded Fonts',
          type: 'array',
          of: [{ type: 'fontUpload' }]
        },
        {
          name: 'googleFonts',
          title: 'Google Fonts',
          type: 'array',
          of: [{ type: 'string' }],
          description: 'Enter font family names from Google Fonts (e.g., Roboto)'
        },
        {
          name: 'fontSelections',
          title: 'Font Selections (H1–H5, Body)',
          type: 'object',
          fields: [
            { name: 'h1', title: 'H1 Font', type: 'string' },
            { name: 'h2', title: 'H2 Font', type: 'string' },
            { name: 'h3', title: 'H3 Font', type: 'string' },
            { name: 'h4', title: 'H4 Font', type: 'string' },
            { name: 'h5', title: 'H5 Font', type: 'string' },
            { name: 'body', title: 'Body Font', type: 'string' }
          ]
        }
      ]
    },
    {
      name: 'typography',
      type: 'object',
      title: 'Responsive Typography',
      fields: ['h1', 'h2', 'h3', 'h4', 'h5'].map(h => ({
        name: h,
        type: 'object',
        title: h.toUpperCase(),
        fields: ['mobile', 'tablet', 'desktop'].map(device => ({
          name: device,
          title: `${device.charAt(0).toUpperCase() + device.slice(1)} Size`,
          type: 'object',
          fields: [
            {
              name: 'value',
              type: 'number',
              title: 'Font Size'
            },
            {
              name: 'unit',
              type: 'string',
              title: 'Unit',
              options: {
                list: ['px', 'rem', '%', 'em', 'vw', 'vh'],
                layout: 'dropdown'
              }
            }
          ]
        }))
      }))
    },
    {
      name: 'colors',
      title: 'Colors',
      type: 'object',
      fields: [
        { name: 'primary', type: 'color', title: 'Primary Color' },
        { name: 'secondary', type: 'color', title: 'Secondary Color' },
        { name: 'background', type: 'color', title: 'Background Color' },
        { name: 'text', type: 'color', title: 'Text Color' }
      ]
    }
  ]
};
