# 日期相关

## dateFormat(date, fmt)
  - 参数：
    - {date} 日期，任何new Date() 可以接受的值
    - {fmt='yyyy-MM-dd'} 格式化的形式
  - 返回值：[String] fmt对应的日期形式
  - 作用：日期格式化

## misToTime(millisecond)
  - 参数：
    - {millisecond} 毫秒
  - 返回值：[String] 00:00:00时间格式
  - 作用：毫秒格式化为时分秒

## getDateDiff(date)
  - 参数：
    - {date} 日期，任何new Date() 可以接受的值
  - 返回值：[String] date距离现在多久。如："刚刚"、"30分钟前"、"2天前"
  - 作用：计算时差

## getNow()
   - 参数：无
   - 返回值：获取当前时间

