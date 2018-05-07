<template>
    <div id="production">
        <Header></Header>
        <Footer></Footer>
    </div>
</template>


<script>
import Header from "../module/header";
import Footer from "../module/footer";

let data = {};
export default {
    data() {
        return data;
    },
    components: {
        Header,Footer
    }
};
</script>


<style lang="scss" scoped>

#production{
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.8);
    position: relative;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

</style>
