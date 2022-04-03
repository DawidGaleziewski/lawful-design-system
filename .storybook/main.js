module.exports = {
  stories: ["../**/*.stories.@(js|tsx|mdx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-contexts/register",
    "@storybook/addon-backgrounds/register",
    {
      name: "@storybook/addon-docs",
      options: {
        configureJSX: true,
      },
    },
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
  typescript: { reactDocgen: false },
  features: {
    emotionAlias: false,
  },
};
