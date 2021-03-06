# Linux微信web开发者工具
linux 下使用微信web开发者工具.

![wx-dev-tools v-1.02.1803210](https://img.shields.io/badge/wx_dev_tools-1.02.1803210-green.svg)
![nw.js v-0.24.4](https://img.shields.io/badge/nw.js-v0.24.4-blue.svg)


## Description
**Linux微信web开发者工具**, 可在 `linux` 桌面环境跑起 `微信开发者工具`,  
原理是 `微信开发者工具` 本质是 `nw.js` 程序, 把它移植到 `linux` 下没大问题.  
负责编译 `wxml` 和 `wxss` 的 `wcc` 和 `wcsc` (可能还有其他功能),  
则利用 `wine` 来跑即可.

欢迎提PR~


## Changelog
- 2017/03/28 更新:微信小程序升级到0.15.152800
- 2017/03/30 更新:微信小程序升级到0.15.152900
- 2017/05/18 更新:微信小程序升级到0.17.170900
- 2017/05/19 更新:微信小程序升级到0.17.171900
- 2017/05/29 更新:微信小程序升级到0.17.172600
- 2017/06/23 更新:微信小程序升级到0.18.182200
- 2017/07/11 更新:微信小程序升级到0.19.191100
- 2017/07/26 更新:微信小程序升级到0.20.191900
- 2017/08/20 更新:微信小程序升级到0.21.201800
- 2017/09/25 更新:微信小程序升级到0.22.203100
- 2017/09/01 更新:微信小程序升级到1.01.170831
- 2017/09/18 更新:微信小程序升级到1.01.170913
- 2017/09/27 更新:微信小程序升级到1.01.170925
- 2017/10/14 更新:微信小程序升级到1.01.171013
- 2017/10/28 更新:微信小程序升级到1.01.171019
- 2017/11/02 更新:微信小程序升级到1.01.1711020
- 2017/11/02 更新:nw.js升级到0.24.4
- 2017/11/17 更新:微信小程序升级到1.01.1711160
- 2017/12/04 更新:微信小程序升级到1.01.1712070
- 2018/01/01 更新:微信小程序升级到1.01.1712150
- 2018/01/08 更新:微信小程序升级到1.02.1801081 支持小游戏开发
- 2018/02/04 更新:微信小程序升级到1.02.1802021
- 2018/02/21 更新:微信小程序升级到1.02.1802080
- 2018/03/09 更新:微信小程序升级到1.02.1802270
- 2018/03/14 更新:微信小程序升级到1.02.1803130
- 2018/03/22 更新:微信小程序升级到1.02.1803210


## 安装 Wine
请先安装 [Wine](https://wiki.winehq.org/Download)  
以 `Ubuntu` 为例: https://wiki.winehq.org/Ubuntu


## 下载并安装 微信web开发者工具
1. 下载项目
``` bash
git clone https://github.com/cytle/wechat_web_devtools.git
```

2. 进入目录
``` bash
cd wechat_web_devtools
```

3. 自动下载最新 `Windows x64` 版开发者工具, 并安装到 `~/.config/微信web开发者工具/` 目录中
``` bash
./bin/wxdt install
```


## 运行
``` bash
./bin/wxdt
```


## 错误排除
### `wcc` 和 `wcsc` 编译错误
1. https://github.com/cytle/wechat_web_devtools/issues/66#issuecomment-368434141
2. https://github.com/cytle/wechat_web_devtools/issues/56#issuecomment-371999385


## 更新到最新版
以下是 `Ubuntu` 安装方法, 其它参考 [https://httpie.org/doc#linux](https://httpie.org/doc#linux)

1. 安装 脚本依赖 `httpie`
``` bash
sudo apt install httpie
```

2. 执行更新
``` bash
./bin/update_package_nw.sh
```


## 源码更新
直接 `pull` 就好了

``` bash
git pull origin
```


## 截图
![截图1](https://github.com/cytle/wechat_web_devtools/raw/fb84550d2d9b9f40f7a80b896066e1933892eff9/images/截图1.png)

![调试界面](https://github.com/cytle/wechat_web_devtools/raw/fb84550d2d9b9f40f7a80b896066e1933892eff9/images/调试界面.png)

上面项目来自[wechat-v2ex](https://github.com/jectychen/wechat-v2ex)

## 卸载

1. 关闭 `微信web开发者工具`
2. 项目文件夹下运行 `./bin/wxdt uninstall` (删除桌面图标、微信web开发者工具配置目录),  
   **开发者工具配置文件, 所有工程和登录信息均会消失**
3. 删除项目文件夹

## 其它

### 免责声明
微信开发者工具版权归腾讯公司所有，本项目指在交流学习之用，如有不当之处，请联系本人，邮箱：canyoutle@gmail.com
