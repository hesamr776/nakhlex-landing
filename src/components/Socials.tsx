import { Row, Image, Link } from '@nextui-org/react';

export const Socials = ({ large }: { large?: boolean }) => (
  <Row
    css={{ w: large ? 216 : 120, mt: 80, mb: 16 }}
    align="center"
    justify="space-between"
  >
    <Link href="https://www.facebook.com/Nakhlx" target="_blank">
      <Image
        src="/images/facebook.png"
        alt="nakhlex facebook"
        width={20}
        height={20}
        objectFit="cover"
      />
    </Link>

    <Link
      href="https://www.youtube.com/channel/UCChnrcQIziod2XcxVO8vtsQ"
      target="_blank"
    >
      <Image
        src="/images/youtube.png"
        alt="nakhlex facebook"
        width={26}
        height={20}
        objectFit="cover"
      />
    </Link>

    <Link href="https://twitter.com/NNakhlex" target="_blank">
      <Image
        src="/images/telegram.png"
        alt="nakhlex facebook"
        width={20}
        height={20}
        objectFit="cover"
      />
    </Link>

    <Link href="https://www.instagram.com/nakhlex_official/" target="_blank">
      <Image
        src="/images/instagram.png"
        alt="nakhlex facebook"
        width={20}
        height={20}
        objectFit="cover"
      />
    </Link>
  </Row>
);
