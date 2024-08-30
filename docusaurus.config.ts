import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Process Mining for Health',
  tagline: 'From data to knowledge. From knowledge to value',
  favicon: 'img/favicon.png',

  // Set the production url of your site here
  url: process.env.DOCUSAURUS_URL || 'https://pm4health.com/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: process.env.DOCUSAURUS_BASE_URL || '/', // '/pm4h-docs-v3/'

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'sabienUPV', // Usually your GitHub org/user name.
  projectName: 'pm4h-docs-v3', // Usually your repo name.

  // Set trailingSlash, following Docusaurus docs advice for GitHub pages:
  // https://docusaurus.io/docs/deployment#docusaurusconfigjs-settings
  trailingSlash: true,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/sabienUPV/pm4h-docs-v3/tree/main/',
        },
        // disable blog
        blog: false,
        // blog: {
        //   showReadingTime: true,
        //   feedOptions: {
        //     type: ['rss', 'atom'],
        //     xslt: true,
        //   },
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        //   // Useful options to enforce blogging best practices
        //   onInlineTags: 'warn',
        //   onInlineAuthors: 'warn',
        //   onUntruncatedBlogPosts: 'warn',
        // },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    //image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'PM4H',
      logo: {
        alt: 'PM4H',
        src: 'img/favicon3.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro/intro',
          position: 'left',
          label: 'Introduction',
        },
        {
          type: 'doc',
          docId: 'perspectives/main-perspective',
          position: 'left',
          label: 'Perspectives',
        },
        {
          type: 'doc',
          docId: 'process-miner/overview/intro',
          position: 'left',
          label: 'Process Miner',
        },
        {
          type: 'doc',
          docId: 'faq/frequent-asked-question',
          position: 'left',
          label: 'FAQ',
        },
        {
          type: 'localeDropdown',
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
              to: 'docs/intro', // Note: If the file is named 'intro.md' in the 'intro' folder, the path should be 'docs/intro', not 'docs/intro/intro', because it seems that Docusaurus is able to detect that the file is named the same as the folder, so it won't double the name in the URL.
            },
            {
              label: 'Perspectives',
              to: 'docs/perspectives/main-perspective',
            },
            {
              label: 'FAQ',
              to: 'docs/faq/frequent-asked-question',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/PM4H1',
            },
            {
              label: 'Youtube',
              href: 'https://www.youtube.com/watch?v=cFbj9UDo2bE&list=PLvrk1d0K79BgJM03xPdeZCo-jwxQo9CM0',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/pm4h',
            },
          ],
        },
        {
          title: 'Contact',
          items: [
            {
              label: 'Get in touch',
              href: 'https://pm4health.com/get-in-touch/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} PM4H, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
