<template>
    <div id="index" @mousemove="bgPlaceChange($event)" :style="style">
        <Header isIndex="index"></Header>
        <Center></Center>
        <Footer></Footer>
        <div class="center-bg" :style="moveBg"></div>
        <div class="page-count">
            <span>01</span>
            <span class="line"></span>
            <span>04</span>
        </div>
    </div>
</template>

<script>
import Footer from "../module/footer";
import Center from "./center";
import Header from "../module/header";
let data = {
    sizeX: "",
    sizeY: "",
    moveBg: "",
    style: { minHeight: window.innerHeight + "px" }
};

export default {
    data() {
        return data;
    },
    methods: {
        bgPlaceChange(e) {
            this.sizeX = Math.round(e.x / 20) + "px";
            this.sizeY = Math.round(e.y / 20) + "px";
            this.moveBg = `transform: translateY(${this.sizeY}) translateX(${
                this.sizeX
            })`;
        }
    },
    components: {
        Footer,
        Center,
        Header
    }
};
</script>

<style lang="scss" scoped>
@import "../../assets/resetNew.css";
// 编写
#index {
    background-color: #2c2c2c;
    height: 100vh;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
}

.page-count {
    width: 100px;
    height: 70px;
    background: #1f1f1f;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    font-weight: normal;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .line {
        width: 50px;
        height: 2px;
        background: #fff;
        margin: 5px 0;
        border-radius: 15px;
    }
}

// 滚动视差背景
.center-bg {
    width: 70vw;
    height: 70vh;
    background: rgba(131, 128, 128, 0.788);
    position: absolute;
    z-index: -1;
    transition: all 300ms linear;
    top: 15%;
    left: 15%;
}
</style>
