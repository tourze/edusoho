!function(c){function e(e){for(var t,n,r=e[0],o=e[1],s=e[2],a=0,i=[];a<r.length;a++)n=r[a],Object.prototype.hasOwnProperty.call(l,n)&&l[n]&&i.push(l[n][0]),l[n]=0;for(t in o)Object.prototype.hasOwnProperty.call(o,t)&&(c[t]=o[t]);for(d&&d(e);i.length;)i.shift()();return f.push.apply(f,s||[]),u()}function u(){for(var e,t=0;t<f.length;t++){for(var n=f[t],r=!0,o=1;o<n.length;o++){var s=n[o];0!==l[s]&&(r=!1)}r&&(f.splice(t--,1),e=a(a.s=n[0]))}return e}var n={},l={362:0},f=[];function a(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return c[e].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=c,a.c=n,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/static-dist/";var t=window.webpackJsonp=window.webpackJsonp||[],r=t.push.bind(t);t.push=e,t=t.slice();for(var o=0;o<t.length;o++)e(t[o]);var d=r;f.push([816,0]),u()}({160:function(e,t,n){"use strict";var r=n(0),o=n.n(r);t.a=function e(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:$("html");o()(this,e),t.attr("unselectable","on").css("user-select","none").on("selectstart",!1)}},53:function(e,t,n){"use strict";n.d(t,"a",function(){return s}),n.d(t,"d",function(){return o}),n.d(t,"e",function(){return a}),n.d(t,"c",function(){return i}),n.d(t,"b",function(){return c});n(293);var r=n(14),s=function(){var e=$(".js-panel-card");e.perfectScrollbar(),e.perfectScrollbar("update")},o=function(){var t,n;console.log("ok"),Object(r.f)()||((t=$(".js-testpaper-card")).length<=0||(n=t.offset().top,$(window).scroll(function(){var e=$(window).scrollTop();n<=e?t.addClass("affix"):t.removeClass("affix")})))},a=function(){$(".js-btn-index").click(function(e){var t=$(e.currentTarget);$(".js-testpaper-heading").length<=0&&t.addClass("doing").siblings(".doing").removeClass("doing")})},i=function(){$("#showWrong").change(function(e){var o=$(e.currentTarget);$(".js-answer-notwrong").each(function(e,t){var n=$($(t).data("anchor")),r=n.closest(".js-testpaper-question-block");o.prop("checked")?(n.hide(),r.find(".js-testpaper-question:visible").length<=0&&r.hide()):(n.show(),r.show())}),s()})},c=function(){var t=$(".js-testpaper-watermark");0<t.length&&$.get(t.data("watermark-url"),function(e){t.each(function(){$(this).WaterMark({yPosition:"center",style:{"font-size":10},opacity:.6,contents:e})})})}},816:function(e,t,n){"use strict";n.r(t);var r=n(53),o=n(160);Object(r.a)(),Object(r.d)(),Object(r.e)(),new o.a,$(".js-analysis").click(function(){var e=$(this);e.addClass("hidden"),e.siblings(".js-analysis.hidden").removeClass("hidden"),e.closest(".js-testpaper-question").find(".js-testpaper-question-analysis").slideToggle()})}});