/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Link } from '../components/link';
import LogoSvg from '../assets/images/JPLUS.png';
import Image from 'next/image'

export default function Logo({ isSticky, footer, ...props }) {
  return (
    <Link path="/" sx={styles.logo} {...props}>
      <Image src={LogoSvg} height={60} width={250} />
    </Link>
  );
}
const styles = {
  logo: {
    alignItems: 'center',
    cursor: 'pointer',
    display: 'inline-flex',
    svg: {
      height: 'auto',
      width: [128, null, '100%'],
    },
  },
};
