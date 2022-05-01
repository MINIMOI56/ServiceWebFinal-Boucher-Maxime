<?php

namespace App\Domain\Film\Repository;

use PDO;

/**
 * Repository.
 */
class FilmDeletorRepository
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
     * Deletes a film row.
     *
     * @param int $id the film's id
     */
    public function deleteFilm(int $id)
    {
        $sql = "DELETE FROM film WHERE id = ?";

        $stmt = $this->connection->prepare($sql);
        $stmt->execute(array($id));
    }
}

