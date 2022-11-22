<template>
  <HelloWorld v-on:selected="printNumber"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  methods: {
    printNumber(val){
      console.log('print', val);
    }
  }
}
</script>

<style>

</style>
