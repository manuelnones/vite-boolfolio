<script>
import { router } from '../router';


export default {
    name: "AppHeader",
    data() {
        return {};
    },
    components: { router }
}
</script>


<template>
    <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <div class="container-logo">
                    <img src="https://static-00.iconduck.com/assets.00/adobe-portfolio-icon-512x512-mfisumyd.png"
                        alt="immagine logo" class="logo-img">
                </div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <router-link class="nav-link" aria-current="page" :to="{ name: 'home' }">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" :to="{ name: 'index' }">I miei progetti</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" :to="{ name: 'about' }">Contattami</router-link>
                        </li>
                    </ul>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Cerca" aria-label="Search">
                        <button class="btn btn-outline-light" type="submit">Cerca</button>
                    </form>
                </div>
            </div>
        </nav>
    </header>
</template>


<style lang="scss" scoped>
.router-link-active {
    color: #ffffff;
}

.navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2;

    .container-fluid {
        height: 80px;

        .container-logo {
            height: 50px;
            margin-left: 30px;
        }

        .logo-img {
            height: 100%;
            margin-right: 30px;
        }
    }
}
</style>