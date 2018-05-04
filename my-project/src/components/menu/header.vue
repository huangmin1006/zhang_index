<template>
    <div class="common-header">
        <span>{{$t('m.menu')}}</span>
        <div class="btn-func">
            <img :src="imgUrl.close" @click="toIndex" alt="">
            <span class="small-font">中</span>
            <span class="small-font">EN</span>
        </div>
    </div>
</template>

<script>
let data = {
    isImg: "",
    imgUrl: {
        close: require("../../assets/img/close.png"),
    }
};
export default {
    data() {
        return data;
    },
    props: ["languge", "imgState"],
    created() {
        if (this.languge === "en") {
            this.$i18n.locale = "en";
        } else {
            this.$i18n.locale = "ch";
        }
    },
    methods: {
        toIndex() {
            this.$router.push("/index");
        }
    }
};
</script>


<style lang="scss" scoped>
.small-font {
    color: #fff;
    font-size: 14px;
    font-weight: normal;
    padding-left: 1vw;
    cursor: pointer;
}
.common-header {
    width: 100%;
    padding: 32px 50px;
    font-size: 1.2rem;
    font-weight: 700;
    > span {
        float: left;
        color: rgba(255, 255, 255, 0.8);
        font-size: 5rem;
        height: 5rem;
        line-height: 5rem;
        opacity: 0.3;
    }
    .btn-func {
        float: right;
    }
}
img {
    cursor: pointer;
}
</style>
