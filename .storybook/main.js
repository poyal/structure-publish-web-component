const config = {
  stories:   ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons:    [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    '@storybook/addon-viewport',
    '@storybook/addon-measure'
  ],
  framework: '@storybook/web-components-vite',

  docs: {
    autodocs: 'tag',
  },

  env: (config) => ({
    ...config,

    VITE_ENV:        'STORYBOOK',
    VITE_SAMPLE_URL: 'http://localhost:8080'
  }),
};

export default config;
