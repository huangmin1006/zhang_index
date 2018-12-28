<template>
    <div :class="[{resumeClass: showType === showType}, other, common]" @mouseenter="showDetail(showType)" @mouselever="hiddenDetail(showType)">
        <div class="title">
            <span class="name">
                <svg width="42px" height="63px" viewBox="0 0 42 63" version="1.1" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink">
                    <g id="英文" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.200000003">
                        <g id="v" transform="translate(-52.000000, -287.000000)" fill="#FFFFFF">
                            <path d="M77.44,300.36 L67.92,300.36 L67.92,312.2 L77.44,312.2 L77.44,300.36 Z M52.32,349.08 L52.32,287.4 L88.96,287.4 L93.12,291.64 L93.12,314.52 L88.72,318.76 L93.04,323.24 L93.04,349.08 L77.44,349.08 L77.44,325.4 L67.92,325.4 L67.92,349.08 L52.32,349.08 Z"
                                id="R"></path>
                        </g>
                    </g>
                </svg>
            </span>
            <span class="sub-title">Resume</span>
        </div>

        <div class="default-img">
            <svg width="100px" height="100px" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink">
                <g id="英文" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.200000003">
                    <g id="v" transform="translate(-49.000000, -408.000000)" fill="#FFFFFF" fill-rule="nonzero">
                        <path d="M99,455 C111.150264,455 121,445.150264 121,433 C121,420.849736 111.150264,411 99,411 C86.8497355,411 77,420.849736 77,433 C77,445.150264 86.8497355,455 99,455 Z M49,508 C49,480.385763 71.3857625,458 99,458 C126.614237,458 149,480.385763 149,508 L146,508 C146,482.042617 124.957383,461 99,461 C73.0426168,461 52,482.042617 52,508 L49,508 Z M99,458 C85.1928813,458 74,446.807119 74,433 C74,419.192881 85.1928813,408 99,408 C112.807119,408 124,419.192881 124,433 C124,446.807119 112.807119,458 99,458 Z"
                            id="Combined-Shape"></path>
                    </g>
                </g>
            </svg>
        </div>

        <div class="resume-show" v-show="showType === 'resumeClass'">
            <div class="user-name">
                <span class="color999 font30 fontblod marginb10">Name</span>
                <div class="info">
                    <span class="colorfff">张文圣</span>
                    <span class="remark">(Chinese name)</span>
                </div>
                <div class="info margint10">
                    <span class="colorfff">Toby Scott</span>
                    <span class="remark">(English name)</span>
                </div>
            </div>

            <div class="user-age">
                <span class="color999 font30 fontblod marginb10">Age</span>
                <div class="info">
                    <span class="colorfff">24</span>
                    <span class="remark">(1993/12/10)</span>
                </div>
            </div>

            <div class="user-education">
                <span class="color999 font30 fontblod marginb10">Education</span>
                <div class="info">
                    <span class="colorfff">College Graduate</span>
                    <span class="remark">(Sichuan Univasity Science & Engineering)</span>
                </div>
            </div>
        </div>

        <div class="bg_div"></div>

        <div class="self-img">
            <img src="../../../static/photo.png" alt="">
        </div>
    </div>
</template>


<script>
    import vueCanvasNest from 'vue-canvas-nest';
    export default {
        data() {
            return {
                common: 'common',
                other: '',
                showType: '',
                config: {
                    // 配置点线
                    color: '255,255,255',
                    opacity: 0.7,
                    zIndex: 1,
                    count: 150
                },
                companyAll: [{
                        time: '2014.10',
                        imgSrc: require('../../../static/guodou.png'),
                        name: 'Chengdu Guodou Digtal Entertainment Co.,Ltd'
                    },
                    {
                        time: '2015.06',
                        imgSrc: require('../../../static/yiyunbao.png'),
                        name: 'Chengdu Yunbao Technology Co.,Ltd'
                    },
                    {
                        time: '2015.11',
                        imgSrc: require('../../../static/hewei.png'),
                        name: 'Shanghai Hewei Software Technology Co.,Ltd'
                    }
                ]
            };
        },
        props: ['showType'],
        methods: {
            showDetail(item, e) {
                this.showType = item;
            },
            hiddenDetail() {

            }
        },
        components: {
            vueCanvasNest
        }
    };

