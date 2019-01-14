<template>
    <div id="index" @mousemove="bgPlaceChange($event)" :style="style">
        <!-- 最底层 -->
        <div class="z0-layer">
            <div class="z0-layer_item item"></div>
            <div class="z0-layer_item2 item"></div>
            <div class="z0-layer_item item"></div>
            <div class="z0-layer_item2 item"></div>
            <div class="bg_text">
                <svg-icon icon-class="letter-resume" />
            </div>
        </div>
        <vue-canvas-nest class="z1-layer" :config="config" :el="'#index'"></vue-canvas-nest>
        <div class="z2-layer">
            <Header isIndex="index"></Header>
            <Center></Center>
            <Footer></Footer>
            <Mouse></Mouse>
            <page-count></page-count>
        </div>
    </div>
</template>

<script>
    import Footer from '../module/footer';
    import Center from './center';
    import Header from '../module/header';
    import Mouse from '../module/mouse';
    import pageCount from '../module/pageCount';
    import vueCanvasNest from 'vue-canvas-nest';

    let data = {
        sizeX: '',
        sizeY: '',
        moveBg: '',
        config: {
            color: '255,255,255',
            opacity: 0.7,
            zIndex: 1,
            count: 150,
        },
        style: {
            minHeight: window.innerHeight + 'px'
        }
    };

    export default {
        data() {
            return data;
        },
        methods: {
            bgPlaceChange(e) {
                this.sizeX = Math.round(e.x / 20) + 'px';
                this.sizeY = Math.round(e.y / 20) + 'px';
                this.moveBg = `transform: translateY(${this.sizeY}) translateX(${
        this.sizeX
      })`;
            }
        },
        components: {
            Footer,
            Center,
            Header,
            pageCount,
            vueCanvasNest,
            Mouse
        }
    };

</script>

<style lang='scss' scoped>
    @import "../../assets/resetNew.css";

    // 编写
    #index {
        height: 100%;
        color: #fff;
        position: relative;
    }

    .z0-layer {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        z-index: 0;
        display: flex;
    }

    .z1-layer {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        z-index: 1;
    }

    .z2-layer {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        z-index: 2;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }



    .item {
        width: 25%;
        height: 100%;
    }

    .z0-layer_item {
        background: rgba(0, 0, 0, 0.9);
    }

    .z0-layer_item2 {
        background: rgba(0, 0, 0, .8);
        border: solid 1px rgba(255, 255, 255, 0.05);
    }

    .bg_text {
        position: absolute;
        top: 20%;
        left: 9.5%;
        font-size: 12em;
        color: rgba(255, 255, 255, .2);
        font-weight: 700;
    }

</style>
