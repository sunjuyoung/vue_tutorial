<template>
  <div id="app">
    <h2>안녕하세요</h2>
    <router-view/>
    <hr>
      <router-link to="/main">Home</router-link> |
      <router-link to="/sub">About</router-link>
      <hr>
      <simple-counter startNumber="1"></simple-counter>
      <simple-counter startNumber="10"></simple-counter>
      <simple-counter startNumber="100"></simple-counter>
  </div>
</template>

<script>
  Vue.component('simple-counter',{
    props:['startNumber'],
    template:`
      <button v-on:click="fnInCounter">
        카운터:{{fnGetCounter}}
      </button>
    `,
    data:function(){
      return {nCounter:parseInt(this.startNumber)}
    },

    
  })
</script>