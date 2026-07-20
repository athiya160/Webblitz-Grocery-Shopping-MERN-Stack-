# Webblitz Grocery Shopping

A full-stack grocery shopping and suggestion web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js).

## Project Structure
- **`Frontend/`**: Contains the React.js client application.
- **`Backend/`**: Contains the Node.js and Express backend API.

## Prerequisites
- [Node.js](https://nodejs.org/) installed
- [MongoDB](https://www.mongodb.com/) running locally (port 27017 by default) or accessible remotely.

## Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/athiya160/Webblitz-Grocery-Shopping-MERN-Stack-.git
   cd Webblitz-Grocery-Shopping-MERN-Stack-
   ```

2. **Backend Setup:**
   ```bash
   cd Backend
   npm install
   ```
   - *Note: Ensure your MongoDB connection URL is correctly set up (defaults to `mongodb://localhost:27017/Grocery` inside your DB config).*
   - Run the backend server:
     ```bash
     npm start
     ```
     *(The backend API will run on `http://localhost:8000`)*

3. **Frontend Setup:**
   ```bash
   # Open a new terminal window
   cd Frontend
   npm install
   ```
   - Start the React client app:
     ```bash
     npm start
     ```
     *(The frontend application will launch on `http://localhost:3000`)*

## Features
- Browse various grocery categories and products.
- Add items to the cart and proceed to checkout.
- Manage products and categories (Admin functionality).
- Order tracking and user reviews.
