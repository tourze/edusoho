!function(t){function e(e){for(var n,o,r=e[0],l=e[1],c=e[2],d=0,h=[];d<r.length;d++)o=r[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&h.push(a[o][0]),a[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);for(u&&u(e);h.length;)h.shift()();return i.push.apply(i,c||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],n=!0,r=1;r<s.length;r++){var l=s[r];0!==a[l]&&(n=!1)}n&&(i.splice(e--,1),t=o(o.s=s[0]))}return t}var n={},a={177:0},i=[];function o(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=t,o.c=n,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(s,n,function(e){return t[e]}.bind(null,n));return s},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/static-dist/";var r=window.webpackJsonp=window.webpackJsonp||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var u=l;i.push([827,0]),s()}({183:function(t,e,s){"use strict";s.d(e,"b",(function(){return a})),s.d(e,"c",(function(){return o})),s.d(e,"d",(function(){return r})),s.d(e,"a",(function(){return l}));var n=s(191),a=function(){$("body").on("click",".js-close-course",(function(t){var e=$(t.currentTarget);cd.confirm({title:Translator.trans("site.close"),content:Translator.trans("course.manage.close_hint"),okText:Translator.trans("site.confirm"),cancelText:Translator.trans("site.cancel")}).on("ok",(function(){$.post(e.data("checkUrl"),(function(t){t.warn?cd.confirm({title:Translator.trans("site.close"),content:Translator.trans(t.message),okText:Translator.trans("site.confirm"),cancelText:Translator.trans("site.cancel")}).on("ok",(function(){i(e)})):i(e)}))}))}))},i=function(t){$.post(t.data("url"),(function(t){t.success?(cd.message({type:"success",message:Translator.trans("course.manage.close_success_hint")}),location.reload()):cd.message({type:"danger",message:Translator.trans("course.manage.close_fail_hint")+":"+t.message})}))},o=function(){$("body").on("click",".js-delete-course",(function(t){cd.confirm({title:Translator.trans("site.delete"),content:Translator.trans("course.manage.delete_hint"),okText:Translator.trans("site.confirm"),cancelText:Translator.trans("site.cancel")}).on("ok",(function(){$.post($(t.currentTarget).data("url"),(function(t){t.success?(cd.message({type:"success",message:Translator.trans("site.delete_success_hint")}),t.redirect?window.location.href=t.redirect:location.reload()):cd.message({type:"danger",message:Translator.trans("site.delete_fail_hint")+":"+t.message})}))}))}))},r=function(){Object(n.a)(".js-publish-course",{title:"course.manage.publish_title",hint:"course.manage.publish_hint",success:"course.manage.publish_success_hint",fail:"course.manage.publish_fail_hint"})},l=function(){var t=$(".js-task-list-header"),e=$(".js-task-list-header__slot");if(t.length){var s=t.offset().top;$(window).scroll((function(n){$(window).scrollTop()>=s?(t.addClass("fixed"),e.removeClass("hidden")):(t.removeClass("fixed"),e.addClass("hidden"))}))}}},205:function(t,e,s){"use strict";s.d(e,"b",(function(){return n})),s.d(e,"a",(function(){return a}));var n=function(){cd.onoff({el:".js-switch"}).on("change",(function(t){var e=$(".js-switch"),s=e.data("url"),n=e.parent().hasClass("checked")?1:0,a=e.parent().hasClass("checked")?"on":"off";cd.confirm({title:Translator.trans("confirm.oper.tip"),content:Translator.trans("confirm.lesson.hidden.tip."+a),okText:Translator.trans("site.yes"),cancelText:Translator.trans("site.no")}).on("ok",(function(){$.post(s,{status:n}).success((function(t){cd.message({type:"success",message:Translator.trans("site.save_success_hint")}),location.reload()})).error((function(t){cd.message({type:"danger",message:t.responseJSON.error.message})}))})).on("cancel",(function(t,s){e[0].checked=!e[0].checked,e.parent().toggleClass("checked")}))}))},a=function(){$("body").on("click",".js-lesson-create-btn",(function(t){var e=$(t.currentTarget).data("url");$.get(e,{}).success((function(t){$("#modal").html(""),$("#modal").append(t.html),$("#modal").modal({backdrop:"static",show:!0})})).error((function(t){cd.message({type:"danger",message:Translator.trans(t.responseJSON.error.message)})}))}))}},22:function(t,e){t.exports=jQuery},321:function(t,e,s){"use strict";s.d(e,"a",(function(){return c}));var n=s(2),a=s.n(n),i=s(3),o=s.n(i),r=s(65),l=s(8),c=function(){function t(e){a()(this,t),this.$element=$(e),this._sort(),this._event()}return o()(t,[{key:"_event",value:function(){var t=this;this.$element.on("addItem",(function(e,s){t.addItem(s),t.sortList()})),$("body").on("click","[data-position]",(function(e){var s=$(this);t.position=s.data("position"),t.type=s.data("type")})),this._deleteChapter(),this._collapse(),this._publish(),this._createTask(),this._optional(),this._initLessonTaskAction()}},{key:"_collapse",value:function(){var t=['<i class="es-icon es-icon-chevronright cd-mr16"></i>','<i class="es-icon es-icon-keyboardarrowdown cd-mr16"></i>'];this.$element.on("click",".js-toggle-show",(function(e){var s=$(e.currentTarget),n=s.closest(".task-manage-item"),a=n.hasClass("js-task-manage-chapter")?".js-task-manage-chapter":".js-task-manage-chapter,.js-task-manage-unit",i=n.nextUntil(a),o=s.hasClass("toogle-hide");s.hasClass("js-toggle-unit")?o?i.removeClass("unit-hide"):i.addClass("unit-hide"):s.hasClass("js-toggle-chapter")&&(i=i.not(".unit-hide")),(i=i.filter((function(t,e){var s="none"===$(e).css("display");return o===s}))).stop().animate({height:"toggle",opacity:"toggle"},"fast"),s.toggleClass("toogle-hide").hasClass("toogle-hide")?s.html(t[0]):s.html(t[1])}))}},{key:"addItem",value:function(t){var e=$(t),s=$("#"+e.attr("id"));if(s.length>0)return s.replaceWith(e),void this.afterAddItem(e);switch(this.type){case"chapter":var n=this.$element.find("#chapter-"+this.position),a=n.nextUntil(".js-task-manage-chapter").last();0==a.length?n.after(e):a.after(e);break;case"task":this.$element.find("#chapter-"+this.position+" .js-lesson-box").append(e);var i=e.parents(".js-lesson-container");this._triggerAsTaskNumUpdated(i);break;case"lesson":var o=this.$element.find("#chapter-"+this.position),r=o.nextUntil(".js-task-manage-unit,.js-task-manage-chapter").last();0==r.length?o.after(e):r.after(e);break;default:this.$element.append(e)}$('[data-toggle="tooltip"]').tooltip(),this.handleEmptyShow(),this._flushTaskNumber(),this._flushPublishLessonNum(),this.clearPosition(),this.afterAddItem(e)}},{key:"clearPosition",value:function(){this.position="",this.type=""}},{key:"_deleteChapter",value:function(){var t=this;this.$element.on("click",".js-delete",(function(e){var s=$(this),n=s.closest(".task-manage-item"),a=t._getDeleteText(s);cd.confirm({title:Translator.trans("site.delete"),content:a,okText:Translator.trans("site.confirm"),cancelText:Translator.trans("site.cancel")}).on("ok",(function(){"task"==s.data("type")&&0==n.siblings().length&&n.closest(".js-task-manage-lesson").remove();var e=n.parents(".js-lesson-container");n.remove(),t._triggerAsTaskNumUpdated(e),t.handleEmptyShow(),t._flushTaskNumber(),t._flushPublishLessonNum(),$.post(s.data("url"),(function(e){Object(l.a)("success",Translator.trans("site.delete_success_hint")),t.sortList()}))}))}))}},{key:"_getDeleteText",value:function(t){return"task"==t.data("type")?Translator.trans("course.manage.task_delete_hint",{taskName:t.data("name")}):Translator.trans("course.manage.chapter_delete_hint",{name:t.data("name")})}},{key:"_sort",value:function(){var t,e=this,s=null;Object(r.a)({element:e.$element,ajax:!1,group:"nested",exclude:".drag_cancel",placeholder:'<li class="placeholder task-dragged-placeholder"></li>',isValidTarget:function(t,s){return e._sortRules(t,s)},onDragStart:function(n,a,i){var o=n.offset(),r=a.rootGroup.pointer;t={left:r.left-o.left,top:r.top-o.top},s=e.getChildrens(n),i(n,a)},onDrag:function(e,s){var n=e.height();$(".task-dragged-placeholder").css({height:n,"background-color":"#eee"}),e.css({left:s.left-t.left,top:s.top-t.top})},onDrop:function(t,n,a){a(t,n);for(var i=t;"none"===i.next().css("display");)i=i.next();i.after(t),s&&(t.after(s),s=null),e.sortList()}})}},{key:"getChildrens",value:function(t){if(!(t.find(".js-toggle-show.toogle-hide").length>0))return null;var e=null;return t.hasClass("js-task-manage-chapter")?e=t.nextUntil(".js-task-manage-chapter"):t.hasClass("js-task-manage-unit")&&(e=t.nextUntil(".js-task-manage-unit,.js-task-manage-chapter")),e&&(e=e.filter((function(t){return"none"===e.eq(t).css("display")}))),e}},{key:"_sortRules",value:function(t,e){return(!t.hasClass("js-task-manage-item")||e.target.closest(".js-task-manage-lesson").attr("id")==t.closest(".js-task-manage-lesson").attr("id"))&&(!((t.hasClass("js-task-manage-unit")||t.hasClass("js-task-manage-chapter"))&&!e.target.hasClass("sortable-list"))&&(!t.hasClass("js-task-manage-lesson")||!e.target.hasClass("js-lesson-box")))}},{key:"handleEmptyShow",value:function(){0===$("#sortable-list").find("li").length?$(".js-task-empty").removeClass("hidden"):$(".js-task-empty").addClass("hidden")}},{key:"sortList",value:function(){var t=[],e=this;this.$element.find(".task-manage-item").each((function(){t.push($(this).attr("id"))})),$.post(this.$element.data("sortUrl"),{ids:t},(function(t){e.$element.data("multiClass")&&window.location.reload()})),this.sortablelist()}},{key:"setShowNum",value:function(t){0==t.attr("show-num")?t.attr("show-num",1):t.attr("show-num",0)}},{key:"sortablelist",value:function(){for(var t=[".js-task-manage-lesson[show-num=1]",".js-task-manage-chapter",".js-task-manage-item[show-num=1]",".js-task-manage-unit"],e=0;e<t.length;e++)this._sortNumberByClassName(t[e]);this._sortUnitNumber()}},{key:"_sortNumberByClassName",value:function(t){var e=1;this.$element.find(t).each((function(){$(this).find(".number").text(e++)}))}},{key:"_sortUnitNumber",value:function(){var t;this.$element.find(".js-task-manage-chapter").each((function(){var e=$(this).nextUntil(".js-task-manage-chapter").filter(".js-task-manage-unit");t=1,e.each((function(){$(this).find(".number").text(t++)}))}))}},{key:"_publish",value:function(){var t=this,e=this,s={class:".js-publish-item, .js-delete, .js-lesson-unpublish-status",oppositeClas:".js-unpublish-item",isHideUnPublish:$("#isHideUnPublish").hasClass("checked"),flag:!1};this.$element.on("click",".js-unpublish-item",(function(n){var a=$(n.target);s.success=Translator.trans("course.manage.task_unpublish_success_hint"),s.danger=Translator.trans("course.manage.task_unpublish_fail_hint")+":",t.toggleOptional(a,e,s)})),this.$element.on("click",".js-publish-item",(function(n){var a=$(n.target);s.success=Translator.trans("course.manage.task_publish_success_hint"),s.danger=Translator.trans("course.manage.task_publish_fail_hint")+":",t.toggleOptional(a,e,s)}))}},{key:"_flushTaskNumber",value:function(){this.$taskNumber||(this.$taskNumber=$("#task-num"));var t=$(".js-settings-item.active").length;this.$taskNumber.text(t)}},{key:"_flushPublishLessonNum",value:function(){var t=$(".js-settings-item.active").length,e=$(".js-lesson-unpublish-status.hidden").length,s=Translator.trans("course.plan_task.lessons_publish_status",{publishedNum:e,unpublishedNum:t-e});$(".js-lessons-publish-status").attr("data-content",s)}},{key:"_createTask",value:function(){this.$element.on("click",".js-create-task-btn",(function(t){var e=$(this).data("url");$.get(e,(function(t){t.code?($("#modal").html(""),$("#modal").append(t.html),$("#modal").modal({backdrop:"static",show:!0})):cd.message({type:"danger",message:Translator.trans(t.message)})})).fail((function(t){cd.message({type:"danger",message:t.responseJSON.error.message})}))}))}},{key:"_optional",value:function(){var t=this,e={class:".js-set-optional",oppositeClas:".js-unset-optional,.js-lesson-option-tag",success:Translator.trans("site.save_success_hint"),danger:Translator.trans("site.save_error_hint")+":",flag:!0};this.$element.on("click",".js-set-optional",(function(s){var n=$(s.target);t.toggleOptional(n,t,e)})),this.$element.on("click",".js-unset-optional",(function(s){var n=$(s.target);t.toggleOptional(n,t,e)}))}},{key:"_initLessonTaskAction",value:function(){var t={"js-lesson-preview-btn":"js-hidden-lesson-preview-btn","js-lesson-edit-btn":"js-hidden-lesson-edit-btn","js-lesson-rename-btn":"js-hidden-lesson-rename-btn"},e=function(e){var s=t[e];$("#sortable-list").on("click","."+e,(function(){var t=$(this).parents(".js-lesson-container"),e=t.find(".js-task-manage-item").attr("id").split("-")[1],n=t.find("."+s),a=n.data("url").replace("%7BtaskId%7D",e);n.data("url",a),n.data("toggle")?n.click():window.open(n.data("url"),"_blank")}))};for(var s in t)e(s)}},{key:"toggleOptional",value:function(t,e,s){var n=this,a=t.closest(".task-manage-item"),i=a.find(s.class),o=a.find(s.oppositeClas),r=$("#isHideUnPublish").hasClass("checked");$.post(t.data("url"),(function(l){var c=!0;(r&&(c=e.checkShouldSetProperty(t,a)),i.toggleClass("hidden"),o.toggleClass("hidden"),r&&c||!r&&s.flag)&&(a.find(".display-text").toggleClass("hidden"),e.setShowNum(a),e.sortList());n._flushPublishLessonNum(),cd.message({type:"success",message:s.success})})).fail((function(t){cd.message({type:"danger",message:s.danger+t.responseJSON.error.message})}))}},{key:"checkShouldSetProperty",value:function(t,e){var s=e.find(".js-publish-item"),n=e.find(".js-set-optional"),a=s.hasClass("hidden"),i=n.hasClass("hidden"),o=!0;return t.hasClass("js-unpublish-item")||t.hasClass("js-publish-item")?i&&(o=!1):(t.hasClass("js-set-optional")||t.hasClass("js-unset-optional"))&&(a||(o=!1)),o}},{key:"afterAddItem",value:function(t){console.log("afterAddItem")}},{key:"_triggerAsTaskNumUpdated",value:function(t){var e=t.find(".js-lesson-box"),s=e.find(".js-task-manage-item").length>1;s?(e.removeClass("hidden"),t.find(".js-display-when-mul-tasks").removeClass("hidden"),t.find(".js-display-when-single-task").addClass("hidden")):(e.addClass("hidden"),t.find(".js-display-when-mul-tasks").addClass("hidden"),t.find(".js-display-when-single-task").removeClass("hidden"),t.find(".js-task-title").html(t.find(".js-lesson-title").html())),this._triggerLessonIconAsTaskNumUpdated(t,s)}},{key:"_triggerLessonIconAsTaskNumUpdated",value:function(t,e){var s=t.find(".js-lesson-icon"),n="";e?n=s[0].classList:n=0==t.find(".js-lesson-box").find(".es-icon").length?[]:t.find(".js-lesson-box").find(".es-icon")[0].classList;for(var a=0;a<n.length;a++){var i=n[a];i.startsWith("es-icon-")&&(e?s.removeClass(i):s.addClass(i))}}}]),t}()},827:function(t,e,s){"use strict";s.r(e);var n=s(5),a=s.n(n),i=s(2),o=s.n(i),r=s(3),l=s.n(r),c=s(12),u=s.n(c),d=s(13),h=s.n(d),f=s(9),m=s.n(f),g=s(205),p=s(321),k=s(183);function v(t){var e=function(){if("undefined"==typeof Reflect||!a.a)return!1;if(a.a.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(a()(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var s,n=m()(t);if(e){var i=m()(this).constructor;s=a()(n,arguments,i)}else s=n.apply(this,arguments);return h()(this,s)}}new(function(t){u()(s,t);var e=v(s);function s(t){var n;return o()(this,s),(n=e.call(this,t))._defaultEvent(),n}return l()(s,[{key:"_defaultEvent",value:function(){this._showLesson()}},{key:"_sortRules",value:function(t,e){return!1}},{key:"_showLesson",value:function(){this.$element.find(".js-task-manage-item").first().addClass("active").find(".js-settings-list").stop().slideDown(500),this.$element.on("click",".js-item-content",(function(t){var e=$(t.currentTarget).closest(".js-task-manage-item");e.hasClass("active")?e.removeClass("active").find(".js-settings-list").stop().slideUp(500):(e.addClass("active").find(".js-settings-list").stop().slideDown(500),e.siblings(".js-task-manage-item.active").removeClass("active").find(".js-settings-list").hide())}))}},{key:"afterAddItem",value:function(t){t.find(".js-item-content").length>0&&t.find(".js-item-content").trigger("click"),$('[data-toggle="popover"]').popover({html:!0})}}]),s}(p.a))("#sortable-list"),Object(g.b)(),Object(g.a)(),Object(k.a)()}});