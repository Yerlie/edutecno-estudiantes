<template>
  <div id="app">
   <table>
    <thead>
      <tr>
        <th>Código</th>
        <th>Nombre</th>
        <th>Stock</th>
        <th>Precio</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item,index) in productos" :key="index" :style="{color:item.color}">
        <td>{{item.codigo}}</td>
        <td>{{item.nombre}}</td>
        <td>{{item.stock}}</td>
        <td> {{item.precio}}</td>
      </tr>
    </tbody>
   </table>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'App',
 computed: {
    ...mapState(["productos"])
    },

}
</script>

<style>
th,td{
  border: 1px solid black;
}
table{
  margin-left: 500px;
  border-collapse: collapse;
  text-align: center;
}
</style>
