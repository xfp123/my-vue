<template>
  <div class="AI-center">
    <dynamic-number></dynamic-number>

    <!-- 光点轨迹图 -->
    <div class="btn">
      <a href="javascript:;"
         class="join">马上加入</a>
      <div class="spark"></div>
    </div>

    <!-- 彗星轨迹 -->
    <div class="hx-trace">
      <div class="star"></div>
      <div class="trace"></div>
    </div>

    <!-- 线条流动效果 -->
    <div class="line-clip">
      <div class="bb">
      </div>
      <img src="./image/clip.png"
           alt="">
    </div>

    <!-- 围绕中间旋转图 -->
    <div class="center-con">
      <!-- 旋转的球体 -->
      <div class="bell">
        <div class="bell-con"></div>
      </div>

      <!-- 外层的线 -->
      <div class="line">
      </div>

      <!-- 外层的小球 -->
      <div class="track-line">
        <div class="L-bell">
          <div class="center-bell">
          </div>
          <div class="litter-bell"></div>
          <div class="litter-bell litter-bell-one"></div>
          <div class="litter-bell litter-bell-two"></div>
        </div>
      </div>

      <!-- 3D小球旋转  无js代码-->
      <div class="bell-line">
        <div class="x">
          <div class="x1"></div>
          <div class="x2"></div>
          <div class="x3"></div>
          <div class="x4"></div>
          <!-- <div class="xInner"></div> -->
          <div class="y"></div>
          <div class="y1"></div>
          <div class="y2"></div>
          <div class="y3"></div>
          <div class="y4"></div>
          <!-- <div class="yInner"></div> -->
          <div class="z"></div>
          <div class="z1"></div>
          <div class="z2"></div>
          <div class="z3"></div>
          <div class="z4"></div>
          <!-- <div class="zInner"></div> -->
        </div>
      </div>
    </div>

    <!-- 3D旋转球 -->
    <!-- <div class="3dcas">
      <canvas id="cas"
              width="1000"
              height="500">浏览器不支持canvas，请更新浏览器后再浏览</canvas>
      <div style="width:50px;margin:10px auto">
        <button id="controlBtn">停止</button>
      </div>
    </div> -->

    <!-- 图表 -->
    <echarts></echarts>
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
import echarts from '@/common/echarts'
export default {
  name: 'myIndex',
  components: {
    dynamicNumber,
    echarts
  },
  data () {
    return {}
  },
  methods: {

  }
}
</script>

