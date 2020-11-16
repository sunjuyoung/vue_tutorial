<template>
  <v-app>
    <v-content>
      <!-- fill-height는 브라우저 높이를 100%, 수직으로 가운데 정렬 -->
      <v-container fluid fill-height><!-- fluid 좌우 여백을 제거 -->
        <v-row>
          <v-col cols="12" class="text-center">
            <h1 class="title white--text" >반가와요</h1>
            <p class="caption">by VueJs</p>
            <img src="./assets/hello-pwa.png" alt="">
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  created(){
    //배경색을 다크모드로 함
    this.$vuetify.theme.dark=true;
  }

};
</script>
