<script>
import axios from 'axios';

export default {
    name: 'AppShow',

    data() {
        return {
            post: {},
            postSlug: '',
            baseUrl: 'http://127.0.0.1:8000/',
        }
    },

    mounted() {
        this.postSlug = this.$route.params.slug;
        console.log(this.$route)

        axios.get(this.baseUrl + 'api/posts/' + this.postSlug).then(res => {
            this.post = res.data.post
        });
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
    <div class="post-container">

        <div class="text-container">
            <div class="arrow-container">
                <router-link :to="{ name: 'index' }" class="text-secondary"><i
                        class="fa-solid fa-rotate-left"></i></router-link>
                <div class="hidden-arrow"></div>
            </div>
            <h1 class="title">{{ post.title }}</h1>
            <p class="content">{{ post.content }}</p>
        </div>

        <div class="img-container">
            <img :src="coverImage" alt="immagine del post">
        </div>

    </div>
</template>


<style lang="scss" scoped>
.post-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 100px;
    width: 100vw;
    height: 100vh;

    .arrow-container {
        position: relative;

        .fa-solid {
            font-size: 90px;
        }

        .hidden-arrow {
            position: absolute;
            left: 0;
            bottom: 0;
            height: 48px;
            width: 100px;
            background-color: #222529;
        }
    }


    .text-container {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        max-width: 40%;

        .title {
            text-transform: uppercase;
        }

        .content {
            font-size: 1.9em;
        }
    }

    .img-container {
        width: 500px;
        height: 500px;

        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }
}
</style>