<template>
  <div class="card" @click="copiar">
    <div class="imagem">
      <span>{{ value.symbol }}</span>

      <div class="title" v-if="!copied">
        <span>
          {{ value.title }}
        </span>
      </div>
    </div>

    <div class="mensagem" v-if="copied">
      <span>Copiado!</span>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  props: {
    value: { type: Object },
  },
  setup() {
    let copied = ref(false);
    return {
      copied,
    };
  },

  methods: {
    copiar() {
      this.$copyText(this.value.symbol);
      this.copied = true;
      setTimeout(() => {
        this.copied = false;
      }, 1500);
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  width: 170px;
  height: 170px;

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background: white;
  -webkit-box-shadow: 0px 10px 8px -1px rgba(0, 0, 0, 0.05);
  box-shadow: 0px 10px 8px -1px rgba(0, 0, 0, 0.05);
  transition: 0.2s ease;
  position: relative;

  &:hover {
    border: 5px solid rgb(177, 235, 245);
    cursor: pointer;
  }

  .imagem {
    span {
      font-size: 2em;
    }

    .title {
      position: absolute;
      width: 170px;
      bottom: 10px;
      left: 0;
      text-align: center;
      span {
        font-size: 0.7em;
      }
    }
  }
  .mensagem {
    position: absolute;
    bottom: 0;
    bottom: 6px;
    left: 6px;
    padding: 0.1rem;
    background: rgb(177, 235, 245);
    color: rgb(57, 107, 116);
    border-radius: 5px;
    span {
      font-size: 0.7em;
    }
  }
}
</style>