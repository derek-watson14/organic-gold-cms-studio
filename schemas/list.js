export default {
  name: 'list',
  title: 'List',
  type: 'object',
  fields: [
    {
      name: 'listName',
      title: 'List Name',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'listItem',
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
