(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{427:function(s,a,t){s.exports=t.p+"assets/img/mysql.d1c0e245.png"},428:function(s,a,t){s.exports=t.p+"assets/img/downloadmysql.0f50b352.png"},429:function(s,a,t){s.exports=t.p+"assets/img/directory.8e83b292.png"},430:function(s,a,t){s.exports=t.p+"assets/img/variable.b869609d.png"},431:function(s,a,t){s.exports=t.p+"assets/img/mysqlroot.b4a407e8.png"},615:function(s,a,t){"use strict";t.r(a);var n=t(2),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"mysql下载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql下载"}},[s._v("#")]),s._v(" Mysql下载")]),s._v(" "),a("h4",{attrs:{id:"mysql官网下载地址-mysql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql官网下载地址-mysql"}},[s._v("#")]),s._v(" MySQL官网下载地址："),a("a",{attrs:{href:"https://dev.mysql.com/downloads/",target:"_blank",rel:"noopener noreferrer"}},[s._v("MySQL"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("img",{attrs:{src:t(427),alt:"在这里插入图片描述"}})]),s._v(" "),a("h4",{attrs:{id:"点击进行下载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#点击进行下载"}},[s._v("#")]),s._v(" 点击进行下载")]),s._v(" "),a("p",[a("img",{attrs:{src:t(428),alt:"在这里插入图片描述"}})]),s._v(" "),a("h3",{attrs:{id:"解压到你想要安装的目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解压到你想要安装的目录"}},[s._v("#")]),s._v(" 解压到你想要安装的目录")]),s._v(" "),a("ul",[a("li",[s._v("新建my.ini文件复制以下内容粘贴进去")]),s._v(" "),a("li",[s._v("修改basedir="),a("font",{attrs:{color:"#dd0000"}},[s._v("安装的目录")]),s._v("，datadir="),a("font",{attrs:{color:"#dd0000"}},[s._v("安装的目录")]),s._v("\\data")],1)]),s._v(" "),a("div",{staticClass:"language-pach line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("[mysqld]\n#设置3306端口\nport=3306\n#设置mysql的安装目录\nbasedir=\n#设置mysql数据库的数据的存放目录\ndatadir=\\data\n#允许最大连接数\nmax_connections=200\n#允许连接失败的次数。这是为了防止有人从该主机试图攻击数据库系统\nmax_connect_errors=10\n#服务端使用的字符集默认为UTF8\ncharacter-set-server=utf8\n#创建新表时将使用的默认存储引擎\ndefault-storage-engine=INNODB\n#默认使用“mysql_native_password”插件认证\ndefault_authentication_plugin=mysql_native_password\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("p",[s._v("我的安装目录：D:\\variable\\MySQL\\mysql-8.0.32-winx64\n"),a("img",{attrs:{src:t(429),alt:"在这里插入图片描述"}}),s._v("\n配置环境变量\n"),a("img",{attrs:{src:t(430),alt:"在这里插入图片描述"}})]),s._v(" "),a("p",[s._v("使用管理员打开cmd\n输入mysqld --initialize-insecure --user=mysql,初始化数据库，并设置默认root为空，初始化完成后，在mysql根目录中会自动生成data文件")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("mysqld --initialize-insecure "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--user")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("mysql\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("再输入mysqld -install,为windows安装mysql服务，默认服务名为mysql\n出现service successfully installed.表示配置完成")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("mysqld "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-install")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("启动数据库net start mysql,")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("net start mysql\n启动服务\n启动服务成功\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("输入mysql -u root -p ,不用输入密码直接回车\n出现mysql>配置完成\n"),a("img",{attrs:{src:t(431),alt:"在这里插入图片描述"}}),s._v('\n输入(alter user user() identified by "密码"😉')]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("alter user user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" identified by "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"密码"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("mysql退出 mysql>quit;\n输入net stop mysql关闭数据库")])])}),[],!1,null,null,null);a.default=e.exports}}]);