import React from "react";

import resume1 from '../assets/Images/resume.jpg'
import resume2 from '../assets/Images/resume2.jpg'
import resume2 from '../assets/Images/resume2.jpg'
import reactResume from '../assets/Images/Clayton-Miller-resume.png'

function Resume() {
    return (
        <div id="resume" class="section ">
            <h2 class="section-title">Check out my resume!</h2>

            <a className="resume-image-anchor box" >
                <img className="resume-image " src={reactResume} alt="Clayton Miller's resume" />
                {* <div className="dark-fade-element" ></div> *}
            </a>
                <a className="resume-download-btn color-main" href={reactResume} download >Download</a>


            { <div class="box flex-col" >
                <a href={resume2}><button class="projLink colorMain" >Download</button></a>
            </div> }
        </div>
    )
}

export default Resume;