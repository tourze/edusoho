!function(e){function t(t){for(var r,u,i=t[0],l=t[1],d=t[2],c=0,p=[];c<i.length;c++)u=i[c],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&p.push(o[u][0]),o[u]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(s&&s(t);p.length;)p.shift()();return a.push.apply(a,d||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var l=n[i];0!==o[l]&&(r=!1)}r&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={44:0},a=[];function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/static-dist/";var i=window.webpackJsonp=window.webpackJsonp||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var s=l;a.push([666,0]),n()}({666:function(e,t,n){"use strict";n.r(t);var r=n(63),o=n.n(r);!function(e){window.QiQiuYun||(window.QiQiuYun={});var t=new XMLHttpRequest;t.open("GET",e+"?"+~~(o()()/1e3/60),!1),t.send(null);var n=document.getElementsByTagName("script")[0],r=document.createElement("script");r.text=t.responseText,n.parentNode.insertBefore(r,n)}($(".js-cloud-url").data("url"));var a=$("#document-content");new QiQiuYun.Player({id:"document-content",playServer:app.cloudPlayServer,sdkBaseUri:app.cloudSdkBaseUri,disableDataUpload:app.cloudDisableLogReport,disableSentry:app.cloudDisableLogReport,resNo:a.data("resNo"),token:a.data("token"),user:{id:a.data("userId"),name:a.data("userName")}}),window.onmessage=function(e){if(null!=e&&null!=e){var t=e.data;if("boolean"==typeof t){var n=$("#task-content-iframe",window.parent.document);t?(n.removeClass("screen-full"),n.width("100%")):(n.addClass("screen-full"),n.width(window.document.body.offsetWidth+"px"))}}}}});