<template>
  <div class="home-template">
    <div class="conteudo">
      <Descriptions />

      <div class="input">
        <Input @searchEmoji="pesquisarEmoji" />
      </div>
      
      <div class="container-cards" v-if="emojiValue.length > 0">
        <Card
          v-for="dados in dadosFiltrados"
          :key="dados.title"
          :value="dados"
        />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Input from "@/components/atoms/Input.vue";
import Card from "@/components/molecules/Card.vue";
import Descriptions from "@/components/molecules/Descriptions.vue";
import Footer from "@/components/molecules/Footer.vue";
import { ref } from "vue";
export default {
  components: {
    Input,
    Card,
    Descriptions,
    Footer,
  },
  props: {
    data: { type: Array },
  },
  setup(props) {
    let dadosFiltrados = ref([]);
    let emojiValue = ref("");
    let datas = [];
    datas.push(props.data);

    const pesquisarEmoji = (emoji) => {
      emojiValue.value = emoji;

      dadosFiltrados.value = datas[0].filter((data) => {
        return data.keywords.includes(emoji);
      });
    };

    return {
      pesquisarEmoji,
      dadosFiltrados,
      emojiValue,
    };
  },
};
</script>

<style lang="scss" scoped>
.home-template {
  width: 100%;
  min-height: 100vh;
  padding: 4rem 1rem 1rem 1rem;
  background: #eaedf0;

  .conteudo{
    max-width: 70%;
    margin: 0 auto;
    .descriptions {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
  
      span {
        display: block;
        margin: 0.5rem 0;
      }
  
      .title {
        font-weight: 700;
        font-size: 1.5em;
      }
      .sub-title {
        font-weight: 500;
      }
    }
    .input {
      display: flex;
      align-items: center;
      justify-content: center;
      max-width: 60%;
      margin: 1.5rem auto;
    }
    .container-cards {
      margin-top: 2.5rem;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      gap: 1.2rem;
    }
  }
}

@media screen and (max-width: 650px){
  .conteudo{
    max-width: 100% !important;
  }
}
</style>