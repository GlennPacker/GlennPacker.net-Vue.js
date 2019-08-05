<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
      color="#1e90ff"
      dark
    >
      <v-list>
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar color="#1e90ff" dark :clipped-left="clipped" fixed app>
      <v-toolbar-title v-text="title" @click="$router.push('/')" />
      <v-spacer />
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer color="#1e90ff" :fixed="fixed" app dark>
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: true,
      drawer: true,
      fixed: false,
      items: [
        {
          icon: "mdi-account-card-details",
          title: "Clients",
          to: "/client"
        },
        {
          icon: "mdi-vuejs",
          title: "Vue Component",
          to: "/vuebasics"
        },
        {
          icon: "mdi-road",
          title: "Routing",
          to: "/routing"
        },
        {
          icon: "mdi-bus",
          title: "Event Bus",
          to: "/eventbus"
        },
        {
          icon: "mdi-database-refresh",
          title: "Axios",
          to: "/axios"
        },
        {
          icon: "mdi-check-all",
          title: "Cheat Sheet",
          to: "/cheatsheet"
        },
        {
          icon: "mdi-battery-10",
          title: "Vuex Setup",
          to: "/vuexsetup"
        },
        {
          icon: "mdi-battery-50",
          title: "Vuex Actions",
          to: "/vuexactions"
        },
        {
          icon: "mdi-battery",
          title: "Vuex Getters",
          to: "/vuexgetters"
        },
        {
          icon: "mdi-email",
          title: "Contact",
          to: "/contact"
        }
      ],
      miniVariant: false,
      right: false,
      rightDrawer: false,
      title: "GlennPacker.net"
    };
  }
};
</script>
