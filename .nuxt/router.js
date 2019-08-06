import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _0a6d22fa = () => interopDefault(import('..\\pages\\axios.vue' /* webpackChunkName: "pages_axios" */))
const _18a8b0e2 = () => interopDefault(import('..\\pages\\cheatSheet.vue' /* webpackChunkName: "pages_cheatSheet" */))
const _3df53d0e = () => interopDefault(import('..\\pages\\client.vue' /* webpackChunkName: "pages_client" */))
const _dfc65026 = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages_contact" */))
const _6e5bea89 = () => interopDefault(import('..\\pages\\eventBus.vue' /* webpackChunkName: "pages_eventBus" */))
const _10a25193 = () => interopDefault(import('..\\pages\\routing.vue' /* webpackChunkName: "pages_routing" */))
const _7e1c6838 = () => interopDefault(import('..\\pages\\vueBasics.vue' /* webpackChunkName: "pages_vueBasics" */))
const _e30cfe90 = () => interopDefault(import('..\\pages\\vuexActions.vue' /* webpackChunkName: "pages_vuexActions" */))
const _60ea9303 = () => interopDefault(import('..\\pages\\vuexGetters.vue' /* webpackChunkName: "pages_vuexGetters" */))
const _c0058210 = () => interopDefault(import('..\\pages\\vuexSetup.vue' /* webpackChunkName: "pages_vuexSetup" */))
const _74d7fcdf = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

if (process.client) {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual'

    // reset scrollRestoration to auto when leaving page, allowing page reload
    // and back-navigation from other pages to use the browser to restore the
    // scrolling position.
    window.addEventListener('beforeunload', () => {
      window.history.scrollRestoration = 'auto'
    })

    // Setting scrollRestoration to manual again when returning to this page.
    window.addEventListener('load', () => {
      window.history.scrollRestoration = 'manual'
    })
  }
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected and scrollToTop is not explicitly disabled
  if (
    to.matched.length < 2 &&
    to.matched.every(r => r.components.default.options.scrollToTop !== false)
  ) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: decodeURI('/'),
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/axios",
      component: _0a6d22fa,
      name: "axios"
    }, {
      path: "/cheatSheet",
      component: _18a8b0e2,
      name: "cheatSheet"
    }, {
      path: "/client",
      component: _3df53d0e,
      name: "client"
    }, {
      path: "/contact",
      component: _dfc65026,
      name: "contact"
    }, {
      path: "/eventBus",
      component: _6e5bea89,
      name: "eventBus"
    }, {
      path: "/routing",
      component: _10a25193,
      name: "routing"
    }, {
      path: "/vueBasics",
      component: _7e1c6838,
      name: "vueBasics"
    }, {
      path: "/vuexActions",
      component: _e30cfe90,
      name: "vuexActions"
    }, {
      path: "/vuexGetters",
      component: _60ea9303,
      name: "vuexGetters"
    }, {
      path: "/vuexSetup",
      component: _c0058210,
      name: "vuexSetup"
    }, {
      path: "/",
      component: _74d7fcdf,
      name: "index"
    }],

    fallback: false
  })
}
