export default {
  name: 'form',
  title: 'Form Labels',
  type: 'object',
  fields: [
    {
      name: 'formName',
      title: 'Form Name',
      type: 'string',
    },
    {
      name: 'formHeader',
      title: 'Form header',
      type: 'string',
    },
    {
      name: 'formLabelList',
      title: 'Form Label List',
      type: 'array',
      of: [{
        name: 'formFieldLabel',
        title: 'Form Field Label',
        type: 'object',
        fields: [
          {
            name: 'fieldName',
            title: 'Field name',
            type: 'string'
          },
          {
            name: 'fieldLabelText',
            title: 'Field Label',
            type: 'string'
          },

        ]
      }],
    },
  ],
}
