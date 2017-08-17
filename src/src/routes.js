import Home from 'components/Home/home';
import Dev from 'components/Dev/dev';
import Contact from 'components/Contact/contact';
import Comp from 'components/Component/component';
import Rout from 'components/Routing/routing';

import Posts from 'components/Posts/posts';
import Post from 'components/Posts/post';
import CreatePost from 'components/Posts/createPost';
import EditPost from 'components/Posts/editPost';
import NotFound from 'components/NotFound/notFound';

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/component',
    component: Comp
  },
  {
    path: '/dev',
    component: Dev
  },
  {
    path: '/contact',
    component: Contact
  },
  {
    path: '/routing',
    component: Rout
  },
  {
    path: '/posts',
    component: Posts
  },
  {
    path: '/posts/create',
    name: 'createPost',
    component: CreatePost
  },
  {
    path: '/post/:id',
    name: 'post',
    component: Post
  },
  {
    path: '/post/:id/edit',
    name: 'editPost',
    component: EditPost
  },
  {
    path: '*',
    component: NotFound
  }
];

export default routes;
