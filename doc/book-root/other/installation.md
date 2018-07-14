# 安装

## NPM

执行如下命令安装：

```
npm install git+http://code.e-hometown.com:9084/taild/gxyun-front-base.git
或者：
将下面一行添加到package.json dependencies 里面
"gxyun-front-base": "git+http://code.e-hometown.com:9084/taild/gxyun-front-base.git",
然后执行 npm install
```

## 使用
#### 全局注册
```
import Vue from 'vue'
import gxy from 'gxyun-front-base'
Vue.use(gxy)
// 你可以使用：
this.$gxyUtil.dom.addClass()
this.$gxyUtil.cookie.getItem()
...

// 其中dom、cookie 就是util对应的模块
```

#### 按需加载
```javascript
import Vue from 'vue'
import { ModuleControl, util } from 'gxyun-front-base'
Vue.use(ModuleControl)
util.dom.addClass
Vue.prototype.$gxyUtil = util // 或者手动挂载到Vue原型上
```

#### 组件使用
组件分为本项目通用（依赖当前项目的配置，无法通用）、纯组件（不依赖任何环境）
```html
  <gx-module-control moduleName="module_shop">
       <i class="icon f7-icons ios-only" @click="gotoShopCart">
           <span class="icon-car gx-icon-shopcart"></span>
           <span class="badge color-red">{{shopCartNum}}</span>
        </i>
  </gx-module-control>
```

