!function(c){function e(e){for(var r,t,n=e[0],o=e[1],a=e[2],u=0,s=[];u<n.length;u++)t=n[u],Object.prototype.hasOwnProperty.call(i,t)&&i[t]&&s.push(i[t][0]),i[t]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(c[r]=o[r]);for(f&&f(e);s.length;)s.shift()();return p.push.apply(p,a||[]),l()}function l(){for(var e,r=0;r<p.length;r++){for(var t=p[r],n=!0,o=1;o<t.length;o++){var a=t[o];0!==i[a]&&(n=!1)}n&&(p.splice(r--,1),e=u(u.s=t[0]))}return e}var t={},i={153:0},p=[];function u(e){if(t[e])return t[e].exports;var r=t[e]={i:e,l:!1,exports:{}};return c[e].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.m=c,u.c=t,u.d=function(e,r,t){u.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(r,e){if(1&e&&(r=u(r)),8&e)return r;if(4&e&&"object"==typeof r&&r&&r.__esModule)return r;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:r}),2&e&&"string"!=typeof r)for(var n in r)u.d(t,n,function(e){return r[e]}.bind(null,n));return t},u.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(r,"a",r),r},u.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},u.p="/static-dist/";var r=window.webpackJsonp=window.webpackJsonp||[],n=r.push.bind(r);r.push=e,r=r.slice();for(var o=0;o<r.length;o++)e(r[o]);var f=n;p.push([585,0]),l()}({585:function(e,r,t){"use strict";t.r(r);var n=t(19),o=t.n(n);$(".js-generate-replay").on("click",function(e){var r=$(e.currentTarget).data("url");r&&o.a.resolve($.post(r)).then(function(e){cd.message({type:"success",message:Translator.trans("course.manage.live_replay_generate_success")}),window.location.reload()}).catch(function(e){var r=JSON.parse(e.responseText);r.code,r.error;cd.message({type:"danger",message:Translator.trans("course.manage.live_replay_generate_error")})})})}});