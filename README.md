# 🍱 Jber Eats (React Shopping Cart SPA)  
A modern, interactive Single-Page Application (SPA) built with React 18, demonstrating global state management, complex data filtering, and external API integration.

## 🔗 Live Demo: Jber Eats on GitHub Pages  

This project represents a modern approach to frontend development. It moves away from traditional DOM manipulation and embraces React's declarative, component-based architecture. The core logic of the shopping cart is completely decoupled from the UI using the React Context API, ensuring scalable and clean state management.  

## ✨ Key Features  
### Global State Management (Context API): * Cart data and operations (add, decrease, remove, clear) are centralized within a CartProvider.

* Avoids prop-drilling by allowing any component (Body, Header, CartToggle) to access the cart state seamlessly.

### Advanced Multi-Criteria Filtering: * Text Search: Regex-validated search bar restricts input to alphabetic characters to filter products by name.

* Dynamic Checkboxes: Users can apply combinatorial filters based on Origin (e.g., Pork, Chicken) and Taste (e.g., Sweet, Salty, Sour, Spicy). The product grid updates in real-time as multiple filters are stacked.

### Smart Cart System with Partial Checkout: * Users can toggle specific items inside the cart using checkboxes.

* The total price is dynamically calculated only for the currently selected items, allowing for partial checkouts.

### Live Weather Integration (External API): * Integrates the weather.tsukumijima.net API to fetch real-time Japanese weather forecasts.

* Features dynamic <select> dropdowns for all Japanese prefectures/cities and available dates.

* Uses React useEffect to trigger asynchronous fetch requests whenever the user changes their location or date selection.

### Interactive UI/UX: * CSS animations (fadeIn, fadeOut) for the slide-out cart toggle.

* Hover-based conditional rendering and styling for product cards and cart items.

## 🧠 Architectural Highlights  

```text
src/
 ├── index.js          # App Entry Point & Provider Wrapping
 ├── CartContext.js    # Global State Manager (Business Logic)
 ├── Header.js         # Navigation & Async Weather Fetching
 ├── Body.js           # Filtering Logic & Product Grid
 └── Data.js           # Mock Product Data & Prefecture Constants
```

* Separation of Concerns: The UI components simply subscribe to the useCart hook. They do not handle the complex logic of checking if an item exists, modifying quantities, or calculating totals.

* mmutable State Updates: Cart updates are handled immutably by mapping and filtering previous states, adhering to React best practices to prevent unintended re-renders.

## 🛠️ Tech Stack  
* Core: React 18, React Hooks (useState, useEffect, useContext)

* Styling: Vanilla CSS3 (Flexbox, CSS Animations)

* API Communication: Native JavaScript Fetch API

* Deployment: gh-pages
