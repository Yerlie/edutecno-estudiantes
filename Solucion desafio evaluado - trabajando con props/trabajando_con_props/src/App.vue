<template>
  <div id="app">
    <h1>Tarea</h1>
    <input type="text" v-model="tarea" placeholder="Ingresa nueva tarea" >
    <button @click="addItem">Añade</button>
    <ul>
      <li v-for="(item,index) in lista" :key="index">
      <PropsVue :prop1="item" @clickElimina="clickHijo"/>
      </li>
    </ul>
    
  </div>
</template>

<script>
import PropsVue from './components/PropsVue.vue'

export default {
  name: 'App',
  components: {
    PropsVue
  },
  data(){
    return {
      tarea: '',
      lista: []
    }
  },
  methods: {
    addItem(){
      this.lista.push(this.tarea)
      this.tarea = ''
    },
    clickHijo(item){
      this.lista.splice(this.lista.indexOf(item),1)
    }
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
