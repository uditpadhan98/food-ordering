# MERN Food Ordering Website

## Description

This project is a full-stack web application for food ordering, built using the MERN (MongoDB, Express.js, React, Node.js) stack. It allows users to browse a menu, add items to their cart, and place orders. The application includes user authentication, order history, and a responsive user interface.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Contributing](#contributing)

## Features

- User authentication (signup, login, logout)
- Browse a menu with food items
- Add items to the shopping cart
- View and update the shopping cart
- Place orders and view order history
- Responsive design for optimal viewing on various devices

## Technologies Used

- **Frontend:**
  - React.js
  - Redux for state management
  - React Router for navigation
  - Axios for API requests
  - Bootstrap for styling

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB for database
  - Mongoose for object modeling
  - JWT for user authentication

## Installation

1. Clone the repository:

```bash
git clone [https://github.com/your-username/mern-food-ordering.git](https://github.com/uditpadhan98/food-ordering)
cd food-ordering
```

2. Install dependencies for both frontend and backend:

```bash
# Install frontend dependencies
npm install

# Install backend dependencies
cd backend
npm install
```

3. Configure environment variables:

Create a `.env` file in the `server` directory and add the following:

```env
PORT=5000
MONGO_URI=your-mongodb-connection-string
JWT_SECRET=your-secret-key
```

Replace `your-mongodb-connection-string` and `your-secret-key` with your MongoDB connection string and a secret key for JWT.

## Usage

1. Start the server:

```bash
cd backend
npm start
```

2. Start the frontend:

```bash
npm start
```

Visit `http://localhost:3000` in your browser to use the application.

## Screenshots

Include screenshots or GIFs showcasing the different features of your application.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.
