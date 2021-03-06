<h1 align="center">Welcome to MERN Journal 👋</h1>
<p>
</p>

> A full stack MERN (MongoDB, Express, React, Node.js) application where users can sign-up, login, and share journal entries with others. Posts are recommended based on other journal entries with similar tags. JSON Web Tokens and Google OAuth are used for authentication.

### 🏠 [Homepage](https://recollects.netlify.app)

![](/uploads/recollects-screenshot.png?raw=true)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed the latest stable version of [node.js](https://nodejs.org/en/)
- You will need to create a MongoDB database. This project uses a Cloud Atlas cluster. Create one [here](https://www.mongodb.com/cloud/atlas)
- You will need a Client ID to use Google OAuth. Create a new project in the [Google Cloud Platform](https://console.developers.google.com/). Select the OAuth Consent Screen and create one. Go to the Credentials tab and select Create Credentials and select OAuth Client ID. Add Authorized JavaScript origins URIs and Authorized redirect URIs. You will receive a Client ID after completion.

## Features

- Page pagination
- Google sign In
- New user sign up
- Create and delete posts
- Add images to posts
- Like other user's posts
- Material UI and styled components
- Redux, Redux Thunk, React Router for navigation and dispatching API calls
- Express and Mongoose for server response and request
- Moment for post time tracking

## Install

Clone respository: `https://github.com/antonio-lopez/react-mern-journal.git`

```
cd server/
npm install
```

Create a `.env` file in the root `server` directory and create a variable `CONNECTION_URL=` and add your MongoDB database connection string.

```
cd client/
npm install
```

To use Google OAuth create a `.env` file in the root `client` directory and create a variable `REACT_APP_GOOGLE_ID=` and paste your Client ID.

## Usage

Open two seperate terminals

Terminal 1:

```
cd server/
npm start
```

Terminal 2:

```
cd client/
npm start
```

## Author

👤 **Antonio Lopez**

- Website: [Antonio Lopez](https://www.antoniolopez.me/)
- Github: [@antonio-lopez](https://github.com/antonio-lopez)
