# vue3BackgroundFrount
vue3搭建的后台管理系统框架 : vue3 + ts + pnpm + vite + prettiery
# 项目基本指令
`pnpm i` 安装依赖

`pnpm run dev` 启动项目

node 版本在v16.14以上 (pnpm的要求)



# ant design vue
**a-config-provide** :  可以用这个组件设置全局配置参数,可以配置的参考atdv api文档


# 优化依赖
配置在 optimizeDeps 的include中

需要优化依赖的情况主要是有 : 
1. 第三方包太大
2. 第三方包是否频繁使用,并且可能有大量的无用依赖
3. 按需加载的包(尽早加载,减少启动时间)