<style lang="scss">
$bell-color: #008fff70;
// $bell-color: red;
.AI-center {
  width: 100%;
  height: 100%;
  overflow: auto;
  background: linear-gradient(
    270deg,
    rgba(37, 37, 71, 0.59) 0%,
    rgba(31, 31, 119, 0.62) 28%,
    #070a29 100%
  );
  text-align: center;
  text-align: -webkit-center;

  //光点轨迹移动
  .btn {
    position: relative;
    width: 100%;
    height: 60px;
    /*按钮*/
    .join {
      position: absolute;
      display: block;
      text-align: center;
      line-height: 40px;
      width: 148px;
      height: 40px;
      color: #fff5d1;
      border-radius: 20px;
      border: 1px solid #fff;
      font-size: 20px;
      text-decoration: none;
      top: 0px;
      left: 0px;
    }
    /*光点*/
    .spark {
      position: absolute;
      width: 30px;
      height: 30px;
      background: url("./image/light.png") no-repeat;
      background-size: 100% 100%;
      left: 6px;
      top: -4px;
      top: -4px;
      left: 112px;
      transform: rotate(180deg);
      -webkit-animation-name: spark;
      -webkit-transform-origin: 50% 100%;
      -webkit-animation-duration: 8s;
      -webkit-animation-timing-function: linear;
      -webkit-animation-iteration-count: infinite;
      -webkit-animation-direction: normal;
    }
    /*动画*/
    @-webkit-keyframes spark {
      0% {
        left: 6px;
        top: -15px;
        transform: rotate(0deg);
      }

      35% {
        left: 112px;
        top: -15px;
        transform: rotate(0deg);
      }
      //第一个弯道下面
      50% {
        top: -4px;
        left: 112px;
        transform: rotate(180deg);
      }
      //第二个弯道下面
      85% {
        left: 6px;
        top: -4px;
        transform: rotate(180deg);
      }
      //第二个弯道上面
      100% {
        left: 6px;
        top: -14px;
        transform: rotate(360deg);
      }
    }
  }

  //彗星轨迹
  .hx-trace {
    height: 200px;
    width: 100%;
    .star {
      width: 10px;
      height: 35px;
      background: linear-gradient(
        194deg,
        #ffffff 0%,
        rgba(0, 170, 255, 0) 100%
      );
      border-radius: 100px 100px 0px 0px;
    }
    .trace {
      background: transparent;
      width: 50px;
      height: 75px;
      position: relative;
    }
    .trace:before {
      content: "";
      // border-image: radial-gradient(
      //   circle at 100% 100%,
      //   rgba(204, 0, 0, 0) 100px,
      //   blue 100px
      // );
      border: 1px blue solid;
      position: absolute;
      top: 0;
      left: 50%;
      width: 100px;
      height: 75px;
    }
    .trace:after {
      content: "";
      position: absolute;
      width: 50px;
      height: 75px;
      background: blue;
      border-radius: 0 0 100% 0 / 0 0 100% 0;
      top: 100%;
      left: 0;
    }
  }

  //线条流动的效果
  .line-clip {
    position: relative;
    height: 300px;
    width: 100%;
    img {
      position: absolute;
      left: 0px;
    }
    .bb,
    .bb::before,
    .bb::after {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }

    .bb {
      width: 200px;
      height: 200px;
      margin: auto;
      color: #69ca62;
      box-shadow: inset 0 0 0 1px rgba(105, 202, 98, 0.5);
    }
    .bb::before,
    .bb::after {
      content: "";
      z-index: -1;
      margin: -5%;
      box-shadow: inset 0 0 0 2px;
      animation: clipMe 8s linear infinite;
    }
    .bb::before {
      animation-delay: -4s;
    }
    @keyframes clipMe {
      0%,
      100% {
        // clip: rect(<top>, <right>, <bottom>, <left>);
        clip: rect(0px, 220px, 2px, 0px);
      }
      25% {
        clip: rect(0px, 2px, 220px, 0px);
      }
      50% {
        clip: rect(218px, 220px, 220px, 0px);
      }
      75% {
        clip: rect(0px, 220px, 220px, 218px);
      }
    }
  }

  .center-con {
    width: 100%;
    height: 500px;
    text-align: -webkit-center;
    text-align: center;
    position: relative;

    .bell {
      width: 350px;
      height: 350px;
      border-radius: 175px;
      overflow: hidden;
      text-align: -webkit-center;
      position: absolute;
      left: 50%;
      top: 50%;
      margin-left: -175px;
      margin-top: -175px;
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
    .track-line {
      .L-bell {
        position: absolute;
        width: 120px;
        height: 120px;
        left: 400px;
        .center-bell {
          width: 80px;
          height: 80px;
          position: absolute;
          left: 50%;
          top: 50%;
          margin-left: -40px;
          margin-top: -40px;
          border-radius: 50%;
          background: radial-gradient(transparent, #3182ff4a);
          box-shadow: 0px 0px 11px 2px rgba(36, 225, 255, 0.4),
            2px 2px 4px 0px rgba(255, 255, 255, 0.64);
          border: 4px solid
            linear-gradient(
              131deg,
              rgba(255, 255, 255, 1),
              rgba(70, 194, 255, 0.29),
              rgba(70, 145, 255, 0),
              rgba(70, 115, 255, 0.05),
              rgba(176, 208, 255, 1)
            )
            4 4;
        }
        .litter-bell {
          width: 40px;
          height: 40px;
          background: radial-gradient(transparent, #3182ff4a);
          box-shadow: 0px 0px 3px 1px rgba(36, 225, 255, 0.4),
            1px 1px 1px 0px rgba(255, 255, 255, 0.64);
          opacity: 0.88;
          border-radius: 50%;
          position: absolute;
          bottom: 0px;
          border: 1px solid
            linear-gradient(
              130deg,
              rgba(255, 255, 255, 1),
              rgba(70, 194, 255, 0.29),
              rgba(70, 145, 255, 0),
              rgba(70, 115, 255, 0.05),
              rgba(176, 208, 255, 1)
            )
            1 1;
        }
        .litter-bell-one {
          width: 20px;
          height: 20px;
          top: 20px;
        }
        .litter-bell-two {
          width: 30px;
          height: 30px;
          bottom: 10px;
          right: 0px;
        }

        //transform-origin 设置旋转点  0px 0px 就是左上角那个点

        // transform-origin: 240px 250px 100px;
        // animation: rotation 8s linear infinite;

        animation: animX 2s cubic-bezier(0.36, 0, 0.64, 1) -1s infinite alternate,
          animY 2s cubic-bezier(0.36, 0, 0.64, 1) 0s infinite alternate,
          scale 4s cubic-bezier(0.36, 0, 0.64, 1) 0s infinite alternate;
      }
    }

    @keyframes animX {
      0% {
        left: 400px;
      }
      100% {
        left: 800px;
      }
    }
    @keyframes animY {
      0% {
        top: 100px;
      }
      100% {
        top: 200px;
      }
    }

    @keyframes scale {
      0% {
        transform: scale(0.5);
        opacity: 0.1;
      }
      50% {
        transform: scale(1);
        opacity: 1;
      }
      100% {
        transform: scale(0.5);
        opacity: 0.1;
      }
    }

    @keyframes moveY {
      to {
        transform: translateY(-200px);
      }
    }
    @keyframes rotation {
      to {
        transform: rotate(1turn);
        // transform: rotate3d(1, 1, 1, 360deg);
      }
    }
    .line {
      width: 320px;
      height: 320px;
      border: 1px solid #aaf0d8;
      border-radius: 50%;
      // border-image: linear-gradient(#aaf0d8, #2ed);
      border-radius: 50%;
      text-align: center;
      padding: 20px;
      font-size: 28px;
      transform: rotate3d(-3, 1, 1, 70deg);
      opacity: 1;
      position: absolute;
      left: 450px;
      top: 49px;
    }

    //3d球用到的css3的属性
    //rotateX：定义沿 X 轴的 3D 旋转。
    //transform-style属性指定嵌套元素是怎样在三维空间中呈现 flat|preserve-3d
    //translateZ 定义Z轴转换，即仅在Z轴方向移动
    //参考地址：https://www.jq22.com/webqd1788

    .bell-line {
      // margin: 100px auto;
      position: absolute;
      width: 250px;
      height: 250px;
      left: 50%;
      top: 50%;
      margin-left: -125px;
      margin-top: -125px;
      border-radius: 50%;
      background: linear-gradient(
        130deg,
        rgba(143, 239, 255, 0.38) 0%,
        rgba(79, 250, 255, 0.04) 52%,
        rgba(76, 251, 255, 0) 100%
      );
      .x,
      .y,
      .z {
        width: 250px;
        height: 250px;
        border-radius: 50%;
      }
      .y,
      .z {
        position: absolute;
        top: 0;
        left: 0;
      }
      .x {
        border: 1px solid $bell-color;
        position: relative;
        transform-style: preserve-3d;
        animation: play 6s infinite linear;
      }
      /*linear 匀速*/
      .y {
        border: 1px solid $bell-color;
        transform: rotateX(90deg);
      }
      .z {
        border: 1px solid $bell-color;
        transform: rotateY(90deg);
      }
      .x1,
      .x2,
      .y1,
      .y2,
      .z1,
      .z2 {
        width: 72.5%;
        height: 72.5%;
        position: absolute;
        border-radius: 50%;
        top: 14.25%;
        left: 14.25%;
      }

      .x3,
      .x4,
      .y3,
      .y4,
      .z3,
      .z4 {
        width: 60%;
        height: 60%;
        position: absolute;
        border-radius: 50%;
        top: 21.25%;
        left: 20.25%;
        border: 1px solid $bell-color;
      }

      .x3 {
        transform: translateZ(100px);
      }
      .x4 {
        transform: translateZ(-100px);
      }

      .y3 {
        transform: rotateX(90deg) translateZ(100px);
      }
      .y4 {
        transform: rotateX(90deg) translateZ(-100px);
      }

      .z3 {
        transform: rotateY(90deg) translateZ(100px);
      }
      .z4 {
        transform: rotateY(90deg) translateZ(-100px);
      }

      .x1 {
        border: 1px solid $bell-color;
        transform: translateZ(50px);
      }
      .x2 {
        border: 1px solid $bell-color;
        transform: translateZ(-50px);
      }
      .y1 {
        border: 1px solid $bell-color;
        transform: rotateX(90deg) translateZ(50px);
      }
      .y2 {
        border: 1px solid $bell-color;
        transform: rotateX(90deg) translateZ(-50px);
      }
      .z1 {
        border: 1px solid $bell-color;
        transform: rotateY(90deg) translateZ(50px);
      }
      .z2 {
        border: 1px solid $bell-color;
        transform: rotateY(90deg) translateZ(-50px);
      }
      .xInner,
      .yInner,
      .zInner {
        top: 50%;
        width: 100%;
        position: absolute;
      }
      .xInner {
        border: 1px solid $bell-color;
        border-bottom: none;
      }
      .yInner {
        border: 1px solid $bell-color;
        border-bottom: none;
        transform: rotateX(90deg);
      }
      .zInner {
        border: 1px solid $bell-color;
        border-bottom: none;
        transform: rotateY(90deg);
      }
      @keyframes play {
        100% {
          transform: rotateX(360deg) rotateY(360deg);
        }
      }
    }
  }

  // 3D旋转球体
  #cas {
    display: block;
    border: 1px solid;
    margin: auto;
  }
}
</style>