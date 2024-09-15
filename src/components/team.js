import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LoremIpsum from "react-lorem-ipsum";
import "../Sass/team.scss"
import user1 from "../images/user-1.jpg";
import user2 from "../images/user-2.jpg";
import user3 from "../images/user-3.jpg";
import user4 from "../images/user-4.jpg";
import { useEffect, useState } from "react";

let intervalRunning = false;
let centeringCard;
export default function Team(){
    let data=[
        {h3:"Amazing App",img:user1,class:""},
        {h3:"Marvellous",img:user2,class:""},
        {h3:"Actually Impressive",img:user3,class:""},
        {h3:"Actually Impressive",img:user4,class:"center"},
        {h3:"Actually Impressive",img:user1,class:""},
        {h3:"Actually Impressive",img:user2,class:""},
        {h3:"Actually Impressive",img:user3,class:""}
    ]
    
    const[trager,update]=useState(true); // to force re-rendering 

    let next = ()=>{
        var center = document.querySelector(".team-container .team .center");
        center.classList.remove("center");
        if(center.previousElementSibling){
            center.previousElementSibling.classList.add("center");
        }else{
            document.querySelector(".team-container .team .team-memper:last-child").classList.add("center");
        }
        update(!trager);
    }
    
    let prev = ()=>{
        var center = document.querySelector(".team-container .team .center");
        center.classList.remove("center");
        if(center.nextElementSibling){
            center.nextElementSibling.classList.add("center");
        }else{
            document.querySelector(".team-container .team .team-memper:first-child").className += " center";
        }
        update(!trager);
    }
    
    //the next part for make the crads be rotated
    window.onresize=()=>{
        update(!trager);
    }
    useEffect(()=>{
        var cards = document.querySelectorAll(".team-container .team .team-memper");
        var centerCard = document.querySelector(".team-container .team .center");
        var centerFound = false; //to knowe if loop reach to the centered card 
        var cardsContainer = document.querySelector(".team-container .team");
        //form line 55 to 63 --> to make centerCard at the center of the page

        document.querySelector(".team-container").style.opacity=1;

        for(var i = 0;i < cards.length; i++){
            //for cards before center card
            if(cards[i]!=centerCard && !centerFound){
                cards[i].style = null;
                cards[i].style.transform="rotateY(30deg) scale(0.8)";
                cards[i].style.transformOrigin= "right center";
            }
            //for cards after center card
            else if(cards[i]!=centerCard && centerFound){
                cards[i].style = null;
                cards[i].style.transform="rotateY(-30deg) scale(0.8)";
                cards[i].style.transformOrigin= "left center";
            }
            //when reach to center card
            else{
                cards[i].style = null;
                centerFound=true;
            }
        }
        
        if(intervalRunning) {
            clearInterval(centeringCard);
            intervalRunning = false;
        }
        cardsContainer.style.left = 
            (
                (cardsContainer.getBoundingClientRect().x - centerCard.getBoundingClientRect().x) 
                + 
                (window.innerWidth/2 - centerCard.offsetWidth/2)
            ) + "px"
        ;
        intervalRunning = true;
        centeringCard = setInterval(()=>{
            if(Math.floor(centerCard.getBoundingClientRect().x) === Math.floor(window.innerWidth/2 - centerCard.offsetWidth/2)){
                clearInterval(centeringCard)
                intervalRunning = false;
            }else{
                cardsContainer.style.left = 
                (
                    (cardsContainer.getBoundingClientRect().x - centerCard.getBoundingClientRect().x) 
                    + 
                    (window.innerWidth/2 - centerCard.offsetWidth/2)
                ) + "px"
                ;
            }
        },700)

        if(intervalRunning)
            return ()=>{clearInterval(centeringCard)}
    })

    return(
        <section className="team-container">
            <FontAwesomeIcon className="next" onClick={next} icon="fa-solid fa-angle-right"/>
            <div className="team" >
                {data.map((obj,i)=><div className={"team-memper"+" "+obj.class} key={i}>
                    <h3>{obj.h3}</h3>
                    <div className="rate">
                        <FontAwesomeIcon icon={"fa-solid fa-star"} className="colored"/>
                        <FontAwesomeIcon icon={"fa-solid fa-star"} className="colored"/>
                        <FontAwesomeIcon icon={"fa-solid fa-star"} className="colored"/>
                        <FontAwesomeIcon icon={"fa-solid fa-star"} className="colored"/>
                        <FontAwesomeIcon icon={"fa-regular fa-star"}/>
                    </div>
                    <LoremIpsum avgSentencesPerParagraph={3}/>
                    <div className="user">
                        <img src={obj.img} alt=""/>
                        <p>Tonry Careter<br/>London, UK</p>
                    </div>
                </div>)}
            </div>
            <FontAwesomeIcon className="prev" onClick={prev} icon="fa-solid fa-angle-left"/>
            <div className="join-us">
                <p>Unleash your creative potential with theme</p>
                <h1>LOOKING FOR EXCLUSIVE DIGITAL SERVICES ?</h1>
                <button type="button">learn more</button>
            </div>
        </section>
    );
}
