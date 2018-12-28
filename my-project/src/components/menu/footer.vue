<template>
    <div id="footer">
        <span class="bold_span">LINKS</span>
        <div class="typeUrl">
            <div class="img-div" v-for="(item, index) in imgDiv" :key="index" @mouseover="overBg(item)" @mouseout="outBg(item)" @click="toItemUrl(item)">
                <img v-if="index === 3" style="padding: 12px 0" :src="item.imgSrc" alt="">
                <img v-else :src="item.imgSrc" alt="">
                <p> {{ item.text }} </p>
            </div>
        </div>
    </div>
</template>


<script>
let data = {
    imgDiv: [
        {
            imgSrc: './static/ball.png',
            text: 'DRIBBBLE',
            url: 'https://dribbble.com/toby_scott'
        },
        {
            imgSrc: './static/behance.png',
            text: 'BEHANCE',
            url: 'https://behance.net/toby_scott'
        },
        {
            imgSrc: './static/UIcn.png',
            text: 'UI.CN',
            url: 'https://i.ui.cn/ucenter/107535.html'
        },
        {
            imgSrc: './static/zcool.png',
            text: 'ZCOOL',
            url: 'https://www.zcool.com.cn/u/1252493'
        }
    ],
    pClass: ''
};
export default {
    data() {
        return data;
    },
    methods: {
        overBg(item) {
            this.$nextTick(function() {
                let newSrc = item.imgSrc.replace('.png', '2.png');
                item.imgSrc = newSrc;
            });
        },
        outBg(item) {
            this.$nextTick(function() {
                let newSrc = item.imgSrc.replace('2.png', '.png');
                item.imgSrc = newSrc;
            });
        },
        toItemUrl(item) {
            window.open(item.url);
        }
    },
    watch: {
        textState() {
            this.pClass = 'img-div-p';
        }
    }
};
</script>


<style lang="scss" scoped>
#footer {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    font-size: 2rem;
    align-items: center;
    height: 13rem;
    background: rgba(0, 0, 0, 0.2);
}
.bold_span {
    color: #414141;
    font-weight: 900;
}
.typeUrl {
    width: 70%;
    display: flex;
    justify-content: space-around;
}
.img-div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    color: #414141;
    font-weight: 700;
    // transition: all 300ms linear;
    font-size: 1.5rem;
    &:hover {
        color: #fff;
    }
}
</style>
