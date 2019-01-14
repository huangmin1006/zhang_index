<template>
    <div :class="[showType, other, start]">
        <slot class="type-name" name="type-name"></slot>
        <slot class="type-img" name="type-img"></slot>
        <slot class="type-content" name="type-content"></slot>
        <slot></slot>
    </div>
</template>
<script>
import vueCanvasNest from 'vue-canvas-nest';
export default {
  data() {
    return {
      start: 'start',
      other: ''
    };
  },
  props: {
    showType: {
      type: String,
      default: ''
    }
  },
  methods: {
    showDetail(item) {
      // this.showType = item;
    },
    hiddenDetail() {}
  },
  components: {
    vueCanvasNest
  }
};
</script>