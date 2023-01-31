import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Script from 'next/script';
const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

import { Intro } from '../components/Intro';
import { Market } from '../components/Market';

import { Benefits } from '../components/Benefits';
import { Features } from '../components/Features';
import { DownloadApp } from '../components/DownloadApp';
import { TradeFlow } from '../components/TradeFlow';
import { VideoPlayer } from '../components/VideoPlayer';

const Homepage = () => {
  return (
    <>
      <Script
        src={`https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`}
      />

      <Intro />
      <Market />
      <Benefits />
      <VideoPlayer />
      <TradeFlow />
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
