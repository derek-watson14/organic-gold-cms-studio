export default {
  name: 'instagram',
  title: 'Instagram info',
  description: 'Instagram username, profile link, title, and post display count.',
  type: 'object',
  fields: [
    {
      name: 'username',
      title: '@ Username',
      description: 'The @username that will appear colorfully in title',
      type: 'string',
    },
    {
      name: 'profile',
      title: 'Profile link',
      description:
        'URL link to profile. When user clicks header they will be redirected to this link.',
      type: 'string',
    },
    {
      name: 'postCount',
      title: 'Number of posts to display.',
      description:
        'Number of posts to display. Value must be a multiple of six between 6 and 18 (ie. 6, 12, 18).',
      type: 'number',
      validation: (Rule) =>
        Rule.custom((number) => {
          const num = Number(number)
          if (num % 6 === 0 && num >= 6 && num <= 18) {
            return true
          } else {
            return 'Post count must be 6, 12 or 18.'
          }
        }),
    },
  ],
  options: {
    collapsible: true,
    collapsed: true,
  },
}