</script>



<style lang="scss" scoped>
    @import "../../assets/common";

    .bg1 {
        background: rgba(255, 255, 255, 0);
    }

    .bg_div {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(255, 255, 255, 0.1);
    }

    .bg2 {
        background: rgba(26, 26, 26, 0.6);
    }

    .bg3 {
        background: rgba(0, 0, 0, 0.8);
    }

    .bg4 {
        background: rgba(26, 26, 26, 0.9);
    }

    #center {
        flex: 1;
        background: #232323;
        position: relative;
    }

    .z1-index {
        height: 100%;
        display: flex;
    }

    .title {
        color: #fff;
        font-size: 2rem;
        position: relative;
        text-align: center;

        .name {
            color: #fff;
        }

        svg {
            width: 50px;
            height: 74px;
        }

        .sub-title {
            position: absolute;
            bottom: 0;
            left: 0;
        }

        span:last-child {
            position: absolute;
            bottom: 0;
            left: 0;
        }
    }

    .resume_index {
        position: absolute;

        height: 100%;
        left: 0;
        top: 0;
        z-index: 99;
        padding-left: 50px;
        color: #474747;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;

        .sub-title {
            display: block;
        }

        .default-img {
            display: block;
            margin-top: 50px;
        }

        .self-img {
            display: none;
        }
    }

    .self-img {
        background: rgba(255, 255, 255, 0.1);
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 0;

        img {
            position: absolute;
            left: 0;
            top: -35%;
            height: 180%;
            width: 100%;
        }
    }

    .common {
        flex: 1;
        height: 100%;
        padding-left: 50px;
        color: #474747;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        position: relative;

        .sub-title {
            display: block;
        }

        .default-img {
            display: block;
            margin-top: 50px;
        }

        .self-img {
            display: none;
        }
    }

    // 选中其中一项，其他自动添加样式
    .other {
        width: 11%;
        padding-top: 20px;
        justify-content: flex-start;
        align-items: center;
        padding-left: 0;

        .resume_index {
            width: 100%;
            padding: 0;
            padding-top: 20px;
            align-items: center;
            justify-content: flex-start;
        }

        .sub-title {
            display: none;
        }

        .default-img {
            display: none;
        }
    }

    .remark {
        font-size: 14px;
        color: #fff;
        opacity: 0.5; // white-space: nowrap;
        margin-right: 20px;
    }

    %selCommon {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        overflow: hidden;
        position: relative;
        transition: all 300ms linear;
        padding-left: 50px;

        .title {
            align-self: flex-start;
        }

        .sub-title {
            display: block;
        }
    }

    // 个人信息
    .resumeClass {
        @extend %selCommon;
        align-items: flex-start;
        z-index: 99;

        .resume_index {
            width: calc(100% - 50px);
            height: calc(100% - 20px);
            background: rgba(0, 0, 0, 0.5);
            padding: 0;
            padding-top: 20px;
            padding-left: 50px;
            align-items: flex-start;
        }

        .self-img {
            display: block;
        }
    }

    .resume-show {
        flex: 1;
        display: flex;
        justify-content: space-between;
        padding-top: 10%;
        text-align: left;
        width: 60%;
    }

    .info {
        font-size: 18px;

        span {
            display: block;
        }
    }



    // 就职公司
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
            background-image: linear-gradient(to bottom,
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
    }

    // 个人能力
    .abilityClass {
        @extend %selCommon;
    }

    // 个人技能
    .skillClass {
        @extend %selCommon;
    }

</style>
