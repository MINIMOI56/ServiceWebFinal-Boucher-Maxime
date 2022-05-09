# Examen 2
## Services Web 420-4A4-VI Hiver 2021

## Directives

* Vous avez droit à toutes vos notes et Internet.
* Aucune communication n'est permise (messagerie, courriel, etc.). Un élève pris en flagrant délit se verra attribuer la note de 0 pour plagiat.
* La durée de l'examen est de 1h50.
* Vous devez cloner ce projet et implémenter chacun des points demandés.
* Une fois l'examen terminé, faites un git commit et ensuite un git push de votre projet pour me le remettre.

## Contexte

* À partir d'une ébauche de client REACT, vous devez implémenter le code nécessaire pour interroger un service web d'exercices.

## Installation et mise en route

* L'url de l'api est (https://exercisedb.p.rapidapi.com/exercises)
* Vous pouvez consulter la documentation des routes à l'adresse (https://rapidapi.com/justin-WFnsXH_t6/api/exercisedb)
* L'api est fonctionnel, vous n'avez aucun changement à y apporter. Tout le développement se fera dans le client REACT.
* J'ai utilisé des composants Material Design pour la mise en page (Button, Grid, Paper, etc)
## Token

* Le token à utiliser pour l'API bcbfb67984msh7fb61e098893c7cp18292cjsn183dc7c6227e

N'oubliez pas de faire la commande :
npm install

## Points évalués

### Point #1 - Modification du composant Exercice(15 points)

Modifier le composant pour lui permettre d'afficher un exercice : son nom (name), l'équipement requis (equipement) et le gif animé de l'exercice à partir de ses propriétés

### Point #2 - Choix d'un muscle ciblé (30 points)

* Depuis le composant Recherche, faites un appel à l'api pour récupérer les muscles cibles disponibles.
* Ajouter les muscles cibles au menu déroulant
* Créer dans le composant Main une fonction pour le bouton rechercher
* La fonction récupère les exercices disponibles pour le muscle cible
* Quand la recherhce est faite, la liste des exercices pour le muscle se met à jour

### Point #3 - Affichage de la liste des exercices(25 points)

Afficher la liste des exercices à l'aide des composants ListeExercice et Exercice.

### Point #4 - Ajout d'un exercice à l'entraînement (30 points)

* Depuis le composant ListeExercice permettre d'ajouter l'exercice quand on clique sur le bouton ajouter correspondant
* Utiliser une fonction dans Main
* Envoyer cette fonction en paramètre au composant ListeExercice.
* Quand l'ajout est fait, la liste des exercices pour l'entraînement doit se mettre à jour automatiquement.


## Commit final et remise

* Une fois l'examen terminé, faire un dernier commit avec la mention Commit final
* Ensuite, faire un git push pour me remettre l'examen. (Je ne corrigerai rien de plus récent que le commit final)