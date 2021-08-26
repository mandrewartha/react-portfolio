import React from "react"
import "./style/AboutMe.css"


const AboutMe = () => {
    return (
        // <!-- jumbotron -->
        <div className="jumbotron jumbotron-fluid" id="jumbotron">
          <div className="container" >
           <img className="profile-pic profile" src="https://media-exp1.licdn.com/dms/image/C5603AQEF95uCM20HQA/profile-displayphoto-shrink_800_800/0/1626211820977?e=1635379200&v=beta&t=YDil9HpglltPdA92mrZ9-6gU-ekJ28UnJaGHjkaQI80" /> 
            <h1 className="display-4 profile" id="name">Meghan Andrewartha</h1>
            <p className="lead" id="jumbo-portfolio">I am a fullstack web developer student at the Univeristy of Washington Coding Bootcamp. After highschool I went to Culinary School and earned my Associates Degree in Baking and Pastry. A few years later, I went back to school to earn my Bachelors in Psychology. I then spent the next 5 years working in various parts of the mental health profession, from crisis line to forensic pyschology. My love of puzzles and computers encouraged me to go back to school one last time to combine my skills I've acquired over the years and become a web developer.</p>
          </div>
        </div>
    );
}

export default AboutMe;