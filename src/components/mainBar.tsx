import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faLaptopCode, faMagnifyingGlass, faBars} from "@fortawesome/free-solid-svg-icons";
import "../Sass/mainBar.scss"
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

let menuLi: string[]= ["Home", "Services", "Features", "Team", "Contact"];
const MainBar: React.FC = ()=> {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState<number>(menuLi.findIndex(item=> "/"+ item.toLowerCase() === location.pathname) || 0);
    const [menuDisplay, setMenuDisplay] = useState<"" | "block" | "none">("");
    const [mainBarBgColor, setmainBarBgColor] = useState<"dodgerblue" | "">((location.pathname === "/services" || location.pathname === "/team")? "dodgerblue": "");

    //next part for make underline when mouse hover on the links 
    let menuEnter= (e: React.MouseEvent<HTMLAnchorElement>) :void=>{
        const target: EventTarget= e.target;
        if(target instanceof HTMLElement && target.lastChild instanceof HTMLElement)
            target.lastChild.style.width= target.offsetWidth + 1 + "px"
    }

    let menuOut= (e: React.MouseEvent<HTMLAnchorElement>) :void=>{
        const target: EventTarget= e.target;
        if(target instanceof HTMLElement && target.lastChild instanceof HTMLElement)
            target.lastChild.style.width= "0px"
    }

    //next part for change background of mainBar when change to another sections
    let linkClick= (e: React.MouseEvent<HTMLAnchorElement>, i: number) :void=>{
        const target: EventTarget= e.target;

        setActiveLink(i);

        if(target instanceof HTMLElement){
            target.className = "active";
            if(target.innerText === "Services" || target.innerText === "Team")
                setmainBarBgColor("dodgerblue");
            else
                setmainBarBgColor("");
        }
    }
    
    useEffect(()=>{
        const resizeHandler = (): void=>{
            if(window.innerWidth < 900){
                setMenuDisplay("none");
            }else{
                setMenuDisplay("");
            }
        };
        resizeHandler();
        window.addEventListener("resize", resizeHandler);

        return ()=>{
            window.removeEventListener("resize", resizeHandler);
        }
    }, [])

    return(
        <div className='main-bar' style={{backgroundColor: mainBarBgColor}}>
            <div className='logo'>
                <FontAwesomeIcon icon={faLaptopCode}/>
            </div> 
            <div className={'menu '+ (menuDisplay === "block"? " min": "")}
                style={{display: menuDisplay}}
            >
                <ul>
                { menuLi.map((content,i)=> 
                    <Link 
                    key={i}
                    onMouseOut={menuOut} 
                    onMouseEnter={menuEnter} 
                    onClick={(e: React.MouseEvent<HTMLAnchorElement>) => linkClick(e, i)}
                    to={"/"+ content.toLowerCase()}
                    className={activeLink === i? "active": ""}
                    >
                        {content}
                    </Link> 
                    )}
                </ul>
                <FontAwesomeIcon className='search' icon={faMagnifyingGlass} />
            </div>
            <FontAwesomeIcon className="menu-btn" icon={faBars} style={{display: (menuDisplay === "block" || menuDisplay === "none")? "" : "none"}} onClick={()=> setMenuDisplay(prev=> prev === "none"? "block" : "none")}/>
        </div>
    )
}

export default MainBar;