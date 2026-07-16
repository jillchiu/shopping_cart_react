# 🛒 Shopping Cart (React)

## 🧪 Overview

This project is an archived React application developed during my early frontend learning journey (around 2022–2024).

Unlike my other Shopping Cart project built with PHP + MySQL, this version was intentionally implemented using React only, without any backend or database. The goal was to recreate the same shopping cart workflow entirely on the client side and strengthen my understanding of React state management.

Although it reflects my earlier coding style, I have chosen to keep it public because it documents my progression as a frontend developer and demonstrates how I approached the same business domain using different technologies.

## 🌐 Live Demo

🔗 Demo: https://jillchiu.github.io/shopping_cart_react/

📦 Source Code: https://github.com/jillchiu/shopping_cart_react

## 📷 Screenshots

![index](https://i.imgur.com/8P5Yejd.png)

## ✨ Features

### Product Browsing

* Browse available products
* Keyword search
* Multi-condition filtering
    * Product origin
    * Taste
* Responsive product grid

### Shopping Cart
* Add products to cart
* Increase / decrease quantity
* Remove products
* Select items for checkout
* Calculate total price
* Empty cart
* Simulated checkout flow

### Weather Widget

A weather widget is integrated into the header using a public Japanese Weather API.

Users can:

* Select prefecture
* Select city
* Switch forecast date
* Display weather condition
* Display minimum and maximum temperature

## 🛠 Tech Stack

* React 18
* Context API
* React Hooks
* Custom Hooks
* Fetch API
* JavaScript (ES6)
* CSS
* Create React App

## 📁 Project Structure

```text
src/
├── Header.jsx
├── Body.jsx
├── CartContext.jsx
├── Data.js
├── useFormInput.js
├── store.js
└── index.js
```

Main responsibilities:

* Header — Navigation and weather widget
* Body — Product listing, search, filters and shopping cart UI
* CartContext — Global cart state management using Context API
* Data — Product data and weather location dataset
* useFormInput — Custom Hook example
* store — Redux practice file created during React learning

## 🧩 State Management

Shopping cart data is managed entirely on the client using React Context.

The implementation includes:

* Global cart state
* Context Provider
* Custom hook (useCart)
* Quantity management
* Product selection
* Checkout simulation

No backend or database is required.

## 📚 Why There Are Two Shopping Cart Projects

This repository focuses on frontend state management.

I also created another Shopping Cart application using PHP + MySQL, which focuses on backend CRUD operations and database interaction.

Although both projects implement similar shopping cart functionality, they solve the problem from different perspectives.

| Project             | Primary Focus                                 |
| ------------------- | --------------------------------------------- |
| PHP Shopping Cart   | Backend, CRUD, Database                       |
| React Shopping Cart | Frontend, React State Management, Context API |

Together they demonstrate my ability to implement the same business requirements using different technologies.

## 🧠 Learning Outcomes

This project helped me become familiar with:

* React component composition
* Context API
* React Hooks
* Custom Hooks
* Conditional rendering
* State-driven UI
* Product filtering
* Working with external REST APIs

It also includes several experimental files created while learning React, such as Redux and reusable custom hooks.

## ⚠ Legacy Project

This repository represents an earlier stage of my React learning journey.

If I were rebuilding it today, I would make several architectural improvements, including:

* Migrating to TypeScript
* Using Vite instead of Create React App
* Splitting large components into smaller reusable components
* Separating UI from business logic
* Extracting filtering logic into reusable hooks
* Using React Router
* Improving folder organization
* Adopting CSS Modules or Tailwind CSS
* Optimizing derived state with useMemo

Rather than rewriting the project entirely, I keep it in its original form because it accurately reflects my growth over time.

## 🚀 Evolution

This project revisits an earlier shopping cart I originally built with PHP.

Instead of relying on PHP Session, this version manages application state entirely on the client using React Context API.

Building both versions helped me understand how the same business requirements can be implemented using different architectures.
