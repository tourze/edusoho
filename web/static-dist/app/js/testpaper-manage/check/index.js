!function(t){function e(e){for(var a,o,s=e[0],c=e[1],u=e[2],d=0,f=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&f.push(i[o][0]),i[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);for(l&&l(e);f.length;)f.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,s=1;s<n.length;s++){var c=n[s];0!==i[c]&&(a=!1)}a&&(r.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},i={367:0},r=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/static-dist/";var s=window.webpackJsonp=window.webpackJsonp||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=c;r.push([981,0]),n()}({73:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"d",(function(){return r})),n.d(e,"e",(function(){return o})),n.d(e,"c",(function(){return s})),n.d(e,"b",(function(){return c}));n(348);var a=n(20),i=function(){var t=$(".js-panel-card");t.perfectScrollbar(),t.perfectScrollbar("update")},r=function(){if(console.log("ok"),!Object(a.f)()){var t=$(".js-testpaper-card");if(!(t.length<=0)){var e=t.offset().top;$(window).scroll((function(){$(window).scrollTop()>=e?t.addClass("affix"):t.removeClass("affix")}))}}},o=function(){$(".js-btn-index").click((function(t){var e=$(t.currentTarget);$(".js-testpaper-heading").length<=0&&e.addClass("doing").siblings(".doing").removeClass("doing")}))},s=function(){$("#showWrong").change((function(t){var e=$(t.currentTarget);$(".js-answer-notwrong").each((function(t,n){var a=$($(n).data("anchor")),i=a.closest(".js-testpaper-question-block");e.prop("checked")?(a.hide(),i.find(".js-testpaper-question:visible").length<=0&&i.hide()):(a.show(),i.show())})),i()}))},c=function(){var t=$(".js-testpaper-watermark");t.length>0&&$.get(t.data("watermark-url"),(function(e){t.each((function(){$(this).WaterMark({yPosition:"center",style:{"font-size":10},opacity:.6,contents:e})}))}))}},981:function(t,e,n){"use strict";n.r(e);var a=n(26),i=n.n(a),r=n(2),o=n.n(r),s=n(3),c=n.n(s),u=n(73);$.validator.addMethod("score",(function(t,e){return!!/^\d+(\.\d)?$/.test(t)&&Number(t)<=Number($(e).data("score"))}),$.validator.format(Translator.trans("activity.testpaper_manage.marking_validate_error_hint"))),new(function(){function t(e){o()(this,t),this.$container=e,this.checkContent={},this.$form=e.find("form"),this.$dialog=e.find("#testpaper-checked-dialog"),this.validator=null,this._initEvent(),this._init(),this._initValidate(),Object(u.d)(),this.isContinue=!1,this.passStatus="passed"}return c()(t,[{key:"_initEvent",value:function(){var t=this;this.$container.on("focusin","textarea",(function(e){return t._showEssayInputEditor(e)})),this.$container.on("click",'[data-role="check-submit"]',(function(e){return t._submitValidate(e)})),this.$container.on("click","*[data-anchor]",(function(e){return t._quick2Question(e)})),this.$dialog.on("click",'[data-role="finish-check"]',(function(e){return t._submit(e)})),this.$dialog.on("click",".js-next-check",(function(e){return t._continue(e)})),this.$dialog.on("change","select",(function(e){return t._teacherSayFill(e)}))}},{key:"_init",value:function(){}},{key:"_showEssayInputEditor",value:function(t){var e=$(t.currentTarget);if(e.hasClass("essay-teacher-say-short")){t.preventDefault(),t.stopPropagation(),$(this).blur();var n=e.siblings(".essay-teacher-say-long"),a=n.siblings(".essay-teacher-say-btn");e.hide(),n.show(),a.show();var i=CKEDITOR.replace(n.attr("id"),{toolbar:"Minimal",fileSingleSizeLimit:app.fileSingleSizeLimit,filebrowserImageUploadUrl:n.data("imageUploadUrl")});i.on("blur",(function(){i.updateElement(),setTimeout((function(){n.val(i.getData()),n.change()}),1)})),i.on("instanceReady",(function(){this.focus(),a.one("click",(function(){e.val($(i.getData()).text()),i.destroy(),n.hide(),a.hide(),e.show()}))})),i.on("key",(function(){i.updateElement(),setTimeout((function(){n.val(i.getData()),n.change()}),1)})),i.on("insertHtml",(function(){i.updateElement(),setTimeout((function(){n.val(i.getData()),n.change()}),1)}))}}},{key:"_initValidate",value:function(){this.validator=this.$form.validate(),$("*[data-score]:visible").length>0&&$("*[data-score]:visible").each((function(){$(this).rules("add",{required:!0,score:!0,min:0,messages:{required:Translator.trans("activity.testpaper_manage.required_error_hint")}})}))}},{key:"_quick2Question",value:function(t){var e=$(t.currentTarget),n=$(e.data("anchor")).offset();$(document).scrollTop(n.top-55)}},{key:"_submitValidate",value:function(){var t=0;if(null==this.validator||this.validator.form()){var e=this;$("*[data-score]").each((function(){var n={},a=$(this).data("id");n.score=Number($(this).val()),n.teacherSay=$('[name="teacherSay_'+a+'"]').val(),e.checkContent[a]=n,t+=Number($(this).val())}));var n=this.$dialog.find(".js-student-score"),a=this.$dialog.find(".js-pass-score").data("passScore"),i=Number(n.data("objectiveScore")),r=Number(t)+i;n.html(r),r>=a?(n.removeClass("color-danger").addClass("color-success"),this.passStatus="passed"):(n.removeClass("color-success").addClass("color-danger"),this.passStatus="unpassed"),this.$dialog.modal("show")}}},{key:"_continue",value:function(t){this.isContinue=!0,this._submit(t)}},{key:"_submit",value:function(t){var e=$(t.currentTarget),n=this.$dialog.find("textarea").val(),a="";a=this.$dialog.find('[name="passedStatus"]:checked').length>0?this.$dialog.find('[name="passedStatus"]:checked').val():this.passStatus,e.button("loading"),$.post(e.data("postUrl"),{result:i()(this.checkContent),teacherSay:n,passedStatus:a,isContinue:this.isContinue},(function(t){""!=t.goto?window.location.href=t.goto:window.location.reload()}))}},{key:"_teacherSayFill",value:function(t){var e=$(t.currentTarget).find("option:selected");""==e.val()?this.$dialog.find("textarea").val(""):this.$dialog.find("textarea").val(e.text())}}]),t}())($(".js-testpaper-container"))}});