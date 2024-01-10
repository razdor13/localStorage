"use strict";
const BASKET_KEY = "basketItems";
const basketItems = JSON.parse(localStorage.getItem(BASKET_KEY) || "[]");
const counterEl = document.querySelector(".basket .counter");
counterEl.textContent = basketItems.length;
localStorage.setItem("basketItems", JSON.stringify(basketItems));
const allCommodities = [
    { id: "iqwueoiq", name: "laptop", price: 40000 },
    { id: "iqwueoiq", name: "Iphone", price: 40000 },
    { id: "iqwueoiq", name: "laptop", price: 40000 },
];

const listEl = document.querySelector(".commodities");
allCommodities.forEach(({ name, price, id }) => {
    const liEl = document.createElement("li");
    liEl.innerHTML = `<div>
    
    <span>Name:${name}</span><br>
    <span>Price:${price}</span><br>
    
    <button class='add-btn' data-id="${id}">Add to basket</button>
    </div>`;
    listEl.append(liEl);
});

listEl.addEventListener("click", (e) => {
    const { target } = e;
    if (target.classList.contains("add-btn")) {
        e.stopPropagation();
        const { id } = e.target.dataset;
        const selectedItems = allCommodities.find((c) => c.id === id);
        basketItems.push(selectedItems);
        localStorage.setItem(BASKET_KEY, JSON.stringify(basketItems));
        counterEl.textContent = basketItems.length;
    }
});
