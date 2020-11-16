<template>
  <v-app>
    <v-card>
      <v-app-bar dark color="lime">
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-toolbar-title>TODO 리스트</v-toolbar-title>
      </v-app-bar>
    </v-card>

    <v-content>
      <v-row my-5>
        <v-col cols="8" offset="1">
          <!-- 실행되자마자 입력 포커스를 가지도록 autofocus -->
          <v-text-field label="할일" autofocus v-model="sTodoTitle"></v-text-field>
        </v-col>
        <v-col cols="2" my-2>
          <v-btn fab max-height="50px" max-width="50px" color="pink" dark @click="fnSubmitTodo()">
            <v-icon>add</v-icon>
          </v-btn>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12">
          <v-list two-line v-for="item in oTodos" :key="item.key">
            <v-card color="grey lighten-3" v-if="!item.b_edit">
              <v-list-item class="py-2">
                <v-list-item-action>
                  <v-checkbox v-model="item.b_completed" @change="fnCheckBoxChange(item)">

                  </v-checkbox>
                </v-list-item-action>
                <!-- 제목을 표시하고 체크 선택되면 취소선 표시 -->
                <v-list-item-content>
                  <v-list-item-title :class="{'style_completed' : item.b_completed}">
                    {{item.todo._title}}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-card>
          </v-list>
        </v-col>
      </v-row>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
