<template>
  <div>
    <h1>Idolos Artes Marciales</h1>
    <router-link to="/buscador">Buscador</router-link> | 
    <router-link to="/peleadores">Peleadores</router-link>
    
<router-view/>
  </div>
</template>

<style>
  h1 {
    text-align: center;
  }
</style>
