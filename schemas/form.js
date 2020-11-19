export default {
  name: 'form',
  title: 'Form Labels',
  type: 'object',
  fields: [
    {
      name: 'formName',
      title: 'Form Name',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'formHeader',
      title: 'Form header',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'fieldLabels',
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
