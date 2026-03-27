# Main Portfolio

This is a full-stack portfolio application containing a frontend built with React (Vite) and a backend API built with Node.js, Express, and MongoDB.

## Project Structure

The repository is organized into two main directories:

- `/portfolio` - The React frontend application.
- `/backend` - The Node.js and Express backend API.

## Getting Started

### Prerequisites
- Node.js installed
- MongoDB (local or Atlas)

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `backend` directory and add your environment variables (e.g., `PORT`, MongoDB connection string).
4. Start the server:
   ```bash
   node index.js
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd portfolio
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Vite development server:
   ```bash
   npm run dev
   ```

## Technologies Used

- **Frontend**: React, Vite
- **Backend**: Node.js, Express.js, Mongoose, dotenv, cors
