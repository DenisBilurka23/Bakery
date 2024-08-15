const template = document.createElement('template');
template.innerHTML = `
    <style>
        .product {
            width: 480px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        img {
            width: 352px;
        }

        .product__image {
            height: 450px;
            display: flex;
            justify-content: center;
            align-items: center;
            background: var(--background-secondary);
        }

        span {
            display: block;
            font-size: 18px;
            margin: 1rem;
        }

        .product__description,
        .product__price {
            font-size: 16px;
            font-weight: 400;
            line-height: 24px;
        }

        .icon {
            width: 10px;
        }

        .product__info {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .product__info > div:first-child,
        .product__pack-size,
        .product__quantity {
            display: flex;
            align-items: center;
        }

        .product__quantity {
            margin: 0.5rem;
            background: var(--background-secondary);
            border-radius: 64px;
            width: 95px;
            justify-content: center;
            font-size: 18px;
            font-weight: 500;
            line-height: 24px;
            height: 40px;
        }

        .product__quantity button {
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            border: none;
            cursor: pointer;
            background: none;
        }

        .product__quantity span {
            margin: 0 0.5rem;
        }

        .product__info > div:first-child {
            margin: 0 -0.5rem;
        }

        .product__pack-size {
            cursor: pointer;
            margin: 0.5rem;
            font-size: 18px;
            font-weight: 500;
            line-height: 24px;
            height: 40px;
            border-radius: 64px;
            justify-content: center;
            display: flex;
            background: var(--background-secondary);
            width: 145px;
            position: relative;
        }

        .product__pack-size div {
            display: flex;
        }

        .product__pack-size-value {
            margin: 0 0.375rem;
        }

        .product__pack-size-dropdown {
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            max-height: 0;
            overflow: hidden;
            background: rgb(249, 239, 226);
            transition: max-height 0.3s ease;
            z-index: 10;
            border-radius: 0.5rem;
            flex-direction: column;
        }

        .product__pack-size-dropdown.open {
            max-height: 150px;
        }

        .product__pack-size-dropdown div {
            padding: 0.5rem;
            cursor: pointer;
            text-align: center;
        }

        .product__pack-size-dropdown div:hover {
            background: var(--background-secondary);
        }

        .product__add-to-cart {
            border: none;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            font-size: 18px;
            font-weight: 500;
            background: var(--background-secondary);
            cursor: pointer;
            color: var(--text);
        }

        button img {
            width: 15px;
        }

        .product__title {
            font-family: "Cormorant Garamond", serif;
            font-size: 24px;
            font-weight: 600;
            line-height: 28.8px;
            letter-spacing: -0.035em;
        }
        
        .product__price.mobile {
            display: none;
        }
        
        .product > div:last-child {
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
            
        @media (max-width: 992px) { 
            .product {
                width: 400px;
                height: 100%;
            }
            
            .product__image {
                height: auto;
            }
        }

        @media (max-width: 768px) {
            .product {
                width: 350px;
            }

            .product__image img {
                width: 90%;
            }

            .product__pack-size {
                font-size: 14px;
                width: 100px;
            }

            .product__pack-size span {
                font-size: 14px;
            }

            .product__quantity {
                font-size: 14px;
                width: 100px;
            }

            .product__quantity-value {
                font-size: 14px;
            }

        }

        @media (max-width: 576px) { 
            .product {
                width: 250px;
            }
            
            .product__price {
                display: none;
            }
            
            .product__price.mobile {
                display: inline;
                margin: 0;
                font-size: inherit;
            }
            
            .product__title {
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
            
            .product__pack-size, .product__quantity {
                width: 50%;
                margin: .5rem .125rem;
            }
            
            .product__info, .product__info > div:first-child {
                width: 100%;
                margin: 0;
            }
        } 
    </style>
    
    <div class="product">
        <div class="product__image">
            <img src="#" alt="product image" />
        </div> 
        <div>
            <div>
                <h2 class="product__title">
                    <slot></slot>
                    <span class="product__price mobile"></span>
                </h2>
                <div class="product__description"></div>
            </div>
            <div>
                <div class="product__info">
                    <div>
                        <div class="product__pack-size">
                            <div>Pack of <span class="product__pack-size-value"></span></div>
                            <img class="icon" src="../assets/images/arrow-down.svg" alt="arrow-down">
                            <div class="product__pack-size-dropdown">
                                <div data-value="6">Pack of 6</div>
                                <div data-value="12">Pack of 12</div>
                                <div data-value="24">Pack of 24</div>
                            </div>
                        </div>
                        <div class="product__quantity">
                            <button class="product__quantity-button--decrement">
                                <img class="icon" src="../assets/images/minus.svg" alt="minus">
                            </button>
                            <span class="product__quantity-value"></span>
                            <button class="product__quantity-button--increment">
                                <img class="icon" src="../assets/images/plus.svg" alt="plus">
                            </button>
                        </div>
                    </div>
                    <div class="product__price"></div>
                </div>
                <button class="product__add-to-cart">
                    <img class="icon" src="../assets/images/plus.svg" alt="plus">
                    <span>Add To Cart</span>
                </button>
            </div>
        </div>
    </div>
`;



