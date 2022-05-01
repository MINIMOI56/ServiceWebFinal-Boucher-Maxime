<?php

namespace App\Domain\Film\Service;

use App\Domain\Film\Repository\FilmListorRepository;
use App\Exception\ValidationException;

/**
 * Service.
 */
final class FilmListor
{
    /**
     * @var FilmListorRepository
     */
    private $repository;

    /**
     * The constructor.
     *
     * @param filmListorRepository $repository The repository
     */
    public function __construct(filmListorRepository $repository)
    {
        $this->repository = $repository;
    }

    /**
     * Create a new film.
     *
     * @param array $data The form data
     *
     * @return int The new film ID
     */
    public function listAllFilm()
    {
        // list all film
        $result = $this->repository->listAllFilm();

        return $result;
    }

    public function listFilm($id)
    {
        // list un film avec l'id
        $result = $this->repository->listFilm($id);

        return $result;
    }
}
