list = document.getElementById("product-list");

for (let i = 1; i <= 6; i++) {
    let holder = document.createElement("article");
    holder.classList.add("product-card");

    let link = document.createElement("a");
    link.setAttribute("href", "Module" + i + "/index.html");
    link.classList.add("product-title");
    link.textContent = "Module " + i;
    link.style.color = "white";

    let svp = document.createElement("p");
    svp.classList.add("product-price");
    svp.textContent = "(Click Me)";

    link.appendChild(svp);
    holder.appendChild(link);
    list.appendChild(holder);
}
