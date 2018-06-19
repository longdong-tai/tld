<template>
  <div>
    <div>
      <div>
        <img class="cat-img videoEl1" src="./img/cat1.jpg">
        <img class="cat-img videoEl2" src="./img/cat2.jpg">
        <!--<img class="videoEl" src="~@/assets/logo.png">-->
      </div>
      <div>
        <!--<audio class="audio" ref="audio" src="/static/video/Summertime Sadness.mp3" controls="controls"></audio>-->
        <!--controls="controls"-->
        <audio class="audio" ref="audio" src="/static/video/xuemaojiao.mp3" @play="onPlay"
               @pause="onPause"></audio>
        <div class="btn-box">
          <button @click="onStart">开始</button>
          <button @click="onStop">暂停</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Rythm from 'rythm.js'

  const pulse = (elem, value, options = {}) => {
    const max = options.max || 1.25
    const min = options.min || 0.75
    const scale = (max - min) * value
    elem.style.transform = `scale(${min + scale})`
    //
    // const from = options.from || [253, 252, 71]
    // const to = options.to || [36, 254, 65]
//    const from = options.from || [17, 153, 142]
//    const to = options.to || [56, 239, 125]
//    const scaleR = (to[0] - from[0]) * value
//    const scaleG = (to[1] - from[1]) * value
//    const scaleB = (to[2] - from[2]) * value
//    elem.style.backgroundColor = `rgb(${Math.floor(to[0] - scaleR)}, ${Math.floor(
//      to[1] - scaleG
//    )}, ${Math.floor(to[2] - scaleB)})`
  }
  const resetPulse = elem => {
    elem.style.transform = ''
    //
    // elem.style.backgroundColor = ''
  }
  export default {
    components: {},
    data () {
      return {}
    },
    computed: {},
    methods: {
      onPlay () {
        this.rythm.start()
      },
      onPause () {
        console.log('onPause')
        this.rythm.stop(true)
      },
      onStart () {
        this.$refs.audio.play()
        this.rythm.start()
      },
      onStop () {
        console.log('onStop')
        this.rythm.stop(true)
        this.$refs.audio.pause()
      }
    },
    watch: {},
    created () {
    },
    mounted () {
      const rythm = new Rythm()
      rythm.setMusic('/static/video/Summertime Sadness.mp3')
      rythm.connectExternalAudioElement(this.$refs.audio)
//      rythm.addRythm('videoEl1', 'color', 0, 10, {form: [17, 153, 142], to: [56, 239, 125]})
      rythm.addRythm('videoEl1', {dance: pulse, reset: resetPulse}, 150, 40)
      rythm.addRythm('videoEl2', 'twist', 0, 10, {
        min: -45,
        max: 45
      })
      // rythm.addRythm('videoEl', 'pulse', 150, 40)
      rythm.start()
      this.rythm = rythm
      window.rythm = rythm
    }
  }
</script>
<style lang="scss" scoped>
  .cat-img {
    height: 300px;
    margin: 0 50px;
  }

  .videoEl2 {
    border-radius: 50%;
  }

  .btn-box {
    margin-top: 200px;
    button {
      width: 100px;
      height: 50px;
    }
  }
</style>
