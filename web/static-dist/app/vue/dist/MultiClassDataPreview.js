(window.webpackJsonp=window.webpackJsonp||[]).push([[416],{1478:function(e,t,i){"use strict";i.r(t);var n={name:"DataPreview",methods:{getIframeStatus:function(){var e,t,i=document.getElementById("iframe"),n=i.contentWindow;"complete"===n.document.readyState?(e=n.document.documentElement.scrollWidth,t=n.document.documentElement.scrollHeight,i.width=e,i.height=t):setTimeout(this.getIframeStatus,10)}},created:function(){setTimeout(this.getIframeStatus,10)}},a=i(30),r=Object(a.a)(n,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"student-manage"},[t("iframe",{staticStyle:{position:"inherit",left:"0",top:"0","min-height":"600px",height:"100%",width:"100%",border:"0px"},attrs:{id:"iframe",src:"/admin/v2/multi_class/overview/"+this.$route.params.id,frameborder:"0",allowfullscreen:"true",scrolling:"yes",allow:"screen-wake-lock"}})])}),[],!1,null,null,null);t.default=r.exports}}]);