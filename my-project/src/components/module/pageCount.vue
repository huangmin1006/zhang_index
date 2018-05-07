<template>
    <div class="page-count">
        <span>01</span>
        <span class="line"></span>
        <span>04</span>
    </div>
</template>


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
    justify-content: center;
    align-items: center;
    .line {
        width: 50px;
        height: 2px;
        background: #fff;
        margin: 5px 0;
        border-radius: 15px;
    }
}
</style>
