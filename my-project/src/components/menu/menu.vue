<template>
    <div id="menu">
        <Header languge="en"></Header>
        <Center languge="en"></Center>
        <Footer languge="en"></Footer>
    </div>
</template>


<script>
// 加载组件
import Header from '../module/header';
import Center from './center';
import Footer from './footer';


let data = {
    isActive: true
};
export default {
    data() {
        return data;
    },
    components: {
        Header,
        Center,
        Footer
    }
};
</script>

<style lang="scss" scoped>
#menu{
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,.8);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
</style>
