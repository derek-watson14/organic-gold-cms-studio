import icon from 'react-icons/lib/fa/sitemap'

export default {
  name: 'pages',
  title: 'Pages',
  type: 'document',
  icon,
  fieldsets: [
    {
      name: "meta",
      title: "Page metadata",
      options: {
        collapsible: true,
        collapsed: true,
      }
    },

  ],
  fields: [
    {
      name: 'pageName',
      title: 'Page Name',
      type: 'string',
      description: 'Changing will break website. This is how the website identifies the page.',
      fieldset: 'meta'
    },
    {
      name: 'tabTitle',
      title: 'Tab Title',
      type: 'string',
      description: 'Text that will render on the browser tab.',
      fieldset: 'meta'
    },
    {
      name: 'metaDescription',
      title: 'SEO Description',
      type: 'string',
      description: 'Description for search result and SEO.',
      fieldset: 'meta'
    },
    {
      name: 'pageHeader',
      title: 'Page Header',
      type: 'string'
    },
    {
      name: 'textContent',
      title: 'Text Content',
      type: 'array',
      description: 'Main text for the page. Each section represents a paragraph.',
      of: [{
        type: 'text',
        rows: 4,
      }]
    },
    {
      name: 'buttonLinks',
      title: 'Button Links',
      type: 'array',
      description: 'Button links that will appear on the page.',
      of: [{
        name: 'button',
        title: 'Link Button',
        type: 'object',
        fields: [
          {
            name: 'buttonText',
            title: 'Button display text:',
            type: 'string',
            description: 'Case insensitive, will be transformed to all uppercase.'
          },
          {
            name: 'toPage',
            title: 'Links to this page:',
            type: 'string',
            description: 'Changing this will change where the button directs to. Please use a page name in all lowercase, found under page metadata section.'
          }
        ]
      }]
    },
    {
      name: 'pageImage',
      title: 'Page Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
  ],
  preview: {
    select: {
      page: 'pageName',
      description: 'metaDescription'
    },
    prepare(selection) {
      const { page, description } = selection;

      return {
        title: page,
        subtitle: description,
      }
    }
  }
}