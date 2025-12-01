// - Créer une variable contenant un prix HT d’exemple
let prixHT = 20;

// - Créer une variable contenant le taux de TVA
//   (par exemple 0.2 pour 20%)
const TVA = 0.2;

// - Calculer le prix TTC à partir du prix HT et de la TVA
//   (indice : utiliser une addition et une multiplication)
let prixTTC = prixHT + prixHT * TVA;

// - Afficher le prix HT et le prix TTC dans la console
console.log(prixHT);
console.log(prixTTC);

// - Créer une variable pour compter le nombre de ventes
//   (commencer à 0)
let salesCount = 0;

// - Simuler une nouvelle vente en augmentant ce compteur;
//   (indice : utiliser l’opérateur pour ajouter 1)
salesCount++;

// - Afficher la nouvelle valeur du compteur dans la console
console.log(salesCount);
