# Pet-adoption


# Overview 
The Pet-adoption app is a web application designed to facilitate the process of adopting pets. It aims to connect adopters with available pets. 

Frontend technologies: Frontend is built using React, a popular JS library for building user interfaces. It leverages HTML,CSS and javascript to create a responsive and interactive user interface. Styling is done mostly by Bootstrap a CSS/JS frame work. The app uses axios to fetch additional information about pets, such as images, species age and names. 


Backend technologies: The backend is power by Node.js and Express. Providing server side framework for handling requests and providing data. The data is stored in MongoDB database and is responsible for storing pet information and user accounts. Mongoose is used to provide a schema-based solution to model your application data. User authentication is implemented using technologies such as JSON web token (JWT) and bcrypt. 


# Features:
Browse pets: Users can view a list of pets available for adoption. Pets are categorized by species 
Pet details: Users can click on a pet to view detailed information, such as name species age and image of the pet. 
User registration: Users can create an account and access their profile to see their details.
Admin panel: An admin panel is available for administrators to manage pets. They can add pets update the older ones and can delete the adopted ones. 
Adoption details: Users can find useful information about adopting a pet.
Filtering: Users can search for certain species and display them on the screen.

# Installation:
When downloaded you need to install dependencies: "npm i"
You need to create a .env file and declare your PORT , JWT_SECRET and you MONGODB_URI.
Then you can start your backend server and typing in your terminal "npm start" to start your server. Same process for frontend .

# Credits:
 Team Members :

This application is created by Melpomeni and Ameneh and updated by Panagiotis Mantis & Emre Güler

  Emre Guler: https://github.com/guleremre
  Panagiotis Mantis: https://github.com/panos-mantis

