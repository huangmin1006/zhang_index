<template>
    <div id="menu">
        <Header languge="en" isMenu="menu"></Header>
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
    isActive: true,
    menu: true
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
    background: #2c2c2c;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
</style>
