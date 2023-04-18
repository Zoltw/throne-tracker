<p align="center">
   <a href="https://github.com/Zoltw/throne-tracker">
     <img alt="Throne Tracker" src="frontend/public/throne-tracker-logo.svg" width="220"/>
   </a>
</p>

 <h1 align="center">Throne Tracker</h1>
 <br/>

 ### Requirements:
 - [Node.js](https://nodejs.org/en/)

1. Make sure that you have `Node.js` installed.
2. Clone the repository
 ```bash
 git clone https://github.com/Zoltw/throne-tracker.git
 ```

 ## Setting up development environment of frontend
 1. Change working directory to `frontend`
 ```bash
 cd frontend
 ```
2. Install dependencies
 ```bash
 npm ci
 ```
3. Start development server
 ```bash
 npm run dev
 ```
4. Open `http://localhost:3000` in your browser

## Setting up development environment of mongodb

1. On working directory
  ```bash
  docker-compose up mongodb
  ```

## Setting up development environment of backend

 1. Change working directory to `backend`
 ```bash
 cd backend
 ```
2. Install dependencies
 ```bash
 npm ci
 ```
3. Start development server
 ```bash
 npm start
 ```
4. Server is running on port 8080 - `http://localhost:8080`


## You can also run the whole application with bash script

 ### Requirements:
 - [xterm](https://invisible-island.net/xterm/)

 
1. On working directory
  ```bash
  ./setupDev.sh
  ```

## Diagram

<p align="center">
  <img src="resources/throne-tracker-mongo-diagram.png" alt="Throne Tracker Diagram"/>
</p>