import React from "react";

export default function Resume(){

    const downloadPDF = () =>{
        fetch('andrew_baxter_resume.pdf').then(response => {
            response.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob);
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'andrew_baxter_resume.pdf';
                alink.click();
            })
        })
    }
    return (
        <section>
            <h2>Resume & Skills</h2>
            <button onClick={downloadPDF}>Download Resume</button>
            <h3>Front-End Skills</h3>
            <ul>
                <li>React</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Bootstrap</li>
                <li>Materialize</li>
                <li>Handlerbars</li>
            </ul>
            <h3>Back-End Skills</h3>
            <ul>
                <li>JavaScript</li>
                <li>MySQL</li>
                <li>MongoDB</li>
                <li>Express.js</li>
                <li>Node.js</li>
                <li>APIs</li>
            </ul>
        </section>
    )
}