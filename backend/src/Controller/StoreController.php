<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

use Symfony\Component\Serializer\SerializerInterface;
use App\Entity\Store;
use App\Repository\StoreRepository;

class StoreController extends AbstractController
{
    /**
     * @Route("/store", methods={"GET"})
     */
    public function index (
        StoreRepository $repository,
        SerializerInterface $serializer
    ): JsonResponse {
        $stores = $repository->findAll();

        return new JsonResponse (
            $serializer->serialize($stores, "json"),
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
        StoreRepository $repository,
        SerializerInterface $serializer
        ): JsonResponse {
        $store = $serializer->deserialize($request->getContent(), Store::class, "json");

        $repository->save($store);

        return new JsonResponse(
            $serializer->serialize($store, "json"),
            JsonResponse::HTTP_OK,
            [],
            true
        );
    }


}
