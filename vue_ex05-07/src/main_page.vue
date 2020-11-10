<template lang="html">
    <div>
        <h2>메인페이지</h2>
        <!-- v-on:click 대신 @click 사용 -->
        <button @click="fnSubPage">서브페이지로이동(라우터 함수 사용)</button>
    </div>
</template>
<script>
    export default {
        methods:{
            fnSubPage(){
                //라우터객체에 이동하고자하는 컴포넌트의 경로 이름을 push()함수로 넣어준다
                //라우터변수에 접근하기위해 먼저 뷰 객체를 가리키는 this를 사용
                //$표기함으로써 뷰 객체에 정의된 router변수값에 접근
                this.$router.push('/sub')
            }
        }
    }
</script>

