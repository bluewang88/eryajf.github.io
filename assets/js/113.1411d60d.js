(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{897:function(s,a,t){"use strict";t.r(a);var e=t(8),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("有时候要批量迁移一批项目到新的分组内，这个时候就会用到批量创建项目，可以使用如下方式进行创建。")]),s._v(" "),t("p",[s._v("首先将要创建的项目放到一个文件里：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" a\napi\nadmin\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("然后在gitlab自己的账号下创建一个token用于认证。接着使用如下命令进行创建：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[s._v("i")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" a"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" --request POST --header "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"PRIVATE-TOKEN: WWvjMtvBNRmfZMZzGd-a"')]),s._v("  --data "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name='),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$i")]),s._v('&namespace_id=3"')]),s._v(" https://192.168.0.1/api/v4/projects"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("其中的"),t("code",[s._v("namespace_id")]),s._v("可以在浏览器看到对应分组的ID。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://tvax1.sinaimg.cn/large/71cfeb93ly1gl2x6kaffqj21c00u0gp5.jpg",alt:"img"}})])])}),[],!1,null,null,null);a.default=n.exports}}]);