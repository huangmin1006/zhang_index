<template>
    <div id="production">
        <Header isProduction="production"></Header>
        <page-count></page-count>  
        <div class="center" ref="move" @scroll="move">
            <div class="box1">
                <span>1</span>
            </div>
            <div class="box1">
                <span>2</span>
            </div>
            <div class="box1">
                <span>3</span>
            </div>
            <div class="box1">
                <span>4</span>
            </div>
            <div class="box1">
                <span>5</span>
            </div>
            <div class="box1">
                <span>6</span>
            </div>
            <div class="box1">
                <span>7</span>
            </div>
            <div class="box1">
                <img src="" alt="">
                <p class="title">我是大标题</p>
                <p>fskdjfsjfsdkjfksjfsdjfskfjkdj</p>
                <p>{{ nowDate }}</p>
            </div>
            <div class="bar" :style="{width: size}">
                <div></div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>


<script>
    import Header from "../module/header";
    import Footer from "../module/footer";
    import pageCount from "../module/pageCount";
    let data = {
        production: true,
        nowDate: Date(),
        size: ""
    };
    export default {
        data() {
            return data;
        },
        created() {
            this.nowDate = this.nowDate.slice(0, 15);
        },
        methods: {
            move(e) {}
        },
        mounted() {
            let item = this.$refs.move;
            item.focus();
            // 内容运动时，进度条进度展示
            item.onscroll = () => {
                this.size = parseInt(parseInt(item.scrollWidth) / 2624 * parseInt(item.scrollLeft)) + "px";
            }
        },
        components: {
            Header,
            Footer,
            pageCount
        }
    };

</script>


<style lang="scss" scoped>
    #production {
        height: 100vh;
        width: 100vw;
        background-color: #2c2c2c;
        position: relative;
        color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        overflow: hidden;
    }

    .center {
        position: relative;
        box-sizing: border-box;
        width: 100vw;
        height: 100%;
        padding: 20px;
        background: #1c1c1c;
        flex: 1;
        display: flex;
        overflow-x: scroll;
        overflow-y: hidden;
    } // 作品列表
    .box1 {
        height: 100%;
        min-width: 500px;
        margin-right: 20px;
        background: #282828;
        padding: 20px;
        color: #fff;
        img {
            display: inline-block;
            width: 100%;
            height: 200px;
        }
    }

    ::-webkit-scrollbar {
        display: none;
    }

    .bar {
        height: 5px;
        position: absolute;
        bottom: 0;
        left: 0;
        div {
            height: 3px;
            background: aqua;
        }
    }

</style>
