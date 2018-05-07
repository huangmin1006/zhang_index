<template>
    <div id="production">
        <Header isProduction="production"></Header>
        <Footer></Footer>
    </div>
</template>


<script>
    import Header from "../module/header";
    import Tag from "../module/tag";
    import Footer from "../module/footer";

    let data = {
        production: true
    };
    export default {
        data() {
            return data;
        },
        components: {
            Header,
            Footer,
        }
    };

</script>


<style lang="scss" scoped>
    #production {
        height: 100vh;
        background-color: #2c2c2c;
        position: relative;
        color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

</style>
