<template>
     <div class="descriptions">
                <span class="title">EmojiFinder</span>
                <span class="sub-title">
                    Encontre emojis com facilidade 😊
                </span>
            </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
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
</style>