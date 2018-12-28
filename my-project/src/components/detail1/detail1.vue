<template>
    <div id="detail1">
        <vue-canvas-nest class="bg" :config="{color:'0,0,0', count: 100}" :el="'#detail1'"></vue-canvas-nest>
        <span>哈哈</span>
    </div>
</template>


<script>
    import vueCanvasNest from 'vue-canvas-nest';
    let data = {};
    export default {
        data() {
            return data;
        },
        components: {
            vueCanvasNest
        }
    };

</script>


<style lang="scss" scoped>
    .bg {
        position: fixed;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
    }

    #detail1{
        height: 100%;
    }
</style>
