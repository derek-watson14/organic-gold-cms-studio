import icon from 'react-icons/lib/fa/music'

export default {
  name: 'shows',
  title: 'Shows',
  type: 'document',
  icon,
  fieldsets: [
    {
      name: 'image',
      title: 'Show image data',
    },
  ],
  fields: [
    {
      name: 'name',
      title: 'Show Name',
      type: 'string',
      description: 'Name of the show to be displayed on page.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'about',
      title: 'About the show',
      type: 'text',
      rows: 2,
      description: 'Short description of the show.',
      validation: (Rule) => Rule.required().max(280),
    },
    {
      name: 'showDate',
      title: 'Show Date:',
      type: 'date',
      options: {
        dateFormat: 'dddd, D MMMM YYYY',
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'showTime',
      title: 'Show Time:',
      description: 'Format time like one of the following examples: 5:15pm, 11:20am',
      type: 'string',
      validation: (Rule) => {
        return Rule.required()
          .regex(/\b((1[0-2]|0?[1-9]):([0-5][0-9])([ap][m]))/)
          .error('Time format must match format in description. (1:10am, 10:55pm)')
      },
    },
    {
      name: 'bands',
      title: 'Bands playing:',
      description: 'A list of up to 8 bands playing the event. If blank, "TBD" will be displayed for the bands.',
      type: 'array',
      of: [{ type: 'band' }],
      validation: (Rule) => Rule.max(8),
    },
    {
      name: 'venue',
      title: 'Venue Info',
      description: 'If this section is incomplete, "TBD" will be displayed on the page for the venue.', 
      type: 'venue',
    },
    {
      name: 'image',
      title: 'Show image/poster:',
      description: 'Optional poster or image for the show card. A default image will appear if none is provided here.',
      type: 'image',
      fieldset: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'imageAlt',
      title: 'Image caption',
      description: 'Caption for screenreaders or if image fails to load',
      type: 'string',
      fieldset: 'image',
      validation: (Rule) => Rule.max(140),
    },
  ],
  preview: {
    select: {
      showName: 'name',
      description: 'about',
    },
    prepare(selection) {
      const { showName, description } = selection
      return {
        title: showName,
        subtitle: description,
      }
    },
  },
}
