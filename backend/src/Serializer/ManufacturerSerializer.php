<?php

namespace App\Serializer;

use App\Entity\Manufacturer;

class ManufacturerSerializer {

    private $manufacturersArray = [];

    private function setArray($manufacturer): object {
        $this->manufacturersArray[] = [
            "id" => $manufacturer->getId(),
            'name' => $manufacturer->getName(),
        ];
        return($this);
    }

    public function serialize($manufacturers){
        if (is_array($manufacturers)) {
            foreach($manufacturers as $manufacturer) {
                $this->setArray($manufacturer);
            }
        } else {
            $this->setArray($manufacturers);
        }
        
        return \json_encode($this->manufacturersArray);
    }

    public function deserialize($content){

        $postData = \json_decode($content);
        $manufacturer = new Manufacturer();
        $manufacturer->setName($postData->name);

        return $manufacturer;

}
}