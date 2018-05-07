<template>
    <div id="index-footer">
        <div class="footer-left">
            <div v-for="(item,index) in left" :key="index">
                <a :class="{hoverA: aClass}" href="#">{{ item }}</a>
            </div>
        </div>
        <div class="footer-right">
            <a href="#" class="a1">DOWNLOAD PDF</a>
            <a href="#" class="p2">PORTFOLIO</a>
        </div>
    </div>
</template>

<script>
let data = {
    left: ['DRIBBBLE', 'BEHANCE', 'UI.CN', 'ZCOOL'],
    aClass: true
};
export default {
    data() {
        return data;
    }
};
</script>


<style lang="scss" scoped>
// 引用公共样式
@import '../../assets/resetNew.css';
@import '../../common/common';

a {
    color: #fff;
}

#index-footer {
    padding: 32px 50px;
    display: flex;
    font-size: 1rem;
    font-weight: 600;
    justify-content: space-between;
}
.a1 {
    border: 2px solid #fff;
    color: #fff;
    padding: 15px 32px;
    transition: all 300ms cubic-bezier(0.785, 0.135, 0.15, 0.86);
    position: relative;
    z-index: 1;
    &:hover {
        color: #666;
        &::before {
            width: 100%;
        }
    }
}
.a1::before {
    @extend %before;
    width: 0;
    transition: all 300ms linear;
    z-index: -2;
    background: #fff;
    height: 100%;
}

.p2 {
    text-align: center;
    letter-spacing: 0.3rem;
    padding-top: 20px;
}

.hoverA {
    position: relative;
    padding: 0 0.2rem;
    &:hover {
        &::before {
            width: 100%;
        }
    }
}

.hoverA::before {
    @extend %before;
    width: 0;
    height: 30%;
    background: #fff;
    top: 70%;
    opacity: 0.3;
    transition: all 100ms linear;
}

.footer-right {
    a {
        display: block;
    }
}
</style>
