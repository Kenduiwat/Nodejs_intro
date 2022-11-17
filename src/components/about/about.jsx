import React from "react";
import "./about.css";
import Jumbo from "../../images/mati.jpg"


const About = () => {
    return (
        <div className="about">
            <div className="about-left">
                <div className="about-card bg"></div>
                <div className="about-card">
                    <img src={Jumbo} alt="" className="about-img" />
                </div>
            </div>
            <div className="about-right">
                <h1 className="about-title">About Me</h1>
                <p className="about-sub">
                My name is Brandon Armand Nyamkimbi, and I’m currently looking for a job in web development.
                </p>
                <p className="about-desc">
                I have 1 year of experience building diverse web projects. I am an undergraduate of electronics ans telecommunications engineerting. I volunteer as an IT officer at Victoria Relief Foundation. I enjoy meeting new people and finding ways to build websites of their dreams. I am dedicated, outgoing, and a team player.
                </p>
            </div>
        </div>
    )
}

export default About;

