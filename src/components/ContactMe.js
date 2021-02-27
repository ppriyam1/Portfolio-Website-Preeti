import React, {useState} from "react";
import emailjs from "emailjs-com";
import {useForm} from "react-hook-form";

function ContactMe() {

    const [successMessage, setSuccessMessage] = useState("");

    const { register, handleSubmit, errors } = useForm();

    const serviceID = "service_ID";
    const templateID = "template_ID";
    const userID = "user_jM1nWfb75dqw6ucPwjaiZ"; 

    const onSubmit = (data, r) => {
        sendEmail(
            serviceID,
            templateID,
            {
                name: data.name,
                phpne: data.phone,
                email: data.email,
                subject: data.subject,
                description: data.description
            },
            userID
        )
        r.target.reset();
    }

    function sendEmail(serviceID, templateID, variables, userID) {  
        emailjs.send(serviceID, templateID, variables, userID)
          .then(() => {
            setSuccessMessage("Email sent successfully!");       
            }).catch(err => console.error(`something went wrong ${err}`));
      }

    return (
        <div id="contacts" className="contacts">
            <div className="text-center">
            <h1>Contact Me</h1>
            <span className="success-message">{successMessage}</span>
            </div>
            <div className="container">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="col-md-6 col-xs-12">
                        {/* Name */}
                        <div className="text-center">
                        <input
                        autoComplete="off"
                        type="text" 
                        className="form-control" 
                        placeholder="Name" 
                        name="name" 
                        ref={
                            register(
                             {
                                required:  "Please enter your name",
                                maxLength: {
                                    value: 20,
                                    message: "Please enter a name with fewer than 20 characters"
                                }
                             }
                            )
                        }
                        />
                        <div className="line"></div>
                        </div>
                        <span className="error-message">
                            {
                                errors.name && errors.name.message
                            }
                        </span>
                        {/* Phone */}
                        <div className="text-center">
                        <input
                        autoComplete="off"
                        type="text" 
                        className="form-control" 
                        placeholder="Phone Number" 
                        name="phone"
                        ref={
                            register(
                             {
                                required:  "Please enter your phone number"
                             }
                            )
                        }
                        />
                        <div className="line"></div>
                        </div>
                        <span className="error-message">
                            {
                                errors.phone && errors.phone.message
                            }
                        </span>
                        {/* Email */}
                        <div className="text-center">
                        <input
                        autoComplete="off"
                        type="email"
                        className="form-control" 
                        placeholder="Email" 
                        name="email"
                        ref={
                            register(
                             {
                                required:  "Please provide your email",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    messge: "invalid email address"
                                }
                             }
                            )
                        }
                        />
                        <div className="line"></div>
                        </div>
                        <span className="error-message">
                            {
                                errors.email && errors.email.message
                            }
                        </span>
                        {/* Subject */}
                        <div className="text-center">
                        <input
                        autoComplete="off"
                        type="text" 
                        className="form-control" 
                        placeholder="Subject" 
                        name="subject"
                        ref={
                            register(
                             {
                                required:  "OOPS!! You forget to add the subject"
                             }
                            )
                        }
                        />
                        <div className="line"></div>
                        </div>
                        <span className="error-message">
                            {
                                errors.subject && errors.subject.message
                            }
                        </span>
                    </div>
                    <div className="col-md-6 col-xs-12">
                        {/* Description */}
                        <div className="text-center">
                        <textarea
                        type="text"
                        className="form-control" 
                        placeholder="Email...." 
                        name="description"
                        ref={
                            register(
                             {
                                required:  "OOPS! you forgot to add the description"
                             }
                            )
                        }
                        ></textarea>
                        <div className="line"></div>
                        </div>
                        <span className="error-message">
                            {
                                errors.description && errors.description.message
                            }
                        </span>
                        <button className="btn-main-offer contact-btn" type="submit">contact me</button>
                    </div>
                </div>
                </form>
            </div>
        </div>
    )
}

export default ContactMe;
