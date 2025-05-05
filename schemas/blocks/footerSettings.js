import { FaGripLines } from 'react-icons/fa';
export default {
    name: 'footerSetting',
    title: 'Footer',
    type: 'document',
    icon:FaGripLines,
    fields: [
      {
        name: 'footerTitle',
        title: 'Footer Title',
        type: 'string',
        description: 'Title of the footer section.',
      },
      {
        name: 'footerLogo',
        title: 'Footer Logo',
        type: 'image',
        description: 'Logo to display in the footer (optional).',
      },
      {
        name: 'footerText',
        title: 'Footer Text',
        type: 'text',
        description: 'Additional text content for the footer (e.g., about or description).',
      },
      {
        name: 'usefulLinks',
        title: 'Useful Links',
        type: 'array',
        of: [
          {
            type: 'object',
            title: 'Link',
            fields: [
              {
                name: 'linkTitle',
                type: 'string',
                title: 'Link Title',
              },
              {
                name: 'linkUrl',
                type: 'url',
                title: 'Link URL',
              },
              {
                name: 'selectMenu',
                title: 'Select Header Menu',
                type: 'reference',
                to: [{ type: 'menu' }],
                description: 'Select an existing menu from the header to use in footer links.',
              },
            ],
          },
        ],
        description: 'List of useful links (e.g., links to important pages or menu items).',
      },
      {
        name: 'addressSection',
        title: 'Address Section',
        type: 'object',
        fields: [
          {
            name: 'addressTitle',
            type: 'string',
            title: 'Address Title',
          },
          {
            name: 'address',
            type: 'string',
            title: 'Address',
          },
          {
            name: 'email',
            type: 'string',
            title: 'Email',
          },
          {
            name: 'phone',
            type: 'string',
            title: 'Phone Number',
          },
        ],
        description: 'Address, email, and phone details to be shown in the footer.',
      },
      {
        name: 'newsletterForm',
        title: 'Newsletter Form',
        type: 'object',
        fields: [
          {
            name: 'formTitle',
            type: 'string',
            title: 'Form Title',
            description: 'Title of the newsletter form (e.g., "Subscribe to our Newsletter").',
          },
          {
            name: 'placeholderText',
            type: 'string',
            title: 'Placeholder Text',
            description: 'Text to show in the email input field (e.g., "Enter your email").',
          },
        ],
        description: 'Simple newsletter form with email input field.',
      },
    ],
  };
  