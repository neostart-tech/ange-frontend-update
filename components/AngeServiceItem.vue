<template>
    <div class="icon-box text-center" :class="addClassName">
        <!-- <div class="icon">
            <img class="svgInject" :src="service.iconSrc" :alt="service.titre">
        </div> -->
        <div class="content">
            <h3 class="title">{{ service.titre }}</h3>
            <div class="desc">
                <p>{{ service.description }}</p>
            </div>
            <NuxtLink to="#" class="link">Plus de Details</NuxtLink>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['service', 'addClassName']
    };
</script>