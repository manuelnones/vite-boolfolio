<script>
import axios from 'axios';
import PostCard from '../components/PostCard.vue';

export default {
    name: 'AppIndex',

    data() {
        return {
            posts: [],
        }
    },

    components: {
        PostCard,
    },

    created() {
        axios.get('http://127.0.0.1:8000/api/posts').then((res) => {
            this.posts = res.data.results;
        })
    }
}
</script>


<template>
    <main>
        <div class="container text-center">
            <h1 class="text-uppercase">Il mio portfolio</h1>

            <div class="cards-container mt-5">
                <div v-for="post in posts">
                    <PostCard :post="post"></PostCard>
                </div>
            </div>
        </div>
    </main>
</template>


<style lang="scss" scoped>
main {
    .container {
        margin-top: 165px;

        .cards-container {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 30px;
        }
    }
}
</style>