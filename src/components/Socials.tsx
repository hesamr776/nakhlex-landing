import { Row, Image, Link } from '@nextui-org/react';

export const Socials = ({ large }: { large?: boolean }) => (
  <Row
    css={{ w: large ? 216 : 120, mt: 80, mb: 16 }}
    align="center"
    justify="space-between">
    <Link href="https://www.facebook.com/nakhlexchange" target="_blank">
      <Image
        src="/images/facebook.jpg"
        alt="nakhlex facebook"
        width={20}
        height={20}
        objectFit="cover"
      />
    </Link>

    <Link
      href="https://www.youtube.com/channel/UCChnrcQIziod2XcxVO8vtsQ"
      target="_blank">
      <Image
        src="/images/youtube.jpg"
        alt="nakhlex youtube"
        width={28}
        height={20}
        objectFit="cover"
      />
    </Link>

    <Link href="https://t.me/Nakhlexchange" target="_blank">
      <Image
        src="/images/telegram.jpg"
        alt="nakhlex telegram"
        width={20}
        height={20}
        objectFit="cover"
      />
    </Link>

    <Link href="http://instagram.com/nakhlex_change" target="_blank">
      <Image
        src="/images/instagram.jpg"
        alt="nakhlex instagram"
        width={20}
        height={20}
        objectFit="cover"
      />
    </Link>

    <Link href="https://twitter.com/Nakhlexchange" target="_blank">
      <Image
        src="/images/twitter.jpg"
        alt="nakhlex twitter"
        width={25}
        height={20}
        objectFit="cover"
      />
    </Link>
  </Row>
);
