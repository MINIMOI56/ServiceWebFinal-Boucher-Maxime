<?php

namespace App\Domain\Film\Repository;

use PDO;

/**
 * Repository.
 */
class FilmListorRepository
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
    public function listAllFilm()
    {
        $sql = "SELECT * FROM film";
        $sqlArgs = array();
        if(isset($_REQUEST['fields'])){
            $fields = explode(",",$_REQUEST['fields']);
            $sql = "SELECT ";
            foreach ($fields as $field){
                $sql.= $field;
                $sql .= " ,";
            }
            $sql = substr($sql, 0, -1);
            $sql .= "FROM film";
        }
        if(isset($_REQUEST['titre']) || isset($_REQUEST['imageUrl']) || isset($_REQUEST['note'])){
            $sql .= " WHERE";
            if(isset($_REQUEST['titre'])){
                $titres = explode(',',$_REQUEST['titre']);
                $sql.= " titre IN (";

                foreach ($titres as $titre){
                    $sql.= "?,";
                    array_push($sqlArgs, $titre);
                }
                //Enleve le dernier OR
                $sql = substr($sql, 0, -1);
                $sql.= ") AND";
            }
            if(isset($_REQUEST['imageUrl'])){
                $imageUrls = explode(',',$_REQUEST['imageUrl']);
                $sql.= " last_name IN (";

                foreach ($imageUrls as $imageUrl){
                    $sql.= "?,";
                    array_push($sqlArgs, $imageUrl);
                }
                //Enleve la derniere ,
                $sql = substr($sql, 0, -1);
                $sql.= ") AND";
            }
            if(isset($_REQUEST['note'])){
                $notes = explode(',',$_REQUEST['note']);
                $sql.= " username IN (";

                foreach ($notes as $note){
                    $sql.= "?,";
                    array_push($sqlArgs, $note);
                }
                //Enleve la derniere ,
                $sql = substr($sql, 0, -1);
                $sql.= ") AND";

            }
            //On retire le dernier AND
            $sql = substr($sql, 0, -4);

        }
        if(isset($_REQUEST['sort'])){
            if($_REQUEST['sort'] == "id"){
                $sql.= " ORDER BY  id";
            } else if ($_REQUEST['sort'] == 'titre'){
                $sql.= " ORDER BY  titre";
            }  else if ($_REQUEST['sort'] == 'note'){
                $sql.= " ORDER BY  note";
            } else if ($_REQUEST['sort'] == 'imageUrl'){
                $sql.= " ORDER BY  imageUrl";
            }
        }

        if(isset($_REQUEST['limit'])){
            if( is_numeric( $_REQUEST['limit'] ) ){

                $sql.= " LIMIT ";

                if(isset($_REQUEST['offset'])){
                    if( is_numeric( $_REQUEST['offset'] ) ){
                        $sql.= $_REQUEST['offset'];
                        $sql.= ",";

                    }
                }

                $sql.= $_REQUEST['limit'];
            }
        }
        $stmt = $this->connection->prepare($sql);
        $stmt->execute($sqlArgs);
        $result = $stmt->fetchAll();
        return $result;
    }

    /**
     * Insert film row.
     *
     * @param array $film The film
     *
     * @return int The new ID
     */
    public function listFilm(int $id)
    {
        $sql = "SELECT * FROM film WHERE id = ?";

        $stmt = $this->connection->prepare($sql);
        $stmt->execute(array($id));
        $result = $stmt->fetchAll();
        return $result;
    }
}

