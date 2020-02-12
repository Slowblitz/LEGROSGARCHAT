# LEGROSGARCHAT:

export le JSON MongoDB :

`sudo mongoexport --db <nom_db> -c <nom_collection> --out utilisateurs.json`

`use <nom_db>` sélectionne la bdd voulue

`db.nom_collection.find()` affiche toute la collection

`db.nom_collection.find("role" : "rh")` sélectionne tous les personnes avec le role *rh*
