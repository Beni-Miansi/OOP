class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

// ------------------------------------------------------------------------------------


class ShoppingCartItem {
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }

    // Méthode pour calculer le prix total de l'article
    getTotalPrice() {
        return this.product.price * this.quantity;
    }
}


// -------------------------------------------------------------------------------------


class ShoppingCart {
    constructor() {
        this.items = [];
    }

    // Méthode pour obtenir le total des articles dans le panier
    getTotalItems() {
        return this.items.length;
    }

    // Méthode pour ajouter des articles au panier
    addItem(product, quantity) {
        // Vérifier si le produit existe déjà dans le panier
        const existingItem = this.items.find(item => item.product.id === product.id);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push(new ShoppingCartItem(product, quantity));
        }
    }

    // Méthode pour supprimer un élément du panier
    removeItem(productId) {
        this.items = this.items.filter(item => item.product.id !== productId);
    }

    // Méthode pour afficher les articles du panier
    displayItems() {
        this.items.forEach(item => {
            console.log(`Product: ${item.product.name}, Quantity: ${item.quantity}, Total Price: ${item.getTotalPrice()}`);
        });
    }
}


// -------------------------------------------------------------------------------------------------


// Créer des produits
const product1 = new Product(1, 'Apple', 1.5);
const product2 = new Product(2, 'Banana', 1.0);
const product3 = new Product(3, 'Orange', 2.0);

// Créer un panier d'achat
const cart = new ShoppingCart();

// Ajouter des articles au panier
cart.addItem(product1, 3);
cart.addItem(product2, 2);
cart.addItem(product3, 5);
cart.addItem(product1, 2); // Ajouter plus de pommes

// Afficher les articles du panier
console.log("Panier après ajout d'articles:");
cart.displayItems();

// Supprimer un article du panier
cart.removeItem(2); // Supprimer les bananes

// Afficher les articles du panier après suppression
console.log("\nPanier après suppression d'articles:");
cart.displayItems();



