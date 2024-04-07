<template>
  <div class="w-full py-4">
    <div class="flex flex-col gap-2 items-center pt-4 pb-14">
      <h1 class="font-bold sm:text-7xl text-5xl">
        Crie seu website !
      </h1>

      <h2 class="sm:text-5xl text-3xl">
        Sua landingpage !
      </h2>

      <h2 class="sm:text-3xl text-2xl">
        Sua MARCA !
      </h2>
    </div>
    
    <div class="flex items-center justify-center w-full">
      <IntroducaoSection />
    </div>

    <div>
      <SobreSection />
    </div>

    <div>
        <ContatoSection/>
    </div>
    
  </div>
</template>

<script>
import IntroducaoSection from './sections/IntroducaoSection.vue';
import SobreSection from './sections/SobreSection.vue';
import ContatoSection from './sections/ContatoSection.vue';

export default {
  name: 'Home',
  components: {
    IntroducaoSection,
    SobreSection,
    ContatoSection,
  },
  setup() {

    return {

    };
  },
};
</script>
