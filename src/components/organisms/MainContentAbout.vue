<template>
  <div>
    <v-row dense>
      <v-col cols="12">
        <div id="about">About Me</div>
      </v-col>
      <v-col cols="12">
        <v-card flat>
          <div class="d-flex flex-no-wrap">
            <v-avatar class="ma-3" tile size="240">
              <v-img src="@/assets/my-profile.png" />
            </v-avatar>
            <div>
              <v-card-title> moc </v-card-title>
              <v-card-subtitle>web engineer in Fukuoka</v-card-subtitle>
              <v-card-text>
                福岡でゆるゆると楽しくwebエンジニアやってます。<br />
                web開発、AR開発あたりに興味があります。<br />
                ここ最近は、Vue.jsにハマっています。
              </v-card-text>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>