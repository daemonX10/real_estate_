
# MERN State Management Project

This repository contains a MERN stack project demonstrating effective state management using React and Redux for the client-side and Express.js and MongoDB for the server-side.

## Table of Contents
1. [Features](#features)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Contributing](#contributing)
5. [License](#license)

## Features
- **Client-Side:**
  - **React and Redux:** Manage complex state with Redux for predictable state management.
  - **User Authentication:** Secure login and registration using JWT (JSON Web Tokens).
  - **State Persistence:** Maintain state across sessions using local storage.
  - **CRUD Operations:** Create, read, update, and delete resources seamlessly.

- **Server-Side:**
  - **Express.js:** RESTful API to handle client requests and perform database operations.
  - **MongoDB:** NoSQL database for storing user information and application data.
  - **JWT Authentication:** Secure API endpoints with token-based authentication.
  - **Data Validation:** Ensure data integrity and validation using Mongoose schemas.

## Installation
To install and run the project locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/daemonX10/mern_state.git
    cd mern_state
    ```

2. Install server dependencies:
    ```bash
    cd server
    npm install
    ```

3. Install client dependencies:
    ```bash
    cd ../client
    npm install
    ```

4. Create a `.env` file in the server directory and add your MongoDB URI and any other necessary environment variables.

## Usage
To start the development server, run:
```bash
# Start server
cd server
npm start

# Start client
cd ../client
npm start
```
Open your browser and navigate to `http://localhost:3000` to view the application.

## Contributing
Contributions are welcome! If you have any suggestions, bug reports, or improvements, please open an issue or submit a pull request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

