<template>
    <swiper-container 
        slides-per-view="3" 
        speed="500" 
        loop="true" 
        :navigation="false" 
        :pagination="false"
    >
        <swiper-slide v-for="(slide, index) in slides" :key="index">
            <div class="flex justify-center items-center sm:h-32 sm:w-32 h-[90px] w-[90px] bg-blue-900 rounded-lg">
                <h3 class="text-2xl text-white">{{ slide }}</h3>
            </div>
        </swiper-slide>
    </swiper-container>
</template>

<script>
import { ref } from 'vue'

export default {
    setup() {
        const slides = ref([
            'Vue 3',
            'Vite',
            'Tailwind',
            'Pinia',
            'Js',
            'VsCode',
            
        ])

        return {
            slides
        }
    }
}
</script>

<style></style>