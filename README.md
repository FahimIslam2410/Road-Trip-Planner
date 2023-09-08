### Final Project for Makers Academy

For our final project at Makers Academy, our team consisted of members like Denis, Usama, Liam, and me. We named our team "RoadJunkies." Our task was to transform an initial idea into a fully functional web app within a tight eight-day deadline. To kickstart our project, we began by brainstorming a variety of ideas for our web app, envisioning what users could do with it. We scribbled ideas on whiteboards, had discussions, and sketched out possible interactions, resulting in a comprehensive list of features we wanted to include.

The concept was clear: our Road Trip Planner would allow users to input their starting location, destination, and any waypoints in between. In return, the site would provide a list of attractions ordered by their proximity to the starting point. Users could then select attractions they wished to visit. Importantly, they could save their routes within their user accounts, making it convenient for future trips.

With this vision in mind, we set out to create our Minimum Viable Product (MVP). Users would begin by signing up, inputting their start and end locations, specifying waypoints, and then selecting their preferred attractions from the generated list. After submitting, the site would generate a list of selected attractions, enabling users to save the route and later view it on the "My Trips" page. Our goal was not just to build a great final project but also to ensure a smooth team process, understanding that both were equally important for a successful outcome and an enjoyable experience during these two weeks of hard work.

### Our MVP Diagram

![Untitled-2023-06-20-1012](https://github.com/FahimIslam2410/Road-Trip-Planner/assets/120402745/ae6b52ae-a424-44c5-9bb1-867b2b516ed9)


## Card wall
https://trello.com/b/jioMjcB9/road-trip-planner


## Quickstart

### Install Node.js

1. Install Node Version Manager (NVM)
   ```
   brew install nvm
   ```
   Then follow the instructions to update your `~/.bash_profile`.
2. Open a new terminal
3. Install the latest version of [Node.js](https://nodejs.org/en/), currently `18.1.0`.
   ```
   nvm install 18
   ```

### Set up your project

5. Install Node.js dependencies for both the `frontend` and `api` directories.
   ```
   ; cd api
   ; npm install
   ; cd ../frontend
   ; npm install
   ```

> You might get warning messages about the installed dependencies at this point. You can ignore them, as long as the installation process doesn't fail. If the setup fails at this point, don't wait for too long and reach out to your coach.

6. Install an ESLint plugin for your editor. For example: [`linter-eslint`](https://github.com/AtomLinter/linter-eslint) for Atom.
7. Install MongoDB
   ```
   brew tap mongodb/brew
   brew install mongodb-community@5.0
   ```
   *Note:* If you see a message that says `If you need to have mongodb-community@5.0 first in your PATH, run:`, follow the instruction. Restart your terminal after this.
8. Start MongoDB
   ```
   brew services start mongodb-community@5.0
   ```

### How to run the server and use the app (as a human)

1. Start the server application (in the `api` directory)

  **Note the use of an environment variable for the JWT secret**

   ```
   ; cd api
   ; JWT_SECRET=f6d278bb34e1d0e146a80b16ec254c05 npm start
   ```
2. Start the front end application (in the `frontend` directory)

  In a new terminal session...

  ```
  ; cd frontend
  ; npm start
  ```

You should now be able to open your browser and go to `http://localhost:3000/signup` to create a new user.

Then, after signing up, you should be able to log in by going to `http://localhost:3000/login`.

### How to run automated tests

The automated tests run by sending actual HTTP requests to the API. Therefore, before anything, you'll need to start the backend server in test mode (so that it connects to the test DB).

**Note the use of an environment variable for the JWT secret**

```bash
# Make sure you're in the api directory
; cd api

; JWT_SECRET=f6d278bb34e1d0e146a80b16ec254c05 npm run start:test
```

You should leave this running in a terminal.

Then, you can either run tests for the backend or the frontend following the steps below. 

#### Running tests for the backend

Run the tests in a new terminal session:

```bash
# Make sure you're in the api directory
; cd api

; JWT_SECRET=f6d278bb34e1d0e146a80b16ec254c05 npm run test
```

####  Running tests for the frontend

Start the front end in a new terminal session

```bash
# Make sure you're in the frontend directory
; cd frontend

; JWT_SECRET=f6d278bb34e1d0e146a80b16ec254c05 npm start
```

Then run the tests in a new terminal session

```bash
# Make sure you're in the frontend directory
; cd frontend

; JWT_SECRET=f6d278bb34e1d0e146a80b16ec254c05 npm run test
```







