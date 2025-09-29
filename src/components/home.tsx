import "../Sass/Home.scss";
import React, { useEffect, useState } from "react";
import sliderBg from "../images/landing-page.jpg";
import Huawei from "../images/laptop1.png";
import Microsoft from "../images/laptop2.png";
import Dell from "../images/laptop3.png";

type product= {
    shortName: string,
    img: string,
    fullName: string,
    description: string,
    specifications: Array<string>,
    price: string,
    url: string
}

const products: product[]=[
    {
        shortName:"Huawei", 
        img: Huawei, 
        fullName:"Huawei matebook x pro", 
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, ducimus.", 
        specifications:["test","test","test"], 
        url:"test", 
        price:"2500"
    },
    {
        shortName:"Microsoft", 
        img: Microsoft, 
        fullName:"Microsoft Surface Pro", 
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, ducimus.", 
        specifications:["test","test","test"], 
        url:"test", 
        price:"4000"
    },
    {
        shortName:"Samsung", 
        img: Dell, 
        fullName:"Samsung Galaxy Book", 
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, ducimus.", 
        specifications:["test","test","test"], 
        url:"test", 
        price:"3000"
    }
]

const Home: React.FC = ()=>{
    //next all code before return is for to toggle between three objects of data array with animation
    const [counter,setCounter] = useState<number>(0);
    let clickable: boolean = true;
    let NextprevPart =() :void=>{//common part in next() and prev()
        let textL: HTMLElement | null = document.querySelector(".landing .dark-layer .textL");
        let textR: HTMLElement | null= document.querySelector(".landing .dark-layer .textR");
        if(textL) textL.style.left= "";
        if(textR) textR.style.right= "";
    }

    let next =() :void=>{
        if(clickable){
            clickable = false;
            NextprevPart();
            setTimeout(() => {
                setCounter(counter=>(counter < products.length-1)? counter+1 : 0);
                clickable = true;
            },300);
        }
    }

    let prev =() :void=>{
        if(clickable){
            clickable = false;
            NextprevPart();
            setTimeout(()=>{
                setCounter(counter=>(counter > 0)? counter-1 : products.length -1);
                clickable = true;
            },300)
        }
    }
    
    useEffect(()=>{
        let textL: HTMLElement = document.querySelector(".landing .dark-layer .textL") as HTMLElement;
        let textR: HTMLElement = document.querySelector(".landing .dark-layer .textR") as HTMLElement;
        textL.style.left= "0";
        textR.style.right= "0"; 
    })
    return(
        <>
            <div className="landing" style={{backgroundImage:`url(${sliderBg})`}}>
                <div className="dark-layer">
                    <div className="textL">
                    <h1>{products[counter].shortName}</h1>
                    <img src={products[counter].img} alt="" />
                    </div>
                    <div className="textR">
                        <h2>{products[counter].fullName}</h2>
                        <p>{products[counter].description}</p>
                        <ul>
                            {
                                products[counter].specifications.map((spec,i)=>{
                                    return <li key={i}>{spec}</li>
                                })
                            }
                        </ul>
                        <div className="price">price: {products[counter].price}$</div> 
                        <a className="url" href={products[counter].url}>Buy</a>
                    </div>
                </div>
                <div className="next" onClick={next}> &gt; </div>
                <div className="prev" onClick={prev}> &lt; </div>
            </div>
        </>
    );
}

export default Home;