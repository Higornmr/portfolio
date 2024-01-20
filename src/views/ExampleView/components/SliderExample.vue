<template>
    <swiper-container 
    class="h-36 parallax-bg"
    slides-per-view="3" 
    speed="400" 
    loop="true"
    :autoplay="{delay: 2000}"
    :navigation="false" 
    :pagination="false"
    >
        <swiper-slide class="flex justify-center rounded-lg"
         v-for="(slide, index) in slides" :key="slide.id">
            <div 
            class="shadow-img flex justify-center items-center sm:h-[90px] sm:w-32 h-[90px] w-[90px] rounded-lg">
                <img :src="slide.bg" :alt="slide.alt" class="h-full w-full rounded-lg ">
            </div>
        </swiper-slide>
    </swiper-container>
</template>

<script>
import { ref } from 'vue'

export default {
    name: 'SliderExample',
    setup() {
        const slides = ref([
            {
                id: 1,
                bg: "./images/computador_1.webp",
                alt: "Img de um computador"
            },
            {
                id: 2,
                bg: "./images/celular.webp",
                alt: "Imagem de um celular"
            },
            {
                id: 3,
                bg: "./images/tres-telas.webp",
                alt: " imagem de varias telas"
            },
            {
                id: 4,
                bg: "./images/notebook.webp",
                alt: "Imagem de um notebook"
            },
            {
                id: 5,
                bg: "./images/tablet.webp",
                alt: "Imagem de um tablet"
            },
            {
                id: 6,
                bg: "./images/tres-telas-touch.webp",
                alt: "Imagens de varias telas"
            },       
        ])

        return {
            slides
        }
    }
}
</script>

<style>
.shadow-img {
    box-shadow: 4px 5px 10px rgba(99, 102, 241, 0.5);
    }

    @media only screen and (max-width: 640px) {
        .shadow-img {
            box-shadow: 2px 5px 8px rgba(99, 102, 241, 0.5);
            border-top-right-radius: 20px;
            border-bottom-right-radius: 20px;
        }
    }
</style>