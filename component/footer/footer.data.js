import facebook from '../../assets/images/icons/facebook.png';
import twitter from '../../assets/images/icons/twitter.png';

export const menuItems = [
  {
    id: 2,
    title: 'About Us',
    items: [
      {
        path: '/contact',
        label: 'Customer Support',
      },
      {
        path: '/about',
        label: 'About Us',
      },

    ],
  },
  {
    id: 3,
    title: 'Our Information',
    items: [
      {
        path: '/disclaimer',
        label: 'Disclaimer',
      },
      {
        path: '/copyright',
        label: 'Copyright',
      },
    ],
  },
  {
    id: 5,
    title: 'Connect',
    items: [
      {
        path: 'www.facebook.com',
        icon: facebook,
        label: 'Facebook',
      },
      {
        path: 'www.twitter.com',
        icon: twitter,
        label: 'Twitter',
      },
    ],
  },
];

export const footerNav = [
  {
    path: '#!',
    label: 'Home',
  },
  {
    path: '#!',
    label: 'Advertise',
  },
  {
    path: '#!',
    label: 'Supports',
  },
  {
    path: '#!',
    label: 'Marketing',
  },
  {
    path: '#!',
    label: 'FAQ',
  },
];
