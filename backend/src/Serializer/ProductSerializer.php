<?php

namespace App\Serializer;

use App\Entity\Product;
use App\Entity\Category;

use App\Repository\CategoryRepository;
use App\Repository\ProductRepository;
use App\Repository\ManufacturerRepository;
use App\Repository\StoreRepository;

class ProductSerializer {

    public function __construct(
        ProductRepository $repository,
        CategoryRepository $categoryRepository,
        ManufacturerRepository $manufacturerRepository,
        StoreRepository $storeRepository
    ) {
        $this->repository = $repository;
        $this->categoryRepository = $categoryRepository;
        $this->manufacturerRepository = $manufacturerRepository;
        $this->storeRepository = $storeRepository;
    }

    private $productsArray = [];

    private function setArray($product): object {

        
        $this->productsArray[] = [
            "id" => $product->getId(),
            "name" => $product->getName(),
            "price" => $product->getPrice(),
            "category" => $product->getCategory()->getName(),
            "manufacturer" => $product->getManufacturer()->getName(),
            "store" => $product->getStore()->getName(),
            "postalCode" => $product->getStore()->getPostalCode(),
            "street" => $product->getStore()->getStreet(),
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
        $product->setPrice($postData->price);


        $category = $this->categoryRepository->find($postData->category);
        $product->setCategory($category);

        $manufacturer = $this->manufacturerRepository->find($postData->manufacturer);
        $product->setManufacturer($manufacturer);

        $store = $this->storeRepository->find($postData->store);
        $product->setStore($store);
        

        return $product;

}
}