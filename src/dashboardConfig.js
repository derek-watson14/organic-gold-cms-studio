export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              title: 'Go Live! Deploy Changes Here',
              description: `
                After publishing edits to a page or show, the site needs to be redeployed. 
                Click the "Deploy" button on the right side below to make any changes live.
                The deployment processs will take up to two minutes.
                To see the changes, simply refresh the website a few minutes after pressing "Deploy".
              `,
              sites: [
                {
                  buildHookId: '5fda5c6781b6d61db1976c49',
                  title: 'Organic Gold Website',
                  name: 'organicgold',
                  apiId: 'd46f8060-7ac0-4779-a856-7947ab90df33',
                },
              ],
            },
          },
        ],
        data: [
          {
            title: 'Website repo',
            value: 'https://github.com/derek-watson14/organic-gold',
            category: 'code',
          },
          {
            title: 'CMS repo',
            value: 'https://github.com/derek-watson14/organic-gold-cms-studio',
            category: 'code',
          },
          {
            title: 'Website',
            value: 'https://organicgoldmusic.com/',
            category: 'apps',
          },
          {
            title: 'CMS',
            value: 'https://content.organicgoldmusic.com/',
            category: 'apps',
          },
        ],
      },
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Pages', order: '_updatedAt desc', types: ['pages'] },
      layout: { width: 'medium' },
    },
  ],
}
