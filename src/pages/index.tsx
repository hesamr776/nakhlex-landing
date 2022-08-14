import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { Intro } from '../components/Intro';
import { Market } from '../components/Market';
import { Benefits } from '../components/Benefits';
import { Features } from '../components/Features';
import { DownloadApp } from '../components/DownloadApp';

const Homepage = () => {
  return (
    <>
      <Intro />
      <Market />
      <Benefits />
      <Features />
      <DownloadApp />
    </>
  );
};

export const getStaticProps = async ({ locale }: { locale: 'en' | 'ar' }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

export default Homepage;
