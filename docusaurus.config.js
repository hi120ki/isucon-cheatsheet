const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'ISUCON Cheatsheet',
  tagline: 'hi120ki',
  url: 'https://hi120ki.github.io',
  baseUrl: '/isucon/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  trailingSlash: true,
  organizationName: 'hi120ki', // Usually your GitHub org/user name.
  projectName: 'isucon-cheatsheet', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'ISUCON Cheatsheet',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Docs',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/hi120ki/isucon-cheatsheet',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Introduction',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "blog",
            },
            {
              label: "Repository",
              href: "https://github.com/hi120ki/isucon-cheatsheet",
            },
          ],
        },
        {
          title: "Link",
          items: [
            {
              label: "ISUCON",
              href: "http://isucon.net/",
            },
            {
              label: "ISUCON GitHub",
              href: "https://github.com/isucon/",
            },
          ],
        },
        {
          title: "Contact",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/hi120ki/",
            },
            {
              label: "Qiita",
              href: "https://qiita.com/hi120ki",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/hi120ki",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} hi120ki's ISUCON Cheatsheet`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
    gtag: {
      trackingID: 'G-CE9KCQ08HW',
      anonymizeIP: true,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/hi120ki/isucon-cheatsheet/tree/main/docs',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/hi120ki/isucon-cheatsheet/tree/main/blog',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
