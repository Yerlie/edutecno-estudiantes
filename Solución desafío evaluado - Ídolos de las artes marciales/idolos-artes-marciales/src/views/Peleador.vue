<template>
  <div>
    <div v-if="peleador !== undefined">
      <h2>¡Peleador encontrado!</h2>
      <p>id: {{ peleador.id }}</p>
      <p>Nombre: {{ peleador.nombre }}</p>
      <img :src="peleador.imgSrc" />
    </div>
    <div v-else>
      <h1>El peleador que buscas no existe</h1>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      id: undefined,
      peleador: undefined,
    };
  },
  mounted() {
    this.id = this.$router.currentRoute.params.id;// obtiene el parametro id de la ruta actual atraves de index.js(router)
    fetch("/peleadores.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.peleador = data.find((peleador) => peleador.id === this.id);
      });
  },
};
</script>