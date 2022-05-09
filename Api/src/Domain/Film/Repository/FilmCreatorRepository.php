<?php

namespace App\Domain\Film\Repository;

use PDO;

/**
 * Repository.
 */
class FilmCreatorRepository
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
     * Insert user row.
     *
     * @param array $film The film
     *
     * @return int The new ID
     */
    public function insertFilm(array $film): int
    {
        $row = [
            'titre' => $film['titre'],
            'imageUrl' => $film['imageUrl'],
            'note' => $film['note'],
        ];

        $sql = "INSERT INTO film SET 
            titre = :titre, 
            imageUrl = :imageUrl, 
            note = :note";
                

        $this->connection->prepare($sql)->execute($row);

        return (int)$this->connection->lastInsertId();
    }
}

