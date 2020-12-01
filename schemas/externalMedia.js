export default {
  name: 'externalMedia',
  title: 'External Media Links',
  type: 'object',
  fields: [
    {
      name: 'youTubeVideo',
      title: 'YouTube Player',
      description: 'YouTube video embedded on the page.',
      type: 'youTubeVideo',
    },
    {
      name: 'scPlayer',
      title: 'SoundCloud user/playlist player',
      description: 'SoundCloud player embedded on the page.',
      type: 'scPlayer',
    },
    {
      name: 'instagram',
      title: 'Instagram info',
      description: 'Instagram username, profile link, title, and post display count.',
      type: 'instagram',
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
          validation: (Rule) => Rule.required(),
        },
      ],
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
  ],
}
