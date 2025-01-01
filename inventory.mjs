const inventoryArray = [];

export function addItem(item) {
    inventoryArray.push(item);
}

export function removeItem(item) {
    const index = inventoryArray.indexOf(item);

    if (index > -1) {
        inventoryArray.splice(index, 1);
    }
}

export function listItems() {
    console.log(inventoryArray);

    inventoryArray.forEach((value => {
        console.log(value);
    }));
}