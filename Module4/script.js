/* --- Correction Exercice 1 & 2 --- */

const shopName = "Ma Boutique JS";
const city = "Lyon";
let isOpen = true;
let productCount = 3;
let slogan = "Des goodies pour développeurs passionnés !";

const taglineElement = document.querySelector(".site-tagline");
if (taglineElement) {
    taglineElement.textContent = "Bienvenue dans " + shopName + " à " + city + " 👋";
}

const yearSpan = document.getElementById("year");
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

let welcomeMessage = "Bienvenue dans " + shopName + " située à " + city + " !";
let welcomeMessage2 = `Bienvenue dans ${shopName} à ${city} !`;
let sloganLength = slogan.length;
let sloganUppercase = slogan.toUpperCase();
let sloganModified = slogan.replace("goodies", "trésors");

/* --- Correction Exercice 3 --- */

// Prix d'exemple et TVA

let examplePriceHT = 20;
const TVA = 0.2;

let examplePriceTTC = examplePriceHT + (examplePriceHT * TVA);

console.log("Prix HT exemple :", examplePriceHT);
console.log("Prix TTC exemple :", examplePriceTTC);

// Compteur de ventes
let salesCount = 0;
salesCount++;
salesCount++;

console.log("Nombre de ventes :", salesCount);

/* --- Rendu visuel Exo 3 --- */

const cartTotalHeader = document.getElementById("cart-total");
const cartTotalAside = document.getElementById("cart-total-aside");

if (cartTotalHeader) cartTotalHeader.textContent = examplePriceTTC.toFixed(2) + " €";

if (cartTotalAside) cartTotalAside.textContent = examplePriceTTC.toFixed(2) + " €";

const cartMessageElement = document.getElementById("cart-message");
if (cartMessageElement) cartMessageElement.textContent = "Exemple de prix TTC affiché dans le panier (exercice 4).";

/* --- Nouveautés Exercice 4 --- */

// - Définir une fonction (calculatePriceTTC(priceHT)) qui :
//     • reçoit un prix HT en paramètre
//     • calcule le prix TTC (en réutilisant la formule de l’exercice 3)
//     • renvoie le prix TTC
function calculatePriceTTC(priceHT) {
    const TVA = 0.2;
    const priceTTC = priceHT + priceHT * TVA;
    return priceTTC;
}

// - Définir une autre fonction (formatPrice(price)) qui :
//     • reçoit un prix ( type :nombre)
//     • arrondit ce prix à 2 décimales
//     • ajoute le symbole de la monnaie
//     • renvoie le résultat sous forme de texte
//       (indice : il existe une méthode pour formater un nombre avec un certain nombre de décimales)
function formatPrice(price) {
    const roundedPrice = price.toFixed(2).replace(".", ",");
    return `${roundedPrice} €`
}

// - Tester ces fonctions :
//     • appeler la fonction de calcul du TTC avec différents prix HT
//     • passer le résultat dans la fonction de formatage
//     • afficher le résultat final dans la console
let shopItemPriceHT = 13;
let shopItemPriceTTC = calculatePriceTTC(shopItemPriceHT);
let shopItemPriceRounded = formatPrice(shopItemPriceTTC);

console.log("Prix formatté:", shopItemPriceRounded);

console.log("Exercice 4 chargé ✅");
