# 📚 The Book Nook

A lightweight, responsive e-commerce storefront built entirely with **Vanilla JavaScript**, **HTML5**, and **CSS3**. 

This project demonstrates core front-end development concepts including DOM manipulation, state management, and modern CSS layouts without the reliance on external frameworks or libraries.

## 📖 Table of Contents
- [Demo](#-demo)
- [Features](#-features)
- [Technologies Used](#-technologies-used)
- [Installation & Usage](#-installation--usage)
- [Project Structure](#-project-structure)
- [Future Roadmap](#-future-roadmap)

## 📷 Demo

<img width="1440" height="828" alt="image" src="https://github.com/user-attachments/assets/2cee616b-8ca5-420c-a22b-850dcbe1eb8a" />


## ✨ Features

### 🛒 Functional Shopping Cart
- **Dynamic State Management:** The cart logic tracks items in a JavaScript array.
- **Smart Adding:** Adding the same book multiple times increments the *quantity* rather than duplicating the entry.
- **Live Totals:** The cart count and total price update instantly upon user interaction.
- **Remove Items:** Users can delete items directly from the cart sidebar.

### 🎨 UI/UX Design
- **Responsive Grid:** Utilizes `CSS Grid` (`minmax`) to ensure the book list looks great on mobile, tablets, and desktops.
- **Slide-out Sidebar:** A smooth, CSS-transitioned sidebar for the shopping cart.
- **Interactive Elements:** Hover effects on cards and buttons, plus a darkening overlay when the cart is active.

### ⚡ Performance
- **Zero Dependencies:** No Bootstrap, jQuery, or React. Just pure, lightweight code.

## 🛠 Technologies Used

- **HTML5:** Semantic markup structure.
- **CSS3:**
    - **Flexbox:** For navigation and internal component alignment.
    - **CSS Grid:** For the responsive product catalog layout.
    - **Variables:** For consistent color theming.
- **JavaScript (ES6+):**
    - `map()`, `filter()`, `reduce()` for data handling.
    - Event Listeners for user interactions.
    - DOM API for dynamic content rendering.

1. **Clone the repository** (or download the ZIP):
   ```bash
   git clone [https://github.com/your-username/book-nook.git](https://github.com/your-username/book-nook.git)
