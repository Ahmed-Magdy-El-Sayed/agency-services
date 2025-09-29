import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LoremIpsum from "react-lorem-ipsum";
import "../Sass/team.scss"
import user1 from "../images/user-1.jpg";
import user2 from "../images/user-2.jpg";
import user3 from "../images/user-3.jpg";
import user4 from "../images/user-4.jpg";
import React, { useEffect, useRef, useState } from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

let intervalRunning: boolean = false;
let centeringCard: number | NodeJS.Timer;
type review = {h3:string, img: string, class: string}
let reviews: review[]=
    [
        {h3:"Amazing App", img:user1, class:""},
        {h3:"Marvellous", img:user2, class:""},
        {h3:"Actually Impressive", img:user3, class:""},
        {h3:"Actually Impressive", img:user4, class:"center"},
        {h3:"Actually Impressive", img:user1, class:""},
        {h3:"Actually Impressive", img:user2, class:""},
        {h3:"Actually Impressive", img:user3, class:""}
    ];

const Team: React.FC= ()=>{
    const containerRef = useRef<HTMLElement | null>(null);
    const cardsRef = useRef<HTMLDivElement | null>(null);
    const centerRef = useRef<HTMLDivElement | null>(null);
    const [centerIndx, setCenterIndx]= useState<number>(Math.floor(reviews.length/2));

    let centeringAnimation = ()=>{
        if(window.innerWidth <= 745) return null;

        if(intervalRunning) {
            clearInterval(centeringCard);
            intervalRunning = false;
        }
        
        if(cardsRef.current && centerRef.current){ 
            cardsRef.current.style.left = 
                (
                    (cardsRef.current.getBoundingClientRect().x - centerRef.current.getBoundingClientRect().x) 
                    + 
                    (window.innerWidth/2 - centerRef.current.offsetWidth/2)
                ) + "px"
            ;
        }
        intervalRunning = true;
        centeringCard = setInterval(()=>{
            if(cardsRef.current && centerRef.current){
                if(Math.floor(centerRef.current.getBoundingClientRect().x) === Math.floor(window.innerWidth/2 - centerRef.current.offsetWidth/2)){
                    clearInterval(centeringCard)
                    intervalRunning = false;
                }else{
                    cardsRef.current.style.left = 
                    (
                        (cardsRef.current.getBoundingClientRect().x - centerRef.current.getBoundingClientRect().x) 
                        + 
                        (window.innerWidth/2 - centerRef.current.offsetWidth/2)
                    ) + "px"
                    ;
                }
            }
        },200)
    } 
    
    let next = (): void=>{
        setCenterIndx(prev=> prev === reviews.length-1 ? 0 : prev+1);
        centeringAnimation();
    }
    
    let prev = (): void=>{
        setCenterIndx(prev=> prev === 0 ? reviews.length-1 : prev-1);
        centeringAnimation();
    }
    
    //the next part for make the crads be rotated
    window.onresize=(): void=>{
        centeringAnimation();
    }
    useEffect(()=>{
        if(containerRef.current)
            containerRef.current.style.opacity= "1";

        centeringAnimation();
    },[])

    return(
        <div className="team-container" ref={containerRef}>
            <FontAwesomeIcon className="next" onClick={next} icon={"fa-solid fa-angle-right" as IconProp}/>
            <div className="team" ref={cardsRef}>
                {reviews.map((obj: review,i: number)=>
                <div 
                    className={"team-memper"+ (i === centerIndx? " center": "")} 
                    key={i}
                    ref={i === centerIndx ? centerRef : null}
                    style={
                        i < centerIndx?{
                            transform: "rotateY(30deg) scale(0.8)",
                            transformOrigin: "right center"
                        }: i > centerIndx?{
                            transform: "rotateY(-30deg) scale(0.8)",
                            transformOrigin: "left center"
                        }:{
                            transform: "",
                            transformOrigin: ""
                        }
                    }
                >
                    <h3>{obj.h3}</h3>
                    <div className="rate">
                        <FontAwesomeIcon icon={"fa-solid fa-star" as IconProp} className="colored"/>
                        <FontAwesomeIcon icon={"fa-solid fa-star" as IconProp} className="colored"/>
                        <FontAwesomeIcon icon={"fa-solid fa-star" as IconProp} className="colored"/>
                        <FontAwesomeIcon icon={"fa-solid fa-star" as IconProp} className="colored"/>
                        <FontAwesomeIcon icon={"fa-regular fa-star" as IconProp}/>
                    </div>
                    <LoremIpsum avgSentencesPerParagraph={3}/>
                    <div className="user">
                        <img src={obj.img} alt=""/>
                        <p>Tonry Careter<br/>London, UK</p>
                    </div>
                </div>)}
            </div>
            <FontAwesomeIcon className="prev" onClick={prev} icon={"fa-solid fa-angle-left" as IconProp}/>
            <div className="join-us">
                <p>Unleash your creative potential with theme</p>
                <h1>LOOKING FOR EXCLUSIVE DIGITAL SERVICES ?</h1>
                <button type="button">learn more</button>
            </div>
        </div>
    );
}

export default Team;