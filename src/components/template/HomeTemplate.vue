<template>
    <div class="home-template">
        <div class="conteudo">
            <div class="descriptions">
                <span class="title">EmojiFinder</span>
                <span class="sub-title">
                    Encontre emojis com facilidade 😊
                </span>
            </div>


            <div class="input">
                <Input @searchEmoji="pesquisarEmoji"/>
            </div> 
            <div class="container-cards" v-if="emojiValue.length > 0">
                <Card v-for="dados in dadosFiltrados" :key="dados.title" :value="dados"/>            
            </div>
        </div>

        <footer>
              <div class="credito">
                <span>
                    Template inspirado no projeto <a href="https://www.kekfinder.ml/" target="_blak">KekFinder</a> 💙
                </span>
            </div>
        </footer>
    </div>
</template>

<script>
import Input from '@/components/atoms/Input.vue'
import Card from '@/components/molecules/Card.vue'
import {ref } from 'vue';
    export default {
        components:{
            Input,
            Card
        },
        props:{
            data: {type: Array}
        },
        setup(props){
            let dadosFiltrados = ref([])
            let emojiValue = ref ('')
            let datas = []
            datas.push(props.data)

            const pesquisarEmoji = (emoji) =>{
                emojiValue.value = emoji

                dadosFiltrados.value = datas[0].filter(data =>{
                    return data.keywords.includes(emoji)
                })
            }

            return{
                pesquisarEmoji,
                dadosFiltrados,
                emojiValue
            }
        },
    }
</script>

<style lang="scss" scoped>
.home-template{
    width: 100%;
    min-height: 100vh;
    padding: 4rem 1rem 1rem 1rem;
    background: #EAEDF0;
    .descriptions{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        span{
            display: block;
            margin: .5rem 0;
        }

        .title{
            font-weight: 700;
            font-size: 1.5em;
        }
        .sub-title{
            font-weight: 500;
        }
    }
    .credito{
        margin: 1.5rem 0;
        text-align: center;
        font-size: .8em;
        a{
            text-decoration: none;
            font-weight: bold;
            color: black;
        }
    }
    .input{
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 1.5rem 0;
    }
    .container-cards{
        margin-top: 2.5rem;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 1.2rem;
    }
}

</style>