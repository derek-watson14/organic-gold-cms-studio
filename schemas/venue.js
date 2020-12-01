export default {
  name: 'venue',
  title: 'Venue Info:',
  type: 'object',
  fields: [
    {
      name: 'name',
      title: 'Venue name:',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'link',
      title: 'Link to venue',
      type: 'string',
    },
    {
      name: 'address',
      title: 'Venue address',
      type: 'address',
    },
  ],
}
