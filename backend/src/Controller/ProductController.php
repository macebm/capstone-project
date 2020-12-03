<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

use App\Serializer\ProductSerializer;
use App\Entity\Store;
use App\Repository\ProductRepository;

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
     * @Route("/store", methods={"POST"})
     */

    public function create(
        Request $request,
        ProductRepository $repository,
        ProductSerializer $serializer
        ): JsonResponse {
        $product = $serializer->deserialize($request->getContent());
        $repository->save($product);

        return new JsonResponse(
            $serializer->serialize($product),
            JsonResponse::HTTP_OK,
            [],
            true
        );
    }


}
