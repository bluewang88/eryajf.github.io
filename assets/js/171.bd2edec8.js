(window.webpackJsonp=window.webpackJsonp||[]).push([[171],{692:function(s,a,t){"use strict";t.r(a);var n=t(8),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("很多时候在部署一些开源的Python项目时，会被各种包的问题给恶心到，要么是找不到，要么是网络问题下不下来，在许多不够细心地时候，就那么踩坑了。现在公司有一些小伙伴在写Python项目，私服也在，因此拉出来简简单单添加了一下Python的，过程同其他几种私服一样的，都非常简单，这里仅做简单记录。")]),s._v(" "),t("p",[s._v("搭建Python私服，我们依旧使用nexus3。")]),s._v(" "),t("p",[s._v("与其他私服一样的，Python私服同样有三种类型：")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("hosted")]),s._v(" : 本地存储，便于开发者将个人的一些包上传到私服中")]),s._v(" "),t("li",[t("code",[s._v("proxy")]),s._v(" : 提供代理其他仓库的类型，如豆瓣的pypi仓库")]),s._v(" "),t("li",[t("code",[s._v("group")]),s._v(" : 组类型，实质作用是组合多个仓库为一个对外的地址")])]),s._v(" "),t("p",[s._v("那么就来一个一个创建。")]),s._v(" "),t("h2",{attrs:{id:"_1-创建blob存储。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-创建blob存储。"}},[s._v("#")]),s._v(" 1，创建blob存储。")]),s._v(" "),t("p",[s._v("为其创建一个单独的存储空间。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://tva4.sinaimg.cn/large/008k1Yt0ly1grh160vwm6j31a80jwgnl.jpg",alt:"image"}})]),s._v(" "),t("h2",{attrs:{id:"_2-创建hosted类型的pypi。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-创建hosted类型的pypi。"}},[s._v("#")]),s._v(" 2，创建hosted类型的pypi。")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("Name")]),s._v(": 定义一个名称local-pypi")]),s._v(" "),t("li",[t("code",[s._v("Storage")]),s._v("\nBlob store，我们下拉选择前面创建好的专用blob：pypi-hub。")]),s._v(" "),t("li",[t("code",[s._v("Hosted")]),s._v("\n开发环境，我们运行重复发布，因此Delpoyment policy 我们选择Allow redeploy。这个很重要！")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://tva4.sinaimg.cn/large/008k1Yt0ly1grh168s48dj31ak0qm77w.jpg",alt:"image"}})]),s._v(" "),t("h2",{attrs:{id:"_3-创建一个proxy类型的pypi仓库。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-创建一个proxy类型的pypi仓库。"}},[s._v("#")]),s._v(" 3，创建一个proxy类型的pypi仓库。")]),s._v(" "),t("ul",[t("li",[t("p",[t("code",[s._v("Name")]),s._v(": proxy-pypi")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("Proxy")])]),s._v(" "),t("ul",[t("li",[t("p",[s._v("Remote Storage: 远程仓库地址")]),s._v(" "),t("p",[s._v("这里填写: http://pypi.python.org/pypi/\n上边的是官方的仓库地址，还有其他几个国内常见的，罗列如下：")]),s._v(" "),t("ul",[t("li",[s._v("阿里云：http://mirrors.aliyun.com/pypi/")]),s._v(" "),t("li",[s._v("中国科技大学：https://pypi.mirrors.ustc.edu.cn/")]),s._v(" "),t("li",[s._v("豆瓣：http://pypi.douban.com/")]),s._v(" "),t("li",[s._v("清华大学：https://pypi.tuna.tsinghua.edu.cn/")]),s._v(" "),t("li",[s._v("中国科学技术大学：http://pypi.mirrors.ustc.edu.cn/")])])])])]),s._v(" "),t("li",[t("p",[t("code",[s._v("Storage")]),s._v(": pypi-hub。")])])]),s._v(" "),t("p",[s._v("其他的均是默认。")]),s._v(" "),t("p",[s._v("整体配置截图如下：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://tva4.sinaimg.cn/large/008k1Yt0ly1grh16fvws3j31ai0ucn1m.jpg",alt:"image"}})]),s._v(" "),t("p",[s._v("另外几个仓库同上操作，一一创建，当然也不必全部都加，根据自己实际需求添加即可。")]),s._v(" "),t("h2",{attrs:{id:"_4-创建一个group类型的pypi仓库。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-创建一个group类型的pypi仓库。"}},[s._v("#")]),s._v(" 4，创建一个group类型的pypi仓库。")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("Name")]),s._v("：group-pypi")]),s._v(" "),t("li",[t("code",[s._v("Storage")]),s._v("：选择专用的blob存储pypi-hub。")]),s._v(" "),t("li",[t("code",[s._v("group")]),s._v(" : 将左边可选的4个仓库，添加到右边的members下。")])]),s._v(" "),t("p",[s._v("整体配置截图如下：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://tvax1.sinaimg.cn/large/008k1Yt0ly1grh16m13elj31ag0xan1h.jpg",alt:"image"}})]),s._v(" "),t("p",[s._v("这些配置完成之后，就可以使用了。")]),s._v(" "),t("h2",{attrs:{id:"_5-验证使用。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-验证使用。"}},[s._v("#")]),s._v(" 5，验证使用。")]),s._v(" "),t("h3",{attrs:{id:"_1-指定配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-指定配置"}},[s._v("#")]),s._v(" 1，指定配置")]),s._v(" "),t("p",[s._v("新建一台环境干净的主机，安装好Python的pip环境。可通过如下命令进行安装：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ yum -y "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" release\n$ yum -y "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" python36 python36-devel\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("然后通过命令行随便安装一个包，安装的时候，将代理指向我们的私服来。这个地方遇到了两个坑，这里用两个注意来进行提醒。")]),s._v(" "),t("ul",[t("li",[t("p",[t("code",[s._v("注意：")]),s._v("在指定刚刚配置的私服时，需要在统一对外的地址最后加上一个simple。")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("注意：")]),s._v("在第一次进行安装测试的时候，一定要指定测试包的版本，否则可能会报如下错误：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("ERROR: Could not "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" a version that satisfies the requirement django "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("from versions: none"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nERROR: No matching distribution found "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" django\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("这个时候指定一下包的版本，就下载成功了，而在往后的下载，就不需要指定版本了。")])])]),s._v(" "),t("p",[s._v("通过如下命令进行验证：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ pip3.6 "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" --trusted-host "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.3")]),s._v(".0.41 -i http://10.3.0.41:8081/repository/group-pypi/simple django\nWARNING: Running pip "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" with root privileges is generally not a good idea. Try "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("pip3.6 "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" --user"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v(" instead.\nCollecting django\n  Downloading http://10.3.0.41:8081/repository/group-pypi/packages/6a/23/08f7fd7afdd24184a400fcaebf921bd09b5b5235cbd62ffa02308a7d35d6/Django-3.0.1-py3-none-any.whl "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(".4MB"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("% "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("████████████████████████████████"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(".4MB "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v(".3MB/s\nCollecting asgiref~"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.2")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("from django"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  Downloading http://10.3.0.41:8081/repository/group-pypi/packages/a5/cb/5a235b605a9753ebcb2730c75e610fb51c8cab3f01230080a8229fa36adb/asgiref-3.2.3-py2.py3-none-any.whl\nCollecting pytz "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("from django"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  Downloading http://10.3.0.41:8081/repository/group-pypi/packages/e7/f9/f0b53f88060247251bf481fa6ea62cd0d25bf1b11a87888e53ce5b7c8ad2/pytz-2019.3-py2.py3-none-any.whl "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("509kB"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("% "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("████████████████████████████████"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" 512kB "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("78")]),s._v(".3MB/s\nCollecting sqlparse"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.2")]),s._v(".2 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("from django"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  Downloading http://10.3.0.41:8081/repository/group-pypi/packages/ef/53/900f7d2a54557c6a37886585a91336520e5539e3ae2423ff1102daf4f3a7/sqlparse-0.3.0-py2.py3-none-any.whl\nInstalling collected packages: asgiref, pytz, sqlparse, django\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("p",[s._v("这个时候去私服的库里看下，已经可以看到刚刚安装的几个包了。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/eryajf/t@master/t/image-20191229213306188.png",alt:"image-20191229213306188"}})]),s._v(" "),t("h3",{attrs:{id:"_2-全局配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-全局配置"}},[s._v("#")]),s._v(" 2，全局配置")]),s._v(" "),t("p",[s._v("通过添加全局配置，就不需要每次执行编译的时候指定私服地址了：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" ~/.pip\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" ~/.pip/pip.conf "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("EOF\n[global]\ntimeout = 60\ntrusted-host =  10.3.0.41\nindex-url = http://10.3.0.41:8081/repository/group-pypi/simple\nEOF")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[s._v("保存之后，本机的代理就走本地的私服了。")])])}),[],!1,null,null,null);a.default=e.exports}}]);