<?php

namespace Mooc\WebBundle\Controller;

use Topxia\Common\Paginator;
use Topxia\Common\ArrayToolkit;
use Symfony\Component\HttpFoundation\Request;

class MyGradesController extends BaseController
{
    public function indexAction(Request $request)
    {
        $user = $this->getCurrentUser();

        $conditions = array(
            'userId' => $user['id']
        );

        $paginator = new Paginator(
            $request,
            $this->getCourseScoreService()->searchMemberScoreCount($conditions),
            10
        );

        $courseScores = $this->getCourseScoreService()->searchMemberScore(
            $conditions,
            array('createdTime', 'DESC'),
            $paginator->getOffsetCount(),
            $paginator->getPerPageCount()
        );

        $scores = ArrayToolkit::index($courseScores, 'courseId');

        $courseIds = ArrayToolKit::column($courseScores, 'courseId');

        $courses = $this->getCourseService()->findCoursesByIds($courseIds);
        $courses = ArrayToolkit::index($courses, 'id');

        $scoreSettings = array();
        $settings      = array();

        if (!empty($courses)) {
            $scoreSettings = $this->getCourseScoreService()->findScoreSettingsByCourseIds($courseIds);
            $settings      = ArrayToolkit::index($scoreSettings, 'courseId');
        }

        return $this->render('MoocWebBundle:MyGrades:layout.html.twig', array(
            'courses'   => $courses,
            'scores'    => $scores,
            'settings'  => $settings,
            'paginator' => $paginator
        ));
    }

    public function gradesCardsAction(Request $request, $courseId)
    {
        $user = $this->getCurrentUser();

        if (!$user->isLogin()) {
            $this->createAccessDeniedException('用户未登录');
        }

        $courseSetting = $this->getCourseScoreService()->getScoreSettingByCourseId($courseId);

        if ('published' != $courseSetting['status']) {
            throw $this->createNotFoundException("课程成绩尚未发布!");
        }

        $course            = $this->getCourseService()->getCourse($courseId);
        $courseMember      = $this->getCourseService()->getCourseMember($courseId, $user['id']);
        $learnedLessonsNum = $courseMember['learnedNum'];

        $scores = $this->getCourseScoreService()->getUserScoreByUserIdAndCourseId($user['id'], $courseId);

        $testpapers   = $this->getTestpaperService()->findAllTestpapersByTarget($courseId);
        $testpaperIds = ArrayToolkit::column($testpapers, 'id');

        $testpaperResults = $this->getTestpaperService()->findUserTestpaperResultsByTestpaperIds($testpaperIds, $user['id']);
        $testpaperResults = ArrayToolkit::index($testpaperResults, 'testId');

        $homeworkResults = array();
        $homeworklessons = array();

        if ($this->isPluginInstalled('Homework')) {
            $homeworks = $this->getHomeworkService()->findHomeworksByCourseId($courseId);

            $homeworkResults = $this->getHomeworkService()->findUserResultsByCourseId($courseId, $user['id']);
            $homeworkResults = ArrayToolkit::index($homeworkResults, 'homeworkId');

            $homeworksLessonIds = ArrayToolkit::column($homeworks, 'lessonId');
            $homeworkLessons    = $this->getCourseService()->findLessonsByIds($homeworksLessonIds);
        }

        return $this->render('MoocWebBundle:MyGrades:grades-cards.html.twig', array(
            'course'            => $course,
            'learnedLessonsNum' => $learnedLessonsNum,
            'scores'            => $scores,
            'courseSetting'     => $courseSetting,
            'testpapers'        => $testpapers,
            'testpaperResults'  => $testpaperResults,
            'homeworks'         => $homeworks,
            'homeworkResults'   => $homeworkResults,
            'homeworkLessons'   => $homeworkLessons
        ));
    }

    protected function getCourseScoreService()
    {
        return $this->getServiceKernel()->createService('Mooc:Course.CourseScoreService');
    }

    protected function getCourseService()
    {
        return $this->getServiceKernel()->createService('Course.CourseService');
    }

    protected function getTestpaperService()
    {
        return $this->getServiceKernel()->createService('Testpaper.TestpaperService');
    }

    protected function getAppService()
    {
        return $this->getServiceKernel()->createService('CloudPlatform.AppService');
    }

    //Homework plugins(contains Exercise)
    protected function getHomeworkService()
    {
        return $this->getServiceKernel()->createService('Homework:Homework.HomeworkService');
    }
}
