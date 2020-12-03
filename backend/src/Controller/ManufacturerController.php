<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

use App\Serializer\ManufacturerSerializer;
use App\Entity\Manufacturer;
use App\Repository\ManufacturerRepository;

class ManufacturerController extends AbstractController
{
    /**
     * @Route("/manufacturers", methods={"GET"})
     */
    public function index (
        ManufacturerRepository $repository,
        ManufacturerSerializer $serializer
    ): JsonResponse {
        $manufacturers = $repository->findAll();
        
        return new JsonResponse (
            $serializer->serialize($manufacturers),
            JsonResponse::HTTP_OK,
            [],
            true
        );
    }

    /**
     * @Route("/manufacturers", methods={"POST"})
     */

    public function create(
        Request $request,
        ManufacturerRepository $repository,
        ManufacturerSerializer $serializer
        ): JsonResponse {
        $manufacturer = $serializer->deserialize($request->getContent());
        $repository->save($manufacturer);

        return new JsonResponse(
            $serializer->serialize($manufacturer),
            JsonResponse::HTTP_OK,
            [],
            true
        );
    }


}
