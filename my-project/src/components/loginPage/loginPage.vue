<template>
    <div id="loginPage">
        <Header imgState=""></Header>
        <div style="display: flex">
            <Canvas></Canvas>
        </div>
        <div class="count">
            <span>{{ number }}</span>
        </div>
    </div>
</template>


<script>
    import Header from '../module/header';
    import Canvas from '../loginPage/canvas';

    let data = {
        number: '0%'
    };
    export default {
        data() {
            return data;
        },
        components: {
            Header,
            Canvas,
        },
        methods: {
            AddImg(imgState) {
                console.log(imgState);
            }
        },
        mounted() {
            let that = this;
            let start = setInterval(function () {
                if (parseInt(that.number, 10) <= 95) {
                    that.number = parseInt(that.number, 10) + 5 + '%';
                } else {
                    clearInterval(start);
                }
            }, 100);
        }
    };

</script>


<style lang="scss" scoped>
    #loginPage {
        background: rgba(0, 0, 0, 0.8);
        color: #fff;
        width: 100vw;
        height: 100vh;
        padding: 32px 50px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }

    .count {
        text-align: center;
        margin-bottom: 50px;

        span {
            display: inline-block;
            font-size: 1.5rem;
            padding: 5px 15px;
            border-top: 1px solid #fff;
            border-bottom: 1px solid #fff;
        }
    }

</style>
