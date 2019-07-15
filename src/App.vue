<template>
  <v-app>
    <div class="hidden-sm-and-down">
      <navigation />

      <div class="main-content" style="padding-left:200px">
        <header>
          <a href="\" class="logo">
            Glenn
            <span>Packer</span>.net
          </a>
        </header>

        <router-view />
      </div>
    </div>

    <div class="hidden-md-and-up main-content">
      <header>
        <a href="\" class="logo">
          Glenn
          <span>Packer</span>.net
        </a>
      </header>
      <router-view />
    </div>

    <v-footer>
      <v-layout row wrap class="footer-container">
        <v-container>
          <v-layout>
            <v-flex xs4>
              <a href="tel:07568400965">
                <font-awesome-icon icon="phone" />&nbsp; 07568400965
              </a>
              <br />
              <a href="mailto:glenn.packer@glennpacker.net">
                <font-awesome-icon icon="envelope" />&nbsp; Glenn.Packer@GlennPacker.net
              </a>
            </v-flex>
            <v-flex xs4>
              &copy; 2018 -
              <a href="http://www.glennpacker.net" target="new">GlennPacker.net</a>
            </v-flex>
            <v-flex xs4>
              <a href="http://www.linkedin.com/pub/glenn-packer/22/186/107">
                <i class="fa fa-linkedin-square"></i>
              </a> &nbsp;
              <a href="https://plus.google.com/110379359463069164458">
                <i class="fa fa-google-plus"></i>
              </a> &nbsp;
              <a href="https://github.com/GlennPacker">
                <i class="fa fa-github"></i>
              </a> &nbsp;
              <a href="https://www.facebook.com/GlennPackerNet">
                <i class="fa fa-facebook-official"></i>
              </a> &nbsp;
            </v-flex>
          </v-layout>
        </v-container>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
import navigation from "./components/Navigation/navigation";
export default {
  name: "App",
  components: { navigation }
};
</script>

<style>
@font-face {
  font-family: "logofont";
  src: url("./assets/Montez-Regular.ttf") format("truetype");
}

#app {
  background-color: #fff;
  background: #fff;
}

header .logo {
  padding-top: 300px;
  font-family: logofont;
  font-size: 60px;
  font-weight: bold;
  color: #505977 !important;
  text-decoration: none !important;
}

header .logo span {
  color: #d00b01;
}

.v-toolbar__title {
  font-size: 14px !important;
  padding-bottom: 5px;
}

footer {
  background: #fff !important;
}
.footer-container {
  height: 100px;
  background-color: #d00b01;
  z-index: 999;
  position: fixed;
  bottom: 0;
  width: 100%;
  color: #fff;
}
.footer-container a {
  color: #fff;
  text-decoration: none;
}

.main-content {
  padding-bottom: 50px;
}

header {
  padding-left: 150px;
}
</style>