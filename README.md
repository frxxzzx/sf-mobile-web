> 测试浏览器为Chrome 70.0.3538.110 

# fell_pain

用于探索、实践移动端的开发。

## 运行须知

同文件夹下 start-service.bat  用来启动内置的服务器。

项目启动时会获取本机的IP地址，手机扫码访问的功能基于手机和电脑在同一个局域网内。



## 内置的node服务器

可以处理ajax请求,实现文件的上传和下载。

基于sf-pc-web的node服务器搭建，再此基础之上，实现了对前端视频播放的支持，以及对电脑指定目录的文件读写。这两个功能属于破环式的，对于服务器本身的复用性影响很大。

## 应用介绍

### 手脑通

手机的内存与电脑相差甚远，传输视频文件很不方便。

这个应用借助node服务器，可以读取电脑指定目录的视频文件以列表的形式展现在前端，也可以上传文件至指定目录，因为是较为私人的信息，没有存在程序内。

实现了添加本地视频到目录，下载、删除文件等功能。

还有很多嚼头，比如弹幕、自动全屏播放、播放完当前视频弹出选集等

应用本质上更适合一对一服务，如果有多端连接，那么在一端删除视频时，其他端会出现体验不佳！

### 指南针

这个主要是模仿了，本人的方向感不好，也对H5开发很感兴趣，后续计划接入百度地图，熟悉一下地图API。




