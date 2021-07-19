<?php

namespace Codeages\Biz\ItemBank\Answer\Dao\Impl;

use Codeages\Biz\Framework\Dao\AdvancedDaoImpl;
use Codeages\Biz\ItemBank\Answer\Dao\AnswerQuestionReportDao;

class AnswerQuestionReportDaoImpl extends AdvancedDaoImpl implements AnswerQuestionReportDao
{
    protected $table = 'biz_answer_question_report';

    public function findByIds($ids)
    {
        return $this->findInField('id', $ids);
    }

    public function findByAnswerRecordId($answerRecordId)
    {
        return $this->findByFields(['answer_record_id' => $answerRecordId]);
    }

    public function declares()
    {
        return [
            'timestamps' => [
                'created_time',
                'updated_time',
            ],
            'orderbys' => [],
            'serializes' => [
                'response' => 'json',
            ],
            'conditions' => [
                'answer_record_id = :answer_record_id',
                'answer_record_id IN (:answer_record_ids)',
                'status = :status',
                'status IN (:statues)',
                'id IN (:ids)',
            ],
        ];
    }
}
