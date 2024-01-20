<template>
  <div class="w-full flex flex-col justify-center items-center relative">
    <div class="bg-[url('/images/mobile.webp')] bg-cover w-[241px] h-[474px]"></div>
    <div class="w-full sm:max-w-[510px] max-w-[320px] pl-3 pr-2 absolute bottom-14">
      <SliderExample />
    </div>
  </div>
   
  </template>
  
  <script>
  import SliderExample from '../../ExampleView/components/SliderExample.vue';
  export default {
    name: 'IntroducaoSection',
    components: {
      SliderExample,
    },
    setup() {
  
      return {
  
      };
    },
  };
  </script>
  