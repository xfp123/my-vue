<template>
  <div class="home-index">
    <img :src="headerImgUrl"
         @click="gotoPage">
  </div>
</template>

<script>
/**
 * @description 搭建外层的框 用于保存用户信息
 */
import meteorStart from '@/common/meteorStart';

export default {
  name: 'home',
  data () {
    return {
      headerImgUrl: require('./image/my-head.jpg')
    }
  },
  methods: {
    gotoPage () {
      // debugger
      this.$router.push({ name: 'myIndex' })
    }
  }
}
</script>

<style lang="scss">
.home-index {
  position: absolute;
  width: 100%;
  height: 100%;
  .dynamic-number {
    position: absolute;
    z-index: 10;
    overflow: hidden;
  }
  img {
    position: absolute;
    width: 100px;
    height: 100px;
    top: 50%;
    left: 50%;
    margin-left: -50px;
    margin-top: -50px;
    z-index: 5;
    cursor: pointer;
    //放大的过渡效果
    transition: all 0.5s;
    -webkit-transition: all 0.5s; /* Safari */
    &:hover {
      //放大
      transform: scale(1.5, 1.5);
      -webkit-transform: scale(1.5, 1.5); /*兼容-webkit-引擎浏览器*/
      -moz-transform: scale(1.5, 1.5); /*兼容-moz-引擎浏览器*/
    }
  }
}
</style>