<?php

namespace Tests\Unit\ItemBankExercise;

use Biz\BaseTestCase;
use Biz\ItemBankExercise\Job\UpdateMemberMasteryRateJob;

class UpdateMemberMasteryRateJobTest extends BaseTestCase
{
    public function testExcute()
    {
        $this->getItemBankExerciseMemberDao()->batchCreate(
            [
                [
                    'exerciseId' => 1,
                    'userId' => 1,
                ],
                [
                    'exerciseId' => 1,
                    'userId' => 2,
                ],
                [
                    'exerciseId' => 1,
                    'userId' => 3,
                ],
            ]
        );

        $this->getItemBankExerciseQuestionRecordDao()->batchCreate(
            [
                [
                    'exerciseId' => 1,
                    'moduleId' => 1,
                    'itemId' => 1,
                    'questionId' => 1,
                    'userId' => 1,
                    'status' => 'right',
                ],
                [
                    'exerciseId' => 1,
                    'moduleId' => 1,
                    'itemId' => 1,
                    'questionId' => 1,
                    'userId' => 1,
                    'status' => 'wrong',
                ],
                [
                    'exerciseId' => 1,
                    'moduleId' => 1,
                    'itemId' => 1,
                    'questionId' => 1,
                    'userId' => 2,
                    'status' => 'right',
                ],
                [
                    'exerciseId' => 1,
                    'moduleId' => 1,
                    'itemId' => 1,
                    'questionId' => 1,
                    'userId' => 2,
                    'status' => 'wrong',
                ],
                [
                    'exerciseId' => 1,
                    'moduleId' => 1,
                    'itemId' => 1,
                    'questionId' => 1,
                    'userId' => 3,
                    'status' => 'right',
                ],
            ]
        );

        $this->mockBiz(
            'QuestionBank:QuestionBankService',
            [
                [
                    'functionName' => 'getQuestionBank',
                    'returnValue' => [
                        'id' => 1,
                        'itemBank' => [
                            'id' => 1,
                            'question_num' => 10,
                        ],
                    ],
                ],
            ]
        );

        $this->mockBiz(
            'ItemBankExercise:ExerciseService',
            [
                [
                    'functionName' => 'getByQuestionBankId',
                    'returnValue' => [
                        'id' => 1,
                    ],
                ],
            ]
        );

        $this->mockBiz(
            'ItemBankExercise:ExerciseModuleService',
            [
                [
                    'functionName' => 'findByExerciseIdAndType',
                    'returnValue' => [
                        ['id' => 1],
                    ],
                ],
            ]
        );

        $job = new UpdateMemberMasteryRateJob(['args' => ['questionBankId' => 1]], $this->biz);
        $job->execute();

        $members = $this->getItemBankExerciseMemberDao()->search(['exerciseId' => 1], [], 0, PHP_INT_MAX);
        $this->assertEquals($members[0]['doneQuestionNum'], 2);
        $this->assertEquals($members[0]['rightQuestionNum'], 1);
        $this->assertEquals($members[0]['masteryRate'], 10.0);
        $this->assertEquals($members[0]['completionRate'], 20.0);
        $this->assertEquals($members[1]['doneQuestionNum'], 2);
        $this->assertEquals($members[1]['rightQuestionNum'], 1);
        $this->assertEquals($members[1]['masteryRate'], 10.0);
        $this->assertEquals($members[1]['completionRate'], 20.0);
        $this->assertEquals($members[2]['doneQuestionNum'], 1);
        $this->assertEquals($members[2]['rightQuestionNum'], 1);
        $this->assertEquals($members[2]['masteryRate'], 10.0);
        $this->assertEquals($members[2]['completionRate'], 10.0);
    }

    protected function getItemBankExerciseQuestionRecordDao()
    {
        return $this->biz->dao('ItemBankExercise:ExerciseQuestionRecordDao');
    }

    protected function getItemBankExerciseMemberDao()
    {
        return $this->biz->dao('ItemBankExercise:ExerciseMemberDao');
    }
}
