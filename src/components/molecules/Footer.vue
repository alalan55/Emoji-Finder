<template>
  <footer :class="{darkMode: theme}">
    <div class="footer">
      <span>
        Template inspirado no projeto
        <a href="https://www.kekfinder.ml/" target="_blak">KekFinder</a> 💙
      </span>
    </div>
  </footer>
</template>
<script>
export default {
  props:{
    theme:{type: Boolean, default: false}
  }
}
</script>
<style lang="scss" scoped>
.footer {
  margin: 1.5rem 0;
  text-align: center;
  font-size: 0.8em;
  a {
    text-decoration: none;
    font-weight: bold;
    color: black;
  }
}
.darkMode{
  a{
    color: white;
  }
}
</style>