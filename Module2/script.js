// - Partir du slogan déjà créé à l’exercice 1
const shopName = "Jessy Shop";
const slogan = "La boutique de Jessy !";

// - Créer un premier message de bienvenue en collant du texte et des variables
//   (indice : utiliser l’opérateur pour concaténer des chaînes)
const welcomeMessage1 = "Bienvenue au " + shopName + "\n" + slogan;

// - Créer un deuxième message de bienvenue en utilisant une autre syntaxe
//   qui permet d’injecter des variables dans une chaîne
//   (indice : pensez au gabarit de chaîne avec ${...})
const welcomeMessage2 = `Bienvenue au ${shopName}\n${slogan}`;

// - Calculer la longueur du slogan
const sloganLength = slogan.length;

// - Créer une version en majuscules du slogan
const sloganInUpper = slogan.toUpperCase();

// - Créer une version du slogan où un mot est remplacé par un autre
//   (indice : il existe une méthode pour remplacer une partie d’un texte)
const modifiedSlogan = slogan.replace("boutique", "brocante");

// - Afficher les deux messages, la longueur, la version majuscule
//   et la version modifiée dans la console
console.log("welcomeMessage1:", welcomeMessage1);
console.log("welcomeMessage2:", welcomeMessage2);
console.log("sloganLength:", sloganLength);
console.log("sloganInUpper:", sloganInUpper);
console.log("modifiedSlogan:", modifiedSlogan);
