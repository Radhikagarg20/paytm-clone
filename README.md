# Paytm Clone  

This is a Paytm clone project with separate setups for frontend and backend. Follow the steps below to set up and run the project.

---


# Project Folder Structure

# Project Folder Structure

> backend  
  - db/  
    - db.js  
  - middlewares/  
    - middleware.js  
  - routes/  
    - account.js  
    - index.js  
    - user.js  
  - config.js  
  - index.js  
  - package-lock.json  
  - package.json  

> frontend  
  - public/  
    - vite.svg  
  - src/  
    - assets/  
      - bg-1.png  
      - bg-2.jpeg  
      - bg-svg.svg  
    - components/  
      - Avatar.jsx  
      - Balance.jsx  
      - Header.jsx  
      - Modal.jsx  
      - Signin.jsx  
      - Signup.jsx  
      - Users.jsx  
    - pages/  
      - Dashboard.jsx  
      - Landing.css  
      - Landing.jsx  
      - SendMoney.jsx  
      - SigninPage.jsx  
      - SignupPage.jsx  
    - App.css  
    - App.jsx  
    - index.css  
    - main.jsx  
  - index.html  
  - package-lock.json  
  - package.json  
  - postcss.config.js  
  - tailwind.config.js  
  - vite.config.js  

> Root  
  - backend/  
  - frontend/  
  - Dockerfile  
  - README.md  



## Frontend Setup  

1. Clone the repository:  
     ```bash
     git clone https://github.com/Radhikagarg20/paytm-clone.git
     cd paytm-clone

2. Install backend dependencies:  
    cd backend
    npm install

3. Return to the root directory and set up the frontend:
    cd ..
    cd frontend
    npm install

4. Start the frontend development server:
    npm run dev

5. Open the application in your browser:
    URL: http://localhost:5173


## Backend Setup
Open a new command prompt.

1. Navigate to the backend directory:
    cd paytm-clone\backend

2. Start the backend server using Nodemon:
    nodemon index.js

3. Open the backend API or verify it is running:
    URL: http://localhost:3000
