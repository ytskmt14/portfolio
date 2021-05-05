<template>
  <v-navigation-drawer v-model="drawer" :mini-variant.sync="mini" permanent app>
    <v-list-item>
      <v-btn icon @click.stop="mini = !mini">
        <v-icon v-if="mini">mdi-menu</v-icon>
        <v-icon v-else>mdi-close</v-icon>
      </v-btn>
    </v-list-item>
    <v-list dense nav>
      <v-list-item v-for="item in items" :key="item.title" link>
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      mini: true,
      items: [
        { title: "About", icon: "mdi-account" },
        { title: "Work", icon: "mdi-dev-to" },
        { title: "Career", icon: "mdi-history" },
        { title: "Contact", icon: "mdi-account-box" },
      ],
    };
  },
};
</script>
