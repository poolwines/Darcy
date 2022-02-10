import {parseCookies} from 'nookies'

  const cookieuser = parseCookies()
  const user =  cookieuser.clientEmail 
export default [
  {
    path: '/',
    label: 'Home',
  },
  {
    path: '/about',
    label: 'About',
  },
  {
    path: '/contact',
    label: 'Contact',
  },
  {
    path: '/donation',
    label: 'Donate',
  },
  {
    path: ( user? '/api/logout' : 'login' ),
    label: ( user? 'Logout' : 'Login' ),
  },
];
