### Git

**说明：**
```
    全球最先进的分布式版本管理控制系统

    github 码云 这两个管理工具 都是基于git的

    最早的时候 开发之后 代码如何进行管理
    u盘 => ftp => svn => git(码云 github)

    习惯：在使用git管理的时候 需要拉取最新代码，再去开发项目  和 上传代码

```

#### Git 的 特点(版本管理工具)
1. 分布式开发
2. 多名开发人员协调工作
3. 可以知道哪个同事做的修改
4. 本地管理和远程仓库


#### Git 安装
    windows地址： http://msysgit.github.io/

    git --version   查询版本
    全局配置：
    全局用户名：git config --global user.name 'MrMa'
    全局email：git config --global user.email  '15810195203@163.com'
    全局color样式：git config --global color.ui true

#### 使用命令行
    mkdir myapp
    type nul>index.html
    clear  清空命令行

#### git 命令
    git init                    初始化
    git status                  查看当前工作区修改了哪些内容
    git add                     将工作区的修改内容添加到暂存区
    git commit                  将暂存区的文件添加到 本地管理
    （git commit -m "第二次提交"） 
    git log                     查看最近的提交操作内容（ 作者 时间 备注 commitID ）
    git add .                   工作区全部添加
    git add *.html              某一类型添加
    git diff log.txt            就可以查看修改前和修改后的差异

    git reset --hard commitID   实现跳跃到指定的提交版本位置
    
    git reflog                  查看更多的提交状态信息
    
    git checkout .              所有文件恢复到修改之前的版本
    git checkout index.html     恢复到修改之前的版本

    git reset .                 将所有的add添加（暂存区）全部都回到工作区
    git reset index.html        将指定的暂存区文件恢复到工作区
    
    git rm index.css            将指定的文件在本地版本库中删除


#### github的使用

1. 学习扩展技能知识，查看一些其他的框架 库 三方插件 
2. 当成存储库使用

使用步骤：
```
1.创建github账号
2.创建一个github仓库
3.git remote add origin https://github.com/macvqq110/myapp.git     将现有的本地版本库，进行远程连接
4.git push -u origin master                                        将现有的本地版本库，进行同步更新
```

注意事项：
    单次上传文件大小：100MB   可以通过命令 可以加大到500MB