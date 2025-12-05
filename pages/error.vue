<template>
    <div class="error404">
        <div class="container">
            <div class="row">
                <div class="col-md-12 text-center">
                    <div class="error-image">
                        <img class="img-fluid" src="/images/others/page-404-image.png" alt="Not Found Image">
                    </div>
                    <h1 class="error-404-title text-white" v-if="error.statusCode === 404">Oops! Page introuvable !</h1>
                    <h1 class="error-404-title text-white" v-else>Une erreur est survenue</h1>
                    <!-- <div class="error-buttons">
                        <NuxtLink  class="btn btn-primary btn-hover-secondary" to="/"></NuxtLink>
                        <button  @click="$router.go(-1)">
                            <span class="button-text">Revenir à la sur la page d'acceuil</span>
                        </button>
                    </div> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props: ['error']
}
</script>

<style lang="scss" scoped>
.error404 {
    display: flex;
    height: 100vh;
    align-items: center;
    justify-content: center;
    background-color: #111111;
}

.error-404-title {
    font-weight: 500;
    padding-top: 40px;
    margin-bottom: 30px;

    //res
    @media #{$extra-small-mobile} {
        font-size: 30px;
    }
}
</style>