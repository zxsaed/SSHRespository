# 快速创建节点

## 下载安装节点钱包

**注意事项：** 节点钱包请务必开放服务器的8001和8002端口，否则将导致节点连接网络不稳定

​用户从[GitHub](https://github.com/nuls-io/nuls-v2/releases)上下载节点钱包压缩包（linux版、windows版），上传至服务器解压（路径中不包含中文）。

![20190912110813](./g_create_node/20190912110813.png)

​linux用户通过 **./start**命令启动钱包，待各模块启动成功后通过 **./cmd** 命令进入命令行，待区块同步到最新高度之后即可进行其他操作。

![20190912103446](./g_create_node/20190912103446.png)

​	![20190912103641](./g_create_node/20190912103641.png)

​windows用户双击文件夹中的**start.bat**启动钱包，待个模块启动成功后，双击**cmd.bat**进入命令行，待区块同步到最新高度之后即可进行其他操作。

![20190912103945](./g_create_node/20190912103945.png)

![20190912104042](./g_create_node/20190912104042.png)

## 下载轻钱包安装

​用户从[GitHub](https://github.com/nuls-io/nuls-v2/releases)上下载轻钱包（windows版、mac版）安装并打开，连接上节点服务。

![20190912110930](./g_create_node/20190912110930.png)

## 创建共识节点

​用户在轻钱包上面创建共识节点（奖励地址可以跟创建地址一致，也可以是其他地址，打包地址不能为创建地址和奖励地址、保证金20000-200000、佣金比例10-100整数）

![20190912105332](./g_create_node/20190912105332.png)

将出块节点导入节点钱包（密码默认设置为：nuls123456）

![20190912105518](./g_create_node/20190912105518.png)

也可以在命令行通过createagent命令创建节点（略）

## 参与委托

​用户打开轻钱包或[网页钱包](wallet.nuls.io)，导入1.0的私钥或keystore文件，进入共识页面，选择节点进行委托

![20190912110124](./g_create_node/20190912110124.png)

同样可以在命令行通过deposit命令进行委托（略）