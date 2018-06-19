<template>
  <div>
    <div class="canvas-box">
      <canvas ref="canvas"></canvas>
    </div>
  </div>
</template>
<script>
  let para = {
    num: 100,
    color: false,
    r: 0.9,
    o: 0.09,
    a: 1
  }
  let color
  let color2
  let WIDTH
  let HEIGHT
  let roundArr = []
  // 判断参数中是否设置了 color，如果设置了 color，就使用该值、
  // 如果参数中的 color 为 false，那么就使用随机的颜色
  if (para.color) {
    color2 = para.color
  } else {
    color = Math.random() * 360
  }
  export default {
    components: {},
    data () {
      return {}
    },
    computed: {},
    methods: {
      initCanvas () {
        let ctx = document.getElementById('canvas')
        let content = ctx.getContext('2d')
        let round = []
        let WIDTH
        let HEIGHT
        let initRoundPopulation = 80

        WIDTH = 1000 || document.documentElement.clientWidth
        HEIGHT = 500 || document.documentElement.clientHeight

        ctx.width = WIDTH
        ctx.height = HEIGHT

        function RoundItem (index, x, y) {
          this.index = index
          this.x = x
          this.y = y
          this.r = Math.random() * 2 + 1
          var alpha = (Math.floor(Math.random() * 10) + 1) / 10 / 2
          this.color = 'rgba(255,255,255,' + alpha + ')'
        }

        RoundItem.prototype.draw = function () {
          content.fillStyle = this.color
          content.shadowBlur = this.r * 2
          content.beginPath()
          content.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false)
          content.closePath()
          content.fill()
        }

        function init () {
          for (var i = 0; i < initRoundPopulation; i++) {
            round[i] = new RoundItem(i, Math.random() * WIDTH, Math.random() * HEIGHT)
            round[i].draw()
          }
        }
        init()
      },
      animate () {
        function xx () {
          if (!para.color) {
            color += 0.1
            color2 = 'hsl(' + color + ',100%,80%)'
          }
          this.ctx.clearRect(0, 0, WIDTH, HEIGHT)
          for (var i = 0; i < roundArr.length; i++) {
            this.ctx.fillStyle = color2
            this.ctx.beginPath()
            this.ctx.arc(roundArr[i].mouseX, roundArr[i].mouseY, roundArr[i].r, 0, Math.PI * 2)
            this.ctx.closePath()
            this.ctx.fill()
            roundArr[i].r += para.r
            roundArr[i].o -= para.o

            if (roundArr[i].o <= 0) {
              roundArr.splice(i, 1)
              i--
            }
          }
        }
        window.requestAnimationFrame(xx)
      },
      watch: {},
      created () {
        this.ctx = this.$refs.canvas.getContext('2d')
        WIDTH = this.$refs.canvas.width = 1000
        HEIGHT = this.$refs.canvas.height = 500
      },
      mounted () {
        this.initCanvas()
        this.animate()
        window.onmousemove = function (event) {
          let mouseX = event.clientX
          let mouseY = event.clientY
          roundArr.push({
            mouseX: mouseX,
            mouseY: mouseY,
            r: para.r,
            o: 1
          })
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  .canvas-box {
    margin: 50px auto;
    width: 1000px;
    height: 500px;
    background: black;
  }
</style>
