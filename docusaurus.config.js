// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Florian Thönelt',
  tagline: 'Webentwickler',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',


  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'de',
    locales: ['de'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Florian Thönelt',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: ' ',
            items: [
              {
                label: 'Impressum',
                to: '/docs/intro',
              },{
                label: 'Datenschutz',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Social Media',
            items: [
              {
                label: 'Xing',
                href: 'https://www.xing.com/profile/Florian_Thoenelt/',
                title:'Xing Profil',
                rel:'nofolow'
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/florian-th%C3%B6nelt-9834a896/',
                itle:'LinkedIn Profil',
                rel:'nofolow'
              }
            ],
          },
          {
            title: 'Projekte',
            items: [
              {
                label: 'go4launch.de',
                href: 'https://www.go4launch.de/',
                title:'Go4Launch - Raumfahrt Datenbank',
              },
              {
                label: 'vicesix.de',
                href: 'https://www.vicesix.de/',
                title: 'ViceSix - GTA und Rockstar Games Blog'
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Florian Thönelt.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
