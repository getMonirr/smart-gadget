export const addToDB = (id) => {
    const shoppingCart = JSON.parse(localStorage.getItem('shopping-g-cart')) || {};

    const quantity = shoppingCart[id];
    if (quantity) {
        shoppingCart[id] = quantity + 1;
    } else {
        shoppingCart[id] = 1;
    }

    localStorage.setItem('shopping-g-cart', JSON.stringify(shoppingCart));

}

// get product data
export const getStoredCart = () => {
    const storedCart = JSON.parse(localStorage.getItem('shopping-g-cart')) || {};
    return storedCart;
}

// remove item by id from local storage

export const removeProduct = (id) => {
    const storedCart = getStoredCart();
    if (id in storedCart) {
        delete storedCart[id];
        localStorage.setItem('shopping-g-cart', JSON.stringify(storedCart));
    }
}