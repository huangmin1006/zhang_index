<template>
  <div :class="[showType, other, normal]">
    <!-- 个人信息类型简写 -->
    <div class="type-name">
      <slot name="type-name">
      </slot>
    </div>

    <!-- 信息的图片 -->
    <div class="type-img">
      <slot name="type-img">
      </slot>
    </div>

    <!-- 信息的内容 -->
    <div
      class="show-detail"
      v-show="showType === 'resumeClass'"
    >
      <slot name="type-content">
      </slot>
    </div>

    <slot>
    </slot>
  </div>
</template>


<script>
import vueCanvasNest from 'vue-canvas-nest';
export default {
  data() {
    return {
    };
  },
  props: {
    showType: {
      type: String,
      default: ''
    },
    other: {
      type: String,
      default: ''
    },
    normal: {
      type: String,
      default: ''
    }
  },
  watch: {
    showType: function(val){
      console.log(val);
    }
  },
  components: {
    vueCanvasNest
  }
};
</script>



<style lang="scss" scoped>
@import "../../assets/common";

// .bg1 {
//     background: rgba(255, 255, 255, 0);
// }

.type-img {
  svg {
    width: 100px;
    height: 100px;
  }
}

.type-name {
  position: relative;
  svg {
    width: 50px;
    height: 70px;
  }
}

.normal {
  position: relative;
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 50px;
  .type-name {
    margin-bottom: 50px;
  }
}

.other{
  flex: 1;
  display: flex;
  justify-content: center;
  padding-top: 50px;
  .type-img{
    display: none;
  }
}

.resume {
  width: 67%;
}
</style>
