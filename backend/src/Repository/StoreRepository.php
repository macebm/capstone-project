<?php

namespace App\Repository;

use App\Entity\Store;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Store|null find($id, $lockMode = null, $lockVersion = null)
 * @method Store|null findOneBy(array $criteria, array $orderBy = null)
 * @method Store[]    findAll()
 * @method Store[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class StoreRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Store::class);
    }

    public function save(Store $store): Store {
        $this->_em->persist($store);
        $this->_em->flush();
        
        return $store;
    }

    public function createStore(string $name, string $postal_code, string $street){
        $store = new Store();
        $store->setName($name);
        $store->setPostalCode($postal_code);
        $store->setStreet($street);

        $this->_em->persist($store);
        $this->_em->flush();

        return $store;
    }
}
