<template>
  <v-row>
    <v-col cols="12">
      <AboutContent />
    </v-col>
    <v-divider />
    <v-col cols="12">
      <WorkContent />
    </v-col>
    <v-divider />
    <v-col cols="12">
      <SkillContent />
    </v-col>
    <v-divider />
    <v-col cols="12">
      <ContactContent />
    </v-col>
  </v-row>
</template>

<script>
import AboutContent from "../components/organisms/MainContentAbout";
import WorkContent from "../components/organisms/MainContentWork";
import SkillContent from "../components/organisms/MainContentSkill";
import ContactContent from "../components/organisms/MainContentContact";

export default {
  components: {
    AboutContent,
    WorkContent,
    SkillContent,
    ContactContent,
  },
  data() {
    return {}
  },
};
</script>