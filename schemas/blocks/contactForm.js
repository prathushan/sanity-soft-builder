import { defineField } from 'sanity';

const ContactForm = defineField({
  name: 'contactForm',
  title: 'ContactForm',
  type: 'object',
  fields: [
    // {
    //   name: 'layout',
    //   title: 'Contact Form Layout',
    //   type: 'string',
    //   options: {
    //     list: [
    //       { title: 'simple-right', value: 'simple-right' },
    //     ],
    //     validation: Rule => [Rule.required().error('A layout is required.')],
    //   },
    // },
    // {
    //   name: 'animation',
    //   title: 'Animation',
    //   type: 'string',
    //   initialValue: 'none',
    //   options: {
    //     list: [
    //       { title: 'none', value: 'none' },
    //       { title: 'fade-in', value: 'fade-in' },
    //     ],
    //   },
    // },
    {
        name: 'title',
        title: 'Title',
        type: 'string',
        
    },
    {
        name: 'honeypot',
        title: 'Honeypot Field Name',
        type: 'string',
        initialValue: 'website-url',
        description: 'Hidden spam prevention field name',
        validation: Rule => Rule.regex(/^[a-z0-9-]+$/i).error('Only letters, numbers and hyphens allowed')
      },
      {
        name: 'csrfProtection',
        title: 'CSRF Protection',
        type: 'boolean',
        initialValue: true,
        description: 'Enable Cross-Site Request Forgery protection'
      }, 
  
  {
    name: 'form',
    title: 'Form',
    type: 'reference',
    to: [{ type: 'form' }],
  }
  ],
  preview: {
    select: {
      title: 'layout',
      subtitle: 'form.title',
    },
  },
});

export default ContactForm;
