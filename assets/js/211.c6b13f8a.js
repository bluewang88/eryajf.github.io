(window.webpackJsonp=window.webpackJsonp||[]).push([[211],{732:function(s,t,n){"use strict";n.r(t);var a=n(8),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[s._v("大多数时候，我们做的流水线都希望通过开发人员push代码触发Jenkins的自动构建，在还没有深入接触到Jenkinsfile语法之前，我都是用传统的配置方式对这一功能进行的配置。")]),s._v(" "),n("p",[s._v("今天就专门说明一下这个配置，先介绍一下传统配置流程，再介绍Jenkinsfile中的简便方式。")]),s._v(" "),n("h2",{attrs:{id:"_1-传统方式。"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-传统方式。"}},[s._v("#")]),s._v(" 1，传统方式。")]),s._v(" "),n("p",[s._v("本文基于第一篇的从一个简单的构建开始进行补充配置，事实上也就那么几个配置项。")]),s._v(" "),n("p",[s._v("gitlab触发Jenkins的构建需要依赖"),n("code",[s._v("Gitlab插件")]),s._v("，而并不需要插件当中列出来的所谓的gitlab hook。如果直接在Jenkins当中安装插件失败，可以在国内镜像站下载对应插件，然后手动上传安装。")]),s._v(" "),n("p",[s._v("地址："),n("a",{attrs:{href:"https://mirrors.tuna.tsinghua.edu.cn/jenkins/plugins/",target:"_blank",rel:"noopener noreferrer"}},[s._v("清华大学开源软件镜像站。"),n("OutboundLink")],1)]),s._v(" "),n("p",[s._v("安装之后，在构建触发器里边选中如下配置：")]),s._v(" "),n("p",[n("img",{attrs:{src:"http://tva4.sinaimg.cn/large/71cfeb93ly1gmavr8tpcnj21b60l20vt.jpg",alt:"img"}})]),s._v(" "),n("p",[s._v("选中之后，会给到一个url地址，就是gitlab触发的回调地址，正常情况下，我们还会点开高级，生成一个匹配的token，用于安全方面的保障。")]),s._v(" "),n("p",[s._v("接着就是在gitlab对应项目中，创建一个回调的配置：")]),s._v(" "),n("p",[n("img",{attrs:{src:"http://tvax3.sinaimg.cn/large/71cfeb93ly1gmavljr6kvj21mu0kmgoy.jpg",alt:"img"}})]),s._v(" "),n("p",[s._v("这里的配置，参考一张以前配置过的图片：")]),s._v(" "),n("p",[n("img",{attrs:{src:"http://tvax4.sinaimg.cn/large/71cfeb93ly1gmavlmlx76j21670m546n.jpg",alt:"img"}})]),s._v(" "),n("p",[s._v("如果是首次添加，现在新版本的Gitlab可能会失败，报错 "),n("code",[s._v("Urlis blocked: Requests to the local network are not allowed")]),s._v("，需要选中如下：")]),s._v(" "),n("p",[n("img",{attrs:{src:"http://tvax3.sinaimg.cn/large/71cfeb93ly1gmavlomqazj21w80uqgqi.jpg",alt:"img"}})]),s._v(" "),n("p",[s._v("添加之后，可以点击一下test看看流程是否能够走通，如果走通，那么我们以后开发的时候直接推送代码即可触发构建。")]),s._v(" "),n("h2",{attrs:{id:"_2-流水线中使用。"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-流水线中使用。"}},[s._v("#")]),s._v(" 2，流水线中使用。")]),s._v(" "),n("p",[s._v("而今统一使用流水线之后，可以直接在Jenkinsfile当中进行配置，而不需要再重复如上步骤的操作了，当我们在Jenkinsfile中可以定义之后，也就意味着，以后如果新增一个项目，那么我们需要操作的步骤可能只有如下三步：")]),s._v(" "),n("ul",[n("li",[s._v("1，创建Jenkinsfile，放入到项目根目录中。")]),s._v(" "),n("li",[s._v("2，创建Jenkins项目，将项目URL写入到配置中。")]),s._v(" "),n("li",[s._v("3，将项目回调地址写入到Gitlab钩子当中。")])]),s._v(" "),n("p",[s._v("仅需这么三步，一个全新的项目就配置完成了，极大的简化了运维的工作内容。")]),s._v(" "),n("p",[s._v("那么流水线的文件内容如下：")]),s._v(" "),n("div",{staticClass:"language-groovy line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-groovy"}},[n("code",[s._v("pipeline "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    agent any\n    environment "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        remote_ip "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string gstring"}},[s._v('"192.168.3.66"')]),s._v("\n        remote_dir "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string gstring"}},[s._v('"/opt/hello"')]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    triggers"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("gitlab")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" triggerOnPush"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                triggerOnMergeRequest"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                branchFilterType"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'All'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                secretToken"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string gstring"}},[s._v('"'),n("span",{pre:!0,attrs:{class:"token expression"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("$")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("env"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("git_token"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),s._v('"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    options "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("buildDiscarder")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("logRotator")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("numToKeepStr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'10'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("disableConcurrentBuilds")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("timeout")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("time"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" unit"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'MINUTES'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("timestamps")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    stages "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("stage")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'部署到测试环境'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            steps"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                sh "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'''\n                    rsync -avz --progress -e 'ssh -p 22' --exclude='Jenkinsfile' --exclude='.git' --delete ${WORKSPACE}/  root@$remote_ip:$remote_dir\n                '''")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("stage")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'delete'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            steps "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                echo "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'清理工作目录'")]),s._v("\n                "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cleanWs")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    post "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        success "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            sh "),n("span",{pre:!0,attrs:{class:"token string gstring"}},[s._v('"echo 成功了"')]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        failure "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            sh "),n("span",{pre:!0,attrs:{class:"token string gstring"}},[s._v('"echo 失败了"')]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br")])]),n("p",[s._v("这里通过triggers的参数即可配置，其中的token我已经在Jenkins配置当中添加为全局变量，这样以来，所有的项目用同一个token即可：")]),s._v(" "),n("p",[n("img",{attrs:{src:"http://tvax1.sinaimg.cn/large/71cfeb93ly1gmavlry4qrj21g60b83zx.jpg",alt:"img"}})]),s._v(" "),n("p",[s._v("当我们写完这个Jenkinsfile，执行上边我说的三步工作，直接把文件放到代码根目录，然后创建Jenkins项目，Gitlab配置回调地址，第一次先手动构建一下，以后再有相关push事件，就可以自动触发构建了。")])])}),[],!1,null,null,null);t.default=e.exports}}]);