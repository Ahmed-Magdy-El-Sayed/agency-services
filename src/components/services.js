import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {LoremIpsum} from "react-lorem-ipsum";
import "../Sass/services.scss"

export default function Services(){
    let Services =[{icon:"fa-regular fa-square-check",text:"Website Devlopment"},
        {icon:"fa-regular fa-gem",text:"Graphic Designing"},
        {icon:"fa-regular fa-clock",text:"Digital Marketing"},
        {icon:"fa-solid fa-paper-plane",text:"Seo &amp; Content Writing"},
        {icon:"fa-solid fa-podcast",text:"App Development"}]
    ;
    
    useEffect(()=>{
        setTimeout(() => {
            document.querySelector(".serv-container .services").style.right="100vw";
            document.querySelector(".serv-container >h1").style.left=0;
        }, 100);
    })
    return(
        <section className="serv-container">
            <h3>Service</h3>
            <h1>
                we design digital productes that<br/>help grow businesses.
            </h1>
            <LoremIpsum p={1} avgSentencesPerParagraph={2}/>
            <div className="services">
                {Services.map((obj,i)=>
                    <div className="service" key={i}>
                        <div className="front">
                            <FontAwesomeIcon className="icon" icon={obj.icon} />
                            <h3>{obj.text}</h3>
                        </div>
                        <div className="back">
                            <FontAwesomeIcon className="icon" icon={obj.icon} />
                            <h3>{obj.text}</h3>
                        </div>
                    </div>
                )}
                
            </div>
        </section>
    );
}