import icon from 'react-icons/lib/fa/music'

export default {
  name: 'shows',
  title: 'Shows',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Show Name',
      type: 'string',
      description: 'Name of the show to be displayed on page.',
    },
    {
      name: 'about',
      title: 'About the show',
      type: 'text',
      rows: 2,
      description: 'Short description of the show.',
      validation: Rule => Rule.max(280)
    },
    {
      name: 'showDate',
      title: 'Show Date:',
      type: 'date',
      options: {
        dateFormat: 'dddd, D MMMM YYYY',
      }
    },
    {
      name: 'showTime',
      title: 'Show Time:',
      description: 'Format time like one of the following examples: 5:15pm, 11:20am',
      type: 'string',
      validation: Rule => {
        return Rule
          .regex(/\b((1[0-2]|0?[1-9]):([0-5][0-9])([ap][m]))/)
          .error("Time format must match format in description. (1:10am, 10:55pm)")
      },
    },
    {
      name: 'bands',
      title: 'Bands playing:',
      type: 'array',
      of: [
        {
          name: 'band',
          title: 'Band Info:',
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Band name:',
              type: 'string',
            },
            {
              name: 'link',
              title: 'Band webpage link:',
              type: 'string',
              description: "The band's website/Spotify/Facebook etc.",
            },
          ]
        }
      ]
    },
    {
      name: 'venue',
      title: 'Venue Info:',
      type: 'object',
      fields: [
        {
          name: 'name',
          title: 'Venue name:',
          type: 'string',
        },
        {
          name: 'link',
          title: 'Link to venue',
          type: 'string',
        },
      ]
    },
    {
      name: 'image',
      title: 'Show image/poster:',
      description: 'Optional poster or image for the show card',
      type: 'image',
      options: {
        hotspot: true,
      }
    },
  ],
  preview: {
    select: {
      showName: 'name',
      description: 'about',
    },
    prepare(selection) {
      const {showName, description} = selection;
      return {
        title: showName,
        subtitle: description,
      }
    }
  }
}