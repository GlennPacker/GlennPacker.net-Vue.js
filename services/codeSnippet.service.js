
export const loadRoutingSnippets = () => {
    return new Promise(function(resolve, reject) {
        resolve({
            routing1: `<nuxt-link to="/component">Link Text</nuxt-link>`,
            routing2:
`import Home from 'components/Home/home';
import Contact from 'components/Contact/contact';
import NotFound from 'components/NotFound/notFound';
const routes = [{
    name: 'home',
    path: '/',
    component: Home
}, {
    name: 'contact',
    path: '/contact',
    component: Contact
}, {
    path: '*',
    component: NotFound
}];

export default routes;`,
        routing3: `$router.push('home');`
        });
    })
}
