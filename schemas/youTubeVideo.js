export default {
  name: 'youTubeVideo',
  title: 'YouTube Player',
  description: 'YouTube video embedded on the page.',
  type: 'object',
  fields: [
    {
      name: 'header',
      title: 'Header',
      description: 'Text that will display above/around the embedded video.',
      type: 'string',
    },
    {
      name: 'link',
      title: 'Link',
      description:
        'URL link to video. To get link click Share > Embed then copy only the URL following src= (do not include parenthesis).',
      type: 'string',
    },
  ],
  options: {
    collapsible: true,
    collapsed: true,
  },
}
