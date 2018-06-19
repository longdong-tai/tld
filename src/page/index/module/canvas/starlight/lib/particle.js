export default class Particle {
  constructor (option = {}) {
    let {index, x, y, canvasCtx} = option
    this.index = index
    this.x = x
    this.y = y
    this.r = Math.random() * 2 + 1
    this.canvasCtx = canvasCtx
    var alpha = (Math.floor(Math.random() * 10) + 1) / 10 / 2
    this.color = 'rgba(255,255,255,' + alpha + ')'
  }

  draw () {
    this.canvasCtx.fillStyle = this.color
    this.canvasCtx.shadowBlur = this.r * 2
    this.canvasCtx.beginPath()
    this.canvasCtx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false)
    this.canvasCtx.closePath()
    this.canvasCtx.fill()
    this.canvasCtx.fill()
  }

  move (option) {
    let {maxHeight} = option
    this.y -= 0.15
    if (this.y <= -10) {
      this.y = maxHeight + 10
    }
    this.draw()
  }
}
