import { getStoredCart } from "../utilities/realDB";

export const productLoader = async () => {
    const res = await fetch('products.json')
    return await res.json()
}

export const cartAndProductLoader = async () => {
    const res = await fetch('products.json');
    const products = await res.json();

    const storedCart = getStoredCart();
    const newCart = [];

    for (const id in storedCart) {
        const exist = products.find((pd) => pd.id === id);
        if (exist) {
            exist.quantity = storedCart[id];
            newCart.push(exist);
        }
    }
    return { newCart, products };

}