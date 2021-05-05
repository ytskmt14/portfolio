<template>
  <v-app>
    <v-app-bar app flat color="#fff">
      <HeaderContent />
    </v-app-bar>
    <v-main>
      <SideMenuContent />
      <v-container>
        <MainContent />
      </v-container>
    </v-main>
    <v-footer app padless color="#fff">
      <FooterContent />
    </v-footer>
  </v-app>
</template>

<script>
import FooterContent from "./components/organisms/FooterContent";
import HeaderContent from "./components/organisms/HeaderContent";
import SideMenuContent from "./components/organisms/SideMenuContent";
import MainContent from "./pages/MainContent";

export default {
  name: "App",

  components: {
    FooterContent,
    HeaderContent,
    SideMenuContent,
    MainContent,
  },

  data() {
    return {
    };
  },
};
</script>

<style>
#app {
  background-color: #fff;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  color: #6a696c;
}
</style>