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
                珈琲も大好き。<br />
                休日はだいたい自分で淹れた珈琲飲みながら開発してます。
              </v-card-text>

              <v-card-actions>
                <v-row
                  align="center"
                  justify="end"
                  >
                  <span class="mr-2">
                    <a href="https://twitter.com/sorigeeeen">
                      <v-icon>mdi-twitter</v-icon>
                    </a>
                  </span>
                  <span>
                    <a href="https://github.com/ytskmt14">
                      <v-icon>mdi-github</v-icon>
                    </a>
                  </span>
                </v-row>
              </v-card-actions>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>