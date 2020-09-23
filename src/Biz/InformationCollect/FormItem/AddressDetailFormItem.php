<?php

namespace Biz\InformationCollect\FormItem;

class AddressDetailFormItem extends FormItem
{
    const TYPE = 'input';

    const TITLE = '详细地址';

    const FILED = 'address_detail';

    public function getData()
    {
        return [
            'type' => self::TYPE,
            'title' => self::TITLE,
            'field' => self::FILED,
            'value' => $this->value,
            'validate' => [
                ['required' => $this->required, 'message' => self::TITLE.'不能为空'],
                ['min' => 2, 'message' => '最少输入2个字符'],
                ['max' => 100, 'message' => '最多输入100个字符'],
            ],
        ];
    }
}
