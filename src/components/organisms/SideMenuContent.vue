<template>
  <v-navigation-drawer v-model="drawer" :mini-variant.sync="mini" permanent app>
    <v-list-item>
      <v-btn icon @click.stop="mini = !mini">
        <v-icon v-if="mini">mdi-menu</v-icon>
        <v-icon v-else>mdi-close</v-icon>
      </v-btn>
    </v-list-item>
    <v-list dense nav>
      <v-list-item
        v-for="item in items"
        :key="item.title"
        link
        @click="drawer = !drawer"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <a
            href="#"
            v-scroll-to="item.link"
            >
            <v-list-item-title v-text="item.title" />
          </a>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      mini: true,
      items: [
        { title: "About", icon: "mdi-account", link: "#about" },
        { title: "Work", icon: "mdi-dev-to", link: "#work" },
        { title: "Skill", icon: "mdi-puzzle", link: "#skill" },
      ],
    };
  },
};
</script>
