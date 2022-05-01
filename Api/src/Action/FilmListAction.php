<?php

namespace App\Action;

use App\Domain\Film\Service\filmListor;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;

final class FilmListAction
{
    private $filmListor;

    public function __construct(FilmListor $filmListor)
    {
        $this->filmListor = $filmListor;
    }

    public function __invoke(
        ServerRequestInterface $request,
        ResponseInterface $response,
        $args
    ): ResponseInterface {

        if(count($args) == 1){
            $id = intval($args["id"]);
            $result = $this->filmListor->listFilm($id);
        } else {
            $result = $this->filmListor->listAllFilm();
        }
        // Invoke the Domain with inputs and retain the result

        $response->getBody()->write((string)json_encode($result));

        return $response
            ->withHeader('Content-Type', 'application/json')
            ->withStatus(201);
    }
}
