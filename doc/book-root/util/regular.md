# 正则相关

## 示例：
  ```javascript
    util.regular.emailReg // 获取正则
    util.regular.isEmail('123456@qq.com') // 直接校验
  ```

## 通用方法check
   - 参数：check(reg, ...str)
     - {reg} 需要校验的正则表达式或字符串
     - {str} 可变参数 需要校验的String字符串
   - 返回值：[Boolean]
   - 作用：str是否都满足reg，全部满足返回true,否则返回false

## email
   - 作用：校验邮箱
   - 属性：emailReg (类型 RegExp)
   - 方法 isEmail
      - 参数：isEmail (str)
            - {str} 需要校验的String字符串
          - 返回值：[Boolean]
          - 作用：str是否是邮箱
   示例：
   ```javascript
       util.regular.emailReg // 获取正则
       util.regular.isEmail('123456@qq.com') // 直接校验
   ```

## idCard
   - 作用：身份证
   - 属性：idCardReg
   - 方法：isIdCard

## mobilePhone
   - 作用：手机号码
   - 属性：mobilePhoneReg
   - 方法：isMobilePhone

## telephone
   - 作用：电话号码
   - 属性：telephoneReg
   - 方法：isTelephone

## zipcode
   - 作用：邮编
   - 属性：zipcodeReg
   - 方法：isZipcode

## emoji
   - 作用：emoji表情
   - 属性：emojiReg
   - 方法：isEmoji

## password
   - 作用：密码
   - 属性：passwordReg
   - 方法：isPassword

## money
   - 作用：金额
   - 属性：moneyReg
   - 方法：isMoney

## url
   - 作用：http链接
   - 属性：urlReg
   - 方法：isUrl

