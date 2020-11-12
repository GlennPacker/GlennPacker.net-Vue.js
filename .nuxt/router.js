import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _13ff3a49 = () => interopDefault(import('..\\pages\\axios.vue' /* webpackChunkName: "pages/axios" */))
const _0d3c4789 = () => interopDefault(import('..\\pages\\cheatSheet.vue' /* webpackChunkName: "pages/cheatSheet" */))
const _4b78ea08 = () => interopDefault(import('..\\pages\\client.vue' /* webpackChunkName: "pages/client" */))
const _330eca33 = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _29a84103 = () => interopDefault(import('..\\pages\\eventBus.vue' /* webpackChunkName: "pages/eventBus" */))
const _98d7784e = () => interopDefault(import('..\\pages\\routing.vue' /* webpackChunkName: "pages/routing" */))
const _5bfa10de = () => interopDefault(import('..\\pages\\VueBasics.vue' /* webpackChunkName: "pages/VueBasics" */))
const _b2064004 = () => interopDefault(import('..\\pages\\vuexActions.vue' /* webpackChunkName: "pages/vuexActions" */))
const _796df249 = () => interopDefault(import('..\\pages\\vuexGetters.vue' /* webpackChunkName: "pages/vuexGetters" */))
const _4e3bb7be = () => interopDefault(import('..\\pages\\vuexSetup.vue' /* webpackChunkName: "pages/vuexSetup" */))
const _e3e46eb6 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/axios",
    component: _13ff3a49,
    name: "axios"
  }, {
    path: "/cheatSheet",
    component: _0d3c4789,
    name: "cheatSheet"
  }, {
    path: "/client",
    component: _4b78ea08,
    name: "client"
  }, {
    path: "/contact",
    component: _330eca33,
    name: "contact"
  }, {
    path: "/eventBus",
    component: _29a84103,
    name: "eventBus"
  }, {
    path: "/routing",
    component: _98d7784e,
    name: "routing"
  }, {
    path: "/VueBasics",
    component: _5bfa10de,
    name: "VueBasics"
  }, {
    path: "/vuexActions",
    component: _b2064004,
    name: "vuexActions"
  }, {
    path: "/vuexGetters",
    component: _796df249,
    name: "vuexGetters"
  }, {
    path: "/vuexSetup",
    component: _4e3bb7be,
    name: "vuexSetup"
  }, {
    path: "/",
    component: _e3e46eb6,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
