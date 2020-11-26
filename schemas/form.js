export default {
  name: 'form',
  title: 'Form Labels',
  type: 'object',
  fields: [
    {
      name: 'name',
      title: 'Form Name',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'header',
      title: 'Form header',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'labels',
      title: 'Field labels',
      type: 'array',
      of: [{
        name: 'label',
        title: 'Label',
        type: 'string',
      }],
    },
  ],
}
