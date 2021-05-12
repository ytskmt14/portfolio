<template>
  <v-row dense>
    <v-col cols="12">
      <div id="work" class="text-h5">My works</div>
    </v-col>
    <v-col cols="3" v-for="(work, index) in workList" :key="index">
      <v-card elevation="2" class="mx-2">
        <v-img
          :src="work.thumb"
          class="white--text align-end"
          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
          height="240px"
          contain
          @click="windowOpen(work.url)"
        >
        </v-img>
        <v-card-text class="text-h6" @click="windowOpen(work.url)">
          {{ work.title }}
        </v-card-text>
        <v-card-actions>
          <v-btn text @click="work.reveal = true"> more info... </v-btn>
        </v-card-actions>

        <v-expand-transition>
          <v-card
            v-if="work.reveal"
            class="transition-fast-in-fast-out v-card--reveal"
            style="height: 100%"
          >
            <v-card-text class="pb-0">
              <v-simple-table>
                <tbody>
                  <tr
                    v-for="(detailHeader, index) in detailHeaderList"
                    :key="index"
                  >
                    <td>{{ detailHeader.val }}</td>
                    <td v-if="detailHeader.id === 'usedTech'">
                      <v-tooltip
                        bottom
                        v-for="(usedTech, index) in work.detail.usedTechList"
                        :key="index"
                      >
                        <template v-slot:activator="{ on, attrs }">
                          <v-icon v-bind="attrs" v-on="on" class="mr-2">{{
                            usedTech.icon
                          }}</v-icon>
                        </template>
                        <span>{{ usedTech.name }}</span>
                      </v-tooltip>
                    </td>
                    <td v-else-if="detailHeader.id === 'code'">
                      <v-icon>mdi-github</v-icon>
                      <a :href="work.detail.code" style="text-decoration: none">
                        {{ work.detail.repoName }}
                      </a>
                    </td>
                    <td v-else>
                      {{ work.detail[detailHeader.id] }}
                    </td>
                  </tr>
                </tbody>
              </v-simple-table>
            </v-card-text>
            <v-card-actions class="pt-0">
              <v-btn text @click="work.reveal = false"> Close </v-btn>
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
      detailHeaderList: [
        {
          id: "teamMember",
          val: "開発人数",
        },
        {
          id: "position",
          val: "役割",
        },
        {
          id: "devTerm",
          val: "開発期間",
        },
        {
          id: "usedTech",
          val: "使用技術",
        },
        {
          id: "code",
          val: "コード",
        },
        {
          id: "comment",
          val: "ひとこと",
        },
      ],
      workList: [
        {
          reveal: false,
          title: "ポートフォリオ制作",
          thumb: require("@/assets/my-portfolio.png"),
          url: "https://ytskmt14.github.io/portfolio/",
          detail: {
            teamMember: "1人",
            position: "メイン開発者",
            devTerm: "done!",
            usedTechList: [
              {
                icon: "mdi-vuejs",
                name: "Vue.js",
              },
              {
                icon: "mdi-vuetify",
                name: "Vuetify",
              },
              {
                icon: "mdi-git",
                name: "git",
              },
              {
                icon: "mdi-github",
                name: "github",
              },
            ],
            code: "https://github.com/ytskmt14/portfolio",
            repoName: "moc-portfolio",
            comment: "デザインもっとかっこよくしたい！",
          },
        },
        {
          reveal: false,
          title: "webページ制作",
          thumb: require("@/assets/step-up-camp-web.png"),
          url: "https://step-up-camp-572f4.firebaseapp.com/",
          detail: {
            teamMember: "2人",
            position: "メイン開発者",
            devTerm: "進行中（現在、phase2）",
            usedTechList: [
              {
                icon: "mdi-vuejs",
                name: "Vue.js",
              },
              {
                icon: "mdi-vuetify",
                name: "Vuetify",
              },
              {
                icon: "mdi-git",
                name: "git",
              },
              {
                icon: "mdi-github",
                name: "github",
              },
            ],
            code: "https://github.com/ytskmt14/step-up-camp-lp",
            repoName: "step-up-camp-lp",
            comment: "初の共同開発！よりよくしていきます！",
          },
        },
      ],
    };
  },
  methods: {
    windowOpen(url) {
      window.open(url, "_blank");
    },
  },
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