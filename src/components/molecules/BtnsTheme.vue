<template>
  <div class="btns-wrapper">
    <div class="btns">
      <figure
        v-if="themeColor"
        class="light"
        :class="{ active_light: themeColor }"
        @click="changeTheme"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-sun"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#000"
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
        v-else
        class="dark"
        :class="{ active_dark: !themeColor }"
        @click="changeTheme"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-moon"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#000"
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
  setup(props, { emit }) {
    let themeColor = ref(true);

    const changeTheme = () => {
      themeColor.value == true
        ? (themeColor.value = false)
        : (themeColor.value = true);

      emit("changeTheme", themeColor.value);
    };

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
    width: 95px;
    margin: 0 auto;
    border-radius: 25px;
    overflow: hidden;
    -webkit-box-shadow: 0px 10px 8px -1px rgba(0, 0, 0, 0.1);
    box-shadow: 0px 10px 8px -1px rgba(0, 0, 0, 0.1);

    figure {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgb(82, 82, 82);
      padding: 0 0.5rem;
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
.active_light {
  background: white !important;
  .icon {
    filter: invert(88%) sepia(21%) saturate(5319%) hue-rotate(360deg)
      brightness(103%) contrast(109%);
  }
}
.active_dark {
  background: rgb(58, 57, 57) !important;
  .icon {
    filter: invert(69%) sepia(89%) saturate(2110%) hue-rotate(131deg)
      brightness(92%) contrast(101%);
  }
}
</style>