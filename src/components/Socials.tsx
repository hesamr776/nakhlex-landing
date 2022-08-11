import { Row, Image, Link } from '@nextui-org/react';

export const Socials = () => (
  <Row css={{ w: 110, mt: 100 }} align="center">
    <Link href="https://www.instagram.com/nakhlex_official/" target="_blank">
      <Image
        src="/facebook.png"
        alt="nakhlex facebook"
        width={20}
        height={20}
        objectFit="cover"
      />
    </Link>

    <Link href="https://www.instagram.com/nakhlex_official/" target="_blank">
      <Image
        src="/youtube.png"
        alt="nakhlex facebook"
        width={26}
        height={20}
        objectFit="cover"
      />
    </Link>

    <Link href="https://www.instagram.com/nakhlex_official/" target="_blank">
      <Image
        src="/telegram.png"
        alt="nakhlex facebook"
        width={20}
        height={20}
        objectFit="cover"
      />
    </Link>

    <Link href="https://www.instagram.com/nakhlex_official/" target="_blank">
      <Image
        src="/instagram.png"
        alt="nakhlex facebook"
        width={20}
        height={20}
        objectFit="cover"
      />
    </Link>
  </Row>
);
