(window.webpackJsonp=window.webpackJsonp||[]).push([[219],{738:function(s,t,n){"use strict";n.r(t);var a=n(8),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[s._v("先来简述一下需求以及思路吧：")]),s._v(" "),n("p",[s._v("我这边拉代码编译以及准备工作都是基于"),n("code",[s._v("Jenkinsfile")]),s._v("完成，然后再基于"),n("code",[s._v("ansible-playbook")]),s._v("进行构建或者回滚，在调用"),n("code",[s._v("playbook")]),s._v("的时候会将提取出来的变量传进去，其中一个变量定义了项目打包之后的jar包的绝对路径。不同项目可能这个路径规范不一致，即便是同一项目，可能也会时常变更版本(比如"),n("code",[s._v("admin-0.0.1.jar")]),s._v("，下次可能会是"),n("code",[s._v("admin-0.0.2.jar")]),s._v(")，从而无法写成固定的变量。")]),s._v(" "),n("p",[s._v("比较容易的一个办法是利用通配符来匹配这个包，那么可以定义成 "),n("code",[s._v("project_file=$WORKSPACE/${project}/target/${project}-*.jar")]),s._v("，以使得这个变量具有更强的兼容性。")]),s._v(" "),n("p",[s._v("但是当我兴致冲冲地将在全局"),n("code",[s._v("environment")]),s._v("区块中声明了如上变量后，便立刻点击了构建。然而却发现程序并没有解析通配符，传递下去的值变成了"),n("code",[s._v("admin-*.jar")]),s._v("，于是我开始寻觅能够解决这一尴尬的方案。")]),s._v(" "),n("p",[s._v("一开始打算直接在调用ansible之前声明这个变量，然而发现总是会失败，也许是我声明的方式不大对吧，后来还是在"),n("a",{attrs:{href:"https://www.jenkins.io/zh/doc/book/pipeline/jenkinsfile/",target:"_blank",rel:"noopener noreferrer"}},[s._v("官网"),n("OutboundLink")],1),s._v("看到了一个优雅的方案，官方示例如下：")]),s._v(" "),n("div",{staticClass:"language-groovy line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-groovy"}},[n("code",[s._v("pipeline "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    agent any \n    environment "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 使用 returnStdout")]),s._v("\n        CC "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string gstring"}},[s._v('"""${sh(\n                returnStdout: true,\n                script: \'echo "clang"\'\n            )}"""')]),s._v(" \n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 使用 returnStatus")]),s._v("\n        EXIT_STATUS "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string gstring"}},[s._v('"""${sh(\n                returnStatus: true,\n                script: \'exit 1\'\n            )}"""')]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    stages "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("stage")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Example'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            environment "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                DEBUG_FLAGS "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'-g'")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n            steps "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                sh "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'printenv'")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br")])]),n("p",[s._v("我赶忙创建一个项目运行一下看，果不其然，在环境变量中，"),n("code",[s._v("CC=clang")]),s._v("，"),n("code",[s._v("EXIT_STATUS=1")]),s._v("，一例惊醒梦中人，我于是定义了如下变量：")]),s._v(" "),n("div",{staticClass:"language-groovy line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-groovy"}},[n("code",[s._v("environment "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 定义项目编译完成之后的包文件")]),s._v("\n    project_file"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string gstring"}},[s._v('"""'),n("span",{pre:!0,attrs:{class:"token expression"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("$")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("returnStdout"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" script"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(' "echo '),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("$")]),s._v("WORKSPACE"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("$")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("project"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),s._v("/target/"),n("span",{pre:!0,attrs:{class:"token expression"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("$")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("project"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),s._v('-*.jar")}"""')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("其中project定义在全局的变量中。")]),s._v(" "),n("p",[s._v("最后果然输出了自己想要的内容。")]),s._v(" "),n("p",[n("img",{attrs:{src:"https://tva4.sinaimg.cn/large/71cfeb93ly1gf8janlqxjj21ct1z4n82.jpg",alt:"img"}})]),s._v(" "),n("p",[s._v("经过几个项目的体验，简单总结有如下几个注意点：")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("1，此声明不要放在开头的全局变量中，而应该在具体构建的stage中，不然变量的值将会是上次构建的包名，而非当次包名。示例如下：")]),s._v(" "),n("div",{staticClass:"language-groovy line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-groovy"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("stage")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'部署<向左'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  environment "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 定义项目编译完成之后的包文件")]),s._v("\n      project_file"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string gstring"}},[s._v('"""'),n("span",{pre:!0,attrs:{class:"token expression"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("$")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("returnStdout"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" script"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(' "echo '),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("$")]),s._v("WORKSPACE"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("$")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("project"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),s._v("/target/"),n("span",{pre:!0,attrs:{class:"token expression"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("$")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("project"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),s._v('-*.jar")}"""')]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  when "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      environment name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'mode'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'deploy'")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  steps "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("dir")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string gstring"}},[s._v('"'),n("span",{pre:!0,attrs:{class:"token expression"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("$")]),s._v("ansible_base")]),s._v('"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      script "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("                    \n          "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("try")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n              sh "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'\'\'\n              ansible-playbook -i ./deploy_hosts/${JOB_NAME}_hosts --tags "deploy,${project}" site.yml -e "project"=$project -e "_version"=${_version} -e "JOB_NAME"=${JOB_NAME} -e "remote_host"=${remote_host} -e "server_port"=${server_port} -e project_env=${project_env} -e project_user=${project_user} -e start_Xms=${start_Xms} -e start_Xmx=${start_Xmx} -e "project_file"=${project_file}\n              \'\'\'')]),s._v("\n          "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("catch")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("exc"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n              Reason "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string gstring"}},[s._v('"项目部署步骤出错"')]),s._v("\n              "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("throw")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("exc"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n          "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" \n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br")])])]),s._v(" "),n("li",[n("p",[s._v("2，有一个奇怪的坑是，当我将变量传给playbook时，如果project_file这个变量靠前，则后边的变量会被忽略(暂未经过更多验证)，于是就把这个变量放在最后传了。")])]),s._v(" "),n("li",[n("p",[s._v("3，后来又集成进来一项参数，就是Java应用的启动参数，这个特殊之处在于中间有空格，尝试了许多种方案，最终发现这个方案能够保证参数不是断开的。但是使用过程中始终发现会有问题，事实上那篇文章地下有说明，使用"),n("code",[s._v(".trim()")]),s._v("方法可以避开：")]),s._v(" "),n("div",{staticClass:"language-groovy line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-groovy"}},[n("code",[s._v("        environment "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n              "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 定义项目编译完成之后的包文件")]),s._v("\n              project_file"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string gstring"}},[s._v('"""'),n("span",{pre:!0,attrs:{class:"token expression"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("$")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("returnStdout"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" script"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(' "echo '),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("$")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("jar_file"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),s._v('").trim()}"""')]),s._v("\n              "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 指定服务启动参数， .trim() 去除末尾的空格")]),s._v("\n              start_params"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string gstring"}},[s._v('"""'),n("span",{pre:!0,attrs:{class:"token expression"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("$")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("returnStdout"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" script"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(' "echo '),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("$")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("start_param"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),s._v('").trim()}"""')]),s._v("\n          "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])])])])])}),[],!1,null,null,null);t.default=e.exports}}]);