# ToDo Application API

## Description
This project is a **Node.js** application that provides an API for managing tasks (ToDo items). It allows users to register, log in, and manage their tasks (CRUD operations). The application uses **PostgreSQL** as the database, **JWT** for authentication, and **Express.js** as the web framework.

---

## Features
- **User Authentication**:
  - Registration and login with email and password.
  - Token-based authentication using **JWT**.
- **Task Management**:
  - Create, Read, Update, and Delete (CRUD) tasks.
  - Fetch tasks specific to the logged-in user.

---

## Project Structure
```plaintext
.
├── controllers
│   ├── authController.js    # Handles user authentication (login, register)
│   └── taskController.js    # Handles task-related logic (CRUD operations)
├── middleware
│   └── verifyToken.js       # Middleware for verifying JWT tokens
├── models
│   └── Task.js              # Database queries related to tasks
│   └── User.js              # Database queries related to users
├── routes
│   ├── authRoutes.js        # Routes for authentication
│   └── taskRoutes.js        # Routes for task management
├── app.js                   # Main application file
├── package.json             # Project dependencies and scripts
└── README.md                # Project documentation
