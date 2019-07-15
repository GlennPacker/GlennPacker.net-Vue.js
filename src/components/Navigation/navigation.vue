<template>
  <v-navigation-drawer permanent width="200" app class="v-navigation-drawer">
    <v-layout row>
      <v-flex>
        <v-card class="no-shaddow">
          <v-list dense class="pt-3">
            <template v-for="item in items">
              <v-list-tile
                v-if="!item.items"
                :key="item.title"
                @click="navigate(item)"
                class="pb-3"
              >
                <v-list-tile-action>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-tile-action>

                <v-list-tile-content>
                  <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>

              <v-list-group
                v-if="item.items"
                :key="item.title"
                :value="false"
                class="pb-3"
                :prepend-icon="item.icon"
              >
                <v-list-tile slot="activator">
                  <v-list-tile-title>{{item.title}}</v-list-tile-title>
                </v-list-tile>

                <v-list-tile
                  v-for="item in item.items"
                  :key="item.title"
                  class="pt-3"
                  @click="navigate(item)"
                >
                  <v-list-tile-action>
                    <v-icon>{{ item.icon }}</v-icon>
                  </v-list-tile-action>

                  <v-list-tile-content>
                    <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list-group>
            </template>
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "navigation",
  data() {
    return {
      items: [
        { title: "Clients", icon: "recent_actors", route: "clients" },
        {
          title: "Wiki",
          icon: "format_align_justify",
          items: [
            { title: "Basics", icon: "recent_actors", route: "vue" },
            { title: "Component", icon: "view_carousel", route: "component" },
            { title: "Routing", icon: "navigation", route: "routing" },
            { title: "Axios", icon: "kitchen", route: "axios" }
          ]
        },
        { title: "Contact", icon: "mail_outline", route: "contact" }
      ]
    };
  },
  methods: {
    navigate(item) {
      this.$router.push({ name: item.route });
    }
  }
};
</script>

<style>
.no-shaddow {
  webkit-box-shadow: none !important;
  box-shadow: none !important;
}
</style>