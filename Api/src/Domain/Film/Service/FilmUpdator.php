<?php

namespace App\Domain\Film\Service;

use App\Domain\Film\Repository\FilmUpdatorRepository;
use App\Exception\ValidationException;

/**
 * Service.
 */
final class FilmUpdator
{
    /**
     * @var FilmUpdatorRepository
     */
    private $repository;

    /**
     * The constructor.
     *
     * @param FilmUpdatorRepository $repository The repository
     */
    public function __construct(FilmUpdatorRepository $repository)
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
    public function updateFilm(array $data, $id): bool
    {
        // Input validation
        $this->validateUpdateFilm($data);

        // Insert user
        $reussite = $this->repository->updateFilm($data, $id);

        // Logging here: User created successfully
        //$this->logger->info(sprintf('Film created successfully: %s', $filmId));

        return $reussite;
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
    private function validateUpdateFilm(array $data): void
    {
        $errors = [];

        if (empty($data['titre'])) {
            $errors['titre'] = 'Input required: titre';
        }

        if (empty($data['imageUrl'])) {
            $errors['imageUrl'] = 'Input required: url';
        } elseif (empty($data['note'])) {
            $errors['note'] = 'Input required: note';
        }

        if ($errors) {
            throw new ValidationException('Please check your input'.$errors, $errors);
        }
    }
}
