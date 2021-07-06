(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{633:function(a,t,s){"use strict";s.r(t);var e=s(8),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("p",[a._v("汉化对于一些刚入门使用gitlab的人来说是一件非常友好的事情，毕竟这是我们的母语，因此今天就来搞一搞汉化的事情。")]),a._v(" "),s("p",[a._v("如果是刚刚安装好来汉化，那么不用担心数据的问题，直接进行下边步骤的操作就行了。如果你的Gitlab正在用于生产，然后打算半路汉化，那么我建议先备份好数据，再来尝试汉化的操作。")]),a._v(" "),s("h2",{attrs:{id:"_1-查看gitlab版本。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-查看gitlab版本。"}},[a._v("#")]),a._v(" 1，查看gitlab版本。")]),a._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("root@eb-git ~"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$cat")]),a._v(" /opt/gitlab/embedded/service/gitlab-rails/VERSION10.1.0\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h2",{attrs:{id:"_2-下载汉化包。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-下载汉化包。"}},[a._v("#")]),a._v(" 2，下载汉化包。")]),a._v(" "),s("p",[a._v("这里要注意的一点就是，版本一定要紧密对应，如果不对应，可能会出现不可预知的问题。")]),a._v(" "),s("p",[a._v("我这里收集了一堆的汉化包，你可以看看是否有与你版本相符合的，如果没有，可以去网上找一下。")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("下载地址：https://pan.baidu.com/s/1D1y-uMrwMUlJiDtToHBZ7Q")])]),a._v(" "),s("li",[s("p",[a._v("提取码: acrr")])])]),a._v(" "),s("h2",{attrs:{id:"_3-停止gitlab服务。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-停止gitlab服务。"}},[a._v("#")]),a._v(" 3，停止gitlab服务。")]),a._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("gitlab-ctl stop\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[s("img",{attrs:{src:"https://tvax2.sinaimg.cn/large/008k1Yt0ly1gryva50f4sj30fe08bjye.jpg",alt:"image"}})]),a._v(" "),s("h2",{attrs:{id:"_4-导入。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-导入。"}},[a._v("#")]),a._v(" 4，导入。")]),a._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("yum -y "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" patchpatch -d /opt/gitlab/embedded/service/gitlab-rails -p1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v(" /root/10.2.1-zh.diff\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("注意：导入成功是没有任何错误输出的。如果有其他什么异常输出，则说明导入失败。")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://tvax1.sinaimg.cn/large/008k1Yt0ly1gryva9xtxjj30kq0g4dxi.jpg",alt:"image"}})]),a._v(" "),s("h2",{attrs:{id:"_5-重新启动gitlab。就能看到汉化成功了。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-重新启动gitlab。就能看到汉化成功了。"}},[a._v("#")]),a._v(" 5，重新启动gitlab。就能看到汉化成功了。")])])}),[],!1,null,null,null);t.default=r.exports}}]);