<?php

namespace App\Serializer;

use App\Entity\Product;
use App\Entity\Category;
use App\Repository\CategroyRepository;

class ProductSerializer {

    private $productsArray = [];

    private function setArray($product): object {

        
        $this->productsArray[] = [
            "id" => $product->getId(),
            "name" => $product->getName(),
            "price" => $product->getPrice(),
            "category" => $product->getCategory()->getName(),
            "manufacturer" => $product->getManufacturer()->getName(),
            "store" => $product->getStore()->getName(),
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

    public function deserialize($content, $categoryRepository, $manufacturerRepository, $storeRepository){

        $postData = \json_decode($content);
        $product = new Product();
        $product->setName($postData->name);
        $product->setPrice($postData->price);


        $category = $categoryRepository->find($postData->category);
        $product->setCategory($category);

        $manufacturer = $manufacturerRepository->find($postData->manufacturer);
        $product->setManufacturer($manufacturer);

        $store = $storeRepository->find($postData->store);
        $product->setStore($store);
        

        return $product;

}
}