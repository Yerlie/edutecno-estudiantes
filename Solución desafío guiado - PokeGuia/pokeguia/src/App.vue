<template>
  <div id="app">
    <h1>{{ titulo }}</h1>
    Nombre: <input type="text" v-model="pokemon" />
    <button @click="buscarPokemon">Buscar</button>
    <br>
    <img :src="foto">
    <h2>Movimientos</h2>
    <li li v-for="(item,index) in movimientos" :key="index +'-'">
{{item}}
    </li>
    <h2>Habilidades</h2>
    <li li v-for="(item,index) in habilidades" :key="index">
{{item}}
    </li>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      titulo: "PokeGuia",
      pokemon: "pikachu",
      json: null,
    };
  },
  created() {
    this.buscarPokemon();
  },
  methods:{
  buscarPokemon(){
    fetch(`https://pokeapi.co/api/v2/pokemon/${this.pokemon}`)
      .then((response) => response.json())
      .then((json) => {
        this.json = json;
        console.log(json.abilities);
      });
  },
  },
  computed:{
    movimientos(){
      if(this.json){
        return this.json.moves.map((movimiento) => movimiento.move.name);
      }else{
        return [];
      }
    },
    habilidades(){
      if(this.json){
        return this.json.abilities.map((habilidad) => habilidad.ability.name);
      }else{
        return [];
      }
    },
    foto(){
      if(this.json){
        return this.json.sprites.front_default;
      }else{
        return "";
      }
    },
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
