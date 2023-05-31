<script>

export default {
    name: 'AppAbout',

    data() {
        return {

        }
    }
}
</script>


<template>
    <main class="text-center">
        <div class="card border-0">
            <div class="container-profile-img">
                <img class="card-img-top"
                    src="https://static.vecteezy.com/ti/vettori-gratis/p1/4141669-nessuna-foto-o-immagine-vuota-icona-caricamento-immagini-o-mancante-immagine-segno-immagine-non-disponibile-o-immagine-in-arrivo-segno-semplice-natura-silhouette-in-frame-illustrazione-vettore-isolato-vettoriale.jpg"
                    alt="immagine profilo">
            </div>
            <div class="card-body">
                <h6 class="card-title"><strong>EMAIL:</strong></h6>
                <p class="card-text">manuel@email.com</p>
                <h6 class="card-title"><strong>NUMERO DI TELEFONO:</strong></h6>
                <p class="card-text">345 345 4543</p>
            </div>
        </div>
    </main>
</template>


<style lang="scss" scoped>
main {
    margin-top: 160px;

    .card {
        .container-profile-img {
            width: 400px;
            margin: auto;
            margin-bottom: 30px;

            img {
                width: 100%;
            }
        }
    }
}
</style>