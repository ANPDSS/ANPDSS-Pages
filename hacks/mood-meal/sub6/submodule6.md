---
layout: post
title: "Submodule 6"
description: "Smart Shopping List Generator"
permalink: /mood-meal/submodule_6/
parent: "cool"
team: "ANDPDSS"
microblog: True
submodule: 6
categories: [CSP, Submodule, mood-meal]
tags: [mood-meal, submodule, cool]
author: "ANPDSS"
date: 2025-11-20
footer:
  previous: /mood-meal/submodule_5/
  home: /mood-meal/
---
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Smart Shopping List</title>
<style>
    .container {
        max-width: 900px;
        margin: auto;
    }
    .card {
        background: white;
        padding: 20px;
        margin-bottom: 20px;
        border-radius: 12px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }
    .meal {
        border: 2px solid #ccc;
        border-radius: 10px;
        padding: 12px;
        cursor: pointer;
        display: flex;
        justify-content: space-between;
    }
    .meal.selected {
        border-color: #4f46e5;
        background: #eef2ff;
    }
    button {
        padding: 10px 15px;
        border-radius: 8px;
        border: none;
        cursor: pointer;
        font-weight: 600;
    }
    .btn-main {
        background: #4f46e5;
        color: white;
        width: 100%;
        margin-top: 15px;
    }
    .btn-action {
        background: #e0e0ff;
    }
    .category {
        margin-top: 10px;
        background: #f7f7f7;
        padding: 10px;
        border-radius: 8px;
    }
    .item {
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 8px;
        margin-top: 5px;
        display: flex;
        justify-content: space-between;
    }
    .checked {
        background: #eaffea;
        border-color: #98d898;
        text-decoration: line-through;
    }
.card, 
.card * {
    color: #333 !important; /* forces dark, readable text */
}

   
</style>
</head>
<body>

<div class="container">
    <div class="card" id="headerCard">
        <h1>🛒 Smart Shopping List</h1>
        <p>Plan meals • Auto-generate list • Sync pantry</p>
        <div><b>Pantry Items:</b> <span id="pantryCount">0</span></div>
    </div>

    <!-- Step 1: Select Meals -->
    <div class="card" id="step1">
        <h2>Select Meals</h2>
        <div id="mealContainer"></div>
        <button id="generateBtn" class="btn-main" disabled>Generate Shopping List</button>
    </div>

    <!-- Step 3: Shopping List -->
    <div id="step3" style="display:none;">
        <div class="card">
            <button onclick="goBack()">⬅ Back to Meals</button>
            <button onclick="exportList()" class="btn-action">📥 Export</button>
            <button onclick="shareList()" class="btn-action">📤 Share</button>
            <button onclick="syncPantry()" class="btn-main" style="width:auto;">🔄 Sync</button>
        </div>

        <div class="card">
            <h3>Add Custom Item</h3>
            <input id="customName" placeholder="Name">
            <input id="customQty" placeholder="Qty" type="number" style="width:70px;">
            <input id="customUnit" placeholder="Unit" style="width:70px;">
            <select id="customCat">
                <option>Produce</option>
                <option>Meat</option>
                <option>Dairy</option>
                <option>Grains</option>
                <option>Condiments</option>
                <option>Spices</option>
                <option>Other</option>
            </select>
            <button onclick="addCustom()">➕ Add</button>
        </div>

        <div class="card">
            <h2>Shopping List</h2>
            <div id="listContainer"></div>
        </div>
    </div>
</div>

<script>
// -------------------- DATA --------------------
let pantry = [
    { id: 1, name: "Chicken Breast", quantity: 2, unit: "lbs"},
    { id: 2, name: "Rice", quantity: 3, unit: "cups"},
    { id: 3, name: "Olive Oil", quantity: 0.5, unit: "cup"},
    { id: 4, name: "Garlic", quantity: 5, unit: "cloves"},
    { id: 5, name: "Tomatoes", quantity: 2, unit: "whole"}
];

let meals = [
    {
        id: 1, image:"🍗", name:"Chicken Stir Fry", servings:4,
        ingredients:[
            {name:"Chicken Breast", quantity:1.5, unit:"lbs", category:"Meat"},
            {name:"Soy Sauce", quantity:3, unit:"tbsp", category:"Condiments"},
            {name:"Bell Peppers", quantity:2, unit:"whole", category:"Produce"},
            {name:"Garlic", quantity:3, unit:"cloves", category:"Produce"},
            {name:"Rice", quantity:2, unit:"cups", category:"Grains"},
            {name:"Ginger", quantity:1, unit:"tbsp", category:"Produce"},
        ]
    },
    {
        id:2, image:"🍝", name:"Spaghetti Carbonara", servings:4,
        ingredients:[
            {name:"Spaghetti", quantity:1, unit:"lb", category:"Grains"},
            {name:"Bacon", quantity:8, unit:"strips", category:"Meat"},
            {name:"Eggs", quantity:4, unit:"whole", category:"Dairy"},
            {name:"Parmesan Cheese", quantity:1, unit:"cup", category:"Dairy"},
            {name:"Black Pepper", quantity:1, unit:"tsp", category:"Spices"},
        ]
    },
    {
        id:3, image:"🥗", name:"Greek Salad", servings:2,
        ingredients:[
            {name:"Tomatoes", quantity:3, unit:"whole", category:"Produce"},
            {name:"Cucumber", quantity:1, unit:"whole", category:"Produce"},
            {name:"Feta Cheese", quantity:1, unit:"cup", category:"Dairy"},
            {name:"Olive Oil", quantity:3, unit:"tbsp", category:"Condiments"},
            {name:"Olives", quantity:0.5, unit:"cup", category:"Produce"},
            {name:"Red Onion", quantity:0.5, unit:"whole", category:"Produce"},
        ]
    }
];

