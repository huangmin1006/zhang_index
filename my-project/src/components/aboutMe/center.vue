<template>
    <div id="center">
        <div class="info">
            <img src="../../assets/img/photo.png" alt="">
            <div class="rename">
                <span>R</span>
                <span>Resume</span>
            </div>

            <div class="info-show">
                <div class="name">
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

                <div class="age">
                    <span>Age</span>
                    <div>
                        <span>24</span>
                        <span class="remark">(1993/12/10)</span>
                    </div>
                </div>

                <div class="education">
                    <span>College Graduate</span>
                    <div>
                        <span>24</span>
                        <span class="remark">(1993/12/10)</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="other1 other">C</div>
        <div class="other2 other">A</div>
        <div class="other3 other">S</div>
    </div>
</template>


<script>
    export default {

    };

</script>



<style lang="scss" scoped>
    @import "../../common/_common.scss";

    #center {
        flex: 1;
        background: #1c1c1c;
        display: flex;
    }

    .remark{
        @include fontToEmpty(1rem);
        color: #fff;
        opacity: .5;
    }

    .rename {
        color: #fff;
        font-size: 2rem;
        position: relative;
        span:first-child {
            @include fontToEmpty(5rem);
            color: #fff;
            opacity: 0.2;
        }
        span:last-child {
            position: absolute;
            bottom: 0;
            left: 5px;
        }
    }

    .info {
        padding: 3rem;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        background: #101010;
        overflow: hidden;
        position: relative;
        img {
            position: absolute;
            top: -10rem;
            left: 0;
            width: 100%;
        }
    }

    .info-show {
        display: flex;
        justify-content: space-between;
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
            span:first-child{
                font-weight: 600;
            }
        }
    }

    .other {
        width: 15%;
        height: 100%;
        color: #474747;
        font-weight: 700;
        font-size: 7rem;
        text-align: center;
    }

    .other1 {
        background: #191919;
    }

    .other2 {
        background: #111;
    }

    .other3 {
        background: #191919;
    }

</style>
