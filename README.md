

# MERN Book Portal

A full-stack web application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack that allows users to browse and access book information. The portal is designed with a focus on secure data management and user authentication.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [API Testing](#api-testing)
- [Contributing](#contributing)
- [License](#license)

## Features
- **Frontend**: Developed with React.js and Vite.js, ensuring fast and efficient user interface rendering.
- **Authentication**: Only authenticated users can access detailed book information, providing a secure browsing experience.
- **Backend**: Built using Express.js and Node.js, with MongoDB as the database for secure data storage and retrieval.
- **Styling**: Utilized modern CSS frameworks like Bootstrap, Daisy UI, and Tailwind CSS to create a responsive and aesthetically pleasing design.
- **API Testing**: Thorough testing of POST and GET requests using Postman to ensure reliable API interactions.

## Technologies Used
- **Frontend**:
  - HTML, CSS, Bootstrap, Daisy UI, Tailwind CSS
  - React.js
  - Vite.js

- **Backend**:
  - Node.js
  - Express.js
  - MongoDB

- **Tools**:
  - Postman (for API testing)

## Setup and Installation
1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/mern-book-portal.git
   cd mern-book-portal
   ```

2. **Install dependencies for both frontend and backend**:
   - For the backend:
     ```bash
     cd backend
     npm install
     ```
   - For the frontend:
     ```bash
     cd ../frontend
     npm install
     ```

3. **Configure environment variables**:
   - Create a `.env` file in the `backend` directory with the following:
     ```bash
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     ```

4. **Run the application**:
   - Backend:
     ```bash
     cd backend
     npm run dev
     ```
   - Frontend:
     ```bash
     cd ../frontend
     npm run dev
     ```

5. **Access the application**:
   - Open your browser and go to `http://localhost:3000`.

## Usage
- **Registration/Login**: Users need to register or log in to access book details.
- **Book Browsing**: Authenticated users can browse and view detailed information about available books.
- **API Access**: The application provides API endpoints for interacting with book data, secured with JWT authentication.

## API Testing
- All API endpoints have been tested using Postman to ensure they handle POST and GET requests correctly.
- Example test cases include user authentication, book retrieval, and secure access control.

.
