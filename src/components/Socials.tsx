import { Col, Image, Button, Text } from '@nextui-org/react';
import { useTranslation } from 'next-i18next';

export const Socials = ({ large }: { large?: boolean }) => {
  const { t } = useTranslation();

  return (
    <Col css={{ width: 242, mt: large ? 48 : 12, mb: 16 }}>
      <Button
        css={{ width: 242, mb: '$8', borderRadius: 8 }}
        iconRight={
          <Image
            src="/images/whatsapp.png"
            alt="nakhlex whatsapp"
            width={20}
            height={20}
            objectFit="cover"
          />
        }
      >
        <Text weight="semibold" color="white" style={{ paddingRight: 16 }}>
          {t('SocialActionHint')}
        </Text>
      </Button>

      <Button
        bordered
        css={{ width: 242, borderRadius: 8, borderWidth: 1 }}
        iconRight={
          <Image
            src="/images/facebook.png"
            alt="nakhlex facebook"
            width={20}
            height={20}
            objectFit="cover"
          />
        }
      >
        <Text weight="semibold" color="primary" style={{ paddingRight: 16 }}>
          {t('SocialActionHint')}
        </Text>
      </Button>
    </Col>
  );
};
