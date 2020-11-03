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
    },
    {
      name: 'date',
      title: 'Show Date:',
      type: 'datetime',
    },
    {
      name: 'bandNames',
      title: 'Bands playing:',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      name: 'venueName',
      title: 'Venue name:',
      type: 'string',
    },
    {
      name: 'venueLink',
      title: 'Link to venue',
      type: 'string',
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