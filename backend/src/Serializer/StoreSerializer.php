<?php

namespace App\Serializer;

use App\Entity\Store;

class StoreSerializer {

    private $storesArray = [];

    private function setArray($store): object {
        $this->storesArray[] = [
            "id" => $store->getId(),
            'name' => $store->getName(),
            'street' => $store->getStreet(),
            'postalCode' => $store->getPostalCode(),
        ];
        return($this);
    }

    public function serialize($stores){
        if (is_array($stores)) {
            foreach($stores as $store) {
                $this->setArray($store);
            }
        } else {
            $this->setArray($stores);
        }
        
        return \json_encode($this->storesArray);
    }

    public function deserialize($content){

        $postData = \json_decode($content);
        $store = new Store();
        $store->setName($postData->name);
        $store->setPostalCode($postData->postal_code);
        $store->setStreet($postData->street);

        return $store;

}
}