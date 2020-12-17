import icon from 'react-icons/lib/fa/sitemap'

export default {
  name: 'pages',
  title: 'Pages',
  type: 'document',
  icon,
  fieldsets: [
    {
      name: 'meta',
      title: 'Page metadata',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
    {
      name: 'image',
      title: 'Page image data',
    },
  ],
  fields: [
    {
      name: 'pageHeader',
      title: 'Page Header',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'subheader',
      title: 'Subheader',
      type: 'string',
      description: 'If there is no subheading on the page changing this will have no effect.',
    },
    {
      name: 'textContent',
      title: 'Text Content',
      type: 'array',
      description: 'Main text for the page. Each section represents a paragraph.',
      of: [
        {
          type: 'text',
          rows: 4,
        },
      ],
    },
    {
      name: 'pageImage',
      title: 'Image',
      description: 'The main display image for pages that have an image.',
      type: 'image',
      fieldset: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'pageImageAlt',
      title: 'Image caption',
      description: 'Caption for screenreaders or if image fails to load',
      type: 'string',
      fieldset: 'image',
      validation: (Rule) => Rule.max(140),
    },
    {
      name: 'externalMedia',
      title: 'External Media',
      description:
        "All videos/music linked to the page from an external source. Media will only appear if it's programmed to be on the page.",
      type: 'externalMedia',
    },
    {
      name: 'lists',
      title: 'Page lists',
      description: 'Lists of information for this page (ie. contact info, equipment, etc).',
      type: 'array',
      of: [{ type: 'list' }],
    },
    {
      name: 'forms',
      title: 'Forms',
      description: 'The labels and headers for any forms on the page.',
      type: 'array',
      of: [{ type: 'form' }],
    },
    {
      name: 'buttonLinkList',
      title: 'Internal Navigation Buttons',
      type: 'array',
      description: 'Buttons that act as links to other pages.',
      of: [{ type: 'buttonLink' }],
    },
    {
      name: 'pageName',
      title: 'Page Name',
      type: 'string',
      description: 'Changing will break website. This is how the website identifies the page.',
      fieldset: 'meta',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      page: 'pageName',
    },
    prepare(selection) {
      const { page } = selection

      return {
        title: page,
      }
    },
  },
}
