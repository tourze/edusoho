<?php

namespace Tests\Unit\Certificate\Dao;

use Tests\Unit\Base\BaseDaoTestCase;

class CertificateDaoTest extends BaseDaoTestCase
{
    public function testGetByCode()
    {
        $expected = $this->mockDataObject(['code' => 'testCode']);
        $res = $this->getDao()->getByCode('testCode');

        $this->assertEquals('test', $res['name']);
    }

    public function testFindByIds()
    {
        $expected = [];
        $expected[] = $this->mockDataObject(['code' => 'testCode']);
        $expected[] = $this->mockDataObject();

        $res = $this->getDao()->findByIds([$expected[0]['id']]);

        $this->assertEquals('testCode', $res[0]['code']);
    }

    public function testFindByTargetIdAndTargetType()
    {
        $expected = [];
        $expected[] = $this->mockDataObject(['code' => 'testCode']);
        $expected[] = $this->mockDataObject(['targetType' => 'classroom']);

        $res = $this->getDao()->findByTargetIdAndTargetType(1, 'classroom');

        $this->assertEquals('code', $res[0]['code']);
    }

    public function testSearch()
    {
        $expected = array();
        $expected[] = $this->mockDataObject(array('name' => 'testname'));
        $expected[] = $this->mockDataObject(array('targetType' => 'classroom', 'targetId' => 2));
        $expected[] = $this->mockDataObject(array('status' => 'published'));

        $testCondition = array(
            array(
                'condition' => array(),
                'expectedResults' => $expected,
                'expectedCount' => 3,
            ),
            array(
                'condition' => array('nameLike' => 'name'),
                'expectedResults' => [$expected[0]],
                'expectedCount' => 1,
            ),
            array(
                'condition' => array('targetType' => 'classroom'),
                'expectedResults' => [$expected[1]],
                'expectedCount' => 1,
            ),
            array(
                'condition' => array('targetId' => 2),
                'expectedResults' => [$expected[1]],
                'expectedCount' => 1,
            ),
            array(
                'condition' => array('targetIds' => [2]),
                'expectedResults' => [$expected[1]],
                'expectedCount' => 1,
            ),
            array(
                'condition' => array('status' => 'published'),
                'expectedResults' => [$expected[2]],
                'expectedCount' => 1,
            ),
        );
        $this->searchTestUtil($this->getDao(), $testCondition, $this->getCompareKeys());
    }

    protected function getDefaultMockfields()
    {
        return array(
            'name' => 'test',
            'targetType' => 'course',
            'targetId' => 1,
            'templateId' => 1,
            'code' => 'code',
        );
    }
}