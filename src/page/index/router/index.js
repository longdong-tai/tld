import Vue from 'vue'
import Router from 'vue-router'
import rythm from '../module/rythm/index.vue'
import starlight from '../module/canvas/starlight/index.vue'
import rythmCanvas from '../module/rythm-canvas/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', redirect: '/rythm'},
    {
      path: '/rythm',
      name: 'rythm',
      component: rythm
    },
    {
      path: '/starlight',
      name: 'starlight',
      component: starlight
    },
    {
      path: '/rythmCanvas',
      name: 'rythmCanvas',
      component: rythmCanvas
    }
  ]
})
