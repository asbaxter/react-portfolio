import React from "react";

export default function Header(props){
    const {
        setIsAbout,
        setIsProjects,
        setIsContact
    } = props;

    return (
        <div>
            <a href="/">Andrew Baxter</a>
            <nav>
            <ul>
                <li>
                    <a href="#about" onClick={() => {setIsProjects(false); setIsAbout(true); setIsContact(false)}}>About Me</a>
                </li>
                <li>
                    <a href="#portfolio" onClick={() => {setIsProjects(true); setIsAbout(false); setIsContact(false)}}>Portfolio</a>
                </li>
                <li>
                    <a href="#about" onClick={() => {setIsProjects(false); setIsAbout(false); setIsContact(true)}}>Contact</a>
                </li>
                <li>
                    <a href="#resume">Resume</a>
                </li>
            </ul>
        </nav>
        </div>
    )
}