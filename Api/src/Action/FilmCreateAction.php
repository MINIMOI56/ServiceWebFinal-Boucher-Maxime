<?php

namespace App\Action;

use App\Domain\Film\Service\filmCreator;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;

final class FilmCreateAction
{
    private $filmCreator;

    public function __construct(FilmCreator $filmCreator)
    {
        $this->filmCreator = $filmCreator;
    }

    public function __invoke(
        ServerRequestInterface $request, 
        ResponseInterface $response
    ): ResponseInterface {
        // Collect input from the HTTP request
        $data = (array)$request->getParsedBody();

        // Invoke the Domain with inputs and retain the result
        $filmId = $this->filmCreator->createFilm($data);

        // Transform the result into the JSON representation
        $result = [
            'id' => $filmId
        ];

        // Build the HTTP response
        $response->getBody()->write((string)json_encode($result));

        return $response
            ->withHeader('Content-Type', 'application/json')
            ->withStatus(201);
    }
}
