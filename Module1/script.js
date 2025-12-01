// - Créer une variable pour le nom de la boutique
const shopName = "Jessy Shop";

// - Créer une variable pour la ville
const city = "Lyon";

// - Créer une variable booléenne pour savoir si la boutique est ouverte
let isOpen = true;

// - Créer une variable pour le nombre de produits
let productCount = 0;

// - Créer une variable pour le slogan
const slogan = "La boutique de Jessy !";

// - Afficher un message de bienvenue dans la console
//   (indice : concaténer texte + variables)
// Message Of The Day
let motd = "Le Jessy Shop est maintenant ouvert !"
console.log("MOTD: " + motd);

// - Afficher le slogan dans la console
console.log(slogan)

// - Selon la variable qui indique si la boutique est ouverte :
//   - afficher dans la console un message “ouverte”
//   - ou un message “fermée”
//   (indice : utiliser une condition simple avec if / else)
if (isOpen) {
    console.log("La boutique est ouverte !!");
} else {
    console.log("La boutique est fermée !");
}
