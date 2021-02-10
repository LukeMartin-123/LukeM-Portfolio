import React from "react";
import { useState } from "react"
import CardBtn from "../CardBtn/CardBtn";
import "./styles.css";


const Card = (props) => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Shop & Chef",
      description: "This is a full-stack application that allows the user to create custom shopping lists and find new recipes. It also allows the user to add ingredients directly from a recipe to their shopping list!",
      link: "https://shop-n-chef.herokuapp.com/"
    },

    {
      id: 2,
      title: "Anime vs UFC",
      description: "This app utilizes the Youtube and Giphy APIs to pit a live action MMA fight scene vs a famous anime scene to determine which was more exciting",
      link: "https://lukemartin-123.github.io/Anime-vs-UFC/"
    },

    {
      id: 3,
      title: "API Weather Tracker",
      description: "This app utilizes the Open Weather API to give live real time weather updates for any city the user inputs.The data returned includes temperature, humidity, wind, UV index and even a five day forecast.",
      link: "https://lukemartin-123.github.io/API_Weather_Tracker/"
    },

    {
      id: 4,
      title: "Javascript Code Quiz",
      description: "The goal for this project was to create a quiz that asks the user a series of questions about Javascript! After completing the quiz the user can input their initials and high scores are shown on a separate page.",
      link: "https://lukemartin-123.github.io/Javascript_Code_Quiz/"
    },

    {
      id: 5,
      title: "Employee Directory",
      description: "The goal of this project was to create a react app that utilized the 'Random User API' and allowed the user to search through a list of employees when they came to the page",
      link: "https://lukemartin-123.github.io/Employee-Directory/"
    },

    {
      id: 6,
      title: "Team Profile Generator",
      description: "This assignment is a node.js application that creates a custom HTML page based on user input. The user is prompted with a series of questions within the terminal and based on their inputs the application will then create a customized HTML page.",
      link: "https://github.com/LukeMartin-123/Team_Profile_Generator"
    },
    {
    id: 7,
    title: "Web Development",
    description: "Aspiring web developer skilled in Javascript/Jquery, React, node.js, express, MySQL, MongoDB, Github, HTML, CSS/Bootstrap ",
    link: "https://github.com/LukeMartin-123"
  },

  {
    id: 8,
    title: "Account Management",
    description: "I have 5 years of experience working in advertising account management within multiple creative agencies. Serving as the day to day client contact, working cohesively with designers, writers, strategists, and clients on integrated advertising campaigns. Experience managing large creatie and production budgets. Timeline management and KPI tracking and reporting ",
    link: "https://www.linkedin.com/in/luke-martin-profile/"
  },

  ])


  return (
    <div>
      {projects
        .filter((project) => project.id === props.id)
        .map((project) => (
          <div class = "card" key={project.id}>
            <h1> {project.title}</h1>
            <p> {project.description}</p>
            <a href={project.link}>Link</a>
          </div>
        ))}
    </div>
  )
}
export default Card;