<template>
    <div>
{{prop1}}
<button @click="clickElimina">Eliminar</button>
    </div>
</template>
<script>
export default {
    props: {
        prop1: {
            type: String,
            required: true
        }
        },
    methods: {
        clickElimina(){
            this.$emit('clickElimina', this.prop1)
        }
}
}
</script>
<style scoped>

</style>>

