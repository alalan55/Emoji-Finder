<template>
  <HomeTemplate :data="emojiData"/>
</template>

<script>
import Emoji from '@/data/emoji.js'
import HomeTemplate from '@/components/template/HomeTemplate.vue'
import { ref } from 'vue';

export default {
  name: "App",
  components: {
    HomeTemplate
  },

  setup(){
    let emojiData = ref([])
    
     const initData = () =>{
       emojiData.value = Emoji
     }

     initData();

     return{
       emojiData
     }
  }
};
</script>
