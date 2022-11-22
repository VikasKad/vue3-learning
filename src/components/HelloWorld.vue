<template>
  <div class="hello">
    <input 
      v-bind:value="value"
      v-on:input="input"
      />
      <div>
    {{  value  }}
      </div>
      <div class="red">
        {{error}}
      </div>
    <hr>
    <input type="radio" name="a" 
    v-model="value" value="a" id="a">
    <label for="a">A
    </label>
    <input type="radio" name="b" 
    v-model="value" value="b" id="b">
    <label for="b">B
    </label>
    
    <hr>
    <button v-on:click="increment">Increment</button>
    {{ count }}
    <div 
    v-for="num in numbers" 
    v-bind:key="num"
    v-bind:class="getClass(num)"
    >
      <span>{{ num }}</span>
  </div>
</div>

</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      count: 0,
      value: 0,
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    }
  },
  computed: {
    evenList() {
      return this.numbers.filter(num => this.isEven(num));
    },
    error(){
      if(this.value.length<5){
        return 'Must be more than 5';
      }
      return '';
    }
  },
  methods: {
    increment() {
      this.count++;
    },
    isEven(num) {
      return num % 2 === 0;
    },
    getClass(num) {
      return this.isEven(num) ? 'blue' : 'red';
    },
    input($event){
      this.value=$event.target.value;
      console.log('event',$event.target.value)
    

    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.red {
  color: red;
}

.blue {
  color: blue;
}
</style>
