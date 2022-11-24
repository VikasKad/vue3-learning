<template>
    <h1>{{                                                    msg                                                    }}</h1>
    <input v-model="msg"/>
    <hr>
    <button 
    @click="increment">{{ 
        count
    }}</button>
    <button 
    @click="increase('a')">{{ 
        numbers.a
    }}</button>
    <button 
    @click="increase('b')">{{ 
        numbers.b
    }}</button>
    <hr>
    <p>{{ total }}</p>
</template>
<script>
import { ref, reactive,computed, watch, watchEffect } from 'vue';
export default {
    name: 'CompositionApp',
    setup() {
        // ref => numbers, string
        const msg = ref("Hello world");
        const count = ref(0);
        const increment = () => {
            count.value++;
        };
        //reactive => {}
        const numbers=reactive({
            a:1,
            b:2
        });
        const increase=(n)=>{
            numbers[n]++;
        };
        const total = computed(()=>{
           return count.value + numbers.a + numbers.b;
        });
        watch(numbers,(newVal)=>{
            console.log(`a: ${newVal.a} b: ${newVal.b}`);
        },{
            immediate:true
        })
        watchEffect(()=>{
            console.log('numberrs',numbers.a);
        })
        return {
            msg,
            count,
            increment,
            numbers,
            increase,
            total
        }
    }
}
</script>
<style scoped>

</style>