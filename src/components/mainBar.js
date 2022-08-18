import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faLaptopCode, faMagnifyingGlass, faBars} from "@fortawesome/free-solid-svg-icons";
import "../Sass/mainBar.scss"
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function MainBar() {
    
    let menuLi= ["Home", "Services", "Features", "Team", "Contact"]
    //next part for make underline when mouse hove the links 
    let menuEnter= e =>{if(e.target.lastChild){
        e.target.lastChild.style.width= e.target.offsetWidth + 1 + "px"}
    }
    let menuOut= e =>{if(e.target.lastChild){
        e.target.lastChild.style.width= "0px"}
    }
    //next part for change background of mainBar when change to another sections
    let linkClick= e =>{
        document.querySelector(".menu ul a[class = active").classList.remove("active");
        e.target.className = "active";
        if(e.target.innerText === "Services" || e.target.innerText === "Team"){
            document.querySelector(".main-bar").style.backgroundColor = "dodgerblue";
        }else{
            document.querySelector(".main-bar").style.backgroundColor = null;
        }
    }
    //next part for display the menu
    let barsClicked = false;
    let barsClick= ()=>{
        barsClicked = !barsClicked;
        barsClicked ?
            document.querySelector(".menu").style.display = "block"
            :document.querySelector(".menu").style.display = "none";
    }
    let sectionsName =["landing","serv-container","feat-container","team-container","contact-us"]
    useEffect(()=>{
        if (document.querySelector(".menu ul a[class = active")){
            document.querySelector(".menu ul a[class = active").classList.remove("active");
        }
        for(let i = 0; i < sectionsName.length; i++){
            if(document.querySelector("#root").lastChild.className === sectionsName[i]){
                document.querySelector(".menu ul a[data-name = " + sectionsName[i] + "]").classList = "active";
            }
        }
        
        if(window.innerWidth < 900){
            document.querySelector(".menu").style.display = "none";
            document.querySelector(".bars").style.display = "block";
        }
    })

    return(
        <div className='main-bar'>
            <div className='logo'>
                <FontAwesomeIcon icon={faLaptopCode}/>
            </div> 
            <div className='menu'>
                <ul>
                { menuLi.map((content,i)=> 
                    <Link 
                    key={i}
                    onMouseOut={e=>menuOut(e)} 
                    onMouseEnter={e=>menuEnter(e)} 
                    onClick={e=>linkClick(e)}
                    to={"/"+ content.toLowerCase()}
                    data-name={sectionsName[i]}
                    >
                        {content}
                        <span/>
                    </Link> 
                    )}
                </ul>
                <FontAwesomeIcon className='search' icon={faMagnifyingGlass} />
            </div>
            <FontAwesomeIcon className="bars" icon={faBars}  onClick={barsClick}/>
        </div>
    )
}