<?php

namespace App\Serializer;

use App\Entity\Product;

class ProductSerializer {

    private $productsArray = [];

    private function setArray($product): object {
        $this->productsArray[] = [
            "id" => $product->getId(),
            "name" => $product->getName(),
            "price" => $product->getPrice(),
            "category" => $product->getCategory(),
            "manufacturer" => $product->getManufacturer(),
            "store" => $product->getStore(),
        ];
        return($this);
    }

    public function serialize($products){
        if (is_array($products)) {
            foreach($products as $product) {
                $this->setArray($product);
            }
        } else {
            $this->setArray($products);
        }
        
        return \json_encode($this->productsArray);
    }

    public function deserialize($content){

        $postData = \json_decode($content);
        $product = new Product();
        $product->setName($postData->name);
        $product->setPostalCode($postData->postal_code);
        $product->setStreet($postData->street);

        return $product;

}
}