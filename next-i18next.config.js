module.exports = {
  debug: process.env.NODE_ENV === 'development',

  i18n: {
    defaultLocale: 'ar',
    locales: ['en', 'ar'],
  },

  react: { useSuspense: false },
  reloadOnPrerender: process.env.NODE_ENV === 'development',
};
