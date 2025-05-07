import { SiReacthookform } from "react-icons/si";

const Form = {
    name: 'form',
    title: 'Form',
    icon: SiReacthookform,
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'rateLimit',
            title: 'Rate Limiting',
            type: 'object',
            fields: [
              {
                name: 'enabled',
                type: 'boolean',
                initialValue: true,
                description: 'Prevent form spam'
              },
              {
                name: 'requests',
                type: 'number',
                initialValue: 5,
                description: 'Max submissions per minute per IP'
              }
            ]
        },
  {
      name: 'privacy',
      title: 'Privacy Settings',
      type: 'object',
      fields: [
        {
          name: 'gdprCompliant',
          type: 'boolean',
          initialValue: true,
          description: 'Enable GDPR compliance features'
        },
        {
          name: 'dataRetention',
          type: 'number',
          initialValue: 30,
          description: 'Days to keep submission data'
        }
      ]
    },

        
        {
            name: 'description',
            title: 'Description',
            type: 'text',
            description: 'Brief description of the form purpose.'
        },
        {
            name: 'buttonText',
            title: 'Button Text',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'thankYouMessage',
            title: 'Thank you message',
            type: 'text',
            description: 'Message to display after form submission.',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'sanitization',
            title: 'Input Sanitization',
            type: 'object',
            fields: [
              {
                name: 'stripTags',
                type: 'boolean',
                initialValue: true,
                description: 'Remove HTML tags from all inputs'
              },
              {
                name: 'allowedTags',
                type: 'array',
                of: [{type: 'string'}],
                description: 'Whitelisted HTML tags (if stripTags is off)',
                hidden: ({parent}) => parent?.stripTags
              }
            ]
          },
        {
            name: 'fields',
            title: 'Fields',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'label',
                            title: 'Label',
                            type: 'string',
                            validation: (Rule) => Rule.required(),
                        },
                        {
                            name: 'name',
                            title: 'Name',
                            type: 'string',
                            validation: (Rule) => Rule.required(),
                            
                        },
                        {
                            name: 'type',
                            title: 'Type',
                            type: 'string',
                            options: {
                                list: [
                                    { title: 'Text', value: 'text' },
                                    { title: 'TextArea', value: 'textarea' },
                                    { title: 'Email', value: 'email' },
                                    { title: 'Number', value: 'number' },
                                    { title: 'Select', value: 'select' },
                                    { title: 'Checkbox', value: 'checkbox' },
                                    { title: 'Radio', value: 'radio' },
                                    { title: 'File', value: 'file' }
                                    
                                ],
                            },
                            validation: (Rule) => Rule.required(),
                        },{
                            name: 'fileTypes',
                            title: 'Allowed File Types',
                            type: 'array',
                            of: [{ type: 'string' }],
                            description: 'List of allowed MIME types or file extensions (e.g., .pdf, image/png)',
                            hidden: ({ parent }) => parent?.type !== 'file'
                          },{
                            name: 'maxFileSize',
                            title: 'Max File Size (MB)',
                            type: 'number',
                            description: 'Maximum file size in megabytes',
                            hidden: ({ parent }) => parent?.type !== 'file'
                          },
                        {
                            name: 'options',
                            title: 'Options',
                            type: 'array',
                            of: [{type: 'string'}],
                            description: 'Options for select, checkbox, and radio types.',
                            hidden: ({parent}) => !['select', 'checkbox', 'radio'].includes(parent?.type),
                        },
                        {
                            name: 'placeholder',
                            title: 'Placeholder',
                            type: 'string',
                            description: 'Placeholder text for input fields.',
                            hidden: ({parent}) => !['text', 'textarea', 'email', 'number'].includes(parent?.type),
                        },
                        {
                            name: 'required',
                            title: 'Required',
                            type: 'boolean',
                            description: 'Whether the field is required.',
                        },
                        {
                            name: 'description',
                            title: 'Description',
                            type: 'text',
                            description: 'A brief description or instruction for the field.'
                        },
                        {
                            name: 'validation',
                            type: 'object',
                            title: 'Validation Rules',
                            fields: [
                              {
                                name: 'pattern',
                                type: 'string',
                                description: 'Regex pattern for validation'
                              },
                              {
                                name: 'minLength',
                                type: 'number'
                              },
                              {
                                name: 'maxLength',
                                type: 'number'
                              }
                            ]
                        }
                    ],
                },
            ],
        },
    ],
};

export default Form;
