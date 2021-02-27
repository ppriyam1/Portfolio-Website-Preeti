import React from "react";
import avatar from "../avatar.jpg";

const AboutMe = () => {
    return (
        <div id="about" className="container py-5">
            <div className="row">
                <div className="colg-lg-6 col-xm-12">
                    <div className="picture-Wrap mb-5">
                        <img className="profile-img" src={avatar} alt="avatar..." />
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12 about-me-text">
                    <h2 className="about-me-heading">About Me</h2>
                    <p className="about-me-para">
                    Software Engineer/Architect with around three years of solid expertise in Agile and SDLC Methodologies in the telecom Domain. Substantial experience in requirement gathering, coordination with development and vendor teams, data analysis, designing test suites, performing automation/functional testing to ensure the highest data quality and integrity!
                    </p>
                </div>
            </div>           
        </div>
    )
}

export default AboutMe
