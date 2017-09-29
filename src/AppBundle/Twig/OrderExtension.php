<?php

namespace AppBundle\Twig;

use AppBundle\Common\MathToolkit;
use Biz\OrderFacade\Currency;
use Codeages\Biz\Framework\Context\Biz;
use AppBundle\Common\JoinPointToolkit;
use Symfony\Component\DependencyInjection\ContainerInterface;

class OrderExtension extends \Twig_Extension
{
    /**
     * @var ContainerInterface
     */
    protected $container;
    /**
     * @var Biz
     */
    protected $biz;

    protected $webStatusMap = array(
        'created' => 'notPaid',
        'paying' => 'notPaid',
        'closed' => 'closed',
        'refunded' => 'closed',
        'fail' => 'paid',
        'paid' => 'paid',
        'refunding' => 'paid',
        'success' => 'paid',
    );

    protected $adminStatusMap = array(
        'created' => 'notPaid',
        'paying' => 'notPaid',
        'closed' => 'closed',
        'refunded' => 'refunded',
        'fail' => 'paid',
        'paid' => 'paid',
        'refunding' => 'paid',
        'success' => 'paid',
    );

    public function __construct($container, Biz $biz)
    {
        $this->container = $container;
        $this->biz = $biz;
    }

    public function getFilters()
    {
        return array(
            new \Twig_SimpleFilter('fen_to_yuan', array($this, 'fenToYuan')),
            new \Twig_SimpleFilter('price_format', array($this, 'priceFormat')),
            new \Twig_SimpleFilter('major_currency', array($this, 'majorCurrency')),
        );
    }

    public function getFunctions()
    {
        return array(
            new \Twig_SimpleFunction('check_order_type', array($this, 'checkOrderType')),
            new \Twig_SimpleFunction('display_order_status', array($this, 'displayOrderStatus'), array('is_safe' => array('html'))),
            new \Twig_SimpleFunction('get_display_status', array($this, 'getDisplayStatus')),
        );
    }

    public function fenToYuan($price, $displayPrefix = 1)
    {
        $price = MathToolkit::simple($price, 0.01);

        return $this->majorCurrency($price, $displayPrefix);
    }

    /**
     * 价格格式化
     *
     * @param $price
     *
     * @return string
     */
    public function priceFormat($price, $displayPrefix = 1)
    {
        $priceParts = $this->getCurrency()->formatParts($price);
        if (!$displayPrefix) {
            unset($priceParts['prefix']);
            unset($priceParts['suffix']);
        }

        return implode($priceParts);
    }

    public function majorCurrency($price, $displayPrefix = 1)
    {
        $priceParts = $this->getCurrency()->formatToMajorCurrency($price);
        if (!$displayPrefix) {
            unset($priceParts['prefix']);
            unset($priceParts['suffix']);
        }

        return implode($priceParts);
    }

    /**
     * @return Currency
     */
    private function getCurrency()
    {
        return $this->biz['currency'];
    }

    public function checkOrderType($type)
    {
        $orderType = JoinPointToolkit::load('order');
        if (in_array($type, array_keys($orderType))) {
            return $orderType[$type]['order_show_template'];
        }

        return false;
    }

    public function displayOrderStatus($orderStatus, $isAdmin = 1)
    {
        $displayStatus = $this->getDisplayStatus($orderStatus, $isAdmin);

        return $isAdmin ? $this->displayAdminStatus($displayStatus) : $this->displayWebStatus($displayStatus);
    }

    public function getOrderStatusFromDisplayStatus($displayStatus, $isAdmin = 1)
    {
        $map = $isAdmin ? $this->adminStatusMap : $this->webStatusMap;

        $result = array();
        foreach ($map as $orderStatus => $disStatus) {
            if ($displayStatus == $disStatus) {
                $result[] = $orderStatus;
            }
        }

        return $result;
    }

    public function getAllDisplayStatus($isAdmin = 1)
    {
        $map = $isAdmin ? $this->adminStatusMap : $this->webStatusMap;

        return array_unique($map);
    }

    public function getStatusMap($isAdmin = 1)
    {
        return $isAdmin ? $this->adminStatusMap : $this->webStatusMap;
    }

    public function getDisplayStatus($orderStatus, $isAdmin)
    {
        $map = $isAdmin ? $this->adminStatusMap : $this->webStatusMap;

        return isset($map[$orderStatus]) ? $map[$orderStatus] : $orderStatus;
    }

    private function displayAdminStatus($displayStatus)
    {
        $text = $this->container->get('codeages_plugin.dict_twig_extension')->getDictText('orderDisplayStatus', $displayStatus);
        switch ($displayStatus) {
            case 'notPaid':
                $majorClass = 'label-warning';
                break;
            case 'paid':
                $majorClass = 'label-success';
                break;
            case 'refunded':
                $majorClass = 'label-danger';
                break;
            case 'closed':
                $majorClass = 'label-default';
                break;
            default:
                $majorClass = 'label-default';
        }

        return sprintf('<span class="label %s">%s</span>', $majorClass, $text);
    }

    private function displayWebStatus($displayStatus)
    {
        $text = $this->container->get('codeages_plugin.dict_twig_extension')->getDictText('orderDisplayStatus', $displayStatus);
        switch ($displayStatus) {
            case 'notPaid':
                $majorClass = 'cd-status-warning';
                break;
            case 'paid':
                $majorClass = 'cd-status-success';
                break;
            case 'refunded':
                $majorClass = 'cd-status-danger';
                break;
            case 'closed':
                $majorClass = 'cd-status-disabled';
                break;
            default:
                $majorClass = 'cd-status-disabled';
        }

        return sprintf('<span class="cd-status %s">%s</span>', $majorClass, $text);
    }

    public function getName()
    {
        return 'topxia_order_twig';
    }
}
