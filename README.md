# Vue3 Setup语法 + TS快速开始框架
## 整体跟随尚硅谷的硅谷臻选运行平台课程搭建
这是一个很好的快速开始的并且健全的结构
主要用于在开发中快速开始一个前端项目，从而减少自己搭建一个项目的时间成本。  
这里主要使用了vite来进行项目的初始化，使用eslint和prettier进行语法和书写格式的检查。  
使用了husky和commitlint进行git提交时的语法检查，配置了强制使用pnpm作为包管理工具。  
集成了Element-Plus，配置了src的别名为‘@’，配置了三种运行环境所需要的环境变量，对svg图的使用进行了封装。  
集成了scss，以及配置了全局的css变量，使用了mock作为模拟接口的一个工具。  
集成了axios，并对axios进行初步的封装，对API接口进行了统一的管理。  

## 注


## Help
git 创建流程
1. 现在本地仓库使用git init命令创建本地仓库
2. 在gitee 或 github上创建云端仓库
3. 使用git remote add origin git@github.com:cjj-cxy/Vue3-Ts-atguigu.git在本地关联云端仓库
4. 可以使用git remote set-url origin git@github.com:cjj-cxy/Vue3-Ts-atguigu.git修改云端关联仓库地址

```
git 提交命令
git add .
git commit -m ' XXX '
git push ｜ git push -u origin main
```

```
若改git push时出现无法提交的情况
可以尝试执行
git config --global --unset http.proxy
git config --global --unset https.proxy
```