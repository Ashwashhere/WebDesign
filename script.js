// 1. Data: Array of Book Objects
const books = [
    {
        id: 1,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        price: 10.99,
        image: "https://via.placeholder.com/250x300?text=Great+Gatsby"
    },
    {
        id: 2,
        title: "1984",
        author: "George Orwell",
        price: 8.99,
        image: "https://via.placeholder.com/250x300?text=1984"
    },
    {
        id: 3,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        price: 12.50,
        image: "https://via.placeholder.com/250x300?text=Mockingbird"
    },
    {
        id: 4,
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        price: 14.99,
        image: "https://via.placeholder.com/250x300?text=The+Hobbit"
    },
    {
        id: 5,
        title: "Harry Potter",
        author: "J.K. Rowling",
        price: 19.99,
        image: "https://via.placeholder.com/250x300?text=Harry+Potter"
    },
    {
        id: 6,
        title: "Pride and Prejudice",
        author: "Jane Austen",
        price: 9.99,
        image: "https://via.placeholder.com/250x300?text=Pride+Prejudice"
    }
];

// Cart State
let cart = [];

// 2. Render Books to the DOM
const bookList = document.getElementById('book-list');

function renderBooks() {
    bookList.innerHTML = books.map(book => `
        <div class="book-card">
            <img src="${book.image}" alt="${book.title}" class="book-image">
            <div class="book-info">
                <h3>${book.title}</h3>
                <p>by ${book.author}</p>
                <div class="book-price">$${book.price.toFixed(2)}</div>
            </div>
            <button class="add-btn" onclick="addToCart(${book.id})">Add to Cart</button>
        </div>
    `).join('');
}

// 3. Cart Functions
function addToCart(bookId) {
    const book = books.find(b => b.id === bookId);
    const existingItem = cart.find(item => item.id === bookId);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...book, quantity: 1 });
    }

    updateCartUI();
    openCart(); // Optional: Automatically open cart when adding
}

function removeFromCart(bookId) {
    cart = cart.filter(item => item.id !== bookId);
    updateCartUI();
}

function updateCartUI() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const cartTotal = document.getElementById('cart-total');

    // Update Cart Count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.innerText = totalItems;

    // Update Total Price
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.innerText = totalPrice.toFixed(2);

    // Update Cart HTML
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-msg">Your cart is empty.</p>';
    } else {
        cartItemsContainer.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div>
                    <h4>${item.title}</h4>
                    <p>$${item.price.toFixed(2)} x ${item.quantity}</p>
                </div>
                <button class="remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
            </div>
        `).join('');
    }
}

// 4. Toggle Cart Sidebar
function toggleCart() {
    const sidebar = document.getElementById('cart-sidebar');
    const overlay = document.getElementById('overlay');
    
    sidebar.classList.toggle('open');
    overlay.classList.toggle('active');
}

function openCart() {
    const sidebar = document.getElementById('cart-sidebar');
    const overlay = document.getElementById('overlay');
    sidebar.classList.add('open');
    overlay.classList.add('active');
}

function checkout() {
    if (cart.length > 0) {
        alert(`Thank you for your purchase! Total: $${document.getElementById('cart-total').innerText}`);
        cart = [];
        updateCartUI();
        toggleCart();
    } else {
        alert("Your cart is empty!");
    }
}

// Initialize
renderBooks();