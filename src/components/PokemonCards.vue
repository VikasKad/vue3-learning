<template>
    <div class="cards">
        <CardContainer class="card" 
            v-for="pokemon in pokemons" 
            :key="pokemon.id" 
            @click="click(pokemon)"
            :class="{apace:selectedId && pokemon.id!==selectedId}"
        >
            <template v-slot:title>
                {{  pokemon.name  }} # {{pokemon.id}}
            </template>
            <template v-slot:content>
                <img :src="pokemon.sprite" />
            </template>
            <template v-slot:description>
                <div 
                    v-for="type in pokemon.types" 
                    :key="type"
                >
                        {{ type.name }} 
                </div>
            </template>
        </CardContainer>
    </div>
</template>
  
<script>
import CardContainer  from "./CardContainer.vue";
  export default {
    name: 'PokemonCards',
    components:{
        CardContainer
    },
    props:{
        pokemons:{
            type:Array,
            default(){
                return []
            }
        },
        selectedId:{
            type:Number
        }
    },
    methods: {
        click(pokemon){
            this.$emit('pokemonSelected',pokemon);
        }
    }
  
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  
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
.apace{
    opacity: 0.5;
}
.card:hover{
    opacity: 1;
}
  </style>
  