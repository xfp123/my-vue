<template>
  <div class="dynamic-number">
    <ul class="fp-box"
        @click="clickFun">
      <!-- 年 -->
      <li class="card"
          ref="li-year"
          v-for="i in 4"
          :key="i">
        <!-- 每列中的10行数字 -->
        <span v-for="num in 10"
              :key="num">{{ num - 1 }}</span>
      </li>
      <li><span></span></li>
      <!-- 月 -->
      <li class="card"
          ref="li-month"
          v-for="i in 2"
          :key="i+4">
        <!-- 每列中的10行数字 -->
        <span v-for="num in 10"
              :key="num">{{ num - 1 }}</span>
      </li>
      <li><span></span></li>
      <!-- 日 -->
      <li class="card"
          ref="li-day"
          v-for="i in 2"
          :key="i+6">
        <!-- 每列中的10行数字 -->
        <span v-for="num in 10"
              :key="num">{{ num - 1 }}</span>
      </li>
      <li><span></span></li>
      <li><span></span></li>
      <!-- 时 -->
      <li class="card"
          ref="li-hour"
          v-for="i in 2"
          :key="i+8">
        <!-- 每列中的10行数字 -->
        <span v-for="num in 10"
              :key="num">{{ num - 1 }}</span>
      </li>
      <li><span>：</span></li>
      <!-- 分 -->
      <li class="card"
          ref="li-minute"
          v-for="i in 2"
          :key="i+10">
        <!-- 每列中的10行数字 -->
        <span v-for="num in 10"
              :key="num">{{ num - 1 }}</span>
      </li>
      <li><span>：</span></li>
      <!-- 秒 -->
      <li class="card"
          ref="li-second"
          v-for="i in 2"
          :key="i+12">
        <!-- 每列中的10行数字 -->
        <span v-for="num in 10"
              :key="num">{{ num - 1 }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'dynamicNumber',
  data () {
    return {
      // numberArr: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], //固定每列中的19行数字
    };
  },
  watch: {
    //监听时间

  },
  mounted () {
    setInterval(() => {
      this.formatTime()
    }, 1000)
  },
  methods: {
    //格式化时间
    formatTime () {
      let newDate = new Date();
      let param = {
        year: null, month: null, day: null, hour: null, minute: null, second: null
      };

      param.year = newDate.getFullYear();
      param.month = newDate.getMonth() + 1;
      param.day = newDate.getDate();
      param.hour = newDate.getHours();
      param.minute = newDate.getMinutes();
      param.second = newDate.getSeconds();

      for (let item in param) {
        this.changeNum(item, param[item])
      }

    },

    //改变数量
    changeNum (type, num) {
      let len = 2;
      if (type == "year") {
        len = 4;
      }

      let numArr = num.toString().split("");
      let numArrLen = numArr.length;
      for (let i = 0; i < len - numArrLen; i++) {
        numArr.unshift(0);
      }


      this.$refs[`li-${type}`].forEach((item, index) => {
        let ty = numArr[index];

        if (ty == 0) {
          //去掉transition动画 如果不去掉会倒滚
          item.style.transition = 'none'
        } else {
          item.style.transition = 'transform 1s ease-in-out'
        }

        item.style.transform = `translateY(-${ty * 30}px)`;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.fp-box {
  display: flex;
  overflow: hidden;
  list-style: none;
  li {
    width: 30px;
    height: 30px;
    span {
      display: block;
      width: 100%;
      height: 100%;
      color: #000;
      text-align: center;
      line-height: 30px;
      font-size: 20px;
    }
  }
  li.card {
    width: 30px;
    height: 30px;
    flex-direction: column;
    transition: transform 1s ease-in-out;
    span {
      text-align: center;
      background-image: linear-gradient(90deg, #ff8464 0%, #ff6e5c 100%);
      box-shadow: 0 3px 16px 0 rgba(3, 5, 21, 0.12);
      font-size: 24px;
      color: #ffffff;
      display: flex;
      display: inline-block;
      width: 30px;
      height: 30px;
    }
  }
}
</style>
