module.exports = {
  title: 'dbots.me Documentation',
  tagline: 'dbots.me Documentation',
  url: 'https://docs.dbots.me/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'https://cdn.dbots.me/static/favicon-white.svg',
  organizationName: 'dbots-me',
  projectName: 'docs',
  themeConfig: {
    /*colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },*/
    navbar: {
      title: 'dbots.me Documentation',
      logo: {
        alt: 'dbots.me Logo',
        src: 'https://cdn.dbots.me/static/favicon-dark.svg',
      },
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'dbots.me',
          items: [
            {
              label: 'Home',
              to: 'https://dbots.me/',
            },
            {
              label: 'Add your Bot',
              to: 'https://dbots.me/new-bot/',
            },
            {
              label: 'Status Page',
              to: 'https://status.dbots.me/',
            },
          ],
        },
        {
          title: 'Social Media',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/dbots-me/',
            },
            {
              label: 'Discord',
              href: 'https://go.dbots.me/discord',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/dbotsme',
            },
          ],
        },
        {
          title: 'About',
          items: [
            {
              label: 'Guidelines',
              to: 'https://dbots.me/guidelines/',
            },
            {
              label: 'Imprint',
              to: 'https://dbots.me/imprint/',
            },
            {
              label: 'Privacy',
              to: 'https://dbots.me/privacy/',
            },
          ],
        },
      ],
      copyright: `&copy; ${new Date().getFullYear()} dbots.me`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/dbots-me/docs/edit/main/',
          routeBasePath: '/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [require.resolve('@cmfcmf/docusaurus-search-local'), {
      indexDocs: true,
      docsRouteBasePath: '/',
      indexBlog: false,
    }]
  ],
};