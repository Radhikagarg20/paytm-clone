# Paytm Clone  

This is a Paytm clone project with separate setups for frontend and backend. Follow the steps below to set up and run the project.

---

# Project Folder Structure  

## Backend  
A server-side application structure that handles API requests, authentication, database interactions, and middleware logic.

📂 backend  
├── 📂 db  
│   └── db.js          # Database configuration and connections  
├── 📂 middlewares  
│   └── middleware.js  # Custom middlewares for API handling  
├── 📂 routes  
│   ├── account.js     # Account-related routes  
│   ├── index.js       # Root routing logic  
│   └── user.js        # User management routes  
├── config.js          # Environment-specific configurations  
├── index.js           # Entry point of the backend server  
├── package-lock.json  # NPM dependency lock file  
└── package.json       # Backend dependencies and scripts


## Frontend  
A responsive and dynamic user interface built using modern frontend technologies.

📂 frontend  
├── 📂 public  
│   └── vite.svg          # Static assets like icons and logos  
├── 📂 src  
│   ├── 📂 assets  
│   │   ├── bg-1.png      # Background image 1  
│   │   ├── bg-2.jpeg     # Background image 2  
│   │   └── bg-svg.svg    # SVG graphic asset  
│   ├── 📂 components  
│   │   ├── Avatar.jsx    # Avatar component  
│   │   ├── Balance.jsx   # Displays user balance  
│   │   ├── Header.jsx    # Header component  
│   │   ├── Modal.jsx     # Reusable modal component  
│   │   ├── Signin.jsx    # Sign-in form logic  
│   │   ├── Signup.jsx    # Sign-up form logic  
│   │   └── Users.jsx     # User listing component  
│   ├── 📂 pages  
│   │   ├── Dashboard.jsx # User dashboard  
│   │   ├── Landing.css   # Styling for landing page  
│   │   ├── Landing.jsx   # Landing page layout  
│   │   ├── SendMoney.jsx # Money transfer logic  
│   │   ├── SigninPage.jsx# Sign-in page container  
│   │   └── SignupPage.jsx# Sign-up page container  
│   ├── App.css           # Global styles  
│   ├── App.jsx           # Main React app component  
│   ├── index.css         # Root styles  
│   └── main.jsx          # Frontend entry point  
├── index.html            # Root HTML template  
├── package-lock.json     # NPM dependency lock file  
├── package.json          # Frontend dependencies and scripts  
├── postcss.config.js     # PostCSS configuration  
├── tailwind.config.js    # TailwindCSS configuration  
└── vite.config.js        # Vite build configuration   


## Root  
Contains high-level project configuration files and folders.

📂 Root  
├── 📂 backend            # Backend application  
├── 📂 frontend           # Frontend application  
├── Dockerfile            # Docker container setup  
└── README.md             # Project documentation 


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
