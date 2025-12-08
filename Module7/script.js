/*************************************************
 * EXERCICE 6 - Tableaux simples & foreach
 * Notions : tableaux simples, foreach, index,
 *           réutilisation des fonctions de prix
 *************************************************/

/* --- Correction Exercice 1 - Variables & infos de base --- */

const shopName = "Ma Boutique JS";
const city = "Lyon";
let isOpen = true;
let productCount = 3;
let slogan = "Des goodies pour développeurs passionnés !";

console.log("Bienvenue dans " + shopName + " située à " + city);
console.log("Slogan :", slogan);

if (isOpen) {
    console.log("La boutique est ouverte.");
} else {
    console.log("La boutique est fermée.");
}

const taglineElement = document.querySelector(".site-tagline");
if (taglineElement) {
    taglineElement.textContent = `Bienvenue dans ${shopName} à ${city} 👋`;
}

const yearSpan = document.getElementById("year");
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

/* --- Correction Exercice 2 - Strings & messages --- */

let welcomeMessage =
    "Bienvenue dans " + shopName + " située à " + city + " !";
let welcomeMessage2 = `Bienvenue dans ${shopName} à ${city} !`;

let sloganLength = slogan.length;
let sloganUppercase = slogan.toUpperCase();
let sloganModified = slogan.replace("goodies", "trésors");

console.log("welcomeMessage :", welcomeMessage);
console.log("welcomeMessage2 :", welcomeMessage2);
console.log("Longueur du slogan :", sloganLength);
console.log("Slogan en majuscules :", sloganUppercase);
console.log("Slogan modifié :", sloganModified);

const cartMessageElementEx2 = document.getElementById("cart-message");
if (cartMessageElementEx2) {
    cartMessageElementEx2.textContent =
        sloganModified + ` (${sloganLength} caractères dans le slogan original)`;
}

/* --- Correction Exercice 3 - Nombres & calculs --- */

let priceHTExample = 20;
const TVA = 0.2;

let priceTTCExample = priceHTExample + priceHTExample * TVA;

console.log("Prix HT d'exemple :", priceHTExample);
console.log("Prix TTC d'exemple :", priceTTCExample);

let salesCount = 0;
salesCount++;
console.log("Nombre de ventes après incrémentation :", salesCount);

/* --- Correction Exercice 4 - Fonctions de prix --- */

function calculatePriceTTC(priceHT) {
    return priceHT + priceHT * TVA;
}

function formatPrice(price) {
    return price.toFixed(2) + " €";
}

console.log("Test TTC :", formatPrice(calculatePriceTTC(10)));

/* --- Correction Exercice 5 - Produit vedette (DOM, sans objets) --- */

let featuredProductName = "T-shirt Code & Chill";
let featuredProductPriceHT = 19.99;
let featuredProductDescription = "Parfait pour coder confortablement.";
let featuredProductImage = "images/tshirt-code-chill.jpg";

const productList = document.getElementById("product-list");

function createFeaturedProductCard() {
    const article = document.createElement("article");
    article.classList.add("product-card");

    const img = document.createElement("img");
    img.src = featuredProductImage;
    img.alt = featuredProductName;

    const title = document.createElement("h3");
    title.textContent = featuredProductName;

    const priceElt = document.createElement("p");
    priceElt.textContent = formatPrice(calculatePriceTTC(featuredProductPriceHT));

    const desc = document.createElement("p");
    desc.textContent = featuredProductDescription;

    article.appendChild(img);
    article.appendChild(title);
    article.appendChild(priceElt);
    article.appendChild(desc);

    return article;
}

if (productList) {
    productList.innerHTML = "";
    productList.appendChild(createFeaturedProductCard());
}

/* --- Correction Exercice 6 --- */

// 1) Deux tableaux synchronisés
const productNames = ["T-shirt JS", "Mug Debug", "Sticker Bug Free"];
const productPricesHT = [19.99, 9.99, 2.5];

