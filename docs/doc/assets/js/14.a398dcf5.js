(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{396:function(t,s,a){"use strict";a.r(s);var e=a(49),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"服务端开发指南"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#服务端开发指南"}},[t._v("#")]),t._v(" 服务端开发指南")]),t._v(" "),a("p",[t._v("目前只开源了前端设计器部分，大家配套后端使用的话，需要自行开发服务端应用，可以参考如下说明")]),t._v(" "),a("h2",{attrs:{id:"基本要求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本要求"}},[t._v("#")]),t._v(" 基本要求")]),t._v(" "),a("h3",{attrs:{id:"组织机构选择器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组织机构选择器"}},[t._v("#")]),t._v(" 组织机构选择器")]),t._v(" "),a("p",[t._v("组织机构选择器由于在项目很多地方引用了，如果在不修改组件代码的情况下，建议按如下规则适配")]),t._v(" "),a("blockquote",[a("p",[t._v("该组件存在于 "),a("code",[t._v("src\\components\\common\\organizationPicker.vue")]),t._v("，对应API接口在 "),a("code",[t._v("src/api/org.js")]),t._v("，有2个接口，分别如下")])]),t._v(" "),a("h4",{attrs:{id:"获取组织架构列表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取组织架构列表"}},[t._v("#")]),t._v(" 获取组织架构列表")]),t._v(" "),a("p",[t._v("方法： "),a("code",[t._v("getOrgTree")])]),t._v(" "),a("p",[t._v("URL："),a("code",[t._v("/oa/org/tree")])]),t._v(" "),a("p",[t._v("请求类型："),a("code",[t._v("GET")])]),t._v(" "),a("p",[t._v("参数：")]),t._v(" "),a("ul",[a("li",[t._v("deptId： 当前选中的部门ID")]),t._v(" "),a("li",[t._v("type："),a("code",[t._v("user")]),t._v(" - 返回部门和部门内的人员   "),a("code",[t._v("dept")]),t._v("-只返回部门")])]),t._v(" "),a("p",[t._v("返回结果：（部门和人员结构一致，注意部门应当排序在前）")]),t._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"部门/人员ID"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"部门/人员名"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"avatar"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"人员的头像的 base64 / url"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"本数据对象的类型，user/dept"')]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("h4",{attrs:{id:"按拼音-姓名搜索人员"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#按拼音-姓名搜索人员"}},[t._v("#")]),t._v(" 按拼音/姓名搜索人员")]),t._v(" "),a("blockquote",[a("p",[t._v("当在搜索框直接输入拼音/姓名时，将会发起搜索请求，后端应当根据参数内容匹配用户的姓名或者姓名拼音")])]),t._v(" "),a("p",[t._v("方法： "),a("code",[t._v("getUserByName")])]),t._v(" "),a("p",[t._v("URL："),a("code",[t._v("oa/org/tree/user/search")])]),t._v(" "),a("p",[t._v("请求类型："),a("code",[t._v("GET")])]),t._v(" "),a("p",[t._v("参数：")]),t._v(" "),a("ul",[a("li",[t._v("userName：搜索参数")])]),t._v(" "),a("p",[t._v("返回结果：（人员列表）")]),t._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"人员ID"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"人员名"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"avatar"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"人员的头像的 base64 / url"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"本数据对象的类型，user"')]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("h2",{attrs:{id:"流程解析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#流程解析"}},[t._v("#")]),t._v(" 流程解析")]),t._v(" "),a("p",[t._v("流程的数据存储在 vuex的 "),a("code",[t._v("state.design.process")]),t._v("中，由于序列化后是json结构，非标准 Bpmn，因此需要在后端做转换，也建议在后端进行转换。")]),t._v(" "),a("p",[t._v("最常用的Java开源流程引擎有 "),a("code",[t._v("activiti")]),t._v(" 、"),a("code",[t._v("Flowable")]),t._v(" ，两者同源，差不多用法，都提供了使用代码Api来构建Xml的功能。")]),t._v(" "),a("h3",{attrs:{id:"wflow节点与bpmn概念对应关系"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wflow节点与bpmn概念对应关系"}},[t._v("#")]),t._v(" wflow节点与Bpmn概念对应关系")]),t._v(" "),a("h4",{attrs:{id:"发起人"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#发起人"}},[t._v("#")]),t._v(" 发起人")]),t._v(" "),a("p",[a("code",[t._v("发起人")]),t._v(" 可以映射为"),a("code",[t._v("startEvent")]),t._v("，也可以忽略，发起人主要是为了设置哪些人可以发起该流程，也就是该流程的权限，并且也是默认的候选条件")]),t._v(" "),a("h4",{attrs:{id:"审批人"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#审批人"}},[t._v("#")]),t._v(" 审批人")]),t._v(" "),a("p",[t._v("审批人对应 "),a("code",[t._v("UserTask")]),t._v(" ，该节点是需要审批人对发起人提交的表单进行处理，以及如果有需要的话也可以修改提交的表单（要设置表单可编辑权限）")]),t._v(" "),a("p",[t._v("审批意味着主要是做两件事，"),a("code",[t._v("同意/驳回")]),t._v(" ，同意就进入下一任务， 而驳回的策略有两种，默认直接驳回到"),a("code",[t._v("EndEvent")]),t._v(" ,如果设置了则驳回到指定节点，因为有2种结果分流，所以此处应该设置条件顺序流。")]),t._v(" "),a("h4",{attrs:{id:"抄送人"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#抄送人"}},[t._v("#")]),t._v(" 抄送人")]),t._v(" "),a("p",[t._v("抄送人对应 "),a("code",[t._v("ServiceTask")]),t._v("，应当掉用java指定的功能类，传入参数执行发送通知的功能")]),t._v(" "),a("h4",{attrs:{id:"延时处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#延时处理"}},[t._v("#")]),t._v(" 延时处理")]),t._v(" "),a("p",[t._v("延时处理对应 "),a("code",[t._v("intermediateCatchEvent")]),t._v("，设置为定时器类型的中间事件，根据配置解析")]),t._v(" "),a("h4",{attrs:{id:"触发器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#触发器"}},[t._v("#")]),t._v(" 触发器")]),t._v(" "),a("p",[t._v("触发器对应 "),a("code",[t._v("ServiceTask")]),t._v("，应当掉用java指定的功能类，传入参数执行Http请求或者发邮件，由于触发器支持脚本，因此要完全支持触发器功能的话需要引入"),a("code",[t._v("js执行器")])]),t._v(" "),a("p",[a("strong",[t._v("务必设置运行资源限制，防止用户上传恶意脚本搞崩服务器。")])]),t._v(" "),a("div",{staticClass:"language-xml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- https://mvnrepository.com/artifact/org.openjdk.nashorn/nashorn-core --\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("org.openjdk.nashorn"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("nashorn-core"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("15.3"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("h4",{attrs:{id:"条件分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#条件分支"}},[t._v("#")]),t._v(" 条件分支")]),t._v(" "),a("p",[t._v("条件节点对应 "),a("code",[t._v("exclusive gateway")]),t._v(" ，这与普通节点有所不同")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://pic.rmb.bdstatic.com/bjh/fec7f2894a598c5b50f930b3f64ac93c.png",alt:"image-20220720145227591"}})]),t._v(" "),a("p",[t._v("如上图所示，实际上外部还有一个看不到的节点对象，将这几个子分支条件"),a("code",[t._v("包裹起来")]),t._v("，这个红色部分才是条件节点，也就是排他网关，绿色条件块应当解析为"),a("strong",[t._v("带条件的")]),a("code",[t._v("sequenceFlow")]),t._v("连接线，该节点内设置的条件应该作为"),a("code",[t._v("sequenceFlow")]),t._v("的条件")]),t._v(" "),a("h4",{attrs:{id:"并行分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#并行分支"}},[t._v("#")]),t._v(" 并行分支")]),t._v(" "),a("p",[t._v("并行分支对应"),a("code",[t._v("parallelGateway")]),t._v(" ，与条件分支一样，外部也有一个对象包裹内部的并行分支，外部这个对象应该解析为"),a("code",[t._v("并行网关")]),t._v("，但是它的分支节点首部应当看做普通顺序流，由于并行网关成对存在，因此需要注意创建合流的分支，将每个子分支末端连接到合流点")]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://pic.rmb.bdstatic.com/bjh/4ea8259c04daa76b91f8b9863d46a66e.png",alt:"image-20220720150019350"}})])}),[],!1,null,null,null);s.default=n.exports}}]);