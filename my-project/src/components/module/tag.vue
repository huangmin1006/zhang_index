<template>
    <div id="tag">
        <span class="text">{{ tag }}</span>
        <span class="line1"></span>
        <span class="line2"></span>
    </div>
</template>


<script>
    let data = {
        tag: ""
    };
    export default {
        data() {
            return data;
        },
        props: ["tagName"],
        created() {
            this.tag = this.tagName.toUpperCase();
        }
    };

</script>

<style lang="scss" scoped>
    #tag {
        position: relative;
        height: 5rem;
        overflow: hidden;
        width: 50%;
    }

    .line1,
    .line2 {
        position: absolute;
        background: rgba(255, 255, 255, .3);
    }

    .line1 {
        width: 100%;
        height: 2px;
        top: 50%;
        z-index: 0;
    }

    .line2 {
        top: 0;
        right: 2rem;
        width: 2px;
        height: 100%;
    }

    .text {
        font-size: 5rem;
        height: 5rem;
        line-height: 5rem;
        color: rgba(255,255,255,.3);
        position: absolute;
        top: 0;
        background: #2c2c2c;
        z-index: 99;
        padding: 0 20px;
        left: 2rem;
    }

</style>
