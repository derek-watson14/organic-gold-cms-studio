export default {
  name: 'list',
  title: 'List',
  type: 'object',
  fields: [
    {
      name: 'name',
      title: 'List Name',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'items',
      title: 'List Item',
      type: 'array',
      of: [
        { 
          type: "string",
          validation: Rule => Rule.required(),
        }
      ],
    },
  ],
}
