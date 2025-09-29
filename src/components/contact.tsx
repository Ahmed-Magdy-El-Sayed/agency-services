import { IconProp } from "@fortawesome/fontawesome-svg-core";
import "../Sass/contact.scss"
import img1 from "../images/appstore-android.svg"
import img2 from "../images/appstore-apple.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef } from "react";

const Contact: React.FC= ()=>{
    const contactUsRef = useRef<HTMLElement | null>(null)
    useEffect(()=>{
        if(contactUsRef.current)
            contactUsRef.current.style.opacity= "1";
    })
    
    return(
        <div className="contact-us" ref={contactUsRef}>
            <div className="upper-part">
                <div className="part">
                    <h4>Highlights</h4>
                    <ul>
                        <li><a href="#">Our Story</a></li>
                        <li><a href="#" >Pricing</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Jobs</a></li>
                    </ul>
                </div>
                <div className="part">
                    <h4>Resources</h4>
                    <ul>
                        <li><a href="#">FAQs</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Support</a></li>
                        <li><a href="#">Developer APIs</a></li>
                    </ul>
                </div>
                <div className="part">
                    <h4>legal</h4>
                    <ul>
                        <li><a href="#">Privacy</a></li>
                        <li><a href="#">Terms of Services</a></li>
                        <li><a href="#">Security</a></li>
                    </ul>
                </div>
                <div className="part">
                    <h4>Stay Connected</h4>
                    <FontAwesomeIcon icon={"fa-brands fa-instagram" as IconProp} />
                    <FontAwesomeIcon icon={"fa-brands fa-twitter" as IconProp} />
                    <FontAwesomeIcon icon={"fa-brands fa-facebook" as IconProp} />
                    <p>
                        Company Name<br/>
                        2419 Locust View Drive<br/>
                        San Francisco, CA, 9898
                    </p>
                    <a href="#">hello@yourcompany.com</a>
                </div>
            </div>
            <hr/>
            <div className="lower-part">
                <h3>GET THE APP</h3>
                <p>
                    Download our apps now. lorem ipsum dolor sit amet, consectetuer adipiscing elit.Aenean commodo ligula eget dolor.
                    Aenean massa. Cum sociis natoque penatibus et magnis dis.
                </p>
                <img src={img1}></img>
                <img src={img2}></img>
                <p>&copy; {(new Date().getFullYear)()} | Made by <span>Ahmed Magdy</span>.</p>
            </div>
        </div>
    );
}

export default Contact;