<template>
    <div class="mouse-icon">
        <span></span>
        <img src="../../../static/mouse.png" alt="">
        <span></span>
    </div>
</template>


<script>
    export default {
        data() {
            return {
                page: 1,
            };
        },

        props: {
            page: {
                default: 1,
                type: Number
            }
        }
    };

</script>


<style lang="scss" scoped>
   .mouse-icon{
       position: absolute;
       left: 50%;
       transform: translateX(-50%);
       bottom: 0;
       display: flex;
       align-items: center;
       flex-direction: column;
       justify-content: center;
       span{
           display: inline-block;
           width: 2px;
           height: 10px;
           background: #919191;
       }
       img{
           margin: 5px 0;
       }
   }
</style>
