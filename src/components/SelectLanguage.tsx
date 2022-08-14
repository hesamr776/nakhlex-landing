import { useState, useMemo } from 'react';
import { useRouter } from 'next/router';

import { i18n, useTranslation } from 'next-i18next';

import { Image, Popover, Radio, Row, Text } from '@nextui-org/react';

const languages = [
  { id: 'ar', label: 'العربیة', disabled: false },
  { id: 'ku', label: 'کوردی', disabled: true },
  { id: 'en', label: 'English', disabled: false },
];

export const SelectLanguage = () => {
  const router = useRouter();
  const { t } = useTranslation();
  const [checked, setChecked] = useState(i18n?.language);

  const onChange = (selectedLanguage: string) => {
    if (selectedLanguage === 'ku') return;

    if (i18n?.language !== selectedLanguage) {
      router.push('/', '/', { locale: selectedLanguage });
    }

    setChecked(selectedLanguage);
  };

  const selectedValue = useMemo(() => {
    return checked === 'ar'
      ? 'العربیة'
      : checked === 'ku'
      ? 'کوردی'
      : checked === 'en'
      ? 'English'
      : t('language');
  }, [checked, t]);

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
              <Image src="/Shape.svg" alt="expand nakhlex" />
            </div>
          </Row>
        </button>
      </Popover.Trigger>

      <Popover.Content>
        <Radio.Group value={checked} onChange={onChange} css={{ py: '$5' }}>
          {languages.map((language, index) => (
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
