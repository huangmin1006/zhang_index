<template>
    <div id="index" @mousemove="bgPlaceChange($event)" :style="style">
        <!-- 最底层 -->
        <div class="z0-layer">
            <div class="z0-layer_item item"></div>
            <div class="z0-layer_item2 item"></div>
            <div class="z0-layer_item item"></div>
            <div class="z0-layer_item2 item"></div>
            <div class="bg_text">
                <svg width="696px" height="155px" viewBox="0 0 696 155" version="1.1" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink">
                    <!-- Generator: Sketch 52.4 (67378) - http://www.bohemiancoding.com/sketch -->
                    <title>mdpi/REMUSE Copy</title>
                    <desc>Created with Sketch.</desc>
                    <g id="英文" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.200000003">
                        <path d="M62.8,32.4 L39,32.4 L39,62 L62.8,62 L62.8,32.4 Z M0,154.2 L0,0 L91.6,0 L102,10.6 L102,67.8 L91,78.4 L101.8,89.6 L101.8,154.2 L62.8,154.2 L62.8,95 L39,95 L39,154.2 L0,154.2 Z M113.6,154.2 L113.6,0 L201,0 L201,37 L152.6,37 L152.6,57.2 L196.8,57.2 L196.8,94.2 L152.6,94.2 L152.6,115.6 L200.4,115.6 L200.4,154.2 L113.6,154.2 Z M211.2,154.2 L211.2,0 L271.2,0 L291,99.8 L291.2,99.8 L309.6,0 L371.2,0 L371.2,154.2 L335.8,154.2 L335.8,37.6 L335.6,37.6 L309.2,154.2 L272.8,154.2 L246.4,37.6 L246.2,37.6 L246.2,154.2 L211.2,154.2 Z M382.8,143.8 L382.8,0 L421.6,0 L421.6,119.8 L445,119.8 L445,0 L483.8,0 L483.8,143.8 L473.2,154.2 L393.8,154.2 L382.8,143.8 Z M495.4,144 L495.4,100.6 L534.8,98 L534.8,120.2 L557.2,120.2 L557.2,100.8 L495.4,70.8 L495.4,10.6 L506.4,0 L587.2,0 L596.8,10.6 L596.8,46.4 L557.6,49 L557.6,33 L535,33 L535,47.6 L596.6,77.6 L596.6,144 L587.2,154.2 L506.4,154.2 L495.4,144 Z M608.4,154.2 L608.4,0 L695.8,0 L695.8,37 L647.4,37 L647.4,57.2 L691.6,57.2 L691.6,94.2 L647.4,94.2 L647.4,115.6 L695.2,115.6 L695.2,154.2 L608.4,154.2 Z"
                            id="REMUSE-Copy" fill="#FFFFFF"></path>
                    </g>
                </svg>
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
