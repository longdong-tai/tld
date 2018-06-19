<template>
  <div>
    <div id="fileWrapper" class="file_wrapper">
      <div id="info">
        HTML5 Audio API showcase | An Audio Viusalizer
      </div>
      <label for="uploadedFile">Drag&drop or select a file to play:</label>
      <input type="file" ref="fileInput" @change="onChange">
    </div>
    <div id="visualizer_wrapper">
      <canvas id='canvas' width="800" height="350"></canvas>
    </div>
    <div class="canvas-box">
      <canvas class="canvas" ref="canvas"></canvas>
    </div>
  </div>
</template>
<script>
  // https://www.cnblogs.com/Wayou/p/3543577.html
  const WIDTH = 1000
  const HEIGHT = 500
  export default {
    data () {
      return {}
    },
    methods: {
      onChange () {
        let audioInput = this.$refs.fileInput
        if (audioInput.files.length !== 0) {
          this.file = audioInput.files[0]
          this.fileName = this.file.name
          this._start()
        }
      },
      _start () {
        // read and decode the file into audio array buffer
        let that = this // 当前this指代Visualizer对象，赋值给that以以便在其他地方使用
        let file = this.file // 从Visualizer对象上获取前面得到的文件
        let fileRender = new FileReader() // 实例化一个FileReader用于读取文件
        fileRender.onload = function (e) { // 文件读取完后调用此函数
          var fileResult = e.target.result // 这是读取成功得到的结果ArrayBuffer数据
          var audioContext = that.audioContext // 从Visualizer得到最开始实例化的AudioContext用来做解码ArrayBuffer
          audioContext.decodeAudioData(fileResult, function (buffer) { // 解码成功则调用此函数，参数buffer为解码后得到的结果
            that._visualize(audioContext, buffer) // 调用_visualize进行下一步处理，此方法在后面定义并实现
          }, function (e) { // 这个是解码失败会调用的函数
            console.log('!哎玛，文件解码失败:(')
          })
        }
        // 将上一步获取的文件传递给FileReader从而将其读取为ArrayBuffer格式
        fileRender.readAsArrayBuffer(file)
      },
      _visualize (audioContext, buffer) {
        let audioBufferSouceNode = audioContext.createBufferSource()
        let analyser = audioContext.createAnalyser()
        // 将source与分析器连接
        audioBufferSouceNode.connect(analyser)
        // 将分析器与destination连接，这样才能形成到达扬声器的通路
        analyser.connect(audioContext.destination)
        // 将上一步解码得到的buffer数据赋值给source
        audioBufferSouceNode.buffer = buffer
        // 播放
        audioBufferSouceNode.start(0)
        // 音乐响起后，把analyser传递到另一个方法开始绘制频谱图了，因为绘图需要的信息要从analyser里面获取
        this._drawSpectrum(analyser)
      },
      _drawSpectrum (analyser) {
        let canvas = document.getElementById('canvas')
        let cwidth = canvas.width
        let cheight = canvas.height - 2
        let meterWidth = 10 // 频谱条宽度
        // let gap = 2 // 频谱条间距
        let capHeight = 2
        let capStyle = '#fff'
        let meterNum = 800 / (10 + 2) // 频谱条数量
        let capYPositionArray = [] // 将上一画面各帽头的位置保存到这个数组
        let ctx = canvas.getContext('2d')
        let gradient = ctx.createLinearGradient(0, 0, 0, 300)
        gradient.addColorStop(1, '#0f0')
        gradient.addColorStop(0.5, '#ff0')
        gradient.addColorStop(0, '#f00')
        var drawMeter = function () {
          var array = new Uint8Array(analyser.frequencyBinCount)
          analyser.getByteFrequencyData(array)
          var step = Math.round(array.length / meterNum) // 计算采样步长
          ctx.clearRect(0, 0, cwidth, cheight)
          for (var i = 0; i < meterNum; i++) {
            var value = array[i * step] // 获取当前能量值
            if (capYPositionArray.length < Math.round(meterNum)) {
              capYPositionArray.push(value) // 初始化保存帽头位置的数组，将第一个画面的数据压入其中
            }
            ctx.fillStyle = capStyle
            // 开始绘制帽头
            if (value < capYPositionArray[i]) { // 如果当前值小于之前值
              ctx.fillRect(i * 12, cheight - (--capYPositionArray[i]), meterWidth, capHeight) // 则使用前一次保存的值来绘制帽头
            } else {
              ctx.fillRect(i * 12, cheight - value, meterWidth, capHeight) // 否则使用当前值直接绘制
              capYPositionArray[i] = value
            }
            // 开始绘制频谱条
            ctx.fillStyle = gradient
            ctx.fillRect(i * 12, cheight - value + capHeight, meterWidth, cheight)
          }
          requestAnimationFrame(drawMeter)
        }
        requestAnimationFrame(drawMeter)
      },
      _prepareAPI: function () {
        // 统一前缀，方便调用
        window.AudioContext = window.AudioContext || window.webkitAudioContext || window.mozAudioContext || window.msAudioContext
        // 这里顺便也将requestAnimationFrame也打个补丁，后面用来写动画要用
        window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame
        // 安全地实例化一个AudioContext并赋值到Visualizer的audioContext属性上，方便后面处理音频使用
        try {
          this.audioContext = new AudioContext()
        } catch (e) {
          console.log('!妳的浏览器不支持AudioContext:(')
          console.log(e)
        }
      }
    },
    created () {
      console.log('created..')
    },
    mounted () {
      this._prepareAPI()
      this.canvasCtx = this.$refs.canvas.getContext('2d')
      this.$refs.canvas.width = WIDTH
      this.$refs.canvas.height = HEIGHT
    },
    computed: {}
  }
</script>
<style lang="scss" scoped>
  #fileWrapper {
    transition: all 0.5s ease;
  }

  #fileWrapper:hover {
    opacity: 1 !important;
  }

  #visualizer_wrapper {
    text-align: center;
    background: black;
  }

  .canvas-box {
    background: black;
    .canvas {
      margin: 50px auto;
      width: 1000px;
      height: 500px;
    }
  }
</style>
