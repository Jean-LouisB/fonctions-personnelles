## Fonctions personnelles et usuelles
**Version 1.0.9**
    => ajout de la fonction d'affichage de l'heure depuis un décimal
# Date en français et en lettres

C'est la principale fonction : formatDate() :

Elle retourne un tableau avec :
- dateToString : donne date et l'heure en français sous la forme "**samedi 17 avril 2023 à 6h50**",
- dateToStringWithoutHour : idem dateToString mais sans l'heure ex "samedi 17 avril 2023",
- dayLetter le jour ex : "samedi",
- monthLetter le mois ex : "avril",
- hourToString l'heure ex : "10h45",
- normalDate : retourne la date telle qu'elle a été passée en paramètre. 

**Le paramètre passé doit respecter la norme anglo-saxone avec ou sans heure**

ex : mm-jj-aaaa ou mm-jj-aaaa hh:mm

**Sans paramètre, c'est la date actuelle qui est prise en compte**


# Heures-minutes décimale convertie en string de type '00h00'

heureDecToStr(decimale: number) => string

# Nombres premiers

la fonction isPrime(nombre) retourne true ou false selon si le nombre en paramètre est premier ou pas.

github : https://github.com/Jean-LouisB/personnal-function.git