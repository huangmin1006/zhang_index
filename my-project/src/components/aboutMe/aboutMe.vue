<template>
    <div id="aboutMe">
        <Header name="about me"></Header>
        <Center></Center>
        <page-count page="03"></page-count>
        <Footer></Footer>
    </div>
</template>


<script>
    import Header from "../module/header";
    import Center from "./center";
    import Footer from "../module/footer";
    import pageCount from "../module/pageCount";


    let data = {};
    export default {
        data() {
            return data;
        },
        components: {
            Header,
            Center,
            Footer,
            pageCount
        }

    };

</script>


<style lang="scss" scoped>
    #aboutMe {
        height: 100vh;
        width: 100vw;
        background-color: #2c2c2c;
        position: relative;
        color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        overflow: hidden;
    }

</style>
