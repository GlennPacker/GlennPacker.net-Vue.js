import Vue from "vue";
import Router from "vue-router";
import Home from "./components/Home/home";
import CheatSheet from "./components/CheatSheet/cheatSheet";
import Client from "./components/Client/client";
import Contact from "./components/Contact/contact";
import EventBus from "./components/EventBus/eventBus";
import routing from "./components/Routing/routing";
import componentbasics from "./components/ComponentBasics/componentBasics";
import axios from "./components/Axios/axios";
import NotFound from "./components/NotFound/notFound";
import VueBasics from "./components/VueBasics/VueBasics";
import VuexActions from "./components/Vuex/vuexActions";
import VuexGetters from "./components/Vuex/vuexGetters";
import VuexSetup from "./components/VuexSetup/vuexSetup";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: Home
    },
    {
      name: "axios",
      path: "/axios",
      component: axios
    },
    {
      name: "cheatSheet",
      path: "/cheat-sheet",
      component: CheatSheet
    },
    {
      name: "contact",
      path: "/contact",
      component: Contact
    },
    {
      name: "clients",
      path: "/clients",
      component: Client
    },
    {
      name: "eventBus",
      path: "/event-bus",
      component: EventBus
    },
    {
      name: "routing",
      path: "/routing",
      component: routing
    },
    {
      name: "component",
      path: "/component",
      component: componentbasics
    },
    {
      name: "vue",
      path: "/vue",
      component: VueBasics
    },
    {
      name: "vuexActions",
      path: "/vuex-actions",
      component: VuexActions
    },
    {
      name: "vuexGetters",
      path: "/vuex-getters",
      component: VuexGetters
    },
    {
      name: "vuexSetup",
      path: "/vuex-setup",
      component: VuexSetup
    },
    {
      path: "*",
      component: NotFound
    }
  ]
});
