/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* List of projects/orgs using your project for the users page */
const users = [
  {
    caption: 'Sample site',
    image: '/img/goby-logo.svg',
    infoLink: 'https://sample.goby-lang.org',
    pinned: true,
  },
];

const siteConfig = {
  title: 'Goby',
  tagline: 'Inherits from Ruby, extended with Golang',
  url: 'https://goby-lang.github.io' /* your website url */,
  baseUrl: '/' /* base url for your project */,
  projectName: 'goby-lang.github.io',
  organizationName: 'goby-lang',
  ogImage: 'img/goby-logo.png',
  headerIcon: 'img/goby-logo.svg',
  headerLinks: [
    {doc: 'introduction', label: 'Introduction'},
    {href: 'https://sample.goby-lang.org', label: "Sample Site"},
    {href: 'https://github.com/goby-lang/goby', label: "GitHub"},
    {href: 'https://goby-lang-slackin.herokuapp.com/', label: "Join Slack!"},

    // {blog: false, label: 'Blog'},
  ],
  users,
  /* path to images for header/footer */
  // headerIcon: 'img/goby-logo.png',
  // footerIcon: 'img/goby-logo.png',
  favicon: 'img/favicon.png',
  /* colors for website */
  colors: {
    primaryColor: '#FF903E',
    secondaryColor: '#FBA86F',
  },
  /* custom fonts for website */
  /*fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },*/
  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright:
    'Copyright © ' +
    new Date().getFullYear() +
    ' Your Name or Your Company Name',
  // organizationName: 'deltice', // or set an env variable ORGANIZATION_NAME
  // projectName: 'test-site', // or set an env variable PROJECT_NAME
  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: 'default',
  },
  scripts: ['https://buttons.github.io/buttons.js'],
  // You may provide arbitrary config keys to be used as needed by your template.
  repoUrl: 'https://github.com/goby-lang/goby',
};

module.exports = siteConfig;
