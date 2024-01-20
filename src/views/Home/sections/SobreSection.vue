<template>
  <div class="w-full flex justify-center py-4">
    <div class="w-full">
      
      <div class="flex flex-col text-center justify-center item-center gap-2">
        <h2 class="text-2xl font-lato font-normal">
          A Importância Vital de uma Landing Page para o Sucesso Online
        </h2>
        <h2 class="font-lato font-normal">
          No cenário digital atual, a criação e otimização de uma landing page são cruciais para o sucesso de qualquer empreendimento online. Uma landing page bem projetada serve como a porta de entrada para os visitantes, potenciais clientes e parceiros, desempenhando um papel crucial na conversão e na construção de relacionamentos. Aqui estão alguns tópicos que destacam a importância dessa peça-chave na estratégia digital:
        </h2>
      </div>

      <div class="flex flex-wrap w-full gap-7 justify-center py-4">
        <div
        class="gap-2 max-w-[270px] flex flex-col justify-start items-center border-4 px-2 rounded-lg"
        v-for="(topic, index) in topics" :key="index">
          <div class="min-h-[106px] text-center flex items-center">
            <h2 class="text-2xl pt-2 font-lato font-bold">{{ topic.title }}</h2>
          </div>
          <ul class=" max-w-[250px]">
            <li 
            class="font-lato font-normal mb-2"
            v-for="(point, pointIndex) in topic.content" :key="pointIndex">{{ point }}</li>
          </ul>
        </div>
     </div>

      <h2 class="font-lato font-normal text-center">
        Investir tempo e recursos na criação de uma landing page eficaz não é apenas uma prática recomendada, mas uma necessidade imperativa para qualquer empresa que busca prosperar no ambiente online altamente competitivo. É a base sobre a qual se constrói uma presença digital robusta e bem-sucedida.
      </h2>
    </div>
    
  </div>
  </template>
  
  <script>
  import { ref } from 'vue'
  
  export default {
    name: 'SobreSection',
    setup() {
      const topics = ref([
        {
          title: "Primeira Impressão Marcante",
          content: [
            "A landing page é muitas vezes a primeira interação que os visitantes têm com a sua marca online.",
            "Uma página bem elaborada cria uma impressão positiva e cativante, aumentando a probabilidade de retenção do usuário."
          ]
        },
        {
          title: "Foco na Conversão",
          content: [
            "A principal função de uma landing page é converter visitantes em leads ou clientes.",
            "Ao eliminar distrações e fornecer informações relevantes, ela orienta os visitantes para a ação desejada, seja preenchendo um formulário, fazendo uma compra ou participando de uma oferta."
          ]
        },
        {
          title: "Personalização para Audiência Alvo",
          content: [
            "Uma landing page permite a adaptação do conteúdo de acordo com a audiência específica.",
            "Segmentar mensagens e ofertas específicas para diferentes grupos de visitantes aumenta a relevância e a eficácia da página."
          ]
        },
        {
          title: "Melhoria na Experiência do Usuário (UX)",
          content: [
            "Uma landing page bem projetada garante uma experiência de usuário fluida e intuitiva.",
            "Elementos visuais atraentes, navegação simplificada e carregamento rápido contribuem para uma experiência positiva."
          ]
        },
        {
          title: "Análise e Otimização Contínua",
          content: [
            "Ferramentas de análise integradas permitem monitorar o desempenho da landing page.",
            "A capacidade de rastrear métricas como taxas de conversão e tempo de permanência facilita ajustes contínuos para melhorar a eficácia."
          ]
        },
        {
        title: "Geração de Leads Qualificados",
        content: [
          "Através de formulários de captura e calls-to-action direcionados, uma landing page ajuda a capturar informações valiosas sobre os visitantes.",
          "Isso resulta na geração de leads mais qualificados, facilitando o processo de conversão posterior."
        ]
        },
        {
          title: "Credibilidade e Profissionalismo",
          content: [
            "Uma landing page bem elaborada transmite profissionalismo e confiança.",
            "Isso contribui para a construção da credibilidade da marca, essencial para conquistar a confiança dos consumidores."
          ]
        },
        {
          title: "Integração com Estratégias de Marketing",
          content: [
            "A landing page é uma parte integrante de campanhas de marketing digital, como anúncios pagos, e-mail marketing e redes sociais.",
            "Garante consistência nas mensagens e maximiza o retorno sobre o investimento em marketing."
          ]
        },
        {
          title: "Adaptação a Dispositivos Móveis",
          content: [
            "Com o crescente uso de dispositivos móveis, uma landing page responsiva é essencial.",
            "Garante uma experiência otimizada em smartphones e tablets, atendendo a uma audiência diversificada."
          ]
        },
        {
          title: "Benchmarking e Inovação Constante",
          content: [
            "Observar as landing pages de concorrentes e líderes de mercado oferece insights valiosos para inovação.",
            "Permanecer atualizado com as tendências do design e da experiência do usuário é crucial para se destacar."
          ]
        } 
      ])
      return {
        topics
      };
    },
  };
  </script>
  