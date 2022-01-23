<template>
  <input
    type="text"
    v-model="emoji"
    @input="pesquisarEmoji"
    :class="{ darkMode: theme }"
  />
</template>

<script>
import { ref } from "vue";
export default {
  props: {
     theme: {type: Boolean}
  },
  setup(props, { emit }) {
    const emoji = ref("");

    const pesquisarEmoji = (e) => {
      emit("searchEmoji", emoji.value.toLowerCase());

      if (e.key) {
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
  width: 100%;
  border-radius: 5px;
  border: none;
  -webkit-box-shadow: 0px 10px 8px -1px rgba(0, 0, 0, 0.11);
  box-shadow: 0px 10px 8px -1px rgba(0, 0, 0, 0.11);
  transition: 0.2s ease-in-out;

  &:focus {
    outline: none;
    border: 3px solid rgb(177, 235, 245);
  }
}
.darkMode {
  background: rgb(22, 22, 22)  !important;
  color: white;
}
</style>