var local=function(e){var t={};function o(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,o),i.l=!0,i.exports}return o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){"use strict";o.r(t);t.default={locale:"en-US",single_choice:"Single choice",fill:"Gap filling",essay:"Q&A",material:"Materail",uncertain_choice:"Indefinite choice",uncertain_choice_1:"Indefinite choice",choice:"Multiple choice",determine:"True or false",complete:"Complete",Batch_operation:"Batch Operate",cancel:"Cancel",confirm:"Confirm",Score:"Score",Difficulty:"Difficulty",Simple:"Simple",Normal:"Normal",Difficult:"Difficult",None:"Empty",Right:"True",Wrong:"False",Edit:"Edit",Delete:"Delete",Save:"save",Back:"Back",Or:" or ",Stem:"Stem",Explain:"Analysis",openExplain:"see analysis",closeExplain:"collapse analysis",Answer:"Answer",Get:"Get",Hour:"h",Minute:"m",Second:"s",countNumber:"question",subCountNumber:"sub question",ExplainAttachment:"Answer accesseries",RightAnswer:"Correct answer",caseSensitiveShow:"Case sensitive",ScoreRule:{one:"please enter >= 0",two:"please enter <= 999",three:"Please enter the correct decimals, leaving only ONE decimal places"},itemManage:{ToggleShowChoose:"» Show / Hide advanced options",StemAttachment:"Question accesseries",StemRule:"please enter the stem",MaterialLabel:"Material",MaterialAttachment:"Material accesseries",SaveThenAdd:"Save and continue",MaterialRule:"please enter the material",ItemCategory:"Question category",newChoice:"Added options",chooseRule:{one:"Please enter the option content",two:"At least one option required!",three:"At most 10 options required!",four:"At least 2 options required!"},littleChoose:"Choose at least ",answers:"questions!",chooseItem:"Option",judgeRule:"Please choose the correct answer",clickEditOrButton:"Click the button",caseSensitiveClues:"Case sensitive clues",ignoringCase:"Ignoring case",insertByself:"to insert a blank. You can also input manually, for example “This year is [[2014]]”, the answer is “2014”",fillRule:"Please enter the correct answer, if today is a [[sunny | groomy | rany]] day",essayRule:"please enter the answer",addItem:"Add Questions",addSubItem:"Add Sub Question",addSubItemRule:"At least 2 sub question required!"},itemEngine:{status:{do:"Answering",analysis:"item analysis"},saved:"Have been saved",unstartedTip:"The exam does not start, please come back at",unstartedNextTip:"",testpaperIntro:"Test instruction",stemErrorMessage:'Missing stem, please click Edit" to set.',answerErrorMessage:'Missing answer, please click "Edit" to set.',rightAnswerErrorMessage:'This blank missing answer, please click "Edit" to set.',choiceErrorMessage:'This blank missing answer, please click "Edit" to set.',score:"Score",getScore:"Score:",getScore2:"Score",comment:"Comments:",comment2:"Comments",teacher_comment:"Reviewing",noNeed_comment:"This question does not need to review and not counted as a wrong question, manually collect it.",remark:"Mark",collect:"Bookmark",questionIsDeleted:"The question is deleted",itemIsDeleted:"The item is deleted",card:"Answer card",toggleCard:"Toggle Answer card >>",remainReview:"To be review",undo:"Not Start",showError:"Wrong answers only",doAagin:"Do again",doCountUsed:"Answers are exhausted",saveProgress:"Save progress",submit:"Submit",FinishReview:"Complete the approval",confirmSubmit_tip:"Sure you want to submit it?",confirmSave_tip:"Confirm that you want to save progress, continue next time?",confirm:"Confirm",goThenDo:"Continue to do",itemAnalysis:"question Analysis:",manCount:"person-time",standard_answer:"Reference answer:",rightAnswerShow:"The correct answer is",rightAnswer:"Correct answer:",memberAnswer:"Your answer:",studentAnswer:"Student answer:",answerResult:"Answer result:",answerStatus:{right:"Answer is correct",wrong:"Wrong answer",no_answer:"No answer",reviewing:"Reviewing",finished:"Mark complete"},fillText:"Gap filling",fillOrder:function(e){return"Please enter the answer to the blank (".concat(e,") here.")},countDown:"Count Down:",pause:"Pause",pause_tip:"Exam paused, please go back as soon as possible!",goThenExam:"Continue",ScoreRule:{one:"please enter >= 0",two:"please enter <= this question's score",three:"Please enter the correct decimals, leaving only ONE decimal places"},Number_of_topics:function(e){return"".concat(e," questions in total")},allScore:function(e){return", ".concat(e," scores in total")},answerUser:"Answerer:",submitTime:"Submit time:",usedTime:"Total time:",totalScore:"Score:",FinishReview_tip:"Please complete the following questions",student_FinishReview_tip:"Please refer to the problem analysis, and evaluate the subjective questions",waitingReview_tip:"The teacher is reviewing. You will get a system notice when the reviewing is finished.",itemType:"Type",itemScore:"Score",itemTotal:"In total",itemRight:"Correct",itemWrong:"Wrong",itemUndo:"Not Start",Explain:"Analysis:",InspectionMobileTip:"Cloud exams have been opened for this exam. Answering questions on the mobile terminal is currently not supported. Please go to the PC to answer the questions."},attachmentPreview:{File_not_supported:"Can not preview this type of file",Transcoding:"File is being tranformed, please wait",Preview:"Preivew",Download:"Download",Delete:"Delete",Close:"Close"},attachmentUpload:{Upload_attachment:"Upload accessery",Upload_file:"Upload file",Supported_formats:"support upload PPT/PPTX,DOC/DOCX,XLS/XLSX、MP3/MP4/FLV、PDF、RAR files, less than ",Support_breakpoint_renewal:"support resume from break point(Only available in browser which support HTML5 like Chrome, IE9+）",Close:"Close"},inspectionControl:{Invigilation_tips:"Proctor tips",Independent_completion:"Please concentrate on completing independently",Tips:"Tip",Recapture:"Reacquire",Intelligent_invigilator:"The smart proctoring system is initializing ... please do not close this page",Start_failed:"The smart proctor system failed to start, please click to try again",Retry:"Retry",Collect__head:"Collect candidate avatars",Examination_tips:"After facing your camera, please shake your head slowly",Collect_pictures:"The system will automatically collect three pictures, please wait ...",behaviormap_1:"No face detected, please focus on the exam",behaviormap_2:"The current candidate is suspected to be not himself",behaviormap_3:"The system detected multiple faces",behaviormap_4:"Please do not leave the exam page",behaviormap_5:"Smart proctors are visiting ...",captureImgData_1:"Complete the collection and start the exam",captureImgData_2:"Start collection",captureImgData_3:"Reacquire",watchResult:"Suspicious cheating detected (",cameraOff:"The cloud invigilation function has been turned on for this exam. You have turned off the camera and cannot continue the exam. Please click Retry."},itemImport:{Topic_statistics:"Questions&Score",Number_of_topics:function(e){return"".concat(e," questions in total")},allScore:function(e){return"".concat(e," scoress in total")},Title_list:"Question list",Error_list_1:"No.",Error_list_2:"question",Error_list_3:"violation",Check_all:"Select all",Set_difficulty:"Set difficulty",Set_score:"Set Score",Set_classification:"Set category",List_choose_1:"selected Number",List_choose_2:" ",Topic_classification:"Question category",Choose_topic:"Select",Category:"Category:",Difficulty:"Difficulty:",Score:"Score:",Choose_type:"Select question type",Add_new_item:"Add new question",FinishImport:"Finish",AddItem:"Add Questions",AfterAddItem:"Add",EditItem:"Edit",SetTitle_tip:"Edit the testpaper title here and enter up to 50 characters.",SubItem_all_score:"Sum of sub questions' score",Confirm_delete:"Sure to delete?",Confirm_delete_tip:"Sure to delete this question?",Cell_Score:"Score",Title_tip:"Please enter the testpaper name",Order_Error:function(e){return"Question ".concat(e," has violations")}},itemReport:{DoAgain_tip:"Tips for answering questions again",DoAagin_time:"Remaining until next answer",DoAagin_know:"Okay",no_analysis:"no analysis",no_comment:"no comment"},itemReview:{FinishReview:"Complete the approval",Student_score:"Student Grade",Total_score:"Total Score:",Pass_score:"Qualified Score:",InputComment_tip:"Please enter a comment",Cancel:"Cancel",FinishThenGo:"Continue",comments_0:"---common reviews---",comments_1:"Continue to work hard to move on！",comments_2:"Yes, there is progress, further efforts will be more even better！",comments_3:"You are awesome!",comments_4:"Keep it up！",comments_5:"Careful, focused, insistent, you can do better!",rank_0:"excellent",rank_1:"good",rank_2:"passed",rank_3:"unpassed",review_results:"judgment result",right:"right",wrong:"wrong",mastered:"mastered",not_mastered:"not mastered"}}}]);