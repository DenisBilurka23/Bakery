export const getProducts = async () => {
    const response = await fetch('./data/products.json')
    if (!response.ok) {
        throw new Error('Request failed')
    }
    return await response.json()
}