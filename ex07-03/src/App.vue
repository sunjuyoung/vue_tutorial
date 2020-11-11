<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <!-- 윈쪽 메뉴아이콘 넣음 -->
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-toolbar-title>멀티페이지</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
    </v-app-bar>

   
    <v-content>
       <!-- 페이지 장면 전환 효과 넣기 -->
      <v-slide-x-transition mode="out-in">
        <router-view></router-view>
      </v-slide-x-transition>
    </v-content>

    <v-footer color="secondary" fixed dark>
      <div class="mx-auto">CODE-DESIGN.web.app</div>
    </v-footer>
  </v-app>
</template>

<script>

</script>
