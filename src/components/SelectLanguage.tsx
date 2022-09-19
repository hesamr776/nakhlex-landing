import { useState, useMemo } from 'react';
import { useRouter } from 'next/router';

import { i18n, useTranslation } from 'next-i18next';

import { Image, Popover, Radio, Row, Text } from '@nextui-org/react';

export const languages: {
  [key in 'ar' | 'ku' | 'en']: {
    id: 'ar' | 'ku' | 'en';
    label: string;
    disabled: boolean;
    isRTL: boolean;
  };
} = {
  ar: { id: 'ar', label: 'العربیة', disabled: false, isRTL: true },
  ku: { id: 'ku', label: 'کوردی', disabled: true, isRTL: true },
  en: { id: 'en', label: 'English', disabled: false, isRTL: false },
};

export const SelectLanguage = () => {
  const router = useRouter();
  const { t } = useTranslation('common');

  const [language, setLanguage] = useState(i18n?.language);

  const onChange = (selectedLanguage: 'ar' | 'ku' | 'en') => {
    if (selectedLanguage === 'ku') return;

    if (i18n?.language !== selectedLanguage) {
      router.push('/', '/', { locale: selectedLanguage });
    }

    setLanguage(selectedLanguage);
    const html = document.getElementsByTagName('html')[0];
    console.log(html);

    const dir = languages[selectedLanguage].isRTL ? 'rtl' : 'ltr';
    html.setAttribute('dir', dir);
  };

  const selectedValue = useMemo(() => {
    return language === 'ar'
      ? 'العربیة'
      : language === 'ku'
      ? 'کوردی'
      : language === 'en'
      ? 'English'
      : t('language');
  }, [language, t]);

  return (
    <Popover placement="bottom">
      <Popover.Trigger>
        <button style={{ all: 'unset', cursor: 'pointer' }}>
          <Row
            align="center"
            justify="space-between"
            css={{
              border: 'none',
              bg: 'transparent',
              outline: 'transparent',
              pl: '$0',
            }}>
            <Text css={{ m: '$0', ta: 'start' }} size={16}>
              {selectedValue}
            </Text>

            <div style={{ paddingRight: 10, paddingLeft: 10 }}>
              <Image src="/images/Shape.svg" alt="expand nakhlex" />
            </div>
          </Row>
        </button>
      </Popover.Trigger>

      <Popover.Content>
        <Radio.Group
          value={language}
          onChange={value => onChange(value as 'ar' | 'ku' | 'en')}
          css={{ py: '$5' }}>
          {Object.values(languages).map((language, index) => (
            <Row
              align="center"
              justify="space-between"
              onClick={() => onChange(language.id)}
              css={{
                w: 300,
                mx: '$8',
                borderTop: index > 0 ? '1px solid #C0C6CF' : undefined,
              }}
              key={`language-${language.id}`}>
              <Text color={language.disabled ? 'gray' : undefined}>
                {language.label}
              </Text>

              <Radio
                size={'sm'}
                css={{ mt: '$0!important', py: 10 }}
                value={language.id}
                disabled={language.disabled}
                color="primary"></Radio>
            </Row>
          ))}
        </Radio.Group>
      </Popover.Content>
    </Popover>
  );
};
