!function(e){function t(t){for(var a,s,o=t[0],l=t[1],c=t[2],p=0,f=[];p<o.length;p++)s=o[p],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&f.push(r[s][0]),r[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);for(u&&u(t);f.length;)f.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,o=1;o<n.length;o++){var l=n[o];0!==r[l]&&(a=!1)}a&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},r={261:0},i=[];function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/static-dist/";var o=window.webpackJsonp=window.webpackJsonp||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=l;i.push([894,0]),n()}({418:function(e,t,n){"use strict";n.d(t,"a",(function(){return _}));var a=n(5),r=n.n(a),i=n(2),s=n.n(i),o=n(3),l=n.n(o),c=n(12),u=n.n(c),p=n(13),f=n.n(p),h=n(9),d=n.n(h),g=n(134),v=n(74),y=n.n(v);function A(e){var t=function(){if("undefined"==typeof Reflect||!r.a)return!1;if(r.a.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(r()(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=d()(e);if(t){var i=d()(this).constructor;n=r()(a,arguments,i)}else n=a.apply(this,arguments);return f()(this,n)}}var _=function(e){u()(n,e);var t=A(n);function n(e){var a,r=e.element,i=e.slides,o=e.watermark;return s()(this,n),(a=t.call(this)).element=$(r),a.slides=i||[],a.watermark=o||"",a._KEY_ACTION_MAP={37:a._onPrev,39:a._onNext,38:a._onLast,40:a._onFirst},a.total=a.slides.length,a._page=0,a.placeholder="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC",a._init(),a}return l()(n,[{key:"_render",value:function(){this.element.html('\n      <div class="slide-player">\n        <div class="slide-player-body loading-background"></div>\n        <div class="slide-notice">\n          <div class="header">{{ \'site.data_last_picture\'|trans }}\n            <button type="button" class="close">×</button>\n          </div>\n        </div>\n      \n        <div class="slide-player-control clearfix">\n          <a href="javascript:" class="goto-first">\n            <span class="glyphicon glyphicon-step-backward"></span>\n          </a>\n          <a href="javascript:" class="goto-prev">\n            <span class="glyphicon glyphicon-chevron-left"></span>\n          </a>\n          <a href="javascript:" class="goto-next">\n            <span class="glyphicon glyphicon-chevron-right"></span>\n          </a>\n          <a href="javascript:" class="goto-last">\n            <span class="glyphicon glyphicon-step-forward"></span>\n          </a>\n          <a href="javascript:" class="fullscreen">\n            <span class="glyphicon glyphicon-fullscreen"></span>\n          </a>\n          <div class="goto-page-input">\n            <input type="text" class="goto-page form-control input-sm" value="1">&nbsp;/&nbsp;\n              <span class="total"></span>\n          </div>\n        </div>\n      </div>'),this.element.find(".total").text(this.total);var e=this.slides.reduce((function(e,t,n){return e+='<img data-src="'.concat(t,'" class="slide" data-page="').concat(n+1,'">')}),"");this.element.find(".slide-player-body").html(e),this.watermark&&this.element.append('<div class="slide-player-watermark">'.concat(this.watermark,"</div>"))}},{key:"_init",value:function(){this._render(),this._bindEvents(),this._onFirst()}},{key:"_lazyLoad",value:function(e){for(var t=e;t<e+4&&!(t>this.total);t++){var n=this._getSlide(t);n.attr("src")||n.attr("src",n.data("src"))}}},{key:"_getSlide",value:function(e){return this.element.find(".slide-player-body .slide").eq(e-1)}},{key:"_bindEvents",value:function(){var e=this;$(document).on("keydown",(function(t){e._KEY_ACTION_MAP[t.keyCode]&&e._KEY_ACTION_MAP[t.keyCode].call(e)})),this.element.on("click",".goto-next",(function(t){return e._onNext(t)})),this.element.on("click",".goto-prev",(function(t){return e._onPrev(t)})),this.element.on("click",".goto-first",(function(t){return e._onFirst(t)})),this.element.on("click",".goto-last",(function(t){return e._onLast(t)})),this.element.on("click",".fullscreen",(function(t){return e._onFullScreen(t)})),this.element.on("change",".goto-page",(function(t){return e._onChangePage(t)}));var t=this;this.on("change",(function(n){var a=n.current;n.before;a==t.total&&t.emit("end",{page:e.total})}))}},{key:"_onNext",value:function(){this.page!==this.total?this.page++:this.emit("end",{page:this.total})}},{key:"_onPrev",value:function(){1!=this.page&&this.page--}},{key:"_onFirst",value:function(){this.page=1}},{key:"_onLast",value:function(){this.page=this.total}},{key:"_onFullScreen",value:function(){var e=!!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);y.a.enabled?y.a.isFullscreen?y.a.toggle():y.a.request():e&&$("#task-content-iframe",parent.document).toggleClass("ios-full-screen")}},{key:"_onChangePage",value:function(e){this.page=$(e.target).val()}},{key:"page",get:function(){return this._page},set:function(e){var t=this,n=this.page,a=e;a>this.total&&(this.element.find(".goto-page").val(a),this._page=a),a<1&&(this.element.find(".goto-page").val(n),this._page=n),n&&this.element.find(".slide-player-body .slide").eq(n-1).removeClass("active");var r=this._getSlide(a);r.attr("src")?r.addClass("active"):(r.load((function(){t._page==r.data("page")&&r.addClass("active")})),r.attr("src",r.data("src"))),this._lazyLoad(a),this.element.find(".goto-page").val(a),this._page=a,this.emit("change",{current:a,before:n})}}]),n}(g.a)},894:function(e,t,n){"use strict";n.r(t);var a=n(418),r=$("#ppt-player").data("params");new a.a({element:"#ppt-player",slides:r.images})}});