let selectedMeals = [];
let shoppingList = [];

document.getElementById("pantryCount").innerText = pantry.length;

// -------------------- STEP 1 RENDER --------------------
const mealContainer = document.getElementById("mealContainer");
meals.forEach(m => {
    let div = document.createElement("div");
    div.className = "meal";
    div.innerHTML = `<div>${m.image} <b>${m.name}</b><br>
    <small>${m.servings} servings • ${m.ingredients.length} ingredients</small></div>`;
    
    div.onclick = () => toggleMeal(m.id, div);
    mealContainer.appendChild(div);
});

function toggleMeal(id, elem) {
    if (selectedMeals.includes(id)) {
        selectedMeals = selectedMeals.filter(x => x !== id);
        elem.classList.remove("selected");
    } else {
        selectedMeals.push(id);
        elem.classList.add("selected");
    }
    document.getElementById("generateBtn").disabled = selectedMeals.length === 0;
}

// -------------------- GENERATE LIST --------------------
document.getElementById("generateBtn").onclick = () => {
    let all = [];

    selectedMeals.forEach(id => {
        let meal = meals.find(m => m.id === id);
        meal.ingredients.forEach(i => {
            all.push({...i, from: meal.name});
        });
    });

    // combine duplicates
    let grouped = {};
    all.forEach(i => {
        let key = i.name.toLowerCase();
        if (!grouped[key]) grouped[key] = {...i, quantityNeeded: i.quantity, fromMeals:[i.from], checked:false};
        else {
            grouped[key].quantityNeeded += i.quantity;
            grouped[key].fromMeals.push(i.from);
        }
    });

    let list = Object.values(grouped);

    // compare with pantry
    list.forEach(item => {
        let p = pantry.find(p => p.name.toLowerCase() === item.name.toLowerCase());
        if (p && p.unit === item.unit) {
            let needed = item.quantityNeeded - p.quantity;
            item.quantityNeeded = needed > 0 ? needed : 0;
        }
    });

    shoppingList = list.filter(i => i.quantityNeeded > 0);
    renderList();

    document.getElementById("step1").style.display = "none";
    document.getElementById("step3").style.display = "block";
};

// -------------------- RENDER LIST --------------------
function renderList() {
    const container = document.getElementById("listContainer");
    container.innerHTML = "";

    let categories = {};
    shoppingList.forEach(i => {
        if (!categories[i.category]) categories[i.category] = [];
        categories[i.category].push(i);
    });

    Object.entries(categories).forEach(([cat, items]) => {
        let catDiv = document.createElement("div");
        catDiv.className = "category";
        catDiv.innerHTML = `<b>${cat}</b>`;
        
        items.forEach(item => {
            let row = document.createElement("div");
            row.className = "item";
            if (item.checked) row.classList.add("checked");

            row.innerHTML = `
                <div>
                    <input type="checkbox" ${item.checked ? "checked" : ""} onchange="toggleCheck('${item.name}')">
                    <b>${item.name}</b><br>
                    <small>${item.quantityNeeded} ${item.unit} • From: ${[...new Set(item.fromMeals)].join(", ")}</small>
                </div>
                <button onclick="deleteItem('${item.name}')">🗑</button>
            `;
            catDiv.appendChild(row);
        });
        container.appendChild(catDiv);
    });
}

// -------------------- ITEM ACTIONS --------------------
function toggleCheck(name) {
    shoppingList = shoppingList.map(i =>
        i.name === name ? {...i, checked: !i.checked} : i
    );
    renderList();
}

function deleteItem(name) {
    shoppingList = shoppingList.filter(i => i.name !== name);
    renderList();
}

// -------------------- CUSTOM ITEM --------------------
function addCustom() {
    let name = customName.value;
    let qty = parseFloat(customQty.value);
    let unit = customUnit.value;
    let cat = customCat.value;

    if (!name || !qty) return;

    shoppingList.push({
        name, quantityNeeded: qty, unit, category: cat,
        checked:false, fromMeals:["Manual"]
    });
    renderList();

    customName.value = "";
    customQty.value = "";
    customUnit.value = "";
}

// -------------------- EXPORT --------------------
function exportList() {
    let text = "SHOPPING LIST\n\n";
    shoppingList.forEach(i => {
        text += `${i.checked ? "✓" : "☐"} ${i.name} - ${i.quantityNeeded} ${i.unit}\n`;
    });

    let blob = new Blob([text], {type:"text/plain"});
    let url = URL.createObjectURL(blob);
    let a = document.createElement("a");
    a.href = url;
    a.download = "shopping-list.txt";
    a.click();
}

// -------------------- SHARE --------------------
function shareList() {
    let text = shoppingList.map(i =>
        `${i.checked ? "✓":"☐"} ${i.name} - ${i.quantityNeeded} ${i.unit}`
    ).join("\n");

    navigator.clipboard.writeText(text);
    alert("Shopping list copied to clipboard!");
}

// -------------------- SYNC --------------------
function syncPantry() {
    let checked = shoppingList.filter(i => i.checked);

    checked.forEach(i => {
        let p = pantry.find(p => p.name === i.name);
        if (p) p.quantity += i.quantityNeeded;
        else pantry.push({...i});
    });

    alert("Pantry updated!");
    location.reload();
}

// -------------------- NAV --------------------
function goBack() {
    document.getElementById("step1").style.display = "block";
    document.getElementById("step3").style.display = "none";
}
</script>

</body>
</html>