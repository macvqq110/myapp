### Git

手机：15810195203
#### git 忽略指定文件  
    1. 创建一个.gitignore 
    2. 在里面输入 想要忽略得文件  /dir  /day02
    3. 上传到本地/远程版本库
    4. 就实现了忽略

#### github 上传自己得作品
    可以当一个小型服务器
    1. 创建一个存储库 macvqq110.github.io（仓库macvqq110名字一定和 用户名一样）
    2. 将当前得存储库 克隆到本地
    3. 将想要传得作品放到本地中，提交到远程github
    4. 通过网址url 输入： macvqq110.github.io

#### github 存储库删除
    1. 点击settings
    2. 滑倒最下方 点击delete this

#### git 分支管理

    1. 创建一个分支， git branch dev
    2. git checkout dev
        简写：git checkout -b dev  //创建一个dev分支，并且切换到dev分支
    3. 编辑 dev分支下的所有东西
    4. dev分支推送到远程  git push origin dev

#### git 分支合并

    1.要切换到master主分支
    2.通过git merge dev 将指定的分支合并到master
    3.git branch -a 查看所有分支
    4.git branch -D dev 删除没有用分支

    5.删除远程分支  git push origin --delete dev   

#### 解决git 分支合并（出现冲突）
    1. 将指定的分支进行合并
        git merge dev  
    2. 使用一句命令 找到冲突的文件
        git diff --name-only --diff-filter=U 
    3. 打开冲突文件
        看到 
        >>>>>>

        ======

        <<<<<<<

        中间夹得就是冲突的位置，需要手动修改，修改之后
    4. 使用
        git add .
        git commit -m 描述
        


