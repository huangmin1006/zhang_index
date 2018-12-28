<template>
    <div class="page-count">
        <span>{{ page }}</span>
        <span class="line"></span>
        <span>04</span>
    </div>
</template>


<script>
    export default {
        data() {
            return {};
        },

        props: {
            page: {
                type: String,
                default: '1'
            },
        }
    };

</script>


<style lang="scss" scoped>
    .page-count {
        z-index: 99;
        width: 100px;
        height: 70px;
        background: #1f1f1f;
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
        font-weight: normal;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0 10px;

        .line {
            width: 50px;
            height: 2px;
            background: #fff;
            margin: 5px 0;
            border-radius: 15px;
        }

        span {
            display: inline-block;
            width: 50px;
            text-align: center;
        }
    }

</style>
