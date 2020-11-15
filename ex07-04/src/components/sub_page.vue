<template>
        <v-container>
            <v-main>
                <div class="text-center" display-1 my-4>서브 페이지입니다.</div>
                <v-divider></v-divider>
                <div class="text-center" display-3 my-4>{{sTitle}}</div>
                <div class="text-center" display-3 my-4>{{sTest}}</div>
                <div class="text-center">
                    <!-- to어튜리부트를 사용하면 vuex스토어에 값이 저장되지않는다 -->
                    <v-btn fab large class="mt-5" color="teal" dark to="/main">
                    <v-icon>mdi-replay</v-icon>
                </v-btn>
                </div>
            </v-main>
        </v-container>
</template>

<script>
    export default{
        data(){
            return{
                sTitle:this.$store.getters.fnGetData,
                sTest:this.$route.params.s_param
            }
        }
    }
</script>