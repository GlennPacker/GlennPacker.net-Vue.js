
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

export const loadEventBusSnippets = () => {
    return new Promise(function(resolve, reject) {
        resolve({
            eventBus1:
`import Vue from 'vue';
export const EventBus = new Vue();`,
            eventBus2:
`   import { EventBus } from './event-bus.js';

    export default {
        data() {
            return {
                someData: 'payload'
            }
        }
        methods: {
            sendEvent() {
                EventBus.$emit('i-got-clicked', this.someData); // i-got-clicked = event name
            }
        }
    }`,
            eventBus3:
`   import { EventBus } from './event-bus.js';
    export default {
        created() {
            // Listen for the i-got-clicked event and its data.
            EventBus.$on('i-got-clicked', data => {
                console.log(data);
            });
        }
    }`
        });
    })
}