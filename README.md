# 🛒 Webblitz Grocery Shopping — MERN Stack

A full-stack grocery shopping web application built using the **MERN stack** (MongoDB, Express.js, React.js, and Node.js).

The platform provides an online grocery shopping experience where users can browse products, manage their cart, place orders, track purchases, and submit product reviews. It also includes administrative functionality for managing products and grocery categories.

## 🎯 Project Overview

Webblitz Grocery Shopping is designed to provide a complete online grocery shopping experience.

The application includes separate frontend and backend components, with the React frontend communicating with a Node.js and Express REST API connected to MongoDB.

### 👤 User Experience

Users can:

- Browse grocery products
- Explore products by category
- Add products to the shopping cart
- Proceed through checkout
- Track orders
- Submit product reviews

### 🛠️ Admin Functionality

Administrators can:

- Manage grocery products
- Manage product categories
- Manage inventory
- Manage orders

## 🏗️ Application Architecture

```text
React.js Frontend
       │
       │ REST API
       ▼
Node.js + Express.js Backend
       │
       ▼
MongoDB Database
```

The frontend handles the user interface and shopping experience, while the Node.js/Express backend provides the application APIs and communicates with MongoDB.

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| React.js | Frontend user interface |
| Node.js | Backend runtime |
| Express.js | REST API and backend services |
| MongoDB | Database |
| JavaScript | Application development |

## 📂 Project Structure

```text
Webblitz-Grocery-Shopping-MERN-Stack/
│
├── Frontend/
│   └── React.js client application
│
├── Backend/
│   └── Node.js + Express.js backend API
│
└── README.md
```

## 🚀 Installation & Setup

### Prerequisites

Make sure the following are installed:

- Node.js
- npm
- MongoDB

MongoDB can be run locally on the default port `27017` or connected through a remote MongoDB instance.

---

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/athiya160/Webblitz-Grocery-Shopping-MERN-Stack-.git

cd Webblitz-Grocery-Shopping-MERN-Stack-
```

---

### 2️⃣ Backend Setup

Navigate to the backend:

```bash
cd Backend
```

Install dependencies:

```bash
npm install
```

Configure your MongoDB connection according to your backend configuration.

The default local MongoDB connection is:

```text
mongodb://localhost:27017/Grocery
```

Start the backend:

```bash
npm start
```

The backend API runs on:

```text
http://localhost:8000
```

---

### 3️⃣ Frontend Setup

Open a new terminal window and navigate to the frontend:

```bash
cd Frontend
```

Install dependencies:

```bash
npm install
```

Start the React application:

```bash
npm start
```

The frontend application runs on:

```text
http://localhost:3000
```

## ✨ Features

### 🛍️ Shopping

- Browse grocery products
- Browse products by category
- View product information
- Add products to cart
- Checkout workflow

### 👤 User Features

- User account functionality
- Order tracking
- Product reviews

### 🛠️ Admin Features

- Product management
- Category management
- Inventory management
- Order management
