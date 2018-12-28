<template>
    <div id="center">
        <div class="z1-index">
            <div :class="[{resumeClass: showType === 'resumeClass'}, other, common]" @mouseenter="showDetail('resumeClass')">
                <div class="resume_index">
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
                </div>

                <div class="bg_div"></div>

                <div class="self-img">
                    <img src="../../../static/photo.png" alt="">
                </div>
            </div>
            <div :class="[{resumeClass: showType === 'companyClass'}, other, common]" class="bg2" @mouseenter="showDetail('companyClass')">
                <div class="title">
                    <span class="name">
                        <svg width="41px" height="63px" viewBox="0 0 41 63" version="1.1" xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink">
                            <g id="英文" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.200000003">
                                <g id="v" transform="translate(-393.000000, -287.000000)" fill="#FFFFFF">
                                    <polygon id="C" points="393.32 344.92 393.32 291.64 397.72 287.4 429 287.4 433.4 291.64 433.4 308.92 417.88 309.96 417.88 301.08 408.84 301.08 408.84 335.32 417.96 335.32 417.96 323.24 433.64 323.24 433.64 344.92 429.72 349.08 397.72 349.08"></polygon>
                                </g>
                            </g>
                        </svg>
                    </span>
                    <span class="sub-title">Company</span>
                </div>

                <div class="default-img">
                    <svg width="100px" height="100px" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink">
                        <g id="英文" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.200000003">
                            <g id="v" transform="translate(-391.000000, -408.000000)" fill="#FFFFFF" fill-rule="nonzero">
                                <path d="M446,506 L446,434 L446,410 L400,410 L400,506 L410,506 L410,482 L436,482 L436,506 L446,506 Z M398,506 L398,408 L448,408 L448,434 L484,434 L484,506 L491,506 L491,508 L391,508 L391,506 L398,506 Z M434,506 L434,484 L412,484 L412,506 L434,506 Z M482,506 L482,436 L448,436 L448,506 L482,506 Z M403,418 L420,418 L420,424 L403,424 L403,418 Z M405,420 L405,422 L418,422 L418,420 L405,420 Z M403,434 L420,434 L420,440 L403,440 L403,434 Z M405,436 L405,438 L418,438 L418,436 L405,436 Z M426,418 L443,418 L443,424 L426,424 L426,418 Z M428,420 L428,422 L441,422 L441,420 L428,420 Z M426,434 L443,434 L443,440 L426,440 L426,434 Z M428,436 L428,438 L441,438 L441,436 L428,436 Z M403,450 L420,450 L420,456 L403,456 L403,450 Z M405,452 L405,454 L418,454 L418,452 L405,452 Z M426,450 L443,450 L443,456 L426,456 L426,450 Z M428,452 L428,454 L441,454 L441,452 L428,452 Z M403,466 L420,466 L420,472 L403,472 L403,466 Z M405,468 L405,470 L418,470 L418,468 L405,468 Z M426,466 L443,466 L443,472 L426,472 L426,466 Z M428,468 L428,470 L441,470 L441,468 L428,468 Z M457,444 L474,444 L474,450 L457,450 L457,444 Z M459,446 L459,448 L472,448 L472,446 L459,446 Z M457,460 L474,460 L474,466 L457,466 L457,460 Z M459,462 L459,464 L472,464 L472,462 L459,462 Z M457,476 L474,476 L474,482 L457,482 L457,476 Z M459,478 L459,480 L472,480 L472,478 L459,478 Z"
                                    id="Combined-Shape"></path>
                            </g>
                        </g>
                    </svg>
                </div>

                <div class="company-content" v-show="showType === 'companyClass'">
                    <!-- 虚线 -->
                    <span></span>

                    <div class="company">
                        <!-- 实线 -->
                        <span></span>

                        <!-- 内容列表 -->
                        <div v-for="(v, k) in companyAll" :key="k" class="item">
                            <span class="time">{{ v.time }}</span>
                            <div class="img-div">
                                <img class="img" :src="v.imgSrc" alt>
                            </div>
                            <span class="company-name">{{v.name}}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div :class="[{resumeClass: showType === 'abilityClass'}, other, common]" class="bg3" @mouseenter="showDetail('abilityClass')">
                <div class="title">
                    <span class="name">
                        <svg width="48px" height="63px" viewBox="0 0 48 63" version="1.1" xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink">
                            <g id="英文" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.200000003">
                                <g id="v" transform="translate(-732.000000, -287.000000)" fill="#FFFFFF">
                                    <path d="M732.68,349.08 L745,287.4 L767.56,287.4 L779.88,349.08 L762.92,349.08 L761.64,338.92 L750.92,338.92 L749.64,349.08 L732.68,349.08 Z M756.36,299.16 L756.2,299.16 L752.6,324.92 L759.96,324.92 L756.36,299.16 Z"
                                        id="A"></path>
                                </g>
                            </g>
                        </svg>
                    </span>
                    <span class="sub-title">Ability</span>
                </div>

                <div class="default-img">
                    <svg width="100px" height="100px" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink">
                        <g id="英文" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.200000003">
                            <g id="v" transform="translate(-733.000000, -408.000000)" fill="#FFFFFF" fill-rule="nonzero">
                                <path d="M813,452 L831,452 L831,426 L813,426 L753,426 L735,426 L735,452 L753,452 L753,446 L761,446 L761,452 L805,452 L805,446 L813,446 L813,452 Z M813,454 L813,460 L805,460 L805,454 L761,454 L761,460 L753,460 L753,454 L735,454 L735,506 L831,506 L831,454 L813,454 Z M753,424 L753,408 L813,408 L813,424 L833,424 L833,508 L733,508 L733,424 L753,424 Z M755,410 L755,424 L811,424 L811,410 L755,410 Z M755,448 L755,458 L759,458 L759,448 L755,448 Z M807,448 L807,458 L811,458 L811,448 L807,448 Z"
                                    id="Combined-Shape"></path>
                            </g>
                        </g>
                    </svg>
                </div>
            </div>
            <div :class="[{resumeClass: showType === 'skillClass'}, other, common]" class="bg4" @mouseenter="showDetail('skillClass')">
                <div class="title">
                    <span class="name">
                        <svg width="41px" height="63px" viewBox="0 0 41 63" version="1.1" xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink">
                            <g id="英文" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.200000003">
                                <g id="v" transform="translate(-1076.000000, -287.000000)" fill="#FFFFFF">
                                    <polygon id="S" points="1076.32 345 1076.32 327.64 1092.08 326.6 1092.08 335.48 1101.04 335.48 1101.04 327.72 1076.32 315.72 1076.32 291.64 1080.72 287.4 1113.04 287.4 1116.88 291.64 1116.88 305.96 1101.2 307 1101.2 300.6 1092.16 300.6 1092.16 306.44 1116.8 318.44 1116.8 345 1113.04 349.08 1080.72 349.08"></polygon>
                                </g>
                            </g>
                        </svg>
                    </span>
                    <span class="sub-title">Skill</span>
                </div>

                <div class="default-img">
                    <svg width="100px" height="100px" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink">
                        <g id="英文" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.200000003">
                            <g id="v" transform="translate(-1075.000000, -408.000000)" fill="#FFFFFF" fill-rule="nonzero">
                                <path d="M1078.41421,497.414214 L1077.82843,498 L1085,505.171573 L1172.17157,418 L1165,410.828427 L1163.41421,412.414214 L1165,414 L1164,415 L1162.41421,413.414214 L1161.41421,414.414214 L1163,416 L1162,417 L1160.41421,415.414214 L1159.41421,416.414214 L1161,418 L1160,419 L1158.41421,417.414214 L1157.41421,418.414214 L1159,420 L1158,421 L1156.41421,419.414214 L1155.41421,420.414214 L1159,424 L1158,425 L1154.41421,421.414214 L1153.41421,422.414214 L1155,424 L1154,425 L1152.41421,423.414214 L1151.41421,424.414214 L1153,426 L1152,427 L1150.41421,425.414214 L1149.41421,426.414214 L1151,428 L1150,429 L1148.41421,427.414214 L1147.41421,428.414214 L1149,430 L1148,431 L1146.41421,429.414214 L1145.41421,430.414214 L1149,434 L1148,435 L1144.41421,431.414214 L1143.41421,432.414214 L1145,434 L1144,435 L1142.41421,433.414214 L1141.41421,434.414214 L1143,436 L1142,437 L1140.41421,435.414214 L1139.41421,436.414214 L1141,438 L1140,439 L1138.41421,437.414214 L1137.41421,438.414214 L1139,440 L1138,441 L1136.41421,439.414214 L1135.41421,440.414214 L1139,444 L1138,445 L1134.41421,441.414214 L1133.41421,442.414214 L1135,444 L1134,445 L1132.41421,443.414214 L1131.41421,444.414214 L1133,446 L1132,447 L1130.41421,445.414214 L1129.41421,446.414214 L1131,448 L1130,449 L1128.41421,447.414214 L1127.41421,448.414214 L1129,450 L1128,451 L1126.41421,449.414214 L1125.41421,450.414214 L1129,454 L1128,455 L1124.41421,451.414214 L1123.41421,452.414214 L1125,454 L1124,455 L1122.41421,453.414214 L1121.41421,454.414214 L1123,456 L1122,457 L1120.41421,455.414214 L1119.41421,456.414214 L1121,458 L1120,459 L1118.41421,457.414214 L1117.41421,458.414214 L1119,460 L1118,461 L1116.41421,459.414214 L1115.41421,460.414214 L1119,464 L1118,465 L1114.41421,461.414214 L1113.41421,462.414214 L1115,464 L1114,465 L1112.41421,463.414214 L1111.41421,464.414214 L1113,466 L1112,467 L1110.41421,465.414214 L1109.41421,466.414214 L1111,468 L1110,469 L1108.41421,467.414214 L1107.41421,468.414214 L1109,470 L1108,471 L1106.41421,469.414214 L1105.41421,470.414214 L1109,474 L1108,475 L1104.41421,471.414214 L1103.41421,472.414214 L1105,474 L1104,475 L1102.41421,473.414214 L1101.41421,474.414214 L1103,476 L1102,477 L1100.41421,475.414214 L1099.41421,476.414214 L1101,478 L1100,479 L1098.41421,477.414214 L1097.41421,478.414214 L1099,480 L1098,481 L1096.41421,479.414214 L1095.41421,480.414214 L1099,484 L1098,485 L1094.41421,481.414214 L1093.41421,482.414214 L1095,484 L1094,485 L1092.41421,483.414214 L1091.41421,484.414214 L1093,486 L1092,487 L1090.41421,485.414214 L1089.41421,486.414214 L1091,488 L1090,489 L1088.41421,487.414214 L1087.41421,488.414214 L1089,490 L1088,491 L1086.41421,489.414214 L1085.41421,490.414214 L1089,494 L1088,495 L1084.41421,491.414214 L1083.41421,492.414214 L1085,494 L1084,495 L1082.41421,493.414214 L1081.41421,494.414214 L1083,496 L1082,497 L1080.41421,495.414214 L1079.41421,496.414214 L1081,498 L1080,499 L1078.41421,497.414214 Z M1143,410 L1141,410 L1141,413 L1139,413 L1139,410 L1137,410 L1137,413 L1135,413 L1135,410 L1133,410 L1133,413 L1131,413 L1131,410 L1129,410 L1129,413 L1127,413 L1127,410 L1125,410 L1125,413 L1123,413 L1123,410 L1121,410 L1121,413 L1119,413 L1119,410 L1117,410 L1117,413 L1115,413 L1115,410 L1113,410 L1113,413 L1111,413 L1111,410 L1109,410 L1109,413 L1107,413 L1107,410 L1105,410 L1105,413 L1103,413 L1103,410 L1101,410 L1101,413 L1099,413 L1099,410 L1097,410 L1097,413 L1095,413 L1095,410 L1093,410 L1093,413 L1091,413 L1091,410 L1089,410 L1089,413 L1087,413 L1087,410 L1085,410 L1085,413 L1083,413 L1083,410 L1081,410 L1081,413 L1079,413 L1079,410 L1077,410 L1077,483.171573 L1150.17157,410 L1145,410 L1145,413 L1143,413 L1143,410 Z M1075,498 L1165,408 L1175,418 L1085,508 L1075,498 Z M1075,408 L1155,408 L1075,488 L1075,408 Z M1087,420 L1127,420 L1087,460 L1087,420 Z M1089,422 L1089,455.171573 L1122.17157,422 L1089,422 Z M1107,496.333044 L1163.33304,440 C1170.54149,447.208442 1175,457.166811 1175,468.166522 C1175,490.165945 1157.16594,508 1135.16652,508 C1124.16681,508 1114.20844,503.541486 1107,496.333044 Z M1163.37701,442.94355 L1109.94355,496.377006 C1116.63789,502.366522 1125.47691,506.008326 1135.16652,506.008326 C1156.06597,506.008326 1173.00833,489.065973 1173.00833,468.166522 C1173.00833,458.476912 1169.36652,449.637891 1163.37701,442.94355 Z M1126.85786,488.142136 L1155.14214,459.857864 C1158.76142,463.477153 1161,468.477153 1161,474 C1161,485.045695 1152.04569,494 1141,494 C1135.47715,494 1130.47715,491.761424 1126.85786,488.142136 Z M1155.13976,462.860244 L1129.86024,488.139756 C1132.92464,490.557304 1136.79384,492 1141,492 C1150.94113,492 1159,483.941125 1159,474 C1159,469.79384 1157.5573,465.924639 1155.13976,462.860244 Z"
                                    id="Combined-Shape"></path>
                            </g>
                        </g>
                    </svg>
                </div>
            </div>
        </div>
        <vue-canvas-nest class="z1-layer" :config="config" :el="'#center'"></vue-canvas-nest>
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
        methods: {
            showDetail(item, e) {
                this.showType = item;
            },
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
