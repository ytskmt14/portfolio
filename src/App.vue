<template>
  <v-app>
    <HeaderContent />
    <v-content>
      <v-container>
        <MainContent />
      </v-container>
    </v-content>
    <v-footer app padless color="#fff">
      <FooterContent />
    </v-footer>
  </v-app>
</template>

<script>
import FooterContent from "./components/organisms/FooterContent";
import HeaderContent from "./components/organisms/HeaderContent";
import MainContent from "./pages/MainContent";

export default {
  name: "App",

  components: {
    FooterContent,
    HeaderContent,
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

a {
  color: #6a696c;
  text-decoration: none;
}

</style>