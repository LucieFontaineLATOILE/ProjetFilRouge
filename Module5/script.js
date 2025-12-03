/*************************************************
 * EXERCICE 4 - Fonctions de prix
 * Notions : function, paramètres, return, toFixed
 *************************************************/

/* --- Correction Exercice 1, 2 & 3 --- */

const shopName = "Ma Boutique JS";
const city = "Lyon";
let isOpen = true;
let productCount = 3;
let slogan = "Des goodies pour développeurs passionnés !";

const taglineElement = document.querySelector(".site-tagline");
if (taglineElement) {
    taglineElement.textContent =
        "Bienvenue dans " + shopName + " à " + city + " 👋";
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

const TVA = 0.2;
let examplePriceHT = 20;
let examplePriceTTC = examplePriceHT + examplePriceHT * TVA;
let salesCount = 2;

/* --- Correction Exercice 4 --- */

// Fonction qui calcule un prix TTC à partir d'un prix HT
function calculatePriceTTC(priceHT) {
    return priceHT + priceHT * TVA;
}

// Fonction qui formate un prix en "xx,xx €"
function formatPrice(price) {
    return price.toFixed(2).replace(".", ",") + " €";
}

// Tests dans la console
console.log("Prix TTC pour 10€ HT :", formatPrice(calculatePriceTTC(10)));
console.log("Prix TTC pour 19,99€ HT :", formatPrice(calculatePriceTTC(19.99)));

/* --- Rendu visuel Exo 4 --- */

const cartMessageElement = document.getElementById("cart-message");
if (cartMessageElement) {
    cartMessageElement.textContent = "Les fonctions de calcul et de formatage des prix sont prêtes ✅";
}

/* --- Nouveauté Exercice 5 --- */


// - Créer des variables pour :
//   nom du produit (featuredProductName), prix HT (featuredProductPriceHT), description (featuredProductDescription), image (featuredProductImage)
let featuredProductName = "Pelluche Pigeon";
let featuredProductPriceHT = 19.99;
let featuredProductDescription = "Totalement aucun rapport avec le nom de la boutique promis.";
let featuredProductImage = "https://i.etsystatic.com/60486309/r/il/9bffba/7289638960/il_fullxfull.7289638960_91nj.jpg";

// - Récupérer la section HTML où afficher le produit
//   (indice : utilisez une méthode du DOM qui sélectionne un élément par son id)
let productList = document.getElementById("product-list");

// - Définir une fonction (createFeaturedProductCard()) qui :
function createFeaturedProductCard() {
    //     • crée un conteneur pour la carte  
    let cardContainer = document.createElement("article");
    cardContainer.classList.add("product-card");

    //     • crée une image :
    //         - lui donner la source de l'image
    let cardImage = document.createElement("img");
    cardImage.classList.add("product-image");
    cardImage.setAttribute("src", featuredProductImage);

    //     • crée un titre et lui mettre le nom du produit  
    //       (indice : une propriété permet d’écrire du texte dans un élément)
    let cardTitle = document.createElement("h3");
    cardTitle.classList.add("product-name");
    cardTitle.textContent = featuredProductName;

    //     • calcule le prix TTC en utilisant la fonction vue dans l’exercice précédent
    //       (indice : vous avez déjà une fonction qui fait un calcul à partir du prix HT)
    const featuredProductPriceTTC = calculatePriceTTC(featuredProductPriceHT);

    //     • formate ce prix TTC avec la fonction prévue pour ça
    const formattedPrice = formatPrice(featuredProductPriceTTC);

    //     • crée un paragraphe pour afficher le prix TTC
    let cardPrice = document.createElement("p");
    cardPrice.classList.add("product-price");
    cardPrice.textContent = formattedPrice;

    //     • crée un autre paragraphe pour la description
    let cardDescription = document.createElement("p");
    cardDescription.classList.add("product-desc");
    cardDescription.textContent = featuredProductDescription;

    //     • assemble tous les éléments dans le conteneur
    //       (indice : pensez à une méthode qui ajoute un enfant dans un élément)
    cardContainer.appendChild(cardImage);
    cardContainer.appendChild(cardTitle);
    cardContainer.appendChild(cardPrice);
    cardContainer.appendChild(cardDescription);

    //     • retourne ce conteneur
    return cardContainer;
}

// - Avant d’afficher la carte, vider ce qu’il y a déjà dans la section
//   (indice : il existe une propriété qui permet de supprimer tout le contenu HTML d’un élément)
productList.innerHTML = "";

// - Appeler la fonction pour créer la carte
let featuredCard = createFeaturedProductCard();

// - Ajouter le résultat dans la section prévue
//   (indice : même méthode que pour assembler les éléments dans la carte)
productList.appendChild(featuredCard);

console.log("Exercice 5 chargé ✅");
