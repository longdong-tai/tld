<template>
  <div>
    <div class="canvas-box">
      <canvas class="canvas" ref="canvas"></canvas>
    </div>
  </div>
</template>
<script>
  import Particle from './lib/particle'

  const WIDTH = 1000
  const HEIGHT = 500
  const initRoundPopulation = 80
  export default {
    name: 'starlight',
    data () {
      return {}
    },
    computed: {},
    methods: {
      initCanvas () {
        this.particles = []
        for (var i = 0; i < initRoundPopulation; i++) {
          this.particles[i] = new Particle({
            index: i,
            x: Math.random() * WIDTH,
            y: Math.random() * WIDTH,
            canvasCtx: this.canvasCtx
          })
          this.particles[i].draw()
        }
        this.animate()
      },
      animate () {
        if (!this.isActive) return
        console.log('animate loop')
        this.canvasCtx.clearRect(0, 0, WIDTH, HEIGHT)
        this.particles.forEach((particle) => {
          particle.move({maxHeight: HEIGHT})
        })
        requestAnimationFrame(this.animate)
      },
      routeChange (to, from) {
        console.log(123)
      }
    },
    created () {
      // this.$options.name === this.$route.name
      this.isActive = true
    },
    beforeDestroy () {
      this.isActive = false
    },
    watch: {},
    mounted () {
      this.$nextTick(() => {
        this.canvasCtx = this.$refs.canvas.getContext('2d')
        this.$refs.canvas.width = WIDTH
        this.$refs.canvas.height = HEIGHT
        this.initCanvas()
      })
    }
  }
</script>
<style lang="scss" scoped>
  .canvas-box {
    background: black;
    .canvas {
      margin: 50px auto;
      width: 1000px;
      height: 500px;
    }
  }
</style>
