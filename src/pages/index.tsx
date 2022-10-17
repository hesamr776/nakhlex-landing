import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Script from 'next/script';
const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

import { Intro } from '../components/Intro';
import { Market } from '../components/Market';
import { KYC } from '../components/KYC';
import { Benefits } from '../components/Benefits';
import { Features } from '../components/Features';
import { DownloadApp } from '../components/DownloadApp';

const Homepage = () => {
  return (
    <>
      <Script
        src={`https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`}
      />

      <Intro />
      <Market />
      <KYC />
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
