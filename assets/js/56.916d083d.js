(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{641:function(a,t,s){"use strict";s.r(t);var n=s(2),p=Object(n.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"call、bind、apply-三者的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#call、bind、apply-三者的区别"}},[a._v("#")]),a._v(" call、bind、apply 三者的区别")]),a._v(" "),t("ul",[t("li",[a._v("三者都可以改变函数的 this 对象指向。")]),a._v(" "),t("li",[a._v("三者第一个参数都是 this 要指向的对象，如果如果没有这个参数或参数为 undefined 或 null，则默认指向全局 window。")]),a._v(" "),t("li",[a._v("三者都可以传参，但是 apply 是数组，而 call 是参数列表，且 apply 和 call 是一次性传入参数，而 bind 可以分为多次传入。")]),a._v(" "),t("li",[a._v("bind 是返回绑定 this 之后的函数，便于稍后调用；apply 、call 则是立即执行 。")]),a._v(" "),t("li",[a._v("bind()会返回一个新的函数，如果这个返回的新的函数作为构造函数创建一个新的对象，那么此时 this 不再指向传入给 bind 的第一个参数，而是指向用 new 创建的实例")])]),a._v(" "),t("h2",{attrs:{id:"call"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#call"}},[a._v("#")]),a._v(" call")]),a._v(" "),t("p",[a._v("写了就等于直接调用函数")]),a._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("foo")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("call")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("obj"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("要传给函数的参数"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("要传给函数的参数"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2.")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h2",{attrs:{id:"apply"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#apply"}},[a._v("#")]),a._v(" apply")]),a._v(" "),t("p",[a._v("写了就等于直接调用函数")]),a._v(" "),t("p",[a._v("区别于 call 就是后面参数的传入，其他都一样")]),a._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("foo")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("apply")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("obj"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("要传给函数的参数"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("要传给函数的参数"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2.")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h2",{attrs:{id:"bind"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bind"}},[a._v("#")]),a._v(" bind")]),a._v(" "),t("p",[a._v("写了还要加括号才算调用函数")]),a._v(" "),t("p",[a._v("跟 call 参数设置一样")]),a._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("foo")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("bind")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("obj"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("要传给函数的参数"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("要传给函数的参数"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2.")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h2",{attrs:{id:"相同点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#相同点"}},[a._v("#")]),a._v(" 相同点")]),a._v(" "),t("p",[a._v("这三个都能够改变 this 指向")]),a._v(" "),t("p",[a._v("call 和 apply 的第一个参数都一样是要指向的 this ，写他们就等于写了函数的执行")]),a._v(" "),t("p",[a._v("call 和 bind 的参数设置相同")]),a._v(" "),t("h2",{attrs:{id:"不同点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#不同点"}},[a._v("#")]),a._v(" 不同点")]),a._v(" "),t("p",[a._v("call 和 apply 的给函数传入的参数设置不一样，call 直接逗号隔开就好，apply 需要用 数组")]),a._v(" "),t("p",[a._v("bind 不会立即执行，call 和 apply 都会立即执行")])])}),[],!1,null,null,null);t.default=p.exports}}]);