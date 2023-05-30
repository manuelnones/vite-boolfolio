<script>

export default {
    name: 'AppHome',

    data() {
        return {

        }
    }
}
</script>


<template>
    <main>
        <h1>Home</h1>
        <router-link :to="{ name: 'index' }">Vai alla lista dei progetti</router-link>
    </main>
</template>


<style lang="scss" scoped>
main {
    margin-top: 160px;
    text-align: center;
}
</style>