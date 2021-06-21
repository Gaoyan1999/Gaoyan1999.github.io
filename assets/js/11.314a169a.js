(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{366:function(s,t,a){"use strict";a.r(t);var v=a(44),r=Object(v.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"linux-基础"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux-基础"}},[s._v("#")]),s._v(" Linux 基础")]),s._v(" "),a("h2",{attrs:{id:"常用命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用命令"}},[s._v("#")]),s._v(" 常用命令")]),s._v(" "),a("blockquote",[a("p",[s._v("目录类")])]),s._v(" "),a("ul",[a("li",[s._v("cd: 切换目录命令，以 ”"),a("strong",[s._v("/")]),s._v(" “ 表示绝对路径")]),s._v(" "),a("li",[s._v("./:当前目录")]),s._v(" "),a("li",[s._v("cd ..:退回上一级")]),s._v(" "),a("li",[s._v("ls：展示当前目录下所有文件")]),s._v(" "),a("li",[s._v("pwd: 显示所在目录")]),s._v(" "),a("li",[s._v("mkdir XXX:创建一个目录（-p: 创建多级）")]),s._v(" "),a("li",[s._v("cp复制： cp  某文件  某目录")]),s._v(" "),a("li",[s._v("rm：移除")]),s._v(" "),a("li",[s._v("mv：\n"),a("ul",[a("li",[s._v("移动文件或者目录 :mv XXX 某文件 /")]),s._v(" "),a("li",[s._v("重命名 :mv XXX YYY")])])])]),s._v(" "),a("blockquote",[a("p",[s._v("参数")])]),s._v(" "),a("ul",[a("li",[s._v("-a: 查看所有文件，包括隐藏")]),s._v(" "),a("li",[s._v("-l: 查看所有文件，以及对应的信息，不包括隐藏。")]),s._v(" "),a("li",[s._v("-f: 忽略不存在的文件，没有警告")]),s._v(" "),a("li",[s._v("-r:递归删除目录")]),s._v(" "),a("li",[s._v("-u:只替换已经更新过的文件")])]),s._v(" "),a("h2",{attrs:{id:"属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#属性"}},[s._v("#")]),s._v(" 属性")]),s._v(" "),a("p",[a("img",{attrs:{src:"/Users/gaoyan/notes/linux_%E6%96%87%E4%BB%B6%E5%B1%9E%E6%80%A7.png",alt:"文件属性"}})]),s._v(" "),a("p",[s._v("第一个字符代表这个文件是目录、文件或者链接文件等等。")]),s._v(" "),a("p",[a("img",{attrs:{src:"/Users/gaoyan/notes/linux_%E6%96%87%E4%BB%B6.png",alt:""}})]),s._v(" "),a("ul",[a("li",[s._v("chgrp：更改文件属组")]),s._v(" "),a("li",[s._v("chgrp [-R]  属组名 文件名")])]),s._v(" "),a("h2",{attrs:{id:"更改权限"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更改权限"}},[s._v("#")]),s._v(" 更改权限")]),s._v(" "),a("p",[s._v("chmod [-R]  xyz 文件或目录")]),s._v(" "),a("p",[s._v("Linux 文件的基本权限就有9个，分别是owner、group、others 三种身份的 rwx；")]),s._v(" "),a("p",[a("code",[s._v("r:4 w:2 x:1")])]),s._v(" "),a("blockquote",[a("p",[s._v("可读可写可执行 7")]),s._v(" "),a("p",[s._v("可读可写 6")]),s._v(" "),a("p",[s._v("、、、")])]),s._v(" "),a("p",[s._v("chmod 777 文件名")]),s._v(" "),a("h2",{attrs:{id:"查看"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看"}},[s._v("#")]),s._v(" 查看")]),s._v(" "),a("p",[s._v("ifconfig：查看网络配置")]),s._v(" "),a("p",[s._v("网络配置位置： etc/sysconfig/network-scripts")]),s._v(" "),a("p",[a("img",{attrs:{src:"/Users/gaoyan/notes/linux_network.png",alt:""}})]),s._v(" "),a("ul",[a("li",[a("p",[s._v("查看某个文件：")]),s._v(" "),a("blockquote",[a("p",[s._v("普通：cat  XXX")]),s._v(" "),a("p",[s._v("带行显示：nl XXX")]),s._v(" "),a("p",[s._v("上下翻页：less ，"),a("code",[s._v("/")]),s._v("+所查找字符串：查找某个内容。PgUp/PgDn 翻页")])])])]),s._v(" "),a("h2",{attrs:{id:"链接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#链接"}},[s._v("#")]),s._v(" 链接")]),s._v(" "),a("p",[s._v("硬链接：A---B,若B是A的硬链接，那么它们连个指向同一个文件。意思是一个文件拥有多个路径。")]),s._v(" "),a("p",[s._v("软链接：类似快捷方式，源文件没了，快捷方式也访问不了。")]),s._v(" "),a("p",[s._v("创建：ln 命令、touch命令")]),s._v(" "),a("blockquote",[a("p",[s._v("创建新文件 ：touch newFile")]),s._v(" "),a("p",[s._v("创建硬链接 ：ln  f1 f2")]),s._v(" "),a("p",[s._v("创建软链接： ln -s newFile newFile f3 （f3 为软链接，f3是蓝色）")])]),s._v(" "),a("h2",{attrs:{id:"vim-编辑器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vim-编辑器"}},[s._v("#")]),s._v(" Vim 编辑器")]),s._v(" "),a("h3",{attrs:{id:"命令模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#命令模式"}},[s._v("#")]),s._v(" 命令模式")]),s._v(" "),a("p",[s._v("i/insert:插入")]),s._v(" "),a("p",[s._v("x/delete:删除")]),s._v(" "),a("p",[a("strong",[s._v(":")]),s._v("     :切换为底线命令模式")]),s._v(" "),a("h3",{attrs:{id:"输入模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#输入模式"}},[s._v("#")]),s._v(" 输入模式")]),s._v(" "),a("p",[s._v("用来写文本")]),s._v(" "),a("p",[s._v("esc：回到命令模式")]),s._v(" "),a("h3",{attrs:{id:"底线命令模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#底线命令模式"}},[s._v("#")]),s._v(" 底线命令模式")]),s._v(" "),a("p",[s._v("q：退出")]),s._v(" "),a("p",[s._v("w：保存")]),s._v(" "),a("p",[s._v("wq：保存退出")]),s._v(" "),a("h2",{attrs:{id:"账号管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#账号管理"}},[s._v("#")]),s._v(" 账号管理")]),s._v(" "),a("p",[s._v("root 用户分配账号")]),s._v(" "),a("blockquote",[a("p",[s._v("添加用户： useradd -选项 用户名")]),s._v(" "),a("p",[s._v("-m:自动创建这个用户的主目录  /home/userA")]),s._v(" "),a("p",[s._v("删除用户：userdel")]),s._v(" "),a("p",[s._v("用户目录一并删除：userdel -r userA")]),s._v(" "),a("p",[s._v("修改用户：usermod")]),s._v(" "),a("p",[s._v("usermode -d  /home/233 userA")]),s._v(" "),a("p",[s._v("切换用户：su  userA")]),s._v(" "),a("p",[s._v("给用户设置密码：passwd userA")]),s._v(" "),a("p",[s._v("锁定账户：passwd -l userA")])]),s._v(" "),a("h2",{attrs:{id:"用户自管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用户自管理"}},[s._v("#")]),s._v(" 用户自管理")]),s._v(" "),a("p",[s._v("对etc/group 更新")]),s._v(" "),a("blockquote",[a("p",[a("strong",[s._v("创建用户组")]),s._v(" ：groupadd  groupA")]),s._v(" "),a("p",[s._v("指定用户组的id  groupadd -g 520 groupA")]),s._v(" "),a("p",[a("strong",[s._v("删除用户组")]),s._v("： groupdel  groupA")]),s._v(" "),a("p",[a("strong",[s._v("修改用户组的权限信息和名字：")]),s._v(" groupmod -g 521 -n groupB    groupA")]),s._v(" "),a("p",[a("strong",[s._v("切换用户组")]),s._v("：newgrp root")])]),s._v(" "),a("h2",{attrs:{id:"磁盘管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#磁盘管理"}},[s._v("#")]),s._v(" 磁盘管理")]),s._v(" "),a("blockquote",[a("p",[s._v("df (列出文件系统整体的磁盘使用量)  du(检查磁盘空间使用量)")])]),s._v(" "),a("h2",{attrs:{id:"进程管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#进程管理"}},[s._v("#")]),s._v(" 进程管理")]),s._v(" "),a("ul",[a("li",[s._v("Linux中每个程序都有自己的一个进程，每一个进程都有一个id号。")]),s._v(" "),a("li",[s._v("每个进程都有父进程。")]),s._v(" "),a("li",[s._v("进程可以有两种存在方式：前台、后台。一般服务都是后台运行，程序在前台运行")])]),s._v(" "),a("blockquote",[a("p",[s._v("命令")])]),s._v(" "),a("ul",[a("li",[a("p",[s._v("ps：查看当前用户正在执行的各种进程的信息。")]),s._v(" "),a("p",[s._v("ps -XX:")]),s._v(" "),a("ul",[a("li",[s._v("-a: 显示当前终端运行的所有进程信息")]),s._v(" "),a("li",[s._v("-u：以用户的信息显示进程")]),s._v(" "),a("li",[s._v("-x：显示后台运行进程的参数")])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -aux"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("eerp mysql\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  | 在Linux中被称为管道符  A|B")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  grep  查找文件中符合条件的字符串")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -ef"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" mysql\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看父进程")]),s._v("\n\npstree -pu "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看目录树树")]),s._v("\n\t-p  显示父id\n\t-u  显示用户组\n")])])])]),s._v(" "),a("li",[a("p",[s._v("杀死进程 kill -9 进程的id")])])]),s._v(" "),a("h2",{attrs:{id:"环境安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#环境安装"}},[s._v("#")]),s._v(" 环境安装")]),s._v(" "),a("ul",[a("li",[s._v("rpm、解压缩、yum在线安装")])]),s._v(" "),a("h3",{attrs:{id:"rpm安装jdk"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rpm安装jdk"}},[s._v("#")]),s._v(" rpm安装JDK")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("下载 JDK rpm")])]),s._v(" "),a("li",[a("p",[s._v("安装java环境：")]),s._v(" "),a("blockquote",[a("p",[s._v("检查当前是否存在java环境，如果有的话就需要卸载")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" -qa"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" jdk "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 检查版本信息")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" -e --nodeps jdk "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#卸载")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 卸载完毕后即可安装jdk")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" -ivh rpm包\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#安装位置在 /usr/java/jdk1.8.0_251-amd64")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#配置环境变量 ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/profile文件下\n\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("JAVA_HOME")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/java/jdk1.8.0_251-amd64\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("CLASSPATH")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("%JAVA_HOME%/lib"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("%JAVA_HOME%/jre/lib\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$JAVA_HOME")]),s._v("/bin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$JAVA_HOME")]),s._v("/jre/bin\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")]),s._v(" CLASSPATH JAVA_HOME\n\n\n")])])])])])]),s._v(" "),a("h2",{attrs:{id:"解压缩法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解压缩法"}},[s._v("#")]),s._v(" 解压缩法")]),s._v(" "),a("p",[s._v("tar -zxvf 包名")]),s._v(" "),a("h2",{attrs:{id:"防火墙"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#防火墙"}},[s._v("#")]),s._v(" 防火墙")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("systemctl status firewalld "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看状态")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#开启、重启、关闭、firewalld.service")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" firewalld start\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" firewalld restart\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" firewalld stop\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看规则")]),s._v("\nfirewall-cmd --list-all/ports  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看所有/端口")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#开启端口")]),s._v("\nfirewall-cmd --zone"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("public --add-port"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v("/tcp --permanent\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#阿里云安全组配置规则")]),s._v("\n")])])]),a("h2",{attrs:{id:"yum"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#yum"}},[s._v("#")]),s._v(" yum")]),s._v(" "),a("p",[s._v("安装准备环境")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("yum -y "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" 包名  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#安装命令")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);