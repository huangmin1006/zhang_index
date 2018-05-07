<template>
    <div class="index-header">
        <div>
            <span class="isMenu" v-if="isMenu">MENU</span>
            <div v-else>
                <div v-if="isIndex">
                    <span>TOBY SCOTT</span>
                </div>
                <div v-else>
                    <span>TOBY SCOTT</span>
                    <Tag></Tag>
                </div>
            </div>
        </div>

        <div class="btn-func">
            <span class="small-font">中</span>
            <span class="small-font">EN</span>
        </div>

        <!-- <transition name="change">
            <div class="menu">
                <span class="line"></span>
                <span class="line"></span>
                <span class="line"></span>
            </div>
        </transition> -->

    </div>


</template>

<script>
    import Tag from "../module/tag";


    let data = {
        menuBtn: false,
    };
    export default {
        data() {
            return data;
        },
        created() {
            this.menuBtn = this.imgState;

            console.log(this.isMenu, this.isProduction)
        },
        props: ["languge", "imgState", "isProduction", "isMenu", "isIndex"],
        methods: {
            // toStateUrl() {
            //     this.menuBtn = !this.menuBtn;
            //     if (this.menuBtn) {
            //         this.$router.push("/index");
            //     } else {
            //         this.$router.push("/menu");
            //     }
            // }
        },
        components: {
            Tag
        }
    };

</script>


<style lang="scss" scoped>
    @import "../../common/_common.scss";


    .index-header {
        width: 100%;
        padding: 32px 50px;
        font-size: 1.2rem;
        color: #fff;
        font-weight: 600;
        display: flex;
        justify-content: space-between;
        >div:first-child {
            flex: 1;
        }
    }

    .isMenu {
        @include fontToEmpty(5rem);
        color: rgba(255, 255, 255, .3);
    }

    .small-font {
        @include fontToEmpty(1rem);
        cursor: pointer;
    }

    .btn-func {
        float: right;
        span {
            padding-left: 1vw;
            font-weight: normal;
            float: left;
        }
    } // 菜单icon
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
    } // 菜单动效
    // .active .line:nth-child(2) {
    //     opacity: 0;
    // }
    // .active .line:nth-child(1) {
    //     transform: translateY(6px) rotate(45deg);
    // }
    // .active .line:nth-child(3) {
    //     transform: translateY(-6px) rotate(-45deg);
    // }

</style>
