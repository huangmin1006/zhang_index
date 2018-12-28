<template>
    <div id="aboutMe">
        <Header></Header>
        <name-header></name-header>
        <Center></Center>
        <page-count page="03"></page-count>
        <Footer></Footer>
        <Mouse></Mouse>
    </div>
</template>


<script>
    import Header from '../module/header.vue';
    import nameHeader from '../module/nameHeader.vue';
    import Center from './center';
    import Footer from '../module/footer';
    import Mouse from '../module/mouse';
    import pageCount from '../module/pageCount';


    let data = {};
    export default {
        data() {
            return data;
        },
        components: {
            Header,
            Center,
            Footer,
            pageCount,
            nameHeader,
            Mouse
        }

    };

</script>


<style lang="scss" scoped>
    #aboutMe {
        height: 100%;
        background-color: #232323;
        position: relative;
        color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        overflow: hidden;
    }

</style>
