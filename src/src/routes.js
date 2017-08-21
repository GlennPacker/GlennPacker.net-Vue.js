import Home from 'components/Home/home';
import vuejs from 'components/VueJs/vuejs';
import Contact from 'components/Contact/contact';
import NotFound from 'components/NotFound/notFound';

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/vuejs',
    component: vuejs
  },
  {
    path: '/contact',
    component: Contact
  },
  {
    path: '*',
    component: NotFound
  }
];

export default routes;
