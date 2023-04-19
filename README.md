<p align="center">
   <a href="https://github.com/Zoltw/throne-tracker">
     <img alt="Throne Tracker" src="frontend/public/throne-tracker-logo.svg" width="220"/>
   </a>
</p>

 <h1 align="center">Throne Tracker</h1>
 <br/>

  ## Setting up development environment of project

 ### Requirements:
 - [Docker](https://www.docker.com/)
 - [Node.js](https://nodejs.org/en/)

1. Make sure that you have `Node.js` and `Docker` installed.
2. Clone the repository
 ```bash
 git clone https://github.com/Zoltw/throne-tracker.git
 ```
3. Go to `frontend` directory
 ```bash
 cd frontend
 ```
 4. Copy .env.example to .env
 ```bash
  cp .env.example .env
  ```
 5. Provide your google maps Api key and backend URL in .env file
 ```bash
 VITE_GOOGLE_MAPS_API_KEY= 
 VITE_APP_BACKEND_URL=
 ```
 6. Back to root directory
 ```bash
  cd ..
  ```
 7. On working directory
  ```bash
  docker-compose up
  ```
 8. Server is running on port 3000 - `http://localhost:3000`

## Diagram

<p align="center">
  <img src="resources/throne-tracker-mongo-diagram.png" alt="Throne Tracker Diagram"/>
</p>