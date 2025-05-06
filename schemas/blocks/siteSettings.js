import { FaCog } from 'react-icons/fa';

export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  icon: FaCog,
  fields: [
    // Basic Site Info
    {
      name: 'siteName',
      type: 'string',
      title: 'Site Name',
      description: 'Enter the name of your site.',
    },
    {
      name: 'favicon',
      type: 'image',
      title: 'Favicon',
      options: {
        hotspot: true,
      },
      description: 'Upload your site favicon (16x16px recommended).',
    },
    // Font Settings (Google Fonts & Custom Fonts)
    {
      name: 'fonts',
      title: 'Font Settings',
      type: 'object',
      fields: [
        {
          name: 'googleFonts',
          title: 'Google Fonts',
          type: 'array',
          of: [{ type: 'string' }],
          description: 'Enter font family names from Google Fonts (e.g., Roboto, Open Sans).',
        },
        {
          name: 'uploadedFonts',
          title: 'Custom Fonts',
          type: 'array',
          of: [{ type: 'fontUpload' }],
          description: 'Upload custom font files here.',
        },
      ],
    },

    // Typography Settings (H1-H5 and Body)
    {
      name: 'typography',
      title: 'Typography Settings',
      type: 'object',
      fields: [
        // H1
        {
          name: 'h1',
          title: 'H1 Font',
          type: 'object',
          fields: [
            { name: 'font', type: 'string', title: 'Font', options: { list: [] } },  
            { 
              name: 'fontSize', 
              type: 'number', 
              title: 'Font Size',
              description: 'Font size (value only)',
            },
            {
              name: 'fontSizeUnit',
              type: 'string',
              title: 'Font Size Unit',
              options: {
                list: ['px', 'em', '%', 'rem', 'vw', 'vh'],
                layout: 'dropdown',
              },
              description: 'Select unit for font size',
            },
            { name: 'fontWeight', type: 'string', title: 'Font Weight', options: { list: ['normal', 'bold', 'lighter', 'bolder'] } },
            { name: 'lineHeight', type: 'number', title: 'Line Height', description: 'Line height in px, rem, etc.' },
          ]
        },

        // H2
        {
          name: 'h2',
          title: 'H2 Font',
          type: 'object',
          fields: [
            { name: 'font', type: 'string', title: 'Font', options: { list: [] } },  // Dropdown from fonts
            { 
              name: 'fontSize', 
              type: 'number', 
              title: 'Font Size' 
            },
            {
              name: 'fontSizeUnit',
              type: 'string',
              title: 'Font Size Unit',
              options: {
                list: ['px', 'em', '%', 'rem', 'vw', 'vh'],
                layout: 'dropdown',
              },
              description: 'Select unit for font size',
            },
            { name: 'fontWeight', type: 'string', title: 'Font Weight', options: { list: ['normal', 'bold', 'lighter', 'bolder'] } },
            { name: 'lineHeight', type: 'number', title: 'Line Height' },
          ]
        },

        // H3
        {
          name: 'h3',
          title: 'H3 Font',
          type: 'object',
          fields: [
            { name: 'font', type: 'string', title: 'Font', options: { list: [] } },  // Dropdown from fonts
            { 
              name: 'fontSize', 
              type: 'number', 
              title: 'Font Size' 
            },
            {
              name: 'fontSizeUnit',
              type: 'string',
              title: 'Font Size Unit',
              options: {
                list: ['px', 'em', '%', 'rem', 'vw', 'vh'],
                layout: 'dropdown',
              },
              description: 'Select unit for font size',
            },
            { name: 'fontWeight', type: 'string', title: 'Font Weight', options: { list: ['normal', 'bold', 'lighter', 'bolder'] } },
            { name: 'lineHeight', type: 'number', title: 'Line Height' },
          ]
        },

        // H4
        {
          name: 'h4',
          title: 'H4 Font',
          type: 'object',
          fields: [
            { name: 'font', type: 'string', title: 'Font', options: { list: [] } },  // Dropdown from fonts
            { 
              name: 'fontSize', 
              type: 'number', 
              title: 'Font Size' 
            },
            {
              name: 'fontSizeUnit',
              type: 'string',
              title: 'Font Size Unit',
              options: {
                list: ['px', 'em', '%', 'rem', 'vw', 'vh'],
                layout: 'dropdown',
              },
              description: 'Select unit for font size',
            },
            { name: 'fontWeight', type: 'string', title: 'Font Weight', options: { list: ['normal', 'bold', 'lighter', 'bolder'] } },
            { name: 'lineHeight', type: 'number', title: 'Line Height' },
          ]
        },

        // H5
        {
          name: 'h5',
          title: 'H5 Font',
          type: 'object',
          fields: [
            { name: 'font', type: 'string', title: 'Font', options: { list: [] } },  // Dropdown from fonts
            { 
              name: 'fontSize', 
              type: 'number', 
              title: 'Font Size' 
            },
            {
              name: 'fontSizeUnit',
              type: 'string',
              title: 'Font Size Unit',
              options: {
                list: ['px', 'em', '%', 'rem', 'vw', 'vh'],
                layout: 'dropdown',
              },
              description: 'Select unit for font size',
            },
            { name: 'fontWeight', type: 'string', title: 'Font Weight', options: { list: ['normal', 'bold', 'lighter', 'bolder'] } },
            { name: 'lineHeight', type: 'number', title: 'Line Height' },
          ]
        },

        // Body
        {
          name: 'body',
          title: 'Body Font',
          type: 'object',
          fields: [
            { name: 'font', type: 'string', title: 'Font', options: { list: [] } },  // Dropdown from fonts
            { 
              name: 'fontSize', 
              type: 'number', 
              title: 'Font Size' 
            },
            {
              name: 'fontSizeUnit',
              type: 'string',
              title: 'Font Size Unit',
              options: {
                list: ['px', 'em', '%', 'rem', 'vw', 'vh'],
                layout: 'dropdown',
              },
              description: 'Select unit for font size',
            },
            { name: 'fontWeight', type: 'string', title: 'Font Weight', options: { list: ['normal', 'bold', 'lighter', 'bolder'] } },
            { name: 'lineHeight', type: 'number', title: 'Line Height' },
          ]
        },
      ],
    },

    // Color Settings
    {
      name: 'colors',
      title: 'Color Scheme',
      type: 'object',
      fields: [
        { name: 'primary', type: 'color', title: 'Primary Color' },
        { name: 'secondary', type: 'color', title: 'Secondary Color' },
        { name: 'background', type: 'color', title: 'Background Color' },
        { name: 'text', type: 'color', title: 'Text Color' },
      ],
    },
  ],
};
