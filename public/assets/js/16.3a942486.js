(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{587:function(t,e,_){"use strict";_.r(e);var v=_(10),r=Object(v.a)({},(function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"title"},[t._v("摘要")]),_("p",[t._v("React的一些记录"),_("br")])]),t._v(" "),_("h1",{attrs:{id:"react"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#react"}},[t._v("#")]),t._v(" React")]),t._v(" "),_("h2",{attrs:{id:"脚手架"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#脚手架"}},[t._v("#")]),t._v(" 脚手架")]),t._v(" "),_("h3",{attrs:{id:"_1、创建项目并启动"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1、创建项目并启动"}},[t._v("#")]),t._v(" 1、创建项目并启动")]),t._v(" "),_("blockquote",[_("p",[t._v("1、全局安装：npm install -g create-react-app")]),t._v(" "),_("p",[t._v("2、切换到想创建项目的目录。 create-react-app helloreact")]),t._v(" "),_("p",[t._v("3、进入项目文件夹：cd helloreact")]),t._v(" "),_("p",[t._v("4、启动项目：npm start")]),t._v(" "),_("p",[t._v("5、（可选）npm add prop-types")])]),t._v(" "),_("h3",{attrs:{id:"todolist知识点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#todolist知识点"}},[t._v("#")]),t._v(" todolist知识点")]),t._v(" "),_("blockquote",[_("p",[t._v("1、拆分组件、实现静态组件，注意：className、style的写法")]),t._v(" "),_("p",[t._v("2、动态初始化列表，如何确定将数据放在哪个组件的state中")]),t._v(" "),_("p",[t._v("——某个组件使用，放在自身的state中")]),t._v(" "),_("p",[t._v("——某些组件使用，放在他们共同的父组件state中（官方称为状态提升）")]),t._v(" "),_("p",[t._v("3、关于父子之间通信：")]),t._v(" "),_("ol",[_("li",[_("p",[t._v("父 => 子  通过props")])]),t._v(" "),_("li",[_("p",[t._v("子 => 父  通过props 前提父提前给子传递一个函数")]),t._v(" "),_("p",[t._v("4、注意 defaultChecked与check的区别 （类似的还有defaultValue和Value）")])])]),t._v(" "),_("p",[t._v("defaultChecked只有在第一次指定，也就是初次渲染的时候的时候才起作用，更新的时候不受控制")]),t._v(" "),_("p",[t._v("5、状态在哪里，操作状态的方法就在哪里")])]),t._v(" "),_("h3",{attrs:{id:"redux精简"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#redux精简"}},[t._v("#")]),t._v(" redux精简")]),t._v(" "),_("p",[t._v("1、去除组件自身需要共享的状态 (这里以Count组件作为例子)")]),t._v(" "),_("p",[t._v("2、src下建立：")]),t._v(" "),_("p",[t._v("​\t-redxu")]),t._v(" "),_("p",[t._v("​\t\t-store.js")]),t._v(" "),_("p",[t._v("​\t\t-count_reducer.js")]),t._v(" "),_("p",[t._v("3、store.js")]),t._v(" "),_("ol",[_("li",[_("p",[t._v("引入redux 中的createStore函数，创建一个store")])]),t._v(" "),_("li",[_("p",[t._v(".createStore调用时要传入一个为其服务的reducer")])]),t._v(" "),_("li",[_("p",[t._v("记得暴露store对象")])])]),t._v(" "),_("p",[t._v("4、.count_reducer.js:")]),t._v(" "),_("p",[t._v("​\t1、reducer的本质是一个函数， 接收：preState, action ,返回加工后的状态")]),t._v(" "),_("p",[t._v("​\t2、reducer有两个作用：初始化状态，加工状态")]),t._v(" "),_("p",[t._v("​\t3、reducer被第一次调用时候，是store自动触发的，")]),t._v(" "),_("p",[t._v("​\t传递的preState是undefined，传递的action是：{type:'@@REDUX/INIT_a.2.b.4}")]),t._v(" "),_("p",[t._v("5、在index.js中检测store中状态的改变，一旦发生改变重新渲染")]),t._v(" "),_("p",[t._v("注意！！！  redux只负责管理状态，至于状态的改变驱动着页面的展示，要靠我们自己写")])])}),[],!1,null,null,null);e.default=r.exports}}]);