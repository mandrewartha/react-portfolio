import React, {useState} from "react";
import PortfolioCard from "./PortfolioCard"
import "./style/Portfolio.css";


const Projects = () => {
    const [portfolioCards, setPortfolioCards] = useState([
        {
            link:"https://perfect-home-finder.herokuapp.com/",
            image: "https://user-images.githubusercontent.com/84876493/128796759-1f1e285b-2368-40c5-8901-5741dc29fe93.png",
            title:"Perfect Home",
            languages: "JavaScript,Handlebars.js,MySQL",
            description: "Research dog breeds and take a fun quiz to find pets for adoption in your area!"
        },
        {
            link:"https://there-and-back-again-front.herokuapp.com/",
            image: "https://user-images.githubusercontent.com/84876493/132051995-7ef52646-a72d-46a7-a6e0-7510da2d612a.png",
            title:"There & Back Again",
            languages: "JavaScript,MongoDB, Express.JS",
            description: "Log activity to go on a fictional journey."
        },
      
        {
            link:"https://mandrewartha.github.io/work-day-scheduler/",
            image: "https://user-images.githubusercontent.com/84876493/124217304-fc79c180-daac-11eb-8961-b0f3a282e4f5.png",
            title:"Workday Scheduler",
            languages: "JavaScript,HTML,CSS",
            description: "Plan your work day by the hour."
        },
        {
            link:"https://mandrewartha.github.io/javascript-password-generator/",
            image: "https://user-images.githubusercontent.com/84876493/123358173-d50c7d00-d51f-11eb-8e0e-e647c29ba88a.png",
            title:"Password Generator",
            languages: "JavaScript,HTML,CSS",
            description: "Generate a secure password that is original every time!"
        },
        {
            link:"https://ma-pwa-budget-tracker.herokuapp.com/",
            image: "https://user-images.githubusercontent.com/84876493/130272970-7ce16c2a-2b72-4a3e-a0aa-dd013b561ac1.png",
            title:"Budget Tracker",
            languages: "PWA,JavaScript,HTML,CSS",
            description: "Keep track of your budget and expenses, even offline!"
        },
        {
            link:"https://fitness-tracking-ma.herokuapp.com/",
            image: "https://user-images.githubusercontent.com/84876493/129940402-3dca164a-91ac-4275-9c31-1e96f9170199.png",
            title:"Fitness Tracker",
            languages: "MongoDB,JavaScript,Express.JS",
            description: "Track your workout information and keep track of your trends over the last 7 days!"
        },
        {
            link:"https://mandrewartha.github.io/MTG-deck-builder/",
            image: "https://user-images.githubusercontent.com/84876493/125176132-f60ed800-e185-11eb-9cfa-6f54f4a49ca4.png",
            title:"MTG Deck Builder",
            languages: "JavaScript,HTML,CSS",
            description: "A site that allows you to create custom decks to play a card game."
        }
      
    ])
    return (
<div className="portfolio-card">
    {portfolioCards.map((project,i)=> (
        <PortfolioCard 
        key = {i}
        link = {project.link}
        image={project.image}
        title={project.title}
        languages={project.languages}
        description={project.description}
        />
    ))}
</div>
    )
}

export default Projects