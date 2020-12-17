<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

use App\Serializer\CategorySerializer;
use App\Entity\Category;
use App\Repository\CategoryRepository;

class CategoryController extends AbstractController
{
    /**
     * @Route("/categories", methods={"GET"})
     */
    public function index (
        CategoryRepository $repository,
        CategorySerializer $serializer
    ): JsonResponse {
        $categories = $repository->findAll();
        
        return new JsonResponse (
            $serializer->serialize($categories),
            JsonResponse::HTTP_OK,
            [],
            true
        );
    }

    /**
     * @Route("/categories", methods={"POST"})
     */

    public function create(
        Request $request,
        CategoryRepository $repository,
        CategorySerializer $serializer
        ): JsonResponse {
        $category = $serializer->deserialize($request->getContent());
        $repository->save($category);

        return new JsonResponse(
            $serializer->serialize($category),
            JsonResponse::HTTP_OK,
            [],
            true
        );
    }


}
