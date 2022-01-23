<template>
  <div class="home-template" :class="{ darkMode: !themeStyle }">
    <div class="conteudo">
      <Descriptions />
      <BtnsTheme class="btns-theme" @changeTheme="changeTheme" />

      <div class="input">
        <Input @searchEmoji="pesquisarEmoji" />
      </div>

      <div class="container-cards" v-if="emojiValue.length > 0">
        <Card
          v-for="dados in dadosFiltrados"
          :key="dados.title"
          :value="dados"
          :theme="!themeStyle"
        />
      </div>
    </div>
    <Footer :theme="!themeStyle" />
    <BtnToTop />
  </div>
</template>

<script>
import { ref } from "vue";

import Input from "@/components/atoms/Input.vue";
import Card from "@/components/molecules/Card.vue";
import Descriptions from "@/components/molecules/Descriptions.vue";
import Footer from "@/components/molecules/Footer.vue";
import BtnToTop from "@/components/atoms/ButtonToTop.vue";
import BtnsTheme from "@/components/molecules/BtnsTheme.vue";

export default {
  components: {
    Input,
    Card,
    Descriptions,
    BtnsTheme,
    Footer,
    BtnToTop,
  },
  props: {
    data: { type: Array },
  },
  setup(props) {
    let dadosFiltrados = ref([]);
    let emojiValue = ref("");
    let themeStyle = ref(true);
    let datas = [];
    datas.push(props.data);

    const pesquisarEmoji = (emoji) => {
      emojiValue.value = emoji;

      dadosFiltrados.value = datas[0].filter((data) => {
        return data.keywords.includes(emoji);
      });
    };

    const changeTheme = (e) => {
      themeStyle.value = e;
    };

    return {
      pesquisarEmoji,
      dadosFiltrados,
      emojiValue,
      changeTheme,
      themeStyle,
    };
  },
};
</script>

<style lang="scss" scoped>
.home-template {
  width: 100%;
  min-height: 100vh;
  padding: 4rem 1rem 1rem 1rem;
  // background: #202020;
  background: #eaedf0;

  .conteudo {
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
    .btns-theme {
      margin: 1.5rem 0;
    }
  }
}
.darkMode {
  background: rgb(32, 32, 32);
  color: white;

  a {
    color: white;
  }
}

@media screen and (max-width: 650px) {
  .conteudo {
    max-width: 100% !important;
  }
}
</style>