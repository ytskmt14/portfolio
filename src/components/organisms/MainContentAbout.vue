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
                    福岡でゆるゆると楽しくwebエンジニアやってます。<br />
                    web開発、AR開発あたりに興味があります。<br />
                    珈琲も大好き。<br />
                    休日はだいたい自分で淹れた珈琲飲みながら開発してます。
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