class ProductItem extends HTMLElement {
    constructor() {
        super()
        const shadow = this.attachShadow({mode: 'open'})
        shadow.appendChild(template.content.cloneNode(true))

        this.quantity = 1;
        this.packSize = 6;
        this.incrementButton = this.shadowRoot.querySelector('.product__quantity-button--increment')
        this.decrementButton = this.shadowRoot.querySelector('.product__quantity-button--decrement')
        this.packSizeElement = this.shadowRoot.querySelector('.product__pack-size')
        this.dropdown = this.shadowRoot.querySelector('.product__pack-size-dropdown')
        this.selectableSizeItems = this.shadowRoot.querySelectorAll('.product__pack-size-dropdown div')
        this.addToCartButton = this.shadowRoot.querySelector('.product__add-to-cart')

        this.incrementQuantity = () => {
            this.quantity++
            this.renderQuantity()
        }

        this.decrementQuantity = () => {
            if (this.quantity > 1) {
                this.quantity--
                this.renderQuantity()
            }
        }

        this.toggleDropdown = () => {
            this.dropdown.classList.toggle('open')
        }

        this.selectPackSize = (event) => {
            if (event.target.dataset.value) {
                this.packSize = event.target.dataset.value
                this.renderPackSize()
            }
        }

        this.addToCard = () => {
            const cartItems = document.querySelector('.cart--items')
            cartItems.innerText = parseInt(cartItems.innerText, 10) + this.quantity
        }
    }

    renderQuantity() {
        this.shadowRoot.querySelector('.product__quantity-value').innerText = this.quantity
    }

    renderPackSize() {
        this.shadowRoot.querySelector('.product__pack-size-value').innerText = this.packSize
    }

    connectedCallback() {
        const slot = this.shadowRoot.querySelector('slot')
        const slotContent = slot.assignedNodes({flatten: true})

        const img = this.shadowRoot.querySelector('.product__image img')
        img.src = this.getAttribute('image')
        img.alt = slotContent[0].textContent

        const descriptionElement = this.shadowRoot.querySelector('.product__description')
        descriptionElement.textContent = this.getAttribute('description')

        const priceElements = this.shadowRoot.querySelectorAll('.product__price')
        priceElements.forEach(element => element.textContent = `$${this.getAttribute('price')}`)

        this.renderQuantity()
        this.renderPackSize()

        this.incrementButton.addEventListener('click', this.incrementQuantity)
        this.decrementButton.addEventListener('click', this.decrementQuantity)
        this.packSizeElement.addEventListener('click', this.toggleDropdown)
        this.selectableSizeItems.forEach(item => item.addEventListener('click', this.selectPackSize))
        this.addToCartButton.addEventListener('click', this.addToCard)
    }

    disconnectedCallback() {
        this.incrementButton.removeEventListener('click', this.incrementQuantity)
        this.decrementButton.removeEventListener('click', this.decrementQuantity)
        this.packSizeElement.removeEventListener('click', this.toggleDropdown)
        this.selectableSizeItems.forEach(item => item.removeEventListener('click', this.selectPackSize))
        this.addToCartButton.removeEventListener('click', this.addToCard)
    }
}

customElements.define('product-item', ProductItem)

