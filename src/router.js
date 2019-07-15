import Vue from "vue";
import Router from "vue-router";
import Home from "./components/Home/home";
import Client from "./components/Client/client";
import Contact from "./components/Contact/contact";
import VueBasics from "./components/VueBasics/VueBasics";
import routing from "./components/Routing/routing";
import componentbasics from "./components/ComponentBasics/componentBasics";
import axios from "./components/Axios/axios";
import NotFound from "./components/NotFound/notFound";

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
      path: "*",
      component: NotFound
    }
  ]
});
