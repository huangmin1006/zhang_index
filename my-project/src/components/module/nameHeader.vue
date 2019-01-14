<template>
    <div id="tag">
        <div class="common-header">
            <svg width="310px" height="56px" viewBox="0 0 310 56" version="1.1" xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>mdpi/ABOUT ME</title>
                <desc>Created with Sketch.</desc>
                <g  stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.300000012">
                    <g id="v" transform="translate(-126.000000, -73.000000)" fill="#FFFFFF">
                        <path d="M126,128.512 L137.088,73 L157.392,73 L168.48,128.512 L153.216,128.512 L152.064,119.368 L142.416,119.368 L141.264,128.512 L126,128.512 Z M147.312,83.584 L147.168,83.584 L143.928,106.768 L150.552,106.768 L147.312,83.584 Z M170.856,128.512 L170.856,73 L203.616,73 L207.36,76.816 L207.36,96.4 L203.616,100.144 L207.504,104.032 L207.504,124.768 L203.616,128.512 L170.856,128.512 Z M193.464,106.264 L184.896,106.264 L184.896,116.128 L193.464,116.128 L193.464,106.264 Z M193.248,85.24 L184.896,85.24 L184.896,94.168 L193.248,94.168 L193.248,85.24 Z M233.64,85.24 L225.504,85.24 L225.504,116.128 L233.64,116.128 L233.64,85.24 Z M211.536,124.768 L211.536,76.816 L215.496,73 L244.296,73 L247.752,76.816 L247.752,124.768 L244.296,128.512 L215.496,128.512 L211.536,124.768 Z M251.928,124.768 L251.928,73 L265.896,73 L265.896,116.128 L274.32,116.128 L274.32,73 L288.288,73 L288.288,124.768 L284.472,128.512 L255.888,128.512 L251.928,124.768 Z M290.16,73 L322.848,73 L322.848,86.536 L313.416,86.536 L313.416,128.512 L299.448,128.512 L299.448,86.536 L290.16,86.536 L290.16,73 Z M342.36,128.512 L342.36,73 L363.96,73 L371.088,108.928 L371.16,108.928 L377.784,73 L399.96,73 L399.96,128.512 L387.216,128.512 L387.216,86.536 L387.144,86.536 L377.64,128.512 L364.536,128.512 L355.032,86.536 L354.96,86.536 L354.96,128.512 L342.36,128.512 Z M404.136,128.512 L404.136,73 L435.6,73 L435.6,86.32 L418.176,86.32 L418.176,93.592 L434.088,93.592 L434.088,106.912 L418.176,106.912 L418.176,114.616 L435.384,114.616 L435.384,128.512 L404.136,128.512 Z"
                            id="ABOUT-ME"></path>
                    </g>
                </g>
            </svg>
        </div>

        <div class="line-div">
            <span class="line1"></span>
            <span class="line2"></span>
        </div>
    </div>

</template>

<script>
    let data = {
        isImg: '',
        imgUrl: {
            close: require('../../../static/close.png'),
        }
    };
    export default {
        data() {
            return data;
        },
        props: ['languge', 'imgState'],
        methods: {
            toIndex() {
                this.$router.push('/index');
            }
        }
    };

</script>


<style lang="scss" scoped>
    #tag {
        position: relative;
        width: 705px;
        margin-bottom: 21px;
        height: 72px;
    }

    .common-header {
        font-weight: 700;
        z-index: 99;
        position: absolute;
        color: #656565;
        margin-left: 40px;
        padding: 0% 10px;
        font-size: 72px;
        line-height: 72px;
        background: #232323;
    }

    .line-div {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        .line1 {
            position: absolute;
            width: 100%;
            top: 50%;
            background: #919191;
            height: 2px;
        }

        .line2 {
            position: absolute;
            width: 2px;
            height: 100%;
            right: 5%;
            background: #919191;
            top: 0;
        }
    }

    img {
        cursor: pointer;
    }

</style>
