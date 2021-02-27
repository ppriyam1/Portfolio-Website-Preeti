import React from 'react';
import  Algorithms from "../projectPictures/Algorithms.png";
import  iOS from "../projectPictures/iOSDevelopment.png";
import  DP from "../projectPictures/javaDesignPattern.png";
import  NoSQL from "../projectPictures/noSQL.png";
import  SE from "../projectPictures/softwareEngineering.png";
import  Web from "../projectPictures/WebDevelopment.png"; /* imageProj*/

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";

import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";





const Projects = () => {

    /******* Algorithms Starts ************************/
    const openPopupboxProject1 = () => {
        const content = (
        <>
            <img className="projects-image-popupbox" src={Algorithms} alt="Algorithm Project ...." />
            <h4 className="popup-h1" >Optimized package delivery system!</h4>
            <p className="popup-para">Implemented nearest neighbor algorithm to find the shortest distance in Traveling Salesman Problem, <br />compared it against Genetic, Nearest Neighbor and back tracking algorithm to find the most efficient<br /> algorithm in terms of time
and space complexity.</p>
            <b className="popup-b">GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/ppriyam1/CS575","_blank")}>https://github.com/ppriyam1/CS575</a>
            <br />
            <b className="popup-b">Youtube:</b> <a className="hyper-link" onClick={() => window.open("https://youtu.be/Mq8nxsmDeBs")}>https://youtu.be/Mq8nxsmDeBs</a>
        </>
        )
        PopupboxManager.open({ content });
    }
    const popupboxConfiProject1 = {
        titleBar: {
            enable: true,
            text: ""
        },
        fadeIn: true,
        fadeInSpeed: 500
    }
    /******* Algorithms Ends *******/

    /******** iOS Starts ************************/
    const openPopupboxProject2 = () => {
        const content = (
        <>
            <img className="projects-image-popupbox" src={iOS} alt="iOS Project ...." />
            <h4 className="popup-h1" >iOS Project!</h4>
            <p className="popup-para">Music App</p>
            <b className="popup-b">GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/ppriyam1/iOS_Projects","_blank")}>https://github.com/ppriyam1/iOS_Projects</a>
        </>
        )
        PopupboxManager.open({ content });
    }
    const popupboxConfiProject2 = {
        titleBar: {
            enable: true,
            text: ""
        },
        fadeIn: true,
        fadeInSpeed: 500
    }
    /******* iOS Ends *******/

     /******** Design Patterns Starts *************************/
     const openPopupboxProject3 = () => {
        const content = (
        <>
            <img className="projects-image-popupbox" src={DP} alt="Design Patterns Project ...." />
            <h4 className="popup-h1" >Design Pattern!</h4>
            <p className="popup-para">Created a Java program for YouTube to determine the popularity of a channel by using the state patterns,<br />with the help of views, likes and dislikes developed a popularity score which was used to approve or reject<br /> advertisement
requests.</p>
            <b className="popup-b">GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/ppriyam1/csx42-design-pattern-state-pattern","_blank")}>https://github.com/ppriyam1/csx42-design-pattern-state-pattern</a>
        </>
        )
        PopupboxManager.open({ content });
    }
    const popupboxConfiProject3 = {
        titleBar: {
            enable: true,
            text: ""
        },
        fadeIn: true,
        fadeInSpeed: 500
    }
    /******* Design Patterns Ends *******/

    /******** NoSQL Starts *************************/
    const openPopupboxProject4 = () => {
        const content = (
        <>
            <img className="projects-image-popupbox" src={NoSQL} alt="NoSQL Project ...." />
            <h4 className="popup-h1" >User Content Management System!</h4>
            <p className="popup-para">Built a social media user content management system which uses public data-set from ‘Twitter‘<br /> to manage the user content with NodeJS and MongoDB, thereby making the user data persistent<br /> allowing for a faster look up of data.</p>
            <b className="popup-b">GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/ppriyam1/Database-Project3","_blank")}>https://github.com/ppriyam1/Database-Project3</a>
        </>
        )
        PopupboxManager.open({ content });
    }
    const popupboxConfiProject4 = {
        titleBar: {
            enable: true,
            text: ""
        },
        fadeIn: true,
        fadeInSpeed: 500
    }
    /******* NoSQL Ends *******/

    /******** Software Engineering Starts *************************/
    const openPopupboxProject5 = () => {
        const content = (
        <>
            <img className="projects-image-popupbox" src={SE} alt="Software Engineering project ...." />
            <h4 className="popup-h1" >BU REALTOR: Real estate property management application!</h4>
            <p className="popup-para">This project aims at creating a real estate property management software using Ruby framework that offers<br /> a service to realtors, real estate agencies and property managers with the ability to track and manage the current<br /> status of any real estate property under their portfolio.</p>
            <b className="popup-b">GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/codecella/bu-realtor","_blank")}>https://github.com/codecella/bu-realtor</a>
        </>
        )
        PopupboxManager.open({ content });
    }
    const popupboxConfiProject5 = {
        titleBar: {
            enable: true,
            text: ""
        },
        fadeIn: true,
        fadeInSpeed: 500
    }
    /******* Software Engineering Ends *******/

    /******** WEB Starts *************************/
    const openPopupboxProject6 = () => {
        const content = (
        <>
            <img className="projects-image-popupbox" src={Web} alt="WEB project ...." />
            <h4 className="popup-h1" >Newsletter Website!</h4>
            <p className="popup-para"></p>
            <b className="popup-b">GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/ppriyam1/Web_Project-Newsletter_Website","_blank")}>https://github.com/ppriyam1/Web_Project-Newsletter_Website</a>
        </>
        )
        PopupboxManager.open({ content });
    }
    const popupboxConfiProject6 = {
        titleBar: {
            enable: true,
            text: ""
        },
        fadeIn: true,
        fadeInSpeed: 500
    }
    /******* WEB Ends *******/

    return (
        <div id="projects" className="projects-wrapper">
         <div className="container">
             <h1 className="text-uppercase text-center py-5">Projects</h1>        
             <div className="image-box-wrapper row justify-content-center">
             {/** --- **/}
                <div className="projects-image-box" onClick={openPopupboxProject1}>
                <img className="projects-image" src={Algorithms} alt="dummy..." />
                <div className="overflow"></div>
                <FontAwesomeIcon className="projects-icon" icon={faSearchPlus} />
             </div>
             {/** --- **/}
             <div className="projects-image-box" onClick={openPopupboxProject2}>
                <img className="projects-image" src={iOS} alt="dummy..." />
                <div className="overflow"></div>
                <FontAwesomeIcon className="projects-icon" icon={faSearchPlus} />
             </div>
             {/** --- **/}
             <div className="projects-image-box" onClick={openPopupboxProject3}>
                <img className="projects-image" src={DP} alt="dummy..." />
                <div className="overflow"></div>
                <FontAwesomeIcon className="projects-icon" icon={faSearchPlus} />
             </div>
             {/** --- **/}
             <div className="projects-image-box" onClick={openPopupboxProject4}>
                <img className="projects-image" src={NoSQL} alt="dummy..." />
                <div className="overflow"></div>
                <FontAwesomeIcon className="projects-icon" icon={faSearchPlus} />
             </div>
             {/** --- **/}
             <div className="projects-image-box" onClick={openPopupboxProject5}>
                <img className="projects-image" src={SE} alt="dummy..." />
                <div className="overflow"></div>
                <FontAwesomeIcon className="projects-icon" icon={faSearchPlus} />
             </div>
            {/** --- **/}
            <div className="projects-image-box" onClick={openPopupboxProject6}>
                <img className="projects-image" src={Web} alt="dummy..." />
                <div className="overflow"></div>
                <FontAwesomeIcon className="projects-icon" icon={faSearchPlus} />
             </div>
            </div>
         </div>
         <PopupboxContainer {...popupboxConfiProject1} />
         <PopupboxContainer {...popupboxConfiProject2} />
         <PopupboxContainer {...popupboxConfiProject3} />
         <PopupboxContainer {...popupboxConfiProject4} />
         <PopupboxContainer {...popupboxConfiProject5} />
         <PopupboxContainer {...popupboxConfiProject6} />             
        </div>
    )
}

export default Projects;