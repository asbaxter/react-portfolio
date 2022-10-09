import React from "react";
import project1 from '../../assets/portfolio-screenshot.png';
import project2 from '../../assets/nighthawk-screenshot.png';
import project3 from '../../assets/keyboard-hero-screenshot.png';
import project4 from '../../assets/employee-tracker-screenshot.png';
import project5 from '../../assets/team-manager-screenshot.png';
import project6 from '../../assets/weather-flow-screenshot.png';

export default function Projects(){
    return (
        <section id="projects">
            <h1>Projects</h1>
            <ul>
                <li>
                    <h2>Real Portfolio</h2>
                    <img src={project1} alt="project 1 screenshot"></img>
                    <a href="https://asbaxter.github.io/portfolio-site/">Live site</a>
                    <a href="https://github.com/asbaxter/portfolio-site">GitHub</a>
                </li>
                <li>
                <   h2>Nighthawk</h2>
                    <img src={project2} alt="project 2 screenshot"></img>
                    <a href="https://fast-ridge-15962.herokuapp.com/">Live site</a>
                    <a href="https://github.com/asbaxter/team-nighthawk-project">GitHub</a>
                </li>
                <li>
                    <h2>Keyboard hero</h2>
                    <img src={project3} alt="project 3 screenshot"></img>
                    <a href="https://asbaxter.github.io/keyboard-hero-v2/">Live site</a>
                    <a href="https://github.com/asbaxter/keyboard-hero-v2">GitHub</a>
                </li>
                <li>
                    <h2>Employee tracker</h2>
                    <img src={project4} alt="project 4 screenshot"></img>
                    <a href="https://watch.screencastify.com/v/qT6vSob7dP8VVKFDb1TO">Demo Video</a>
                    <a href="https://github.com/asbaxter/employee-tracker">GitHub</a>
                </li>
                <li>
                    <h2>Team manager</h2>
                    <img src={project5} alt="project 5 screenshot"></img>
                    <a href="https://watch.screencastify.com/v/2cknukRDDH3iEN2HqGIX">Demo Video</a>
                    <a href="https://github.com/asbaxter/team-manager">GitHub</a>
                </li>
                <li>
                    <h2>Weather Flow</h2>
                    <img src={project6} alt="project 6 screenshot"></img>
                    <a href="https://patrickgp.github.io/Spotify-Weather-App/">Live site</a>
                    <a href="https://github.com/asbaxter/Spotify-Weather-App">GitHub</a>
                </li>
            </ul>
        </section>
    )
}