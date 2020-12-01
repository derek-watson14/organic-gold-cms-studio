export default {
  name: 'buttonLink',
  title: 'Link Button',
  type: 'object',
  fields: [
    {
      name: 'buttonText',
      title: 'Button display text:',
      type: 'string',
      description: 'Case insensitive, will be transformed to all uppercase.',
    },
    {
      name: 'toPage',
      title: 'Links to this page:',
      type: 'string',
      description:
        'Changing this will change where the button directs to. Please use a page name in all lowercase, found under page metadata section.',
    },
  ],
}
