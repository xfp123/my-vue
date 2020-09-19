<template>
  <div class="my-index">
    <dynamic-number></dynamic-number>

    <!-- 旋转的球体 -->
    <div class="bell">
      <div class="bell-con"></div>
    </div>
    <!-- 外层的小球 -->
    <div class="Lbell">
      <div></div>
    </div>

  </div>
</template>

<script>
/**
 * @description 点击头像进入的页面
 * @module 解锁技能 主要用于平常用不到的 但是自己想实现的功能
 * @module 温故知新 主要是自己涉及过的 但是没有想起来
 * @module 
 */
import dynamicNumber from '@/common/dynamicNumber'
export default {
  name: 'myIndex',
  components: {
    dynamicNumber
  },
}
</script>

<style lang="scss">
.my-index {
  width: 100%;
  height: 100%;
  background: linear-gradient(
    270deg,
    rgba(37, 37, 71, 0.59) 0%,
    rgba(31, 31, 119, 0.62) 28%,
    #070a29 100%
  );
  text-align: center;
  text-align: -webkit-center;
  .bell {
    float: left;
    width: 350px;
    height: 350px;
    border-radius: 175px;
    overflow: hidden;
    text-align: -webkit-center;
    .bell-con {
      width: 250px;
      height: 250px;
      margin-top: 50px;
      border-radius: 150px;
      background: linear-gradient(
        130deg,
        rgba(143, 239, 255, 0.38) 0%,
        rgba(79, 250, 255, 0.04) 52%,
        rgba(76, 251, 255, 0) 100%
      );
      box-shadow: 0px 0px 115px 14px rgba(12, 191, 255, 0.5);
      opacity: 0.34;
    }
  }
  .Lbell {
    width: 227px;
    height: 227px;
    float: left;
    border-radius: 150px;
    &:after {
      background: linear-gradient(
          191deg,
          rgba(17, 21, 94, 0.86) 0%,
          rgba(0, 22, 74, 0.78) 67%,
          rgba(85, 188, 255, 0.89) 100%
        )
        linear-gradient(
          354deg,
          rgba(0, 0, 0, 0.5) 0%,
          rgba(3, 3, 8, 0.5) 52%,
          #6068ff 100%
        )
        linear-gradient(
          119deg,
          rgba(90, 190, 255, 0) 0%,
          rgba(38, 152, 167, 0.15) 59%,
          rgba(41, 210, 255, 0.5) 100%
        )
        linear-gradient(
          145deg,
          rgba(143, 231, 255, 0.26) 0%,
          rgba(75, 183, 255, 0.1) 54%,
          rgba(0, 130, 255, 0) 100%
        )
        linear-gradient(
          155deg,
          rgba(110, 195, 255, 0) 0%,
          rgba(192, 103, 247, 0.05) 64%,
          rgba(2, 20, 131, 0.65) 100%
        );
      box-shadow: 0px 0px 11px 2px rgba(36, 225, 255, 0.4),
        2px 2px 4px 0px rgba(255, 255, 255, 0.64);
      border: 4px solid;
      border-image: linear-gradient(
          131deg,
          rgba(255, 255, 255, 1),
          rgba(70, 194, 255, 0.29),
          rgba(70, 145, 255, 0),
          rgba(70, 115, 255, 0.05),
          rgba(176, 208, 255, 1)
        )
        4 4;
    }
  }
}
</style>