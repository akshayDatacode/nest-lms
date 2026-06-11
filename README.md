# NestJS LMS Platform

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

This project is a **Learning Management System (LMS)** built with [NestJS](https://nestjs.com/). It includes an **authentication system** with **Role-Based Access Control (RBAC)** and **JWT-based authentication**. The platform allows users to register, log in, and perform actions based on their roles.

---

## Features

- **Authentication System**:
  - User registration and login.
  - Password hashing using `bcrypt`.
  - JWT-based authentication for secure access.
  
- **Role-Based Access Control (RBAC)**:
  - Role-based permissions using custom `@Roles` decorator.
  - Guards to restrict access to specific routes based on roles.

- **Course Management**:
  - CRUD operations for courses.
  - Role-based access to course creation, updates, and deletion.

- **MongoDB Integration**:
  - MongoDB Atlas or local MongoDB database support.
  - Mongoose for schema modeling and database operations.

---

## Technologies Used

- **NestJS**: A progressive Node.js framework for building efficient and scalable server-side applications.
- **MongoDB**: NoSQL database for storing user and course data.
- **Mongoose**: ODM for MongoDB.
- **JWT**: JSON Web Tokens for authentication.
- **bcrypt**: For password hashing.
- **TypeScript**: Type-safe development.

---

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd nestjs-lms
