import React from "react";
import { Link } from "react-scroll";
import github from "../projectPictures/github.png";
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon
  
} from "react-share";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6 contact">
            <div className="d-flex">
              <p>Binghamton, NY 13905</p>
            </div>
            <div className="d-flex">
              <a href="tel:607-699-1317">+1(607)-699-1317</a>
            </div>
            <div className="d-flex">
              <p>preeti1992priyam@gmail.com</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-6">
            <div className="row">
              <div className="col">
               
              </div>
              <div className="col">
                
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
            <div className="d-flex justify-content-center">
              <a
								className="px-3"
								href="https://www.facebook.com/singhpreeti3112"
								target="_blank"
								rel="noopener noreferrer">
								<FacebookIcon className="mx-3" size={36} />
							</a>
              <a
								className="px-3"
								href="https://github.com/ppriyam1"
								target="_blank"
								rel="noopener noreferrer">
								<img className="git" src={github} alt="" size={36}/>
							</a>
              <a
								className="px-3"
								href="https://www.linkedin.com/in/preeti-priyam-6b2272192/"
								target="_blank"
								rel="noopener noreferrer">
								<LinkedinIcon className="mx-3" size={36} />
							</a>

            </div>
            <p className="pt-3 text-center">
              Copyright&copy;
              {new Date().getFullYear()}&nbsp;Preeti Priyam
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}



export default Footer;