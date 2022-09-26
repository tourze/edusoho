<?php

namespace MarketingMallBundle\Biz\SyncList\Service\Impl;

use AppBundle\Common\ArrayToolkit;
use Biz\BaseService;
use Biz\Common\CommonException;
use MarketingMallBundle\Biz\SyncList\Dao\SyncListDao;
use MarketingMallBundle\Biz\SyncList\Service\SyncListService;

class SyncListServiceImpl extends BaseService implements SyncListService
{

    public function addSyncList($syncList)
    {
        if (!ArrayToolkit::requireds($syncList, ['type', 'data'])) {
            $this->createNewException(CommonException::ERROR_PARAMETER_MISSING());
        }

        $syncList = ArrayToolkit::parts($syncList, ['type', 'data']);

        return $this->getSyncListDao()->create($syncList);
    }

    public function getSyncType()
    {
        return $this->getSyncListDao()->getSyncType();
    }

    public function getSyncList($cursorAddress, $cursorType)
    {
        return $this->getSyncListDao()->getSyncListByCursor($cursorAddress, $cursorType);
    }
    
    /**
     * @return SyncListDao
     */
    protected function getSyncListDao()
    {
        return $this->createDao('MarketingMallBundle:SyncList:SyncListDao');
    }
}