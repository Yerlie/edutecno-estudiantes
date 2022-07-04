<template>
  <div id="app">
    <h1>Random Gif Cat</h1>
    <div>
      <label />Titulo <input type="text" v-model="titulo" /> <br />
      <label />Filtro
      <select v-model="filtro">
        <option>blur</option>
        <option>mono</option>
        <option>sepia</option>
        <option>negative</option>
        <option>paint</option>
        <option>pixel</option>
      </select>
      <br />
      <label />Color:
      <select v-model="color">
        <option value="red">rojo</option>
        <option value="blue">azul</option>
        <option value="green">verde</option>
        <option value="yellow">amarillo</option>
        <option value="white">blanco</option>
      </select>
      <div class="circulo" :style="{ backgroundColor: color }"></div>
    </div>
    <br />
    <label />Tamaño: <input type="number" v-model="tamano" />
    <br />
    <button @click="obtenerMichi()">Obtener mi michi</button>
    <br />
    <img v-if="url !== null" :src="urlGato" />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      titulo: "",
      filtro: "blur",
      color: "red",
      tamano: 200,
      url: null,
    };
  },
  //con methods se pueden hacer llamadas a funciones que se encuentran en el componente
  methods: {
    obtenerMichi() {
      this.url = `https://cataas.com/cat/gif/says/${this.titulo}?filter=${this.filtro}&color=${this.color}&size=${this.tamano}&type=or`;
      console.log(this.url);
    },
  },
  //con computed se ve la reactividad de los datos de la vista.
    urlGato() {
      return this.url;
    },
  
  computed: {
    urlGato() {
      return `https://cataas.com/cat/gif/says/${this.titulo}?filter=${this.filtro}&color=${this.color}&size=${this.tamano}&type=or`;
  },
  },
};

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
.circulo {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  margin-left: 20px;
  margin-top: 15px;
  display: inline-block;
  border: 2px solid black;
}
</style>
