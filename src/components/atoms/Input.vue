<template>
  <input type="text" v-model="emoji" @keyup="pesquisarEmoji" />
</template>

<script>
import { ref } from "vue";
export default {
  setup(props, { emit }) {
    const emoji = ref("");

    const pesquisarEmoji = (e) => {
      emit("searchEmoji", emoji.value.toLowerCase());

      if(e.key){
        emit("searchEmoji", emoji.value.toLowerCase());
      }
    };

    return {
      emoji,
      pesquisarEmoji,
    };
  },
};
</script>

<style lang="scss" scoped>
input {
  padding: 0.8rem;
  width: 80%;
  border-radius: 5px;
  border: none;
  -webkit-box-shadow: 0px 10px 8px -1px rgba(0, 0, 0, 0.11);
  box-shadow: 0px 10px 8px -1px rgba(0, 0, 0, 0.11);
  transition: .2s ease-in-out;

  &:focus {
    outline: none;
    border: 3px solid rgb(177, 235, 245);
  }
}
</style>