import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {LoremIpsum} from "react-lorem-ipsum";
import "../Sass/services.scss"
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const Services: React.FC = ()=>{
    interface Service{
        icon: IconProp,
        text: string
    }
    let Services: Service[]=[
        {icon:"fa-regular fa-square-check" as IconProp, text:"Website Devlopment"},
        {icon:"fa-regular fa-gem" as IconProp, text:"Graphic Designing"},
        {icon:"fa-regular fa-clock" as IconProp, text:"Digital Marketing"},
        {icon:"fa-solid fa-paper-plane" as IconProp, text:"Seo &amp; Content Writing"},
        {icon:"fa-solid fa-podcast" as IconProp, text:"App Development"}
    ];
    
    const contentRef= useRef<{left: HTMLElement | null, right: HTMLElement | null}>({left: null, right: null})

    useEffect(()=>{
        if(contentRef.current.left && contentRef.current.right){
            contentRef.current.right.style.right= "100vw";
            contentRef.current.left.style.left= "0";
        }
    })
    return(
        <section className="serv-container">
            <h3>Service</h3>
            <h1 ref={ref=>{contentRef.current.left = ref}}>
                we design digital productes that<br/>help grow businesses.
            </h1>
            <LoremIpsum p={1} avgSentencesPerParagraph={2}/>
            <div className="services" ref={ref=>{contentRef.current.right = ref}}>
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

export default Services;