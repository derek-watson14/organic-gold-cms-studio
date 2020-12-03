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
      description: 'Main display image for pages with an image',
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
      type: 'array',
      of: [{ type: 'list' }],
    },
    {
      name: 'buttonLinkList',
      title: 'Internal Navigation Buttons',
      type: 'array',
      description: 'Buttons that act as links to other pages.',
      of: [{ type: 'buttonLink' }],
    },
    {
      name: 'forms',
      title: 'Forms',
      type: 'array',
      of: [{ type: 'form' }],
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
      description: 'metaDescription',
    },
    prepare(selection) {
      const { page, description } = selection

      return {
        title: page,
        subtitle: description,
      }
    },
  },
}
