# dImdb

![dImdb Logo](./client/public/vite.svg)

dImdb is a movie database application inspired by IMDb, allowing users to browse through a collection of movies, view details, and enjoy an immersive movie experience.

## Features

- **Browse Movies**: Explore a vast collection of movies with detailed information.
- **Movie Details**: View detailed information about each movie, including descriptions, ratings, and images.
- **Responsive Design**: Enjoy a seamless experience across various devices, including desktops, tablets, and smartphones.
- **Sleek Interface**: Engage with an intuitive and visually appealing user interface.

## Technologies Used

- **Frontend**: React.js
- **Backend**: Node.js (Express.js)
- **Database**: MongoDB
- **Styling**: CSS 

## Getting Started

### Prerequisites

- Node.js and npm installed on your local machine
- MongoDB installed and running locally

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/DhirajsGithub/dImdb.git
   cd dImdb
   ```
2. make the .env file in the backend folder and add the following:

   ```bash
   MONGODB_URI=mongodb://localhost:27017/dImdb
   ```
3. start the server:

   ```bash
   cd backend
   npm install
   node server.js
   ```
4. server will start on http://localhost:3000

5. open the client folder and change the base url in the client/src/util/baseUrl.js file to the server url:

   ```javascript
   const baseURL = 'http://localhost:3000';
   ```
6. start the client:

   ```bash
   cd client
   npm install
   npm run dev
   ```
7. client will start on http://localhost:5173/

