<template>
  <div class="content-box">
    <div class="header">
      <div class="logo-box">
        <img class="logo" src="static/img/icon/logo.png" alt="故乡云" title="故乡云">
        <span class="title-md">故乡云</span>
      </div>
    </div>
    <div class="main-box" :class="{'fold':isFold}">
      <div class="left-box">
        <div class="toggle-box" @click="toggleFold">
          <span class="el-icon-d-arrow-left" v-show="!isFold"></span>
          <span class="el-icon-d-arrow-right" v-show="isFold"></span>
        </div>

        <div class="menu-list" :class="{'fold':isFold}">
          <ul v-show="!isFold">
            <router-link class="link" :to="item.url" tag="li" v-for="item in menuList" :key="item.url">
              <span class="icon" :class="[item.icon]"></span>
              <span>{{item.name}}</span>
            </router-link>
          </ul>

          <ul v-show="isFold">
            <li class="link" v-for="item in menuList" :key="item.url">
              <router-link class="link" :to="item.url" tag="span" :class="[item.icon]"></router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="right-box">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    components: {},
    data () {
      return {
        isFold: false,
        menuList: [
          {
            url: '/rythm',
            icon: 'gx-icon-star',
            name: 'rythm.js'
          },
          {
            url: '/starlight',
            icon: 'gx-icon-star',
            name: 'starlight'
          },
          {
            url: '/other',
            icon: 'gx-icon-settings-2',
            name: 'other'
          }
        ]
      }
    },
    computed: {},
    methods: {
      toggleFold () {
        this.isFold = !this.isFold
      },
      handleOpen (key, keyPath) {
        console.log(key, keyPath)
      },
      handleClose (key, keyPath) {
        console.log(key, keyPath)
      }
    },
    watch: {},
    created () {
    },
    mounted () {
    }
  }
</script>
<style lang="scss" scoped>
  .content-box {
    height: 100%;
    padding-top: 60px;
  }

  .header {
    position: fixed;
    top: 0;
    z-index: 1000;
    width: 100%;
    height: 60px;
    line-height: 60px;
    background: #fff;
    border-bottom: solid 1px #e6e6e6;
    padding: 0 20px;
    display: flex;
    .logo-box {
      .logo {
        width: 36px;
        height: 36px;
        vertical-align: middle;
        margin-right: 10px;
      }
      .title-md {
        vertical-align: middle;
      }
    }
  }

  .main-box {
    height: 100%;
    position: relative;
    &.fold {
      .left-box {
        // left: -12.5%;
        left: -160px;
      }
      .right-box {
        left: 40px;
      }
    }
    .left-box {
      padding: 20px 0;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      /*width: 12.5%;*/
      width: 200px;
      height: 100%;
      background: #2D3C54;
      overflow-y: auto;
      transition: left 250ms ease;
      .toggle-box {
        padding-right: 10px;
        height: 30px;
        color: #797D85;
        font-size: 24px;
        text-align: right;
        > span {
          cursor: pointer;
        }
      }
      .menu-list {
        color: #fff;
        .link {
          height: 40px;
          line-height: 40px;
          padding-left: 20px;
          > span {
            vertical-align: middle;
          }
          cursor: pointer;
          &.router-link-active {
            cursor: default;
            color: #409EFF;
          }
        }
        &.fold {
          ul {
            width: 40px;
            float: right;
          }
          .link {
            padding-left: 0;
            text-align: center;
          }
        }
      }
    }
    .right-box {
      position: absolute;
      top: 0;
      right: 0;
      left: 200px;
      bottom: 0;
      padding: 20px;
      overflow-y: auto;
      transition: left 250ms ease;
    }
  }
</style>
