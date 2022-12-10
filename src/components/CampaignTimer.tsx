import { Grid, Image, Link, Text } from '@nextui-org/react';

import { useEffect, useState } from 'react';
import { useLocalLink } from '../hooks/useLocalLink';

const expireAt = new Date('Sun Dec 18 2022 00:00:00 GMT+0000').getTime(); // 18 december 2022

export const CampaignTimer = () => {
  const { timer } = useTimer();

  return (
    <Link href={useLocalLink('/#campaign')} css={{ w: '100%' }}>
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
  return (
    <>
      <Image
        src="/images/campaignTimer-mobile.jpg"
        alt="Nakhlex logo"
        height={60}
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
        style={{ left: '0vw', right: '0vw' }}>
        {timer && (
          <Grid
            css={{
              height: 34,
              minWidth: 100,
              px: '$4',
              ml: '$8',
              pt: '$2',
              borderRadius: 6,
              border: '$white 1px solid',
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
  return (
    <>
      <Image
        src="/images/campaignTimer.jpg"
        alt="Nakhlex logo"
        height={60}
        width="100%"
        objectFit="cover"
      />

      <Grid
        style={{ left: 'calc(575px + 0vw)', right: '0vw' }}
        css={{
          position: 'absolute',
          top: 6,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
        {timer && (
          <Grid
            css={{
              height: 34,
              minWidth: 90,
              mt: '$3',
              px: '$4',
              pt: '$2',
              borderRadius: 6,
              border: '$white 1px solid',
            }}>
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
