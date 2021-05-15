<template>
  <section>
    <v-app-bar app flat color="#fff">
      <v-toolbar-title>Moc Tech Life</v-toolbar-title>
    </v-app-bar>

    <SideMenuContent />
  </section>
</template>

<script>
import SideMenuContent from "./SideMenuContent";
export default {
  components: {
    SideMenuContent,
  },
};
</script>