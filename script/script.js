import { getProducts } from './api/products.js';

async function loadProducts() {
    try {
        const products = await getProducts();
        const productContainer = document.querySelector('.products')
        products.forEach(product => {
            const productElement = document.createElement('product-item')
            productElement.setAttribute('image', product.image)
            productElement.setAttribute('description', product.description)
            productElement.setAttribute('price', product.price)
            productElement.innerHTML = product.name
            productContainer.appendChild(productElement)
        })
    } catch (error) {
        console.error('Error fetching products:', error)
    }
}

document.addEventListener('DOMContentLoaded', loadProducts)
