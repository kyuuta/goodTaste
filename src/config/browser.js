export default {
    // 判断浏览器信息
    versions: (function browserVersions() {
        const userAgent = navigator.userAgent;
        return {
            qq: userAgent.match(/\sQQ/i) === " qq",                                                          // 是否QQ
            uc: userAgent.indexOf("UCBrowser") > -1,                                                         // UC浏览器
            ios: !!userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),                                         // ios终端
            iPad: userAgent.indexOf("iPad") > -1,                                                            // 是否iPad
            gecko: userAgent.indexOf("Gecko") > -1 && userAgent.indexOf("KHTML") < 0,                        // 火狐内核
            presto: userAgent.indexOf("Presto") > -1,                                                        // opera内核
            webkit: userAgent.indexOf("AppleWebKit") > -1,                                                   // 苹果、谷歌内核
            mobile: !!userAgent.match(/AppleWebKit.*Mobile.*/),                                              // 是否为移动终端
            iPhone: userAgent.indexOf("iPhone") > -1,                                                        // 是否为iPhone或者QQHD浏览器
            webApp: userAgent.indexOf("Safari") < 0,                                                         // 是否web应该程序，没有头部与底部
            safari: !!userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) && userAgent.indexOf("Safari") > -1,  // iOS safari 浏览器
            weChat: userAgent.indexOf("MicroMessenger") > -1,                                                // 是否微信
            aliPay: !!userAgent.match(/Alipay/i),                                                            // 是否支付宝
            trident: userAgent.indexOf("Trident") > -1,                                                      // IE内核
            android: userAgent.indexOf("Android") > -1 || userAgent.indexOf("Linux") > -1,                   // android终端或者uc浏览器
            qqBrowser: userAgent.indexOf("MQQBrowser") > -1                                                  // 手机QQ浏览器
        };
    }()),
    language: (navigator.browserLanguage || navigator.language).toLowerCase()
}