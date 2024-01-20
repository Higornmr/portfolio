<template>
  <div class="w-full py-4">
    <div class="flex flex-col items-center py-3">
      <h1 class="font-bold sm:text-7xl text-5xl">
        Crie seu website !
      </h1>

      <h2 class="sm:text-5xl text-3xl">
        Sua landingpage
      </h2>
    </div>
    
    <div class="flex items-center justify-center w-full">
      <IntroducaoSection />
    </div>

    <div>
      <SobreSection />
    </div>
  </div>
</template>

<script>
import IntroducaoSection from './sections/IntroducaoSection.vue';
import SobreSection from './sections/SobreSection.vue';

export default {
  name: 'Home',
  components: {
    IntroducaoSection,
    SobreSection,
  },
  setup() {

    return {

    };
  },
};
</script>
