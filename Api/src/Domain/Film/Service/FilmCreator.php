<?php

namespace App\Domain\Film\Service;

use App\Domain\Film\Repository\FilmCreatorRepository;
use App\Exception\ValidationException;

/**
 * Service.
 */
final class FilmCreator
{
    /**
     * @var FilmCreatorRepository
     */
    private $repository;

    /**
     * The constructor.
     *
     * @param FilmCreatorRepository $repository The repository
     */
    public function __construct(FilmCreatorRepository $repository)
    {
        $this->repository = $repository;
    }

    /**
     * Create a new user.
     *
     * @param array $data The form data
     *
     * @return int The new user ID
     */
    public function createFilm(array $data): int
    {
        // Input validation
        $this->validateNewFilm($data);

        // Insert user
        $filmId = $this->repository->insertFilm($data);

        // Logging here: Film created successfully
        //$this->logger->info(sprintf('Film created successfully: %s', $userId));

        return $filmId;
    }

    /**
     * Input validation.
     *
     * @param array $data The form data
     *
     * @throws ValidationException
     *
     * @return void
     */
    private function validateNewFilm(array $data): void
    {
        $errors = [];

        // Here you can also use your preferred validation library

        if (empty($data['titre'])) {
            $errors['titre'] = 'Input required';
        }

        if (empty($data['imageUrl'])) {
            $errors['imageUrl'] = 'Input required';
        }

        if ($errors) {
            throw new ValidationException('Please check your input', $errors);
        }
    }
}
