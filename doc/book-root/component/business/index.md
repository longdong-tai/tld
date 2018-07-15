# 前端业务组件，依赖于前端项目，无法独立运行

## module-control
   - 说明：用来控制模块显示、如教育、商城等
   - 示例：
  ```html
   <gx-module-control moduleName="module_shop">
      <!-- 内部默认插槽，是要显示的模块，组件根据module_shop名称自动判断该模块是否显示 -->
      <i class="icon f7-icons ios-only" @click="gotoShopCart">
         <span class="icon-car gx-icon-shopcart"></span>
         <span class="badge color-red">{{shopCartNum}}</span>
      </i>
    </gx-module-control>
  ```
