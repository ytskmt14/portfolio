<template>
  <v-row dense>
    <v-col cols="3">
      <v-card>
        <v-img
          src="@/assets/work_1.png"
          class="white--text align-end"
          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
          height="240px"
          contain
          @click="windowOpen('https://step-up-camp-572f4.firebaseapp.com/')"
        >
        </v-img>
        <v-card-text
          class="text-h6"
          @click="windowOpen('https://step-up-camp-572f4.firebaseapp.com/')"
          >
          webページ制作
        </v-card-text>
        <v-card-actions>
          <v-btn text @click="reveal = true"> more info... </v-btn>
        </v-card-actions>

        <v-expand-transition>
          <v-card
            v-if="reveal"
            class="transition-fast-in-fast-out v-card--reveal"
            style="height: 100%"
          >
            <v-card-text class="pb-0">
              <v-simple-table>
                <tbody>
                  <tr>
                    <td>開発人数</td>
                    <td>2人</td>
                  </tr>
                  <tr>
                    <td>役割</td>
                    <td>メイン開発者</td>
                  </tr>
                  <tr>
                    <td>開発期間</td>
                    <td>進行中（現在、phase2）</td>
                  </tr>
                  <tr>
                    <td>使用技術</td>
                    <td>
                      <v-tooltip bottom>
                        <template v-slot:activator="{ on, attrs }">
                          <v-icon
                            v-bind="attrs"
                            v-on="on"
                            class="mr-2"
                          >mdi-vuejs</v-icon>
                        </template>
                        <span>Vue.js</span>
                      </v-tooltip>
                      <v-tooltip bottom>
                        <template v-slot:activator="{ on, attrs }">
                          <v-icon
                            v-bind="attrs"
                            v-on="on"
                            class="mr-2"
                          >mdi-vuetify</v-icon>
                        </template>
                        <span>Vuetify</span>
                      </v-tooltip>
                      <v-tooltip bottom>
                        <template v-slot:activator="{ on, attrs }">
                          <v-icon
                            v-bind="attrs"
                            v-on="on"
                            class="mr-2"
                          >mdi-git</v-icon>
                        </template>
                        <span>git</span>
                      </v-tooltip>
                      <v-tooltip bottom>
                        <template v-slot:activator="{ on, attrs }">
                          <v-icon
                            v-bind="attrs"
                            v-on="on"
                            class="mr-2"
                          >mdi-github</v-icon>
                        </template>
                        <span>github</span>
                      </v-tooltip>
                    </td>
                  </tr>
                  <tr>
                    <td>コード</td>
                    <td>
                      <v-icon>mdi-github</v-icon>
                      <a
                        href="https://github.com/ytskmt14/step-up-camp-lp"
                        style="text-decoration: none;"
                        >
                        step-up-camp-lp
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>ひとこと</td>
                    <td>初の共同開発！よりよくしていきます！</td>
                  </tr>
                </tbody>
              </v-simple-table>
            </v-card-text>
            <v-card-actions class="pt-0">
              <v-btn text @click="reveal = false"> Close </v-btn>
            </v-card-actions>
          </v-card>
        </v-expand-transition>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      reveal: false,
    };
  },
  methods: {
    windowOpen(url){
      window.open(url, "_blank")
    }
  }
};
</script>

<style scoped>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
</style>