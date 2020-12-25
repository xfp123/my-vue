/**
 * @description 流星雨
 * @module 月亮
 * @module 星星
 * @module 山
 * @module 流星
 * @module 每隔20ms变化一次状态
 * @module 使用class类定义 组件中使用的时候 new一下就可以了
 */


class meteorStart {
  //class中的构造函数 this指向该类的实例
  constructor() {
    //画布
    this.canvas = '';

    //画布上绘图的环境
    this.context = '';
    this.timer = null;

    //用于绘制山脉的数组
    this.mountainArr = [];

    //用于画星星的数组
    this.starArr = [];

    //用于画流星的数组
    this.meteorArr = [];

    //当前窗口的宽度和高度
    this.width = window.innerWidth;
    this.height = window.innerHeight;

    //调用初始化方法
    this.init();
  }
  init () {
    //创建画布
    document.body.innerHTML += "<canvas id='meteorCanvas'></canvas>";
    this.canvas = document.getElementById('meteorCanvas');
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.canvas.style.display = 'block';
    this.canvas.style.position = 'absolute';
    this.canvas.style.top = '0px';
    this.canvas.style.zIndex = '0';
    this.context = this.canvas.getContext('2d');

    var drawMountainX = 0;
    while (drawMountainX < this.width) {
      if (this.rand(1, 2) == 1) {
        this.mountainArr.push([drawMountainX, this.rand(this.height - 70, this.height - 50), drawMountainX - this.rand(15, 25), this.height - 60]);
      } else {
        this.mountainArr.push([drawMountainX, this.rand(this.height - 70, this.height - 50)]);
      }
      drawMountainX += this.rand(10, 30);
    }

    var ladder = 0;
    while (ladder < this.height - 300) {
      for (var i = 0; i < (this.height - ladder) / 100; i++) {
        this.starArr.push([this.rand(0, this.width), this.rand(ladder, ladder + 20), this.rand(0, 10), 0.1]);
      }
      ladder += 20;
    }

    this.drawTimer();
  }

  //天空
  drawSky () {
    //beginPath() 方法开始一条路径，或重置当前的路径
    this.context.beginPath();
    //创建线性的渐变对象：渐变可用于填充矩形、圆形、线条、文本等等  context.createLinearGradient(x0,y0,x1,y1);
    var skyStyle = this.context.createLinearGradient(0, 0, 0, this.canvas.height);
    //用于改变渐变的颜色值  gradient.addColorStop(stop,color);
    skyStyle.addColorStop(0, "#000211");
    skyStyle.addColorStop(0.3, "#080d23");
    skyStyle.addColorStop(0.7, "#18203d");
    skyStyle.addColorStop(1, "#293756");
    //fillStyle 属性设置或返回用于填充绘画的颜色、渐变或模式。
    this.context.fillStyle = skyStyle;
    //绘制矩形 context.fillRect(x,y,width,height);
    this.context.fillRect(0, 0, this.width, this.height);
    //closePath() 方法创建从当前点到开始点的路径
    this.context.closePath();
  }

  //山脉
  drawMountain () {
    this.context.beginPath();
    this.context.fillStyle = '#111';
    this.mountainArr.forEach((v) => {
      if (v.length == 4) {
        //二次贝塞尔曲线
        this.context.quadraticCurveTo(v[2], v[3], v[0], v[1])
      } else {
        //lineTo() 方法添加一个新点，然后创建从该点到画布中最后指定点的线条（该方法并不会创建线条）
        this.context.lineTo(v[0], v[1]);
      }
    });
    this.context.lineTo(this.width, this.height - 60);
    this.context.lineTo(this.width, this.height);
    this.context.lineTo(0, this.height);
    //fill() 方法填充当前的图像（路径）
    this.context.fill();
    this.context.closePath();
  }

