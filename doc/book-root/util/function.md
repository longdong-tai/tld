# function 相关操作
包装函数，是函数特殊化

## debounce
   - 参数：debounce (func, delay)
      - {func} 特殊化处理的函数
      - {delay} 延迟事件 （单位ms）
   - 返回值：无
   - 作用：对func做延迟触发，防止多次调用，多用于用于搜索请求，事件监听

## throttle
   - 参数：throttle (func, delay) 同上
   - 返回值：无
   - 作用：对func做节流，控制触发次数
