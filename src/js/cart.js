const cartDOM = document.querySelector(".cart");
const cartOverlay = document.querySelector(".cart-overlay");
const cartItems = document.querySelector(".cart-items");
const cartTotal = document.querySelector(".cart-total");
const cartContent = document.querySelector(".cart-content");
const productsDOM = document.querySelector(".items");
// cart
let cart = [];

// Gets the products
class Products {
    async getProducts() {
        try {
            let result = await fetch('products.json');
            let data = await result.json();
            let products = data.items;
            products = products.map(items => {
                const {title,price} = items.fields;
                const {id} = items.sys;
                const image = items.fields.image.fields.file.url;
                return {title,price,id,image}
            })
            return products;
        } catch (error) {
            console.log(error);
        }
    }
}
// Displays products
class UI {
    displayProducts(products) {
        let result = '';
        products.array.forEach(product => {
            result += `<div class="product-item">
            <img 
                class=product-img 
                src=${product.image}
            />
            <div class="product">
                <h1>${product.title}</h1>
                <h3>$${product.price}</h3>
                <div class="product-input">
                    <select>
                        <option value="small">s</option>
                        <option value="medium">m</option>
                        <option value="large">l</option>
                        <option value="extra-large">xl</option>
                    </select>
                    <button class="bag-btn" data-id=${product.id}>add to cart</button>
                </div>
                <p></p>
            </div>
        </div>
        `;
        });
        productsDOM.innerHTML = result;
    }
}

// Stores product locally 
class Storage{

}

document.addEventListener("DOMContentLoaded", ()=>{
    const ui = new UI();
    const products = new Products();

    // Get all products
    products.getProducts().then(products => ui.displayProducts(products));
});