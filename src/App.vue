<template>
  <!-- <PokemonContainer /> -->
  <!-- <HelloWorld v-on:selected="printNumber"/> -->
  <CompositionApp />
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import PokemonContainer from './components/Pokemon.vue';
import CompositionApp from './components/Composition.vue'
export default {
  name: 'App',
  components: {
    // HelloWorld,
    // PokemonContainer
    CompositionApp
},
  methods: {
    printNumber(val){
      console.log('print', val);
    }
  }
}
</script>

<style >

</style>
