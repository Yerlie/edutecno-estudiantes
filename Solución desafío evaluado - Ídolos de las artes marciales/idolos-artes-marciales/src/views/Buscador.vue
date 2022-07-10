<template>
  <div>
    <h2>Buscar un peleador por id</h2>
    <input type="text" v-model="peleador" />
    <button @click="buscar">Buscar</button>
    <router-view :key="$route.path" /> <!-- key="$route.path" para que se actualice cuando cambie de ruta -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      peleador: "",
    };
  },
  methods: {
    buscar() {
      this.$router.push("/buscador/" + this.peleador).catch(() => {});
    },
  },
};
</script>