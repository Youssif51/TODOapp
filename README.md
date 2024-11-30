# User Authentication and Profile Management API

## Description
This project is a **Node.js** application that provides an API for user authentication and profile management. It uses **PostgreSQL** as the database and implements features such as user login, token-based authentication using **JWT**, and fetching user profiles.

---

## Features
- **User Authentication**:
  - Login with email and password.
  - Password validation using **bcrypt**.
- **Token-based Authentication**:
  - Generate JWT tokens with a 1-day expiration time.
  - Middleware for verifying and decoding JWT tokens.
- **Profile Management**:
  - Fetch authenticated user's profile (username, email, etc.).

---

## Project Structure
```plaintext
.
├── controllers
│   ├── authController.js    # Handles login logic
│   └── profileController.js # Handles profile-related requests
├── middleware
│   └── verifyToken.js       # Middleware for verifying JWT tokens
├── models
│   └── User.js              # Database queries related to users
├── routes
│   ├── authRoutes.js        # Routes for authentication
│   └── profileRoutes.js     # Routes for user profile
├── app.js                   # Main application file
├── package.json             # Project dependencies and scripts
└── README.md                # Project documentation


## Endpoints

### 1. Authentication
**POST** `/login`  
**Description**: Authenticates the user and returns a JWT token.  

**Request Body**:
```json
{
  "email": "user@example.com",
  "password": "password123"
}
Response:

json
Copy code
{
  "token": "your_jwt_token"
}
2. Profile
GET /profile
Description: Returns the logged-in user's profile.

Headers:

makefile
Copy code
Authorization: Bearer your_jwt_token
Response:

json
Copy code
{
  "id": 1,
  "username": "john_doe",
  "email": "john.doe@example.com"
}
Technologies Used
Node.js: JavaScript runtime environment.
Express.js: Framework for building web APIs.
PostgreSQL: Database for storing user data.
JWT: For secure authentication.
bcrypt: For hashing passwords.
Prerequisites
Node.js (v16+)
PostgreSQL (v13+)
