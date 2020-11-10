<template lang="html">
    <div>
        <h2>서브 페이지 입니다.</h2>
        <button @click="fnMainPage">메인페이지 이동(라우터함수사용)</button>
    </div>
</template>
<script>
    export default{
        methods:{
            fnMainPage(){
                this.$router.push('/main')
            }
        }
    }
</script>