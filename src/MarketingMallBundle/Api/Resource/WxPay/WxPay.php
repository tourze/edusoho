<?php

namespace MarketingMallBundle\Api\Resource\WxPay;

use ApiBundle\Api\ApiRequest;
use Biz\System\Service\SettingService;
use MarketingMallBundle\Api\Resource\BaseResource;

class WxPay extends BaseResource
{
    public function get(ApiRequest $apiRequest)
    {
        return $this->getSettingService()->get('payment', []);
    }

    /**
     * @return SettingService
     */
    protected function getSettingService()
    {
        return $this->service('System:SettingService');
    }
}