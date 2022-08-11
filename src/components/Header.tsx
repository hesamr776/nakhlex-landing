import Head from 'next/head';
import {
  Col,
  Row,
  Text,
  Button,
  Dropdown,
  Grid,
  Image,
  Link,
} from '@nextui-org/react';
import { useMemo, useState } from 'react';
import { i18n, useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

export const Header = () => {
  const { t } = useTranslation();
  const { route } = useRouter();

  return (
    <header
      style={{
        marginBottom: 'auto',
        width: '100%',
        paddingTop: 8,
        paddingRight: 16,
      }}
    >
      <Head>
        <title>Nakhlex {route.replace('/', ' | ')}</title>
      </Head>

      <Row align="center" justify="space-between">
        <Grid xs={9} sm={4}>
          <Link href="/">
            <Image src="/logo.png" alt="Nakhlex logo" height={40} width={120} />
          </Link>
        </Grid>

        <Grid xs={2} sm={0}>
          <Image alt="Nakhlex menu" src="/menu.png" width={20} height={20} />
        </Grid>

        <Grid xs={0} sm={8} justify="flex-end">
          <Col css={{ mw: 600 }}>
            <Row justify="space-between" align="center">
              <Text>{t('features')}</Text>

              <Text>{t('market')}</Text>

              <SelectLanguage />

              <Button bordered color="primary">
                {t('downloadApp')}
              </Button>
            </Row>
          </Col>
        </Grid>
      </Row>
    </header>
  );
};

function SelectLanguage() {
  const [selected, setSelected] = useState<Set<string | number>>(
    new Set(['language']),
  );
  const router = useRouter();
  const { t } = useTranslation();

  const selectedValue = useMemo(() => {
    return selected.has('ar')
      ? 'العربیة'
      : selected.has('en')
      ? 'English'
      : t('language');
  }, [selected, t]);

  return (
    <Dropdown>
      <Dropdown.Button light id="selectLanguage">
        <Text>{selectedValue}</Text>
      </Dropdown.Button>

      <Dropdown.Menu
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selected}
        onSelectionChange={keys => {
          console.log(keys);
          if (keys === 'all') {
            return;
          }
          const selectedLanguage = keys.has('ar') ? 'ar' : 'en';

          console.log(i18n?.language, selectedLanguage);

          if (i18n?.language !== selectedLanguage) {
            router.push('/', '/', { locale: selectedLanguage });
          }

          setSelected(keys);
        }}
        disabledKeys={['ku']}
        aria-label="languages"
      >
        <Dropdown.Item key="ar">
          <Row align="center" justify="space-between" id="lang-item-ar">
            <Text>العربیة</Text>
            {/* <Radio value="ar" color="primary"></Radio> */}
          </Row>
        </Dropdown.Item>
        <Dropdown.Item key="ku" withDivider>
          <Row align="center" justify="space-between" id="lang-item-ku">
            <Text color="gray">کوردی</Text>
            {/* <Radio value="ku" color="primary" disabled></Radio> */}
          </Row>
        </Dropdown.Item>
        <Dropdown.Item key="en" withDivider>
          <Row align="center" justify="space-between" id="lang-item-en">
            <Text>English</Text>
            {/* <Radio value="en" color="primary"></Radio> */}
          </Row>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
