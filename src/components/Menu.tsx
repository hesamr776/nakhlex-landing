import { useTranslation } from 'next-i18next';

import {
  Button,
  Modal,
  useModal,
  Image,
  Row,
  Text,
  Link,
  Col,
} from '@nextui-org/react';

import { SelectLanguage } from './SelectLanguage';
import { Socials } from './Socials';

import { useLocalLink } from '../hooks/useLocalLink';

export const Menu = () => {
  const { setVisible, bindings } = useModal();
  const { t } = useTranslation('common');

  return (
    <>
      <Button auto light onClick={() => setVisible(true)}>
        <Image alt="Nakhlex menu" src="/menu.png" width={20} height={20} />
      </Button>

      <Modal
        scroll
        fullScreen
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        {...bindings}>
        <Modal.Header>
          <Row justify="space-between" css={{ pt: '$4' }}>
            <Link href={useLocalLink('/')}>
              <Image
                src="/logo.png"
                alt="Nakhlex logo"
                height={62}
                width={160}
              />
            </Link>

            <Button
              auto
              light
              onClick={() => setVisible(false)}
              css={{ p: '$0' }}>
              <Image
                src="/close.png"
                alt="Nakhlex close"
                height={32}
                width={32}
              />
            </Button>
          </Row>
        </Modal.Header>

        <Modal.Body css={{ pt: '$16' }}>
          <SelectLanguage />

          <Link
            href={useLocalLink('/aboutUs')}
            color="text"
            css={{ my: '$12' }}>
            {t('aboutUs')}
          </Link>

          {/* <Link href={useLocalLink('/FAQ')} color="text" css={{ mb: '$12' }}>
            {t('FAQ')}
          </Link> */}

          <Link
            href={useLocalLink('/contactUs')}
            color="text"
            css={{ mb: '$12' }}>
            {t('contactUs')}
          </Link>

          <Link
            href={useLocalLink('/legalAndPrivacy')}
            color="text"
            css={{ mb: '$12' }}>
            {t('legalAndPrivacy')}
          </Link>
        </Modal.Body>

        <Modal.Footer>
          <Col
            css={{
              ai: 'center',
              d: 'flex',
              fd: 'column',
            }}>
            <Socials large />

            <Text i color="$gray600">
              {t('madeInIraq')}
            </Text>
          </Col>
        </Modal.Footer>
      </Modal>
    </>
  );
};
