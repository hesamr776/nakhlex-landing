import { useRouter } from 'next/router';
import { useMemo } from 'react';

export const useLocalLink = (url: string) => {
  const { locale, defaultLocale } = useRouter();

  return useMemo(() => {
    return `${locale === defaultLocale ? '' : '/' + locale}${url}`;
  }, [defaultLocale, locale, url]);
};
