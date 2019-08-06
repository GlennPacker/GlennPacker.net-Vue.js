<template>
  <v-container layout column>
    <v-layout row>
      <v-flex xs6>
        <h3>Nuxt Routing</h3>With Nuxt the routing table is automatically built automatically from the pages directory.
        Parameters are done via convetion of directory to be the route name and the parameter as the filename.
      </v-flex>
      <v-flex xs6 class="pl-3">
        <h4>Using Nuxt Routing</h4>
        <code>&lt;nuxt-link to="/component">Link Text&lt;/nuxt-link></code>
      </v-flex>
    </v-layout>

    <v-layout row class="pt-3">
      <v-flex xs6>
        <h3>Vue JS - Example routing</h3>
        <p>The Basic routing table</p>
        <code>
          import Home from 'components/Home/home';
          import Contact from 'components/Contact/contact';
          import NotFound from 'components/NotFound/notFound';
          const routes = [
          &nbsp; {
          &nbsp; &nbsp; name: 'home',
          &nbsp; &nbsp; path: '/',
          &nbsp; &nbsp; component: Home
          &nbsp; },
          &nbsp; {
          &nbsp; &nbsp; name: 'contact',
          &nbsp; &nbsp; path: '/contact',
          &nbsp; &nbsp; component: Contact
          &nbsp; },
          &nbsp; {
          &nbsp; &nbsp; path: '*',
          &nbsp; &nbsp; component: NotFound
          &nbsp; }
          ];
          export default routes;
        </code>
      </v-flex>
      <v-flex xs6 class="pl-3">
        <h4>Using the Routing</h4>

        <p>simply use the href or alternatively in the code use:</p>
        <code>$router.push('home');</code>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  name: "routing",
  head() {
    return {
      title: "Vue Router",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "glennpacker.net vue router and routing"
        }
      ]
    };
  }
};
</script>


