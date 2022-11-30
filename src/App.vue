<template>
  <!-- <PokemonContainer /> -->
  <!-- <HelloWorld v-on:selected="printNumber"/> -->
  <!-- // <CompositionApp /> -->
  <router-view />
  <!-- <AppContainer /> -->
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import PokemonContainer from './components/Pokemon.vue';
// import CompositionApp from "./components/Composition.vue";
// import AppContainer from "./components/blog/App.vue";
export default {
  name: "App",
  components: {
    // HelloWorld,
    // PokemonContainer
    // CompositionApp,
    // AppContainer,
  },
  methods: {
    printNumber(val) {
      console.log("print", val);
    },
  },
};
</script>
  
<style>
.cards {
  display: flex;
}

.card {
  border: 1px solid silver;
  border-radius: 8px;
  max-width: 200px;
  margin: 0 5px;
  cursor: pointer;
  box-shadow: 0px 1px 3px darkgrey;
  transition: 0.2s;
}

.title,
.content,
.description {
  padding: 16px;
  text-transform: capitalize;
  text-align: center;
}

.title,
.content {
  border-bottom: 1px solid silver;
}

.title {
  font-size: 1.25em;
}

.card:hover {
  transition: 0.2s;
  box-shadow: 0px 1px 9px darkgrey;
}

img {
  width: 100%;
}
.apace {
  opacity: 0.5;
}
.card:hover {
  opacity: 1;
}
</style>
