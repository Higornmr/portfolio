<template>
    <div id="contato" class="contact-section flex flex-col justify-center items-center gap-20 py-20 px-2 w-full">
        <h2 class="font-bold font-lato text-2xl">Entre em Contato</h2>
        <div class="form-container w-full">
            <form class="flex flex-wrap justify-center items-center gap-8 w-full" action="https://formsubmit.co/bd45f493d685ad7920b7a28c68a03c41" method="POST">
                <div class="flex flex-wrap justify-center items-center w-full gap-3">
                    <div class="sm:w-1/2 sm:max-w-[400px] w-full">
                        <label class="font-bold" for="name">Nome:</label>
                        <input class="w-full p-4 border border-gray-300 rounded-md" type="text" id="name" name="name" placeholder="Seu Nome">
                    </div>

                    <div class="sm:w-1/2 sm:max-w-[400px] w-full">
                        <label class="font-bold" for="email">E-mail:</label>
                        <input class="w-full p-4 border border-gray-300 rounded-md" type="email" id="email" name="email" placeholder="Seu E-mail">
                    </div>
                </div>

                <div class="flex flex-wrap justify-center items-start w-full gap-3">
                    <div class="sm:w-1/2 sm:max-w-[400px] w-full">
                        <label class="font-bold" for="phone">Telefone:</label>
                        <input class="w-full p-4 border border-gray-300 rounded-md" type="tel" id="phone" name="phone" placeholder="Seu Telefone">
                    </div>

                    <div class="sm:w-1/2 sm:max-w-[400px] w-full">
                        <label class="font-bold" for="message">Mensagem:</label>
                        <textarea class="w-full h-[60px] p-4 border border-gray-300 rounded-md" id="message" name="message" placeholder="Sua Mensagem"></textarea>
                    </div>
                </div>
                
                <button class="submit-btn bg-black text-white p-4 rounded-md cursor-pointer w-36" type="submit" target="_blank">Enviar</button>
            </form>
        </div>
        <div class="whatsapp-btn-container flex flex-col gap-3 items-center">
            <h2 class="font-bold font-lato text-2xl">Ou tire suas dúvidas através do WhatsApp:</h2>
            <a class="whatsapp-btn flex items-center gap-4 p-4 bg-green-500 text-white rounded-md cursor-pointer" target="_blank" href="https://api.whatsapp.com/send?phone=01517997017533&text=Olá, gostaria de entrar em contato."
            >
                <img class="w-6 h-6" :src="icon[0].img" :alt="icon[0].alt">
                WhatsApp
            </a>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'ContatoSection',
  setup() {
    const icon = ref([
        {
            id: 1,
            img: "./images/icone-whatsapp.svg",
            alt: "Icon WhatsApp"
        }
    ])
    return {
        icon
    }
  }
};
</script>