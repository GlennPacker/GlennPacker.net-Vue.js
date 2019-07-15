<template>
  <v-container layout column>
    <h3>Vue JS - Example routing</h3>

    <div>
      <p>
        import Home from 'components/Home/home';
        <br />import Contact from 'components/Contact/contact';
        <br />import NotFound from 'components/NotFound/notFound';
        <br />
        <br />const routes = [
        <br />&nbsp; {
        <br />&nbsp; &nbsp; name: 'home',
        <br />&nbsp; &nbsp; path: '/',
        <br />&nbsp; &nbsp; component: Home
        <br />&nbsp; },
        <br />&nbsp; {
        <br />&nbsp; &nbsp; name: 'contact',
        <br />&nbsp; &nbsp; path: '/contact',
        <br />&nbsp; &nbsp; component: Contact
        <br />&nbsp; },
        <br />&nbsp; {
        <br />&nbsp; &nbsp; path: '*',
        <br />&nbsp; &nbsp; component: NotFound
        <br />&nbsp; }
        <br />];
        <br />export default routes;
        <br />
      </p>
    </div>

    <h4>Using The Route</h4>

    <p>simply use the href or alternatively in the code use:</p>
    <code>$router.push('home');</code>
  </v-container>
</template>
<script>
export default {
  name: "routing"
};
</script>


