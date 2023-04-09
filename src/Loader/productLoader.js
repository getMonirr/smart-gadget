export const productLoader = async() => {
    const res = await fetch('products.json')
    return await res.json()
}