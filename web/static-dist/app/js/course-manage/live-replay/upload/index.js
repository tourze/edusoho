!function(e){function r(r){for(var n,i,l=r[0],u=r[1],c=r[2],s=0,p=[];s<l.length;s++)i=l[s],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);for(f&&f(r);p.length;)p.shift()();return a.push.apply(a,c||[]),t()}function t(){for(var e,r=0;r<a.length;r++){for(var t=a[r],n=!0,l=1;l<t.length;l++){var u=t[l];0!==o[u]&&(n=!1)}n&&(a.splice(r--,1),e=i(i.s=t[0]))}return e}var n={},o={181:0},a=[];function i(r){if(n[r])return n[r].exports;var t=n[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=e,i.c=n,i.d=function(e,r,t){i.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,r){if(1&r&&(e=i(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)i.d(t,n,function(r){return e[r]}.bind(null,n));return t},i.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(r,"a",r),r},i.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},i.p="/static-dist/";var l=window.webpackJsonp=window.webpackJsonp||[],u=l.push.bind(l);l.push=r,l=l.slice();for(var c=0;c<l.length;c++)r(l[c]);var f=u;a.push([838,0]),t()}({22:function(e,r){e.exports=jQuery},838:function(e,r,t){"use strict";t.r(r);var n=t(97),o=$("#material-file-chooser").find("[name=fileId]");function a(){(new n.a).on("select",(function(e){o.val(e.id),n.a.closeUI(),$(".jq-validate-error").remove()}))}$(".file-chooser-main").hasClass("hidden")?$(".js-choose-trigger").click((function(e){a(),n.a.openUI(),o.val("")})):a(),$("#replay-material-form").validate({rules:{fileId:{required:!0}},messages:{fileId:Translator.trans("course.manage.live_replay_upload_error_hint")}}),$("[data-toggle='popover']").popover()}});