  //星星
  darwStar () {
    this.starArr.forEach((v) => {
      this.context.beginPath();
      this.context.fillStyle = "rgba(255,255,255," + v[2] / 10 + ")";
      //arc() 方法创建弧/曲线（用于创建圆或部分圆） context.arc(x,y,r,sAngle,eAngle,counterclockwise);
      this.context.arc(v[0], v[1], 1, 0, 2 * Math.PI);
      this.context.fill();
      this.context.closePath();
    });
  }

  //月亮
  drawMoon () {
    this.context.beginPath();
    //createLinearGradient() 方法创建放射状/圆形渐变对象 与圆的位置有关
    var MoonStyle = this.context.createRadialGradient(200, 100, 38, 200, 100, 50);
    //使用 addColorStop() 方法规定不同的颜色
    MoonStyle.addColorStop(0, 'rgba(255,255,255,1)');
    MoonStyle.addColorStop(1, 'rgba(255,255,255,0)');
    this.context.fillStyle = MoonStyle;
    this.context.arc(200, 100, 50, 0, 2 * Math.PI);
    this.context.fill();
    this.context.closePath();
  }

  //流星
  drawMeteor () {
    var meteorNum = this.rand(-9, 9);
    if (meteorNum == 1) {
      this.meteorArr.push([this.rand(0, this.width + this.height), 0, this.rand(1, 3)]);
    }
    this.meteorArr.forEach((v) => {
      this.context.beginPath();
      this.context.fillStyle = "rgba(255,255,255,1)";
      //画流星的圆点
      if (v[0] > this.width) {
        this.context.arc(v[0], v[1] + (v[0] - this.width), 1, 0, 2 * Math.PI);
      } else {
        this.context.arc(v[0], v[1], 1, 0, 2 * Math.PI);
      }
      this.context.fill();
      //画流星的尾巴
      if (v[0] > this.width) {
        var meteorStyle = this.context.createLinearGradient(v[0], v[1], v[0] + v[2] * 20, v[1] + (v[0] - this.width) - v[2] * 20);
        meteorStyle.addColorStop(0, "rgba(255,255,255,1)");
        meteorStyle.addColorStop(1, "rgba(255,255,255,0)");
        this.context.strokeStyle = meteorStyle;
        this.context.lineTo(v[0], v[1] + (v[0] - this.width));
        this.context.lineTo(v[0] + v[2] * 20, v[1] + (v[0] - this.width) - v[2] * 20);
      } else {
        var meteorStyle = this.context.createLinearGradient(v[0], v[1], v[0] + v[2] * 20, v[1] - v[2] * 20);
        meteorStyle.addColorStop(0, "rgba(255,255,255,1)");
        meteorStyle.addColorStop(1, "rgba(255,255,255,0)");
        this.context.strokeStyle = meteorStyle;
        this.context.lineTo(v[0], v[1]);
        this.context.lineTo(v[0] + v[2] * 20, v[1] - v[2] * 20);
      }
      this.context.stroke();
      this.context.closePath();
    })

    //更改流星数组
    this.meteorArr.forEach((v, index) => {
      v[0] -= v[2];
      v[1] += v[2];
      if (v[0] < -20 || v[1] > this.height) {
        this.meteorArr.splice(index, 1);
      }
    })
  }

  //每隔20ms变化一次状态
  drawTimer () {
    this.drawSky();
    this.darwStar();
    this.drawMoon();
    this.drawMeteor();
    this.drawMountain();
    this.timer = setInterval(() => {
      this.starArr.forEach((v) => {
        if (v[2] + v[3] < 0 || v[2] + v[3] > 10) {
          v[3] *= -1;
        }
        v[2] += v[3];
      });
      this.drawSky();
      this.darwStar();
      this.drawMoon();
      this.drawMeteor();
      this.drawMountain();
    }, 20)
  }

  //返回随机数 最大值max 最小值min
  rand (min, max) {
    var c = max - min + 1;
    //Math.random() 0-1的随机数  Math.floor() 返回小于或等于一个给定数字的最大整数（向下取整）
    return Math.floor(Math.random() * c + min);
  }
}

const newMeteorStart = new meteorStart();

export default newMeteorStart;
