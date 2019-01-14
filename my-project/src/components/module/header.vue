<template>
  <div class="index-header">
    <span>TOBY SCOTT</span>

    <div class="btn-func">
      <span class="small-font">中</span>
      <span class="small-font">EN</span>
    </div>
  </div>

</template>

<script>
let data = {
  menuBtn: false
};
export default {
  data() {
    return data;
  },
  created() {
    this.menuBtn = this.imgState;
  },
  props: ['languge', 'imgState', 'isMenu', 'isIndex', 'name'],
  methods: {
  }
};
</script>


<style lang="scss" scoped>
@import "../../assets/common";

.index-header {
  padding: 32px 50px 22px;
  font-size: 1.2rem;
  color: #fff;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  > div:first-child {
    flex: 1;
  }
}

.isMenu {
  @include fontToEmpty(5rem);
  color: rgba(255, 255, 255, 0.3);
}

.small-font {
  @include fontToEmpty(1rem);
  cursor: pointer;
}

.btn-func {
  float: right;
  span {
    padding-left: 1vw;
    font-weight: normal;
    float: left;
  }
} // 菜单icon
.menu {
  cursor: pointer;
  float: right;
  .line {
    display: block;
    height: 3px;
    width: 25px;
    border-radius: 15px;
    background: #fff;
    margin: 3px 0;
  }
} 
</style>
