(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{638:function(s,a,t){"use strict";t.r(a);var e=t(8),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"_1-部署"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-部署"}},[s._v("#")]),s._v(" 1，部署")]),s._v(" "),t("p",[s._v("先来部署一个单机版的 etcd。国外难以下载，感谢华为镜像站：https://mirrors.huaweicloud.com/etcd/")]),s._v(" "),t("p",[s._v("下载到本机解压放到对应目录：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" xf etcd-v3.3.11-linux-amd64.tar.gz\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" etcd-v3.3.11-linux-amd64/\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" etcd etcdctl /usr/bin/\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("因为默认的空间配额是 2G，官方下载的包内，有如下说明：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("The default storage size limit is 2GB, configurable with "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("--quota-backend-bytes"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v(" flag. 8GB is a suggested maximum size "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" normal environments and etcd warns at startup "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" the configured value exceeds it.\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("这里将配额指定为 16M 便于测试：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ etcd --quota-backend-bytes"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$((")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1024")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1024")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("))")])]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("启动之后，首先查看一下状态：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$ETCDCTL_API")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" etcdctl --endpoints"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://127.0.0.1:2379"')]),s._v(" --write-out"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("table endpoint status\n+-----------------------+------------------+---------+---------+-----------+-----------+------------+\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("       ENDPOINT        "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("        ID        "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" VERSION "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" DB SIZE "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" IS LEADER "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" RAFT "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("TERM")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" RAFT INDEX "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+-----------------------+------------------+---------+---------+-----------+-----------+------------+\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" http://127.0.0.1:2379 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" 8e9e05c52164694d "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.3")]),s._v(".11 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(" KB "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("         "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("         "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+-----------------------+------------------+---------+---------+-----------+-----------+------------+\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h2",{attrs:{id:"_2-测试"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-测试"}},[s._v("#")]),s._v(" 2，测试")]),s._v(" "),t("p",[s._v("接着批量写入，查看状态：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("dd")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("if")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/dev/urandom "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("bs")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1024")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("count")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1024")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ETCDCTL_API")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" etcdctl put key  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("break")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n。。。。。。\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1024")]),s._v("+0 records "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1024")]),s._v("+0 records out\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1048576")]),s._v(" bytes "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.0")]),s._v(" MB"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" copied, "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0830886")]),s._v(" s, "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("12.6")]),s._v(" MB/s\nError: etcdserver: mvcc: database space exceeded\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("看到一个报错说："),t("code",[s._v("Error: etcdserver: mvcc: database space exceeded")]),s._v("，亦即超出了配额，执行简单的写入：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ETCDCTL_API")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" etcdctl put newkey "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("123")]),s._v("\nError: etcdserver: mvcc: database space exceeded\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("依然是这个错误，再看服务状态：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ETCDCTL_API")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" etcdctl --endpoints"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://127.0.0.1:2379"')]),s._v(" --write-out"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("table endpoint status\n+-----------------------+------------------+---------+---------+-----------+-----------+------------+\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("       ENDPOINT        "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("        ID        "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" VERSION "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" DB SIZE "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" IS LEADER "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" RAFT "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("TERM")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" RAFT INDEX "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+-----------------------+------------------+---------+---------+-----------+-----------+------------+\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" http://127.0.0.1:2379 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" 8e9e05c52164694d "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.3")]),s._v(".11 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("17")]),s._v(" MB "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("         "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("         "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+-----------------------+------------------+---------+---------+-----------+-----------+------------+\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("很明显超出了配额。")]),s._v(" "),t("p",[s._v("使用如下命令查看告警信息：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ETCDCTL_API")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" etcdctl put newkey "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("123")]),s._v("\nError: etcdserver: mvcc: database space exceeded\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("所有的运维管理都在操作 Etcd 的存储空间。存储空间的配额用于控制 Etcd 数据空间的大小，如果 Etcd 节点磁盘空间不足了，配额会触发告警，然后 Etcd 系统将进入操作受限的维护模式。")]),s._v(" "),t("h2",{attrs:{id:"_3-压缩"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-压缩"}},[s._v("#")]),s._v(" 3，压缩")]),s._v(" "),t("p",[s._v("处理的方案是可以针对如上内容进行压缩。")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#使用API3")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ETCDCTL_API")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取当前版本")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("rev")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("etcdctl --endpoints"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http://127.0.0.1:2379 endpoint status --write-out"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"json"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("egrep")]),s._v(" -o "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\"revision\":[0-9]*'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("egrep")]),s._v(" -o "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'[0-9].*'")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 压缩掉所有旧版本")]),s._v("\netcdctl --endpoints"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http://127.0.0.1:2379 compact "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$rev")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 整理多余的空间")]),s._v("\netcdctl --endpoints"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http://127.0.0.1:2379 defrag\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 取消告警信息")]),s._v("\netcdctl --endpoints"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http://127.0.0.1:2379 alarm disarm\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("p",[s._v("然后再次查看状态：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$ETCDCTL_API")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" etcdctl --endpoints"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://127.0.0.1:2379"')]),s._v(" --write-out"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("table endpoint status\n+-----------------------+------------------+---------+---------+-----------+-----------+------------+\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("       ENDPOINT        "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("        ID        "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" VERSION "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" DB SIZE "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" IS LEADER "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" RAFT "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("TERM")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" RAFT INDEX "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+-----------------------+------------------+---------+---------+-----------+-----------+------------+\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" http://127.0.0.1:2379 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" 8e9e05c52164694d "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.3")]),s._v(".11 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.1")]),s._v(" MB "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("         "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("         "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("21")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+-----------------------+------------------+---------+---------+-----------+-----------+------------+\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("验证写入：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ETCDCTL_API")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" etcdctl put eryajf "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\nOK\n$ "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ETCDCTL_API")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" etcdctl get eryajf\neryajf\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("服务正常了。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://tva3.sinaimg.cn/large/008k1Yt0ly1grybyko29ej30n20yl45c.jpg",alt:""}})]),s._v(" "),t("h2",{attrs:{id:"_4-systemd-管理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-systemd-管理"}},[s._v("#")]),s._v(" 4，systemd 管理")]),s._v(" "),t("p",[s._v("通常我们使用 systemd 管理服务，于是可以在启动的时候加入配置信息：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$cat")]),s._v(" /etc/systemd/system/etcd.service\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Unit"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Description")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("Etcd\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("After")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("network.target\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Before")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("flanneld.service\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Service"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("User")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("root\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ExecStart")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/bin/etcd  -name etcd1 -data-dir /var/lib/etcd  --advertise-client-urls http://10.3.7.7:2379,http://127.0.0.1:2379 --listen-client-urls http://10.3.7.7:2379,http://127.0.0.1:2379 --auto-compaction-retention"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" --quota-backend-bytes"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8388608000")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Restart")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("on-failure\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Type")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("notify\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LimitNOFILE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("65536")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Install"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("WantedBy")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("multi-user.target\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("ul",[t("li",[t("code",[s._v("auto-compaction-retention")]),s._v("：表示每隔一个小时自动压缩一次")]),s._v(" "),t("li",[t("code",[s._v("quota-backend-bytes")]),s._v("：磁盘空间调整为 8G，官方建议最大 8G。")])]),s._v(" "),t("p",[s._v("然后重启即可。")]),s._v(" "),t("p",[s._v("参考：https://etcd.io/docs/v3.4/faq/#what-does-mvcc-database-space-exceeded-mean-and-how-do-i-fix-it")])])}),[],!1,null,null,null);a.default=r.exports}}]);