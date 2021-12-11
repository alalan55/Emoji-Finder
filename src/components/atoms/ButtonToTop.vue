<template>
  <button ref="button" @click="topPage">
    <i class="fas fa-arrow-up"></i>
  </button>
</template>

<script>
import { ref, onMounted } from "vue";
export default {
  setup() {
    const button = ref(null);

    window.onscroll = function () {
      scrollFunction();
    };

    const scrollFunction = () => {
      if (
        document.body.scrollTop > 1000 ||
        document.documentElement.scrollTop > 1000
      ) {
        button.value.style.display = "block";
      } else {
        button.value.style.display = "none";
      }
    };

    onMounted(() => {
      scrollFunction();
    });

    const topPage = () => {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    };

    return {
      button,
      topPage,
    };
  },
};
</script>

<style lang="scss" scoped>
button {
  height: 50px;
  width: 50px;
  position: fixed;
  bottom: 35px;
  right: 35px;
  background: white;
  border: none;
  border-radius: 5px;
  -webkit-box-shadow: 0px 10px 8px -1px rgba(0, 0, 0, 0.11);
  box-shadow: 0px 10px 8px -1px rgba(0, 0, 0, 0.11);
  transition: 0.2s ease-in-out;
  cursor: pointer;
  i {
    color: black;
  }

  &:hover {
    -webkit-box-shadow: 0px 10px 8px -1px rgba(0, 0, 0, 0.18);
    box-shadow: 0px 10px 8px -1px rgba(0, 0, 0, 0.18);
  }
}
</style>