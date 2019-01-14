<template>
  <div id="example" class="center-example flex">
    <about-me-common
      :class="[showType, other, normal]"
      @click="showDetail('resume')"
      @mouseleave="hiddenDetail"
    >
      <template slot="type-name">
        <svg-icon icon-class="R"/>
        <span class="name-text" v-show="normal">Resume</span>
      </template>
      <template slot="type-img">
        <svg-icon icon-class="resume"/>
      </template>
      <template slot="type-content">
        <div class="user-name">
          <span class="color999 font30 fontblod marginb10">Name</span>
          <div class="info">
            <span class="colorfff">张文圣</span>
            <span class="remark">(Chinese name)</span>
          </div>
          <div class="info margint10">
            <span class="colorfff">Toby Scott</span>
            <span class="remark">(English name)</span>
          </div>
        </div>

        <div class="user-age">
          <span class="color999 font30 fontblod marginb10">Age</span>
          <div class="info">
            <span class="colorfff">24</span>
            <span class="remark">(1993/12/10)</span>
          </div>
        </div>

        <div class="user-education">
          <span class="color999 font30 fontblod marginb10">Education</span>
          <div class="info">
            <span class="colorfff">College Graduate</span>
            <span class="remark">(Sichuan Univasity Science & Engineering)</span>
          </div>
        </div>
      </template>
      <div class="bg_div"></div>
    </about-me-common>

    <about-me-common
      class="bg2"
      :class="[showType, other, normal]"
      @click="showDetail('company')"
      @mouseleave="hiddenDetail"
    >
      <template slot="type-name">
        <svg-icon icon-class="C"/>
        <span class="name-text" v-show="normal">Company</span>
      </template>
      <template slot="type-img">
        <svg-icon icon-class="company"/>
      </template>
    </about-me-common>
    <about-me-common
      class="bg3"
      :class="[showType, other, normal]"
      @mouseenter="showDetail('ability')"
      @mouseleave="hiddenDetail"
    >
      <template slot="type-name">
        <svg-icon icon-class="A"/>
        <span class="name-text" v-show="normal">Ability</span>
      </template>
      <template slot="type-img">
        <svg-icon icon-class="ability"/>
      </template>
    </about-me-common>
    <about-me-common
      class="bg4"
      :class="[showType, other, normal]"
      @mouseenter="showDetail('skill')"
      @mouseleave="hiddenDetail"
    >
      <template slot="type-name">
        <svg-icon icon-class="S"/>
        <span class="name-text" v-show="normal">Skill</span>
      </template>
      <template slot="type-img">
        <svg-icon icon-class="skill"/>
      </template>
    </about-me-common>
    <vue-canvas-nest class="z1-layer" :config="config" :el="'#example'"></vue-canvas-nest>
  </div>
</template>

<script>
import vueCanvasNest from 'vue-canvas-nest';
import aboutMeCommon from '../module/aboutMeCommon.vue';
export default {
  data() {
    return {
      name: '#example',
      showType: '',
      other: '',
      normal: 'normal',
      config: {
        color: '255,255,255',
        opacity: 0.7,
        zIndex: 2,
        count: 120
      }
    };
  },
  methods: {
    showDetail(item) {
      this.showType = item;
      console.log(item, this.showType);
    },
    hiddenDetail() {
      this.showType = '';
    }
  },
  components: {
    vueCanvasNest,
    aboutMeCommon
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/common";

.center-example {
  flex: 1;
  position: relative;
}

.bg_div {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.1);
}

.bg4 {
  background: rgba(26, 26, 26, 0.9);
}

.bg2 {
  background: rgba(26, 26, 26, 0.6);
}

.bg3 {
  background: rgba(0, 0, 0, 0.5);
}

.name-text {
  position: absolute;
  left: 0;
  bottom: -5px;
  font-size: 36px;
}
</style>
