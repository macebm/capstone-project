<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

use App\Serializer\ProductSerializer;
use App\Entity\Store;
use App\Repository\ProductRepository;
use App\Repository\ManufacturerRepository;
use App\Repository\StoreRepository;
use App\Repository\CategoryRepository;

class ProductController extends AbstractController
{
    /**
     * @Route("/products", methods={"GET"})
     */
    public function index (
        ProductRepository $repository,
        ProductSerializer $serializer
    ): JsonResponse {
        $products = $repository->findAll();
        
        return new JsonResponse (
            $serializer->serialize($products),
            JsonResponse::HTTP_OK,
            [],
            true
        );
    }

    /**
     * @Route("/products/category/{id}", methods={"GET"})
     */
    public function getProductsByCategory (
        $id,
        ProductRepository $repository,
        ProductSerializer $serializer
    ): JsonResponse {
        $products = $repository->findBy(['category' => $id]);
        
        return new JsonResponse (
            $serializer->serialize($products),
            JsonResponse::HTTP_OK,
            [],
            true
        );
    }

    /**
     * @Route("/products/manufacturer/{id}", methods={"GET"})
     */
    public function getProductsByManufacturer (
        $id,
        ProductRepository $repository,
        ProductSerializer $serializer
    ): JsonResponse {
        $products = $repository->findBy(['manufacturer' => $id]);
        
        return new JsonResponse (
            $serializer->serialize($products),
            JsonResponse::HTTP_OK,
            [],
            true
        );
    }

    /**
     * @Route("/products/store/{id}", methods={"GET"})
     */
    public function getProductsByStore (
        $id,
        ProductRepository $repository,
        ProductSerializer $serializer
    ): JsonResponse {
        $products = $repository->findBy(['store' => $id]);
        
        return new JsonResponse (
            $serializer->serialize($products),
            JsonResponse::HTTP_OK,
            [],
            true
        );
    }

    /**
     * @Route("/products", methods={"POST"})
     */

    public function create(
        Request $request,
        ProductRepository $repository,
        ProductSerializer $serializer,
        CategoryRepository $categoryRepository,
        ManufacturerRepository $manufacturerRepository,
        StoreRepository $storeRepository
        ): JsonResponse {
        $product = $serializer->deserialize(
            $request->getContent(),
            $categoryRepository,
            $manufacturerRepository,
            $storeRepository
        );
        $repository->save($product);

        return new JsonResponse(
            $serializer->serialize($product),
            JsonResponse::HTTP_OK,
            [],
            true
        );
    }


}
