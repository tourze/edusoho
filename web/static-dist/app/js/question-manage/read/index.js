!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/static-dist/",n(n.s=957)}({412:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function(e){var t=$("#import-step-form"),n=$("#upload-btn"),r=$("#form_file"),o=$("#upload-file-box"),a=document.getElementById("upload-file-box"),i=$("#old-template-btn"),s=$(".js-step1-view"),d=$(".js-step2-view"),l=$(".js-step3-view"),u=$(".js-step2-btn"),c=$(".js-step3-btn");function p(e){if(!e)return!1;var o=t.attr("action"),a=t.attr("method");n.button("loading"),$.ajax({type:a,url:o,data:e,cache:!1,processData:!1,contentType:!1,success:function(e){n.button("reset"),!0===e.success?function(e){window.location.href=e.url}(e):function(e){i.addClass("hidden"),s.addClass("hidden"),l.html(e).removeClass("hidden"),c.removeClass("hidden")}(e)},error:function(e){n.button("reset"),r.val(""),e=e.responseJSON.error,console.log("Read error:",e)}})}r.on("change",(function(e){var n=e.currentTarget.files;if(0===n.length)return!1;var r=n[0].name.split(".");r.pop(),r.join("."),p(new FormData(t[0]))})),o.on({dragleave:function(e){e.preventDefault(),e.stopPropagation()},drop:function(e){e.preventDefault(),e.stopPropagation()},dragenter:function(e){e.preventDefault(),e.stopPropagation()},dragover:function(e){e.preventDefault(),e.stopPropagation()}}),a.addEventListener("dragenter",(function(e){o.toggleClass("bg-primary-light")}),!1),a.addEventListener("dragleave",(function(e){o.toggleClass("bg-primary-light")}),!1),a.addEventListener("drop",(function(e){o.removeClass("bg-primary-light");var t=e.dataTransfer.files;if(0===t.length)return!1;var n=t[0].name.split(".");n.pop(),n.join(".");var r=new FormData;r.append("importFile",t[0]),p(r)}),!1),i.click((function(){if("1"==$(this).data("need-upgrade"))return $("#modal").modal("hide"),void cd.confirm({title:Translator.trans("site.tips"),content:'<div class="cd-pb24 cd-dark-major">'+Translator.trans("course.question_manage.upgrade_tips")+"</div>",okText:Translator.trans("site.close"),cancelText:Translator.trans("site.confirm"),className:""}).on("ok",(function(){$("#modal").modal("show")})).on("cancel",(function(){$("#modal").modal("show")}));$.ajax({type:"get",url:t.data("plumberUrl")}).done((function(e){$("#modal").html(e)}))})),$("#re-import-btn").click((function(){i.removeClass("hidden"),s.removeClass("hidden"),d.addClass("hidden"),l.addClass("hidden"),u.addClass("hidden"),c.addClass("hidden"),r.val("")})),$('[data-toggle="popover"]').popover()}},957:function(e,t,n){"use strict";n.r(t);var r=n(412),o=$("#import-testpaper-box");Object(r.a)(o)}});