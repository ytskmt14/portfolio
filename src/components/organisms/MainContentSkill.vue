<template>
  <div>
    <div id="skill">
      <div class="mb-2">
        <span class="text-h5 mr-2">My Skill</span>

        <v-dialog v-model="dialog">
          <template v-slot:activator="{ on, attrs }">
            <v-icon v-on="on" v-bind="attrs"> mdi-help-circle-outline </v-icon>
          </template>

          <v-card>
            <v-card-title> レベルの目安 </v-card-title>
            <v-card-text>
              <v-simple-table>
                <thead>
                  <tr>
                    <th>レベル</th>
                    <th>説明</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><v-rating readonly :value="1"></v-rating></td>
                    <td>完全に理解した</td>
                  </tr>
                  <tr>
                    <td><v-rating readonly :value="2"></v-rating></td>
                    <td>なんもわからん</td>
                  </tr>
                  <tr>
                    <td><v-rating readonly :value="3"></v-rating></td>
                    <td>できるかも</td>
                  </tr>
                  <tr>
                    <td><v-rating readonly :value="4"></v-rating></td>
                    <td>できそう</td>
                  </tr>
                  <tr>
                    <td><v-rating readonly :value="5"></v-rating></td>
                    <td>チョットデキル</td>
                  </tr>
                </tbody>
              </v-simple-table>
            </v-card-text>
          </v-card>
        </v-dialog>
        <span class="ml-3 ">
          <v-icon
            v-show="!isDisplayedSkillSheet"
            @click="isDisplayedSkillSheet = !isDisplayedSkillSheet"
          >
            mdi-card-text-outline
          </v-icon>
          <v-icon
            v-show="isDisplayedSkillSheet"
            @click="isDisplayedSkillSheet = !isDisplayedSkillSheet"
          >
            mdi-chart-bell-curve-cumulative
          </v-icon>
        </span>
      </div>
    </div>
    <v-row dense v-if="!isDisplayedSkillSheet">
      <v-col cols="12">
        <MySkillOnCorrelationDiagram />
      </v-col>
    </v-row>
    <v-row dense v-else>
      <v-col cols="12" md="4">
        <v-card>
          <v-card-title> Language </v-card-title>
          <v-card-text>
            <v-simple-table dense>
              <tbody>
                <tr
                  v-for="(langSkillInfo, index) in mySkill.langList"
                  :key="index"
                >
                  <td>{{ langSkillInfo.name }}</td>
                  <td>
                    <v-rating
                      readonly
                      :value="langSkillInfo.level"
                      small
                    ></v-rating>
                  </td>
                </tr>
              </tbody>
            </v-simple-table>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card>
          <v-card-title> Framework </v-card-title>
          <v-card-text>
            <v-simple-table dense>
              <tbody>
                <tr
                  v-for="(frameworkSkillInfo, index) in mySkill.frameworkList"
                  :key="index"
                >
                  <td>{{ frameworkSkillInfo.name }}</td>
                  <td>
                    <v-rating
                      readonly
                      :value="frameworkSkillInfo.level"
                      small
                    ></v-rating>
                  </td>
                </tr>
              </tbody>
            </v-simple-table>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card>
          <v-card-title> Others </v-card-title>
          <v-card-text>
            <v-simple-table style="width: 100%" dense>
              <tbody>
                <tr
                  v-for="(otherSkillInfo, index) in mySkill.otherList"
                  :key="index"
                >
                  <td>{{ otherSkillInfo.name }}</td>
                  <td>
                    <v-rating
                      readonly
                      :value="otherSkillInfo.level"
                      small
                    ></v-rating>
                  </td>
                </tr>
              </tbody>
            </v-simple-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
const MySkillOnCorrelationDiagram = () =>
  import("../molecules/MySkillOnCorrelationDiagram");

export default {
  components: {
    MySkillOnCorrelationDiagram,
  },
  data() {
    return {
      dialog: false,
      isDisplayedSkillSheet: true,
      mySkill: {
        langList: [
          {
            name: "Java",
            level: 4,
          },
          {
            name: "Python",
            level: 3,
          },
          {
            name: "Javascript",
            level: 3,
          },
          {
            name: "HTML",
            level: 3,
          },
          {
            name: "CSS",
            level: 3,
          },
          {
            name: "Ruby",
            level: 2,
          },
        ],
        frameworkList: [
          {
            name: "Vue.js",
            level: 4,
          },
          {
            name: "Vuetify",
            level: 4,
          },
          {
            name: "Django",
            level: 3,
          },
          {
            name: "Ruby on Rails",
            level: 3,
          },
        ],
        otherList: [
          {
            name: "Git",
            level: 4,
          },
          {
            name: "Github",
            level: 4,
          },
          {
            name: "Docker",
            level: 2,
          },
        ],
      },
    };
  },
  methods: {
    convertStr2Num: function (str) {
      console.log(typeof str);
      return Number(str);
    },
  },
};
</script>