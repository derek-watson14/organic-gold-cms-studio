export default {
  name: 'band',
  title: 'Band Info:',
  type: 'object',
  fields: [
    {
      name: 'name',
      title: 'Band name:',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'link',
      title: 'Band webpage link:',
      type: 'string',
      description: "The band's website/Spotify/Facebook etc.",
    },
  ],
}
