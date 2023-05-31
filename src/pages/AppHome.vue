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
        <button type="button" class="btn btn-secondary mt-4">
            <router-link :to="{ name: 'index' }" class="text-light text-decoration-none">Vai alla lista dei
                progetti</router-link>
        </button>
    </main>
</template>


<style lang="scss" scoped>
main {
    margin-top: 160px;
    text-align: center;
}
</style>