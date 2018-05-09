<template>
    <div id="center">
        <div :class="[resumeClass, other]" @click="openResume">
            <!-- <img v-show="resumeClass" src="../../assets/img/photo.png" alt=""> -->
            <div class="title">
                <span class="name">R</span>
                <span v-show="resumeClass">Resume</span>
            </div>

            <div class="resume-show" v-show="resumeClass">
                <div class="user-name">
                    <span>Name</span>
                    <div>
                        <span>张文圣</span>
                        <span class="remark"> (Chinese name)</span>
                    </div>
                    <div>
                        <span>Toby Scott</span>
                        <span class="remark">(English name)</span>
                    </div>
                </div>

                <div class="user-age">
                    <span>Age</span>
                    <div>
                        <span>24</span>
                        <span class="remark">(1993/12/10)</span>
                    </div>
                </div>

                <div class="user-education">
                    <span>Education</span>
                    <div>
                        <span>College Graduate</span>
                        <span class="remark">(Sichuan Univasity Science & Engineering)</span>
                    </div>
                </div>
            </div>
        </div>

        <div :class="[companyClass, other]" class="bg2" @click="openCompany">
            <div class="title">
                <span class="name">C</span>
                <span v-show="companyClass">Company</span>
            </div>

            <div class="company-content" v-show="companyClass">
                <!-- 虚线 -->
                <span></span>

                <div class="company">
                    <!-- 实线 -->
                    <span></span>

                    <!-- 内容列表 -->
                    <div v-for="(v, k) in companyAll" :key="k" class="item">
                        <span class="time">{{ v.time }}</span>
                        <div class="img-div">
                            <img class="img" :src="v.imgSrc" alt="">
                        </div>
                        <span class="company-name"> {{v.name}} </span>
                    </div>
                </div>

            </div>
        </div>
        <div :class="[abilityClass, other]" class="bg3" @click="openAbility">
            <div class="title">
                <span class="name">A</span>
                <span v-show="abilityClass">Ability</span>
            </div>
        </div>
        <div :class="[skillClass, other]" class="bg4" @click="openSkill">
            <div class="title">
                <span class="name">S</span>
                <span v-show="skillClass">Skill</span>
            </div>
        </div>
    </div>
</template>


<script>
    export default {
        data() {
            return {
                other: "other",
                resumeClass: "", // 点击R显示个人信息(默认)
                companyClass: "companyClass", // 点击C显示个人信息
                abilityClass: "", // 点击A显示信息
                skillClass: "", // 点击S显示技能信息
                companyAll: [
                    {
                        time: "2014.10",
                        imgSrc: require('../../assets/guodou.png'),
                        name: "Chengdu Guodou Digtal Entertainment Co.,Ltd"
                    },
                    {
                        time: "2015.06",
                        imgSrc: require('../../assets/yiyunbao.png'),
                        name: "Chengdu Yunbao Technology Co.,Ltd"
                    },
                    {
                        time: "2015.11",
                        imgSrc: require('../../assets/hewei.png'),
                        name: "Shanghai Hewei Software Technology Co.,Ltd"
                    }
                ]
            };
        },
        methods: {
            openResume() {
                this.resumeClass = "resumeClass";
                this.companyClass = "";
                this.abilityClass = "";
                this.skillClass = "";
            },
            openCompany() {
                this.companyClass = "companyClass";
                this.resumeClass = "";
                this.abilityClass = "";
                this.skillClass = "";
            },
            openSkill() {
                this.skillClass = "skillClass";
                this.resumeClass = "";
                this.abilityClass = "";
                this.companyClass = "";
            },
            openAbility() {
                this.abilityClass = "abilityClass";
                this.resumeClass = "";
                this.skillClass = "";
                this.companyClass = "";
            }
        }
    };

</script>



<style lang="scss" scoped>
    @import "../../common/_common.scss";

    #center {
        flex: 1;
        background: #1c1c1c;
        display: flex;
    }

    .other {
        padding: 2rem;
        width: 15%;
        height: 100%;
        color: #474747;
        font-weight: 700;
        text-align: center;
    }

    .remark {
        @include fontToEmpty(1rem);
        color: #fff;
        opacity: 0.5; // white-space: nowrap;
        margin-right: 20px;
    }

    .title {
        color: #fff;
        font-size: 2rem;
        position: relative;
        text-align: center;
        .name {
            @include fontToEmpty(7rem);
            color: #fff;
            opacity: 0.2;
        }
        span:last-child {
            position: absolute;
            bottom: 0;
            left: 5px;
        }
    }

    %selCommon {
        padding: 2rem;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        overflow: hidden;
        position: relative;
        transition: all 300ms linear;
        .title {
            text-align: left;
        }
    } // 个人信息
    .resumeClass {
        @extend %selCommon;
        img {
            position: absolute;
            top: -10rem;
            left: 0;
            width: 100%;
        }
    }

    .resume-show {
        display: flex;
        justify-content: space-between;
        text-align: left;
        width: 60%;
        span {
            display: block;
            font-size: 1rem;
        }
        >div {
            >span {
                font-size: 1.5rem;
                font-weight: 700;
                color: #474747;
            }
            >div {
                margin-bottom: 1.5rem;
            }
            span:first-child {
                font-weight: 600;
            }
        }
    } // 就职公司
    .companyClass {
        @extend %selCommon;
    }

    .company-content {
        flex: 1;
        position: relative;
        padding: 2% 0;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        >span {
            width: 1px;
            height: 96%;
            background-image: linear-gradient( to bottom,
            #ccc 2%,
            #ccc 50%,
            transparent 50%);
            background-size: 1px 8px;
            background-repeat: repeat-y;
            position: absolute;
            top: 2%;
            left: 4.7rem;
        }
        .company {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            >span {
                width: 1px;
                height: 60%;
                position: absolute;
                top: 20%;
                left: 4.7rem;
                background: #fff;
            }
        }

        .item {
            display: flex;
            margin: 1% 0;
            .img-div {
                display: inline-block;
                width: 5rem;
            }
            span:first-child {
                position: relative;
                padding-right: 1.5rem;
            }
            span:first-child::after {
                position: absolute;
                right: 0;
                top: 4px;
                display: block;
                content: "";
                border-radius: 50%;
                background: #191919;
                width: 1rem;
                height: 1rem;
                border: 2px solid #fff;
                z-index: 99;
            }
            .time {
                padding-right: 1rem;
            }
            .company-name {
                color: #fff;
            }
        }
    } // 个人能力
    .abilityClass {
        @extend %selCommon;
    } // 个人技能
    .skillClass {
        @extend %selCommon;
    }

    .bg2 {
        background: #191919;
    }

    .bg3 {
        background: #111;
    }

    .bg4 {
        background: #191919;
    }

</style>
