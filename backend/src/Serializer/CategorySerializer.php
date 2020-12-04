<?php

namespace App\Serializer;

use App\Entity\Category;

class CategorySerializer {

    private $categoriesArray = [];

    private function setArray($category): object {
        $this->categoriesArray[] = [
            "id" => $category->getId(),
            'name' => $category->getName(),
        ];
        return($this);
    }

    public function serialize($categories){
        if (is_array($categories)) {
            foreach($categories as $category) {
                $this->setArray($category);
            }
        } else {
            $this->setArray($categories);
        }
        
        return \json_encode($this->categoriesArray);
    }

    public function deserialize($content){

        $postData = \json_decode($content);
        $category = new Category();
        $category->setName($postData->name);

        return $category;

}
}