# dom相关操作

## addClass
  - 参数：addClass (el, className)
    - {el} dom节点
    - {className}
  - 返回值：无
  - 作用：给el添加 class：className

## hasClass
  - 参数：hasClass(el, className) 同上
  - 返回值：[Boolean]
  - 作用：获取浏览器名称

## removeClass
  - 参数：hasClass(el, className) 同上
  - 返回值：无
  - 作用：删除el的class：className

## getData
  - 参数：getData(el, name, val)
    - {el} dom节点
    - {name} 属性Attr名称 'data-'+ name
    - {val} 属性Attr值
  - 返回值：val:el.getAttribute(name)
  - 作用：获取el属性的name，如果val存在，则el.setAttribute(name, val)

## prefixStyle
  - 参数：prefixStyle (style)
  - 返回值：['prefix']+style
  - 作用：检测浏览器支持的css属性前缀
  - 示例：
     ```javascript
    var style =  prefixStyle('transform')
    style === 'webkitTransform' // webkit内核下 true
    style === 'MozTransform' // 火狐内核下 true
     ```

## getRect
  - 参数：hasClass(el)
  - {el} dom节点
  - 返回值：[Object]
   {
   top:'',
   left:'',
   width:'',
   height:'',
   }
  - 作用：返回el距离top、left的距离、和自身的宽高

## addEvent
  - 参数：getData(element, event, handler)
    - {el} dom节点
    - {event} 监听的事件可以多个 ' ' 隔开，例:'click mouseEnter'
    - {handler} 监听的回调函数，为了方便取消事件监听，不建议使用匿名函数
  - 返回值：无
  - 作用：浏览器事件监听

## removeEvent
  - 参数：removeEvent(element, event, handler)
    - {el} dom节点
    - {event} 监听的事件可以多个 ' ' 隔开，例:'click mouseEnter'
    - {handler} 监听的回调函数，为了方便取消事件监听，不建议使用匿名函数
  - 返回值：无
  - 作用：取消浏览器事件监听
