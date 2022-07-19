import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "../Sass/Home.scss";
import { useEffect, useState } from "react";
import Huawei from "../images/laptop1.png";
import Microsoft from "../images/laptop2.png";
import Dell from "../images/laptop3.png";

let data=[
    {h1:"Huawei", img: Huawei, h2:"Huawei matebook x pro", price:"2500"},
    {h1:"Microsoft", img: Microsoft, h2:"Microsoft Surface Pro", price:"4000"},
    {h1:"Samsung", img: Dell, h2:"Samsung Galaxy Book", price:"3000"}
]

let alertShow = true;

export default function Home(){
    if(alertShow){alertShow = false;
        alert("you can move between pages by scroll up and down by (mouse wheel) or by click links in menu bar");}
    //next all code before return is for to toggle between three objects of data array with animation
    const [counter,setCounter] = useState(0);

    let NextprevPart =()=>{//common part in next() and prev()
        document.querySelector(".landing .dark-layer .textL").style.left= null;
        document.querySelector(".landing .dark-layer .textR").style.right= null;
    }

    let next =()=>{
        NextprevPart();
        setTimeout(() => {
            (counter >= 2) ? setCounter(0): setCounter(counter=>counter+1);
        }, 500);
    }

    let prev =()=>{
        NextprevPart();
        setTimeout(()=>{
            (counter <= 0) ? setCounter(2): setCounter(counter=>counter-1);
        },500)
    }
    
    useEffect(()=>{
        setTimeout(() => {
            document.querySelector(".landing .dark-layer .textL").style.left = 0;
            document.querySelector(".landing .dark-layer .textR").style.right = 0; 
        }, 500);
    })
    return(
        <>
            <div className="landing">
                <div className="dark-layer">
                    <div className="textL">
                    <h1>{data[counter].h1}</h1>
                    <img src={data[counter].img} alt="" />
                    </div>
                    <div className="textR">
                        <h2>{data[counter].h2}</h2>
                        <FontAwesomeIcon className={"colored"} icon="fa-solid fa-star"/>
                        <FontAwesomeIcon className={"colored"} icon="fa-solid fa-star"/>
                        <FontAwesomeIcon className={"colored"} icon="fa-solid fa-star"/>
                        <FontAwesomeIcon className={"colored"} icon="fa-solid fa-star"/>
                        <FontAwesomeIcon icon="fa-regular fa-star"/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, ducimus.</p>
                        <ul>
                            <li>Lorem ipsum dolor sit amet</li>
                            <li>Lorem ipsum dolor sit amet</li>
                        </ul>
                        <form>
                            <select name="Color">
                                <option disabled>Color</option>
                                <option value="White">White</option>
                                <option value="Black">Black</option>
                                <option value="Blue">Blue</option>
                            </select>
                            <input type="button" value="Add TO Cart"></input>
                            <span>price: {data[counter].price}$</span>
                        </form>
                    </div>
                </div>
                <div className="next" onClick={next}><FontAwesomeIcon icon="fa-solid fa-angle-right" /></div>
                <div className="prev" onClick={prev}><FontAwesomeIcon icon="fa-solid fa-angle-left" /></div>
            </div>
        </>
    );
}