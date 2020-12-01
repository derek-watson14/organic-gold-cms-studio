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
      title: 'Video link',
      description:
        'URL link to video. To get link click Share > Embed then copy only the URL following src= (do not include parenthesis).',
      type: 'string',
    },
    {
      name: 'channel',
      title: 'Channel link',
      description:
        'URL link to channel. Can be copy/pasted from channel page. Serves as link from header click.',
      type: 'string',
    },
  ],
  options: {
    collapsible: true,
    collapsed: true,
  },
}
