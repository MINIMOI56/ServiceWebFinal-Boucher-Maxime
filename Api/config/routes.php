<?php

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use App\Middleware\BasicAuthMiddleware;
use Slim\App;

return function (App $app) {
    // Documentation de l'api
    $app->get('/docs', \App\Action\Docs\SwaggerUiAction::class);

    // Le home de l'api
    $app->get('/', \App\Action\HomeAction::class)->setName('home');

    // Affiche tout les films
    $app->get('/film', \App\Action\FilmListAction::class);

    // Affiche un film, par id
    $app->get('/film/{id}', \App\Action\FilmListAction::class);

    // Ajoute un film
    $app->post('/film', \App\Action\FilmCreateAction::class);

    // Supprime un film, par id
    $app->delete('/delFilm/{id}', \App\Action\FilmDeleteAction::class);

    // Modifie un film, par id
    $app->put('/modFilm/{id}', \App\Action\FilmUpdateAction::class);

    $app->options('/{routes:.*}', \App\Action\PreflightAction::class);
};

