# Github API

<p>Projet réalisé en autonomie dans le cadre de ma formation développement web chez O'Clock</p>
<p>https://searchreposgithub-annekim.netlify.app</p>

<img src="./resultat.png" alt="resultat" width="500"/>

### Objectif

Réaliser un annuaire permettant de rechercher des repos GitHub

### Techno

* React
* Axios
* Semantic UI
* API : https://api.github.com/search/repositories?q=

### Fonctionnalités

* Barre de recherche
* Un message qui affiche le nombre de résultat obtenus ou les erreurs (exemple une erreur s'affiche si l'on fait une recherche sans valeur)
* 9 résultats maximums s'affichent sur la page
* Chaque résultat comprend un lien vers le repos GitHub, l'avatar du propriétaire, le nom du repos, le login et une description quand ils existent
* Il est possible d'afficher plus de résultat en cliquant sur le bouton "afficher plus"
