<template>
  <v-row>
    <v-col
      v-for="photo in photos"
      :key="photo.id"
      class="d-flex child-flex"
      cols="3"
    >
      <v-img 
        :src="photo.src"
        class="grey lighten-2"
        max-height="360px"
        >
        <template>
          <v-card
            class="d-flex align-end justify-end white--text text-h6 mb-6"
            flat
            height="100%"
            tile
            color="rgba(0, 0, 0, 0)"
          >
            <span class="mr-5">{{ photo.title }}</span>
          </v-card>
        </template>
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      photos: [
        {
          id: 1,
          src: require("@/assets/coffee/coffee-1.jpg"),
          title: "Latte with chocolate and caramel sauce",
        },
        {
          id: 2,
          src: require("@/assets/coffee/coffee-2.jpg"),
          title: "Latte",
        },
        {
          id: 3,
          src: require("@/assets/coffee/coffee-3.jpg"),
          title: "Latte",
        },
        {
          id: 4,
          src: require("@/assets/coffee/coffee-4.jpg"),
          title: "Dalgona coffee",
        },
        {
          id: 5,
          src: require("@/assets/coffee/coffee-5.jpg"),
          title: "Ice coffee with sparkling water",
        },
        {
          id: 6,
          src: require("@/assets/coffee/coffee-6.jpg"),
          title: "Latte with chocolate sauce ",
        },
        {
          id: 7,
          src: require("@/assets/coffee/coffee-7.jpg"),
          title: "Latte with black honey",
        },
        {
          id: 8,
          src: require("@/assets/coffee/coffee-8.jpg"),
          title: "Latte with caramel sauce",
        },
        {
          id: 9,
          src: require("@/assets/coffee/coffee-11.jpg"),
          title: "Coffee powder like human",
        },
      ],
    };
  },
};
</script>