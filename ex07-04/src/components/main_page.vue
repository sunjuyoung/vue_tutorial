<template>
        <v-container>
            <v-main>
                <div class="text-center" display-3 my-4>메인페이지 입니다.</div>
                <v-row>
                    <v-col offset-sm="1" sm="10">
                        <!-- 제목을 입력받으면 stitle 데이터와 바인딩해서 store에 저장 -->
                        <v-text-field label="제목" v-model="sTitle"></v-text-field>
                        <v-text-field label="내용" v-model="sTest"></v-text-field>
                    </v-col>
                </v-row>
                <div class="text-center">
                    <v-btn large class="mt-5" color="purple" dark @click="fnSetTitle">확인</v-btn>
                </div>
            </v-main>
        </v-container>
</template>
 <script>
 export default {
     //data의 초기값은 store에 있는 데이터 가져옴
     //뷰 인스턴스 멤버에 접근하려면 $를 사용해야한다
     data(){
         return{
             sTitle:this.$store.getters.fnGetData,
             sTest:''
         }
     },
     methods:{
         //v-model 바인딩된 
         //commit함수를 사용해 store mutations에 fnsetData함수접근
         fnSetTitle(){
             this.$store.commit('fnSetData',this.sTitle);
             this.$router.push({
                 name:'sub_page',
                 params:{
                     s_param:this.sTest
                 }
             });
           // this.$router.push('/sub')
         }
     }
 }
 </script>