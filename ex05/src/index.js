let shoppingList = new Map ([
    [3, "Banana"],
    [5, "Pineapple"],
    [2, "Pear"],
    [10, "Carrot"],
    [1.5, "Apple"]
])
let arrKey =[]
for (let col of shoppingList.entries()) {
    console.log(`groceries: ${col[1]}`);
}
let arrValue = []
for (let col of shoppingList.entries()) {
    console.log(`amount: ${col[0]}`);
}

