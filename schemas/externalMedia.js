export default {
  name: 'externalMedia',
  title: 'External Media Links',
  type: 'object',
  fields: [
    {
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
          description: 'URL link to video. To get link click Share > Embed then copy only the URL following src= (do not include parenthesis).',
          type: 'string'
        }
      ],
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
    {
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
        }
      ],
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
    {
      name: 'scSongList',
      title: 'SoundCloud song list',
      description: 'List of SoundCloud songs to be displayed one by one.',
      type: 'array',
      of: [
        {
          title: 'SoundCloud Song URL',
          description: 'URL of a single SoundCloud track',
          type: 'string',
          validation: Rule => Rule.required(),
        }
      ],
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
  ],
}
