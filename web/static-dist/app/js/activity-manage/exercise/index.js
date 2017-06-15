webpackJsonp(["app/js/activity-manage/exercise/index"],{0:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e){var t=$('[name="range[courseId]"]').val(),n=$('[name="range[lessonId]"]').val(),i=$('[name="difficulty"]').val();$.post(e,{courseId:t,lessonId:n,difficulty:i},function(e){$('[role="questionNum"]').text(0),$.each(e,function(e,t){$("[type='"+e+"']").text(t.questionNum)})})}var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),s=n("1be2a74362f00ba903a0"),u=i(s),c=function(){function e(t){r(this,e),this.$element=t,this.validator2=null,this._setValidateRule(),this._init(),this._initEvent()}return o(e,[{key:"_init",value:function(){this._inItStep2form(),this.fix()}},{key:"_initEvent",value:function(){}},{key:"_inItStep2form",value:function(){var e=$("#step2-form");this.validator2=e.validate({rules:{title:{required:!0,maxlength:50,trim:!0,course_title:!0},itemCount:{required:!0,positiveInteger:!0,min:1,max:9999},range:{required:!0},difficulty:{required:!0},"questionTypes[]":{required:!0,remote:{url:$('[name="checkQuestion"]').data("checkUrl"),type:"post",dataType:"json",async:!1,data:{itemCount:function(){return $('[name="itemCount"]').val()},range:function e(){var e={},t=$('[name="range[courseId]"]').val();if(e.courseId=t,$('[name="range[lessonId]"]').length>0){var n=$('[name="range[lessonId]"]').val();e.lessonId=n}return JSON.stringify(e)},difficulty:function(){return $('[name="difficulty"]').val()},types:function e(){var e=[];return $('[name="questionTypes[]"]:checked').each(function(){e.push($(this).val())}),e}}}}},messages:{required:Translator.trans("activity.exercise_manage.title_required_error_hint"),range:Translator.trans("activity.exercise_manage.title_range_error_hint"),itemCount:{required:Translator.trans("activity.exercise_manage.item_count_required_error_hint"),positiveInteger:Translator.trans("activity.exercise_manage.item_count_positive_integer_error_hint"),min:Translator.trans("activity.exercise_manage.item_count_min_error_hint"),max:Translator.trans("activity.exercise_manage.item_count_max_error_hint")},difficulty:Translator.trans("activity.exercise_manage.difficulty_required_error_hint"),"questionTypes[]":{required:Translator.trans("activity.exercise_manage.question_required_error_hint"),remote:Translator.trans("activity.exercise_manage.question_remote_error_hint")}}}),e.data("validator",this.validator2)}},{key:"_inItStep3form",value:function(){var e=$("#step3-form"),t=e.validate({onkeyup:!1,rules:{finishCondition:{required:!0}},messages:{finishCondition:Translator.trans("activity.exercise_manage.finish_detail_required_error_hint")}});e.data("validator",t)}},{key:"_setValidateRule",value:function(){$.validator.addMethod("positiveInteger",function(e,t){return this.optional(t)||/^[1-9]\d*$/.test(e)},$.validator.format(Translator.trans("activity.exercise_manage.item_count_positive_integer_error_hint")))}},{key:"fix",value:function(){var e=this;$(".js-question-type").click(function(){e.validator2.form()})}}]),e}();new c($("#step2-form")),new u.default($('[name="range[courseId]"]'),$('[name="range[lessonId]"]')),$('[name="range[courseId]"]').change(function(){var e=$(this).data("checkNumUrl");a(e)}),$('[name="range[lessonId]"]').change(function(){var e=$(this).data("checkNumUrl");a(e)}),$('[name="difficulty"]').change(function(){var e=$(this).data("checkNumUrl");a(e)})},"1be2a74362f00ba903a0":function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=function(){function e(t,i){n(this,e),this.select1=t,this.select2=i,this._initEvent()}return i(e,[{key:"_initEvent",value:function(){var e=this;this.select1.on("change",function(t){return e._selectChange(t)})}},{key:"_selectChange",value:function(e){var t=this.select1.data("url"),n=this.select1.val(),i=this;return i.select2.text(""),0==n?void this.select2.hide():void $.post(t,{courseId:n},function(e){if(""!=e){var t='<option value="0">'+Translator.trans("site.choose_hint")+"</option>";$.each(e,function(e,n){t+='<option value="'+n.id+'">'+n.title+"</option>"}),i.select2.append(t),i.select2.show()}else i.select2.hide()})}}]),e}();t.default=r}});