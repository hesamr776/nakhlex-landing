import { Grid, Image, Link, Text } from '@nextui-org/react';

import { useTranslation } from 'next-i18next';

import { useEffect, useState } from 'react';
import { useLocalLink } from '../hooks/useLocalLink';

const expireAt = new Date('Fri Nov 11 2022 00:00:00 GMT+0000').getTime(); // 31 october 2022

export const KYCTimer = () => {
  const { timer } = useTimer();

  return (
    <Link href={useLocalLink('/#kyc')} css={{ w: '100%' }}>
      <Grid.Container>
        <Grid xs={12} sm={0}>
          <MobileTimer timer={timer} />
        </Grid>

        <Grid xs={0} sm={12}>
          <DesktopTimer timer={timer} />
        </Grid>
      </Grid.Container>
    </Link>
  );
};

const useTimer = () => {
  const [timer, setTimer] = useState('');

  useEffect(() => {
    const updateTime = setInterval(() => {
      const now = new Date().getTime();

      const difference = expireAt - now;
      if (difference <= 0) {
        clearInterval(updateTime);

        setTimer('');
        return;
      }

      const newDays = Math.floor(difference / (1000 * 60 * 60 * 24));
      const newHours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const newMinutes = Math.floor(
        (difference % (1000 * 60 * 60)) / (1000 * 60),
      );
      const newSeconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimer(
        `${
          newDays ? newDays + 'd ' : ''
        }${newHours}:${newMinutes}:${newSeconds}`,
      );
    }, 1000);

    return () => {
      clearInterval(updateTime);
    };
  }, [timer]);

  return { timer };
};

const MobileTimer = ({ timer }: { timer: string }) => {
  const { t } = useTranslation('common');

  return (
    <>
      <Image
        src="/images/kycTimer-mobile.png"
        alt="Nakhlex logo"
        height={54}
        width="100%"
        objectFit="cover"
      />

      <Grid
        css={{
          position: 'absolute',
          top: 10,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}
        style={{ left: '18vw', right: '2vw' }}>
        <div>
          <Text
            color="white"
            weight="bold"
            size={16}
            css={{ lineHeight: '$xs' }}>
            {t('kycHeader')}
          </Text>

          <Text
            color="white"
            size={11}
            css={{
              lineHeight: '$xs',
              ml: 'auto',
              textAlign: 'end',
            }}>
            {t('kycSubheader')}
          </Text>
        </div>

        {timer && (
          <Grid
            css={{
              bg: '$blue700',
              height: 34,
              minWidth: 100,
              px: '$4',
              ml: '$8',
              borderRadius: 6,
              pt: '$2',
            }}
            alignItems="center"
            justify="center">
            <Text
              color="white"
              weight="bold"
              size={14}
              css={{ m: '$0', ta: 'center' }}>
              {timer}
            </Text>
          </Grid>
        )}
      </Grid>
    </>
  );
};

const DesktopTimer = ({ timer }: { timer: string }) => {
  const { t } = useTranslation('common');

  return (
    <>
      <Image
        src="/images/kycTimer.png"
        alt="Nakhlex logo"
        height={54}
        width="100%"
        objectFit="cover"
      />

      <Grid
        style={{ left: '32vw' }}
        css={{
          position: 'absolute',
          top: 6,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Text color="white" size={20} weight="bold" css={{ lineHeight: '2' }}>
          {t('kycHeader')}
        </Text>

        <Text
          color="white"
          size={14}
          css={{ lineHeight: '$xs', mr: '$12', ml: '$16' }}>
          {t('kycSubheader')}
        </Text>

        {timer && (
          <Grid
            css={{
              bg: '$blue700',
              height: 34,
              px: '$4',
              borderRadius: 6,
              pt: '$2',
            }}>
            <Text color="white" weight="bold" size={14} css={{ m: '$0' }}>
              {timer}
            </Text>
          </Grid>
        )}
      </Grid>
    </>
  );
};
