<?php

namespace App\Domain\Film\Service;

use App\Domain\Film\Repository\FilmDeletorRepository;
use App\Exception\ValidationException;

/**
 * Service.
 */
final class FilmDeletor
{
    /**
     * @var FilmDeletorRepository
     */
    private $repository;

    /**
     * The constructor.
     *
     * @param FilmDeletorRepository $repository The repository
     */
    public function __construct(FilmDeletorRepository $repository)
    {
        $this->repository = $repository;
    }

    /**
     * Supprimer un film selon son ID
     *
     * @param $id du film
     */
    public function deleteFilm($id)
    {
        $this->repository->deleteFilm($id);

    }
}
