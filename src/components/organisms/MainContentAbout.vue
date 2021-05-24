<template>
  <div id="about">
    <v-row dense>
      <v-col cols="12">
        <div class="text-h5">About Me</div>
      </v-col>
      <v-col cols="12">
        <v-card flat>
          <div class="d-flex flex-no-wrap">
            <v-row>
              <v-col cols="12" md="3">
                <v-avatar class="ma-3" tile size="240">
                  <v-img aspect-ratio="16/9" src="@/assets/my-profile.png" />
                </v-avatar>
              </v-col>
              <v-col cols="12" md="9">
                <div>
                  <v-card-title> moc </v-card-title>
                  <v-card-subtitle>web engineer in Fukuoka</v-card-subtitle>
                  <v-card-text>
                    <p>
                      福岡でゆるゆると楽しくwebエンジニアやってます。<br />
                      web開発、AR開発あたりに興味があります。<br />
                      珈琲も大好き。<br />
                      休日はだいたい自分で淹れた珈琲飲みながら開発してます。
                    </p>
                    <v-dialog
                      v-model="dialog"
                      fullscreen
                      transition="dialog-bottom-transition"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn text v-bind="attrs" v-on="on">
                          <span>Go to Coffee Gallery</span>
                          <v-icon>mdi-coffee-to-go</v-icon>
                        </v-btn>
                      </template>
                      <v-card>
                        <v-main fluid>
                          <v-toolbar
                            absolute
                            flat
                            width="100%"
                            >
                            <v-toolbar-title
                              class="my-text"
                              v-text="'coffee gallery'"
                            >
                            </v-toolbar-title>
                            <v-spacer></v-spacer>
                            <v-toolbar-items>
                              <v-btn
                                class="my-text"
                                text
                                @click="dialog = false"
                              >
                                Close
                              </v-btn>
                            </v-toolbar-items>
                          </v-toolbar>
                          <MainContentCoffeeGallery
                            class="mt-8"
                            />
                        </v-main>
                      </v-card>
                    </v-dialog>
                  </v-card-text>
                </div>
              </v-col>
            </v-row>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
const MainContentCoffeeGallery = () =>
  import(
    /* webpackChunkName: "MainContentCoffeeGallery" */ "./MainContentCoffeeGallery"
  );

export default {
  data() {
    return {
      dialog: false,
    };
  },
  components: {
    MainContentCoffeeGallery,
  },
};
</script>

<style scoped>
.my-text {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  color: #6a696c;
}
</style>