# cookie相关

## getItem
  - 参数：getItem(sKey)
    - {sKey} 存储的key
  - 返回值：sKey对应的value

## setItem
  - 参数：setItem(sKey, sValue, vEnd, sPath, sDomain, bSecure)
    - {sKey} 存储的key
    - {sValue} 存储的value
    - {vEnd} 过期时间
    - {sPath} 对应的路径
    - {sDomain} 域名
  - 返回值：sKey对应的value
  - 作用：设置sKey对应的value

## removeItem
  - 参数：removeItem(sKey, sPath, sDomain)
    - {sKey} 存储的key
    - {sPath} 对应的路径
    - {sDomain} 域名
  - 返回值：Boolean
  - 作用：删除sKey对应的value

## hasItem
  - 参数：hasItem(sKey)
    - {sKey} 存储的key
  - 返回值：Boolean
  - 作用：cookie中是否存在sKey

## keys
  - 参数：无
  - 返回值：Array
  - 作用：列出所有cookie的可以
