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
                                ],
                            },
                            validation: (Rule) => Rule.required(),
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
                        }
                    ],
                },
            ],
        },
    ],
};

export default Form;
