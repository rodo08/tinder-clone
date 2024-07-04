# Tinder Clone

## Overview

This is a Tinder clone, a dating application designed to facilitate connections between users based on their interests and preferences. Users can register, build profiles, browse potential matches, and initiate conversations with mutually interested users.

## Features

- **Authentication**: Users can sign up or log in securely using their email and password.
- **Profile Creation**: Users can create detailed profiles including their first name, birthday, gender identity, gender interest, profile picture, and a short bio.
- **Matching**: Users can swipe through profiles of other users based on their gender interest and indicate interest by swiping right.
- **Chatting**: Once matched, users can engage in conversations with each other through a chat interface.
- **Dashboard**: Users have access to a dashboard where they can view potential matches and manage their conversations.
- **Logout**: Users can securely log out from their accounts.

## Technologies Used

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)
- **API Requests**: Axios

## Setup Instructions

1.  Clone the repository from GitHub.
2.  Navigate to the project directory.
3.  Install dependencies using `npm install`.
4.  Start the frontend server using `npm run dev`.
5.  Start the backend server (if provided) using appropriate commands.
6.  Access the application via the provided localhost or deployment URL.

## Project Structure

The project structure is organized into different components:

- **Components**: Contains reusable UI components like Nav, AuthModal, ChatContainer, etc.
- **Pages**: Contains different pages of the application such as Home, Dashboard, OnBoarding, etc.
- **API Calls**: Axios is used for making HTTP requests to the backend API endpoints for user authentication, profile management, matching, and chatting functionalities.
- **State Management**: Uses React's state and hooks (useState, useEffect) for managing component state and side effects.
- **Cookies**: Manages user session with react-cookie library to store and retrieve user authentication tokens and user IDs securely.
