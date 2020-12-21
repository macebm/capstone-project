<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

use App\Serializer\StoreSerializer;
use App\Entity\Store;
use App\Repository\StoreRepository;

class StoreController extends AbstractController
{
    /**
     * @Route("/stores", methods={"GET"})
     */
    public function index (
        StoreRepository $repository,
        StoreSerializer $serializer
    ): JsonResponse {
        $stores = $repository->findAll();
        
        return new JsonResponse (
            $serializer->serialize($stores),
            JsonResponse::HTTP_OK,
            [],
            true
        );
    }

    /**
     * @Route("/stores/{id}", methods={"GET"})
     */
    public function getProductsByCategory (
        $id,
        StoreRepository $repository,
        StoreSerializer $serializer
    ): JsonResponse {
        $store = $repository->findBy(['id' => $id]);
        
        return new JsonResponse (
            $serializer->serialize($store),
            JsonResponse::HTTP_OK,
            [],
            true
        );
    }

    /**
     * @Route("/stores", methods={"POST"})
     */

    public function create(
        Request $request,
        StoreRepository $repository,
        StoreSerializer $serializer
        ): JsonResponse {
        $store = $serializer->deserialize($request->getContent());
        $repository->save($store);

        return new JsonResponse(
            $serializer->serialize($store),
            JsonResponse::HTTP_OK,
            [],
            true
        );
    }


}
