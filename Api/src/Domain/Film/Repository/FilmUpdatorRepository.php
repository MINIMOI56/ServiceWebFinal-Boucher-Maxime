<?php

namespace App\Domain\Film\Repository;

use PDO;

/**
 * Repository.
 */
class FilmUpdatorRepository
{
    /**
     * @var PDO The database connection
     */
    private $connection;

    /**
     * Constructor.
     *
     * @param PDO $connection The database connection
     */
    public function __construct(PDO $connection)
    {
        $this->connection = $connection;
    }

    /**
     * Insert film row.
     *
     * @param array $film The film
     *
     * @return int The new ID
     */
    public function updateFilm(array $film, $id): bool
    {
        $row = [
            'titre' => $film['titre'],
            'imageUrl' => $film['imageUrl'],
            'note' => $film['note'],
            'id' => $id,

        ];

        $sql = "UPDATE film SET 
                titre=:titre, 
                imageUrl=:imageUrl, 
                note=:note
                WHERE id =:id;";

        $this->connection->prepare($sql)->execute($row);

        return true;
    }
}

