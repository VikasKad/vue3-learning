<template>
    <!-- <div class="cards"> -->
    <PokemonCards 
        :pokemons="pokemons"
        :selectedId="selectedId"
        @pokemonSelected="fetchEvalutions"
    ></PokemonCards>
    <PokemonCards 
        :pokemons="evolutions"
    ></PokemonCards>
    <!-- </div> -->
</template>
  
<script>
import PokemonCards from './PokemonCards.vue';
const api = 'https://pokeapi.co/api/v2/pokemon';
const IDS = [1, 4, 7];
export default {
    components: {
        PokemonCards,
    },
    name: 'PokemonContainer',
    data() {
        return {
            pokemons: [],
            evolutions:[],
            selectedId:null,
        }
    },
    async created() {
        console.log('created lifecycle hook');
        this.pokemons = await this.fetchData(IDS);
    },
    mounted() {
        console.log('mounted lifecycle hook');

    },
    methods: {
        async fetchData(ids) {
            const resp = await Promise.all(ids.map(id => window.fetch(`${api}/${id}`)));

            const json = await Promise.all(resp.map(data => data.json()));
            console.log(json);
            return json.map(datum => ({
                id: datum.id,
                name: datum.name,
                sprite: datum.sprites.other['official-artwork'].front_default,
                types: datum.types.map(type => {
                    return {
                        name: type.type.name
                    }
                })
            }))
        },
        async fetchEvolutions(pokemon){
           this.evolutions= await this.fetchData([pokemon.id+1,pokemon.id+2])
           this.selectedId=pokemon.id;
        }
    }

}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
  