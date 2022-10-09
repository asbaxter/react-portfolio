import React from "react";

export default function Header(props){
    const {
        setIsAbout,
        setIsProjects,
        setIsContact,
        setIsResume
    } = props;

    return (
        <div>
            <a href="/">Andrew Baxter</a>
            <nav>
            <ul>
                <li>
                    <a href="#about" onClick={() => {setIsProjects(false); setIsAbout(true); setIsContact(false); setIsResume(false)}}>About Me</a>
                </li>
                <li>
                    <a href="#projects" onClick={() => {setIsProjects(true); setIsAbout(false); setIsContact(false); setIsResume(false)}}>Projects</a>
                </li>
                <li>
                    <a href="#about" onClick={() => {setIsProjects(false); setIsAbout(false); setIsContact(true); setIsResume(false)}}>Contact</a>
                </li>
                <li>
                    <a href="#resume" onClick={() => {setIsProjects(false); setIsAbout(false); setIsContact(false); setIsResume(true)}}>Resume</a>
                </li>
            </ul>
        </nav>
        </div>
    )
}