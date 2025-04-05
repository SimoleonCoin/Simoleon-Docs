module.exports = {
  title: 'Simoleon Developer Portal',
  tagline: 'Seamless crypto payments for everyone.',
  url: 'https://simoleon.dev',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'simoleon-labs',
  projectName: 'simoleon-docs',
  themeConfig: {
    navbar: {
      title: 'Simoleon',
      logo: { alt: 'Simoleon Logo', src: 'img/logo.svg' },
      items: [
        { to: '/docs/getting-started', label: 'Getting Started', position: 'left' },
        { to: '/docs/sdk', label: 'SDK', position: 'left' },
        { to: '/docs/api', label: 'API', position: 'left' },
        { href: 'https://github.com/simoleon-labs', label: 'GitHub', position: 'right' }
      ]
    },
    footer: {
      style: 'dark',
      copyright: `© ${new Date().getFullYear()} Simoleon Labs`
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/simoleon-labs/simoleon-docs/edit/main/'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      }
    ]
  ]
};
