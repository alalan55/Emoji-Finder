<template>
  <div class="btns-wrapper">
    <div class="btns">
      <figure
        class="light"
        :class="{ active: themeColor }"
        @click="changeTheme"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-sun"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#ffffff"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <circle cx="12" cy="12" r="4" />
          <path
            d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"
          />
        </svg>
      </figure>

      <figure
        class="dark"
        :class="{ active: !themeColor }"
        @click="changeTheme"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-moon"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#ffffff"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path
            d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"
          />
        </svg>
      </figure>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  setup(props,{emit}) {
    let themeColor = ref(true);
    
    const changeTheme = () => {
      themeColor.value == true
        ? (themeColor.value = false)
        : (themeColor.value = true);

        emit('changeTheme', themeColor.value)
    }

    return { themeColor, changeTheme };
  },
};
</script>

<style lang="scss" scoped>
.btns-wrapper {
  .btns {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 110px;
    margin: 0 auto;
    border-radius: 20px;
    overflow: hidden;

    figure {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgb(97, 96, 96);
      cursor: pointer;
      transition: 0.2s ease-in-out;
         

      &:hover {
        background: rgb(148, 144, 144);
      }

      .icon {
        width: 25px;
      }
    }
  }
}
.active {
  background: rgb(168, 165, 165) !important;
//   border: 1px solid;
}
</style>