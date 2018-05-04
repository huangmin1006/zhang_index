<template>
    <div class="index-header">
        <span>TOBY SCOTT</span>

        <div class="btn-func">
            <span class="small-font">中</span>
            <span class="small-font">EN</span>
        </div>

        <transition name="change">
            <div v-if="this.menuBtn" class="menu active" @click="toStateUrl">
                <span class="line"></span>
                <span class="line"></span>
                <span class="line"></span>
            </div>
            <div v-else class="menu" @click="toStateUrl">
                <span class="line"></span>
                <span class="line"></span>
                <span class="line"></span>
            </div>
        </transition>

    </div>

    
</template>

<script>
let data = {
    menuBtn: false
};
export default {
    data() {
        return data;
    },
    created() {
        this.menuBtn = this.imgState;
    },
    props: ["languge", "imgState"],
    methods: {
        toStateUrl() {
            this.menuBtn = !this.menuBtn;
            if (this.menuBtn) {
                this.$router.push("/index");
            } else {
                this.$router.push("/menu");
            }
        }
    }
};
</script>


<style lang="scss" scoped>
@import "../../common/_common.scss";

.small-font {
    @include fontToEmpty(1rem);
}
.index-header {
    width: 100%;
    padding: 32px 50px;
    font-size: 1.2rem;
    color: #fff;
    font-weight: 600;
    > span {
        flex: 1;
    }
}
.btn-func {
    float: right;
    span {
        padding-left: 1vw;
        font-weight: normal;
        float: left;
    }
}

.menu {
    cursor: pointer;
    float: right;
    .line {
        display: block;
        height: 3px;
        width: 25px;
        border-radius: 15px;
        background: #fff;
        margin: 3px 0;
    }
}
// vue动画组件使用
.change-enter-active,
.change-leave-active {
    transition: all 1s;
    background: red;
}

// 菜单动效
.active .line:nth-child(2) {
    opacity: 0;
}

.active .line:nth-child(1) {
    transform: translateY(6px) rotate(45deg);
}

.active .line:nth-child(3) {
    transform: translateY(-6px) rotate(-45deg);
}
</style>