console.log("Nombre de produits :", productNames.length);

// 2) Fonction d'affichage console
function displayProductsInConsole() {
    productNames.forEach((name, index) => {
        const priceHT = productPricesHT[index];
        const priceTTC = calculatePriceTTC(priceHT);
        const formattedPrice = formatPrice(priceTTC);

        console.log(`${index + 1} - ${name} — ${formattedPrice} TTC`);
    });
}

displayProductsInConsole();

/* --- Nouveautés Exercice 7 --- */

// - Chaque produit doit au minimum contenir :
//     • un identifiant
//     • un nom
//     • un prix HT
//     • une description
//     • une image (URL)

function Product(id, name, priceHT, desc, img) {
    this.id = id;
    this.name = name;
    this.priceHT = priceHT;
    this.desc = desc;
    this.img = img;
}

// - Créer un tableau contenant plusieurs produits
//   (chaque produit regroupe ses informations dans une même structure)
//   (indice : utiliser une syntaxe qui permet de stocker plusieurs propriétés ensemble)

let shopProducts = [];
shopProducts.push(new Product(1, "plushie pigeon", 25, "Une plushie toute mimi", "https://i.etsystatic.com/60486309/r/il/9bffba/7289638960/il_fullxfull.7289638960_91nj.jpg"));
shopProducts.push(new Product(2, "t-shirt python noel", 35, "Un t shirt geek", "https://images.lespiaules.com/wp-content/uploads/2023/05/T-shirt-Geek-Moche-Nol-Code-Python-Crer-Son-T-Shirt-1.jpg"));
shopProducts.push(new Product(3, "mug geek", 15, "Un mug pas ouf ouf", "https://tshirt-culte.com/cdn/shop/products/mug-jpeux-pas-je-geek-noir-614516.jpg?v=1604617366&width=1406"));
shopProducts.push(new Product(4, "protection contre Ilyes", 5, "Sortez couvert !!!", "https://www.micromania.fr/on/demandware.static/-/Sites-Micromania-Library/default/dwca2c847d/fanzone/dossier/geek-chic-sneakers/geek-chic-sneakers-01.jpg"));

// - Récupérer la zone du DOM où tous les produits doivent être affichés
let shopProductsHolder = document.getElementById("product-list");

// - Adapter ou créer une fonction qui :
//     • reçoit un produit en paramètre
function createProductCard(shopProduct) {
    //     • crée un conteneur pour la carte
    const article = document.createElement("article");
    article.classList.add("product-card");

    //     • crée les éléments nécessaires (image, nom, prix TTC, description)
    let img = document.createElement("img");
    let title = document.createElement("h3");
    let priceElt = document.createElement("p");
    let desc = document.createElement("p");

    //     • utilise les propriétés du produit pour remplir ces éléments
    img.src = shopProduct.img;
    img.alt = shopProduct.name;
    title.textContent = shopProduct.name;
    desc.textContent = shopProduct.desc;

    //     • réutilise les fonctions de calcul et de formatage de prix
    priceElt.textContent = formatPrice(calculatePriceTTC(shopProduct.priceHT));

    article.appendChild(img);
    article.appendChild(title);
    article.appendChild(priceElt);
    article.appendChild(desc);

    //     • renvoie la carte complète
    return article;
}

// - Créer une fonction qui :
function displayProductsInPage() {
    //     • vide le contenu de la zone d’affichage des produits
    shopProductsHolder.innerHTML = "";

    //     • parcourt le tableau de produits
    //     • pour chaque produit :
    for (const shopProduct of shopProducts) {
        //         - crée une carte à partir de ce produit
        let productCard = createProductCard(shopProduct);

        //         - ajoute cette carte dans la zone d’affichage
        shopProductsHolder.appendChild(productCard);
    }
}

// - Appeler cette fonction pour afficher tous les produits dans la page
displayProductsInPage();

console.log("Exercice 7 chargé ✅");
