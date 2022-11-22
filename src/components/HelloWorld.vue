<template>
  <div class="hello">
    <button v-on:click="increment()">Increment</button>
    {{                                 count                                 }}
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      count: 0
    }
  },
  methods: {
      increment(){
        this.count++;
      }
    }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
