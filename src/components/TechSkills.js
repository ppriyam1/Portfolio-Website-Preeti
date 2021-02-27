import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeskpro } from "@fortawesome/free-brands-svg-icons";
import { faCode, faCodeBranch, faDatabase, faDesktop, faFileCode, faLaptopCode, faTools } from "@fortawesome/free-solid-svg-icons";

const TechSkills = () => {
    return (
        <div id="skills" className="tech-skills">
            <h2 className="py-5">My Skills</h2>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                                <div className="circle"><FontAwesomeIcon className="icon" icon={faFileCode} size="2x" /></div>
                                <h3>Frontend</h3>
                                <p>JavaScript ES6</p>
                                <p>Bootstrap</p>
                                <p>HTML5</p>
                                <p>React</p>
                                <p>CSS3</p>
                                </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="box">
                        <div className="circle"><FontAwesomeIcon className="icon" icon={faLaptopCode} size="2x" /></div>
                                <h3>Backend</h3>
                                <p>CoreJava</p>
                                <p>Express</p>
                                <p>NodeJs</p>
                                <p>Swift</p>
                                <p>C</p>
                                </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="box">
                        <div className="circle" ><FontAwesomeIcon className="icon" icon={faDatabase} size="2x" /></div>
                                <h3>DataBase</h3>
                                <p>NoSql</p>
                                <p>Sql</p>
                            </div>                             
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="box">
                        <div className="circle" ><FontAwesomeIcon className="icon" icon={faTools} size="2x" /></div>
                                <h3>Tools</h3>
                                <p>Oracle SQL developer</p>
                                <p>MongoDB</p>
                                <p>SoapUI</p>
                                <p>HP-QC</p>
                                <p>GIT</p>
                            </div>                             
                        </div>
                    </div>
                </div>
            </div>           
    )
}

export default TechSkills
