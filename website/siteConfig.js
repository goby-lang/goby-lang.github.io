/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* List of projects/orgs using your project for the users page */
const users = [];

const siteConfig = {
  algolia: {
    apiKey: 'b023aa425d3aa0c853c2939891f07e19',
    indexName: 'goby-lang',
    algoliaOptions: {} // Optional, if provided by Algolia
  },
  title: 'Goby',
  tagline: 'Inherits from Ruby, extended with Golang',
  url: 'https://goby-lang.org' /* your website url */,
  cname: 'goby-lang.org',
  baseUrl: '/' /* base url for your project */,
  projectName: 'goby-lang.github.io',
  organizationName: 'goby-lang',
  ogImage: 'img/goby-logo.png',
  // headerIcon: 'img/goby-logo.svg',
  headerLinks: [
    {doc: 'introduction', label: 'Docs'},
    {href: 'https://github.com/goby-lang/goby', label: "GitHub"},
    {href: 'https://twitter.com/goby_lang', label: "Twitter"},
    {href: 'https://goby-lang-slackin.herokuapp.com/', label: "Join our Slack!"},

    // {blog: false, label: 'Blog'},
  ],
  users,
  /* path to images for header/footer */
  // footerIcon: 'img/goby-logo.png',
  favicon: 'img/favicon.png',
  /* colors for website */
  colors: {
    primaryColor: '#f26b00',
    secondaryColor: '#f26b00',
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
    ' goby-lang.org',
  // organizationName: 'deltice', // or set an env variable ORGANIZATION_NAME
  // projectName: 'test-site', // or set an env variable PROJECT_NAME
  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: 'darcula',
  },
  scripts: ['https://buttons.github.io/buttons.js'],
  // You may provide arbitrary config keys to be used as needed by your template.
  repoUrl: 'https://github.com/goby-lang/goby',
  gaTrackingId: 'UA-47510815-14',
};

module.exports = siteConfig;
