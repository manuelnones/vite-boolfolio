<script>
import { computed } from 'vue';

export default {
    name: 'PostCard',

    data() {
        return {
            baseUrl: "http://127.0.0.1:8000/",
        }
    },

    props: {
        post: Object,
    },

    computed: {

        coverImage() {
            if (this.post.post_image == null) {
                return "https://static.vecteezy.com/system/resources/previews/004/141/669/non_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg";
            } else {
                return this.baseUrl + 'storage/' + this.post.post_image;
            }
        }
    },

}
</script>


<template>
    <div class="card my-5" style="width: 300px;">
        <img class="card-img-top" :src="coverImage" alt="immagine post">
        <div class="card-body">
            <h5 class="card-title">{{ post.title }}</h5>
            <small>Categoria: {{ post.type ? post.type.name : 'nessuna' }}</small>
            <div class="tags">
                <span v-for="technology in post.technologies" class="badge rounded-pill m-1"
                    :style="{ backgroundColor: technology.color }">{{ technology.name }}</span>
            </div>
            <p class="card-text pt-4">{{ post.content }}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.card {
    .card-img-top {
        height: 400px;
        object-fit: cover;
        object-position: top;
    }
}
</style>