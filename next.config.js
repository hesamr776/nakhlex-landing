// eslint-disable-next-line @typescript-eslint/no-var-requires
const { i18n } = require('./next-i18next.config');

module.exports = {
  experimental: {
    outputStandalone: true,
  },
  reactStrictMode: true,
  i18n,
};
