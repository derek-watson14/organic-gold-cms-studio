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
      title: "Venue link",
      description: "Link to venue's website, Facebook page, etc.",
      type: 'string',
    },
    {
      name: 'address',
      title: 'Venue address',
      description: "Help people easily find the show's location.", 
      type: 'address',
    },
  ],
}
