export default {
  name: 'scPlayer',
  title: 'SoundCloud user/playlist player',
  description: 'SoundCloud player embedded on the page.',
  type: 'object',
  fields: [
    {
      name: 'header',
      title: 'Header',
      description: 'Text that will display above/around the embedded player.',
      type: 'string',
    },
    {
      name: 'link',
      title: 'Link',
      description: 'URL link to a user page or playlist to populate the player.',
      type: 'string',
    },
  ],
  options: {
    collapsible: true,
    collapsed: true,
  },
}
