import React from "react";
import pic from '../assets/Images/profile-pic.jpg'

function AboutMe() {
    return (
        <div id="aboutMe" class="section box">
            <h2 class="section-title box">About Me </h2>

            <div class="aboutMe-container box">
                <img src={pic} id="cbm-profile" className="profile-pic box" alt="Clayton Miller profile picture" />
                <p class="aboutMe-paragraph box">
                    <span className="aboutMe-paragraph-first-indent">Hi! I'm Clayton Miller, a web developer based in the Austin, TX area. </span>
                    I started my journey in web development with the Full-Stack Web Development bootcamp at the University of Texas.
                    There, I became proficient in web development fundamentals such as HTML, CSS, JavaScript as well as working on various full-stack projects using the MERN technology stack.
                    I look forward to diving deeper into the world of web development, sharpening my coding skills and meeting other awesome developers who are just as excited about coding as I am!
                    Feel free to browse my projects and reach out to me at any of the contact links below.
                    I look forward to connecting with you!
                </p>
            </div>
        </div>

    )
}

export default AboutMe;