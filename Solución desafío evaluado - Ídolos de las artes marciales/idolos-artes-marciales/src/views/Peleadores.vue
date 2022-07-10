<template>
    <div>
        <h1>Peleadores</h1>
        <ul>
            <li v-for="(item,index) in peleadores" :key="index">
                <router-link :to="'/buscador/' + item.id">
                {{item.nombre}}
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>

export default {
    data() {
        return {
            peleadores: [],
        };
    },
    mounted() {
        fetch("/peleadores.json")
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                this.peleadores = data;
            });
    },
}
</script>