<template>
  <div class="animate">

    <div class="box box1">位移的效果</div>
    <div class="box box2">位移的效果2-Z</div>
  </div>
</template>

<script>
export default {
  name: 'animate',
  data () {
    return {

    }
  },
}
</script>

<style lang="scss">
.animate {
  .box {
    width: 200px;
    height: 200px;
    border: 3px solid #000;
    background: gold;
    margin: 50px auto;
    cursor: pointer;

    //位移之前的效果
    // transform: translate(0, 0);
    // transform: translateZ(0px);

    //Z轴的动画 设置3D舞台  如果同时设了transform-style: preserve-3d;和overflow: hidden;3D效果将失效
    transform-style: preserve-3d;

    transform: translateZ(0px);

    //过渡效果
    transition: all 0.5s;
  }
  .box1:hover {
    //translateX(x)：元素仅在水平方向移动（X轴移动）；
    //translateY(y)：元素仅在垂直方向移动（Y轴移动）；
    //transklate(x,y)：元素在水平方向和垂直方向同时移动（X轴和Y轴同时移动）
    transform: translate(50px, 50px);
  }

  .box2:hover {
    //如果单独设置Z轴移动，这样是完全看不出效果的。
    //需要设置perspective(设置透视距离) 才能看出正方形有种缩放的效果，其实就是越远，图案看起来越小的效果。
    //transklateZ(z)：元素在z方向移动
    transform: translateZ(100px);
  }
}
</style>