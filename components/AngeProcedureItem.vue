<template>
    
    <NuxtLink to="#" class="link">
        <div class="icon-box text-center" :class="addClassName"
           >
            <div class="icon">
                <img class="svgInject" :src="`${img_url_back}/${category_procedure.img_url}`"
                    :alt="category_procedure.nom_categorie">
            </div>
            <div class="content">
                <h3 class="title">{{ category_procedure.nom_categorie }}</h3>
                <!-- <div class="desc">
                    <p>{{ category_procedure.description }}</p> 
                </div> -->
            </div>
        </div>
    </NuxtLink>

</template>

<script>
import config from '~~/config';

export default {
    props: ['category_procedure', 'addClassName'],
    mounted() {
        this.img_url_back = config.app_back_url_img;
    }
};
</script>