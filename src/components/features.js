import "../Sass/features.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img from "../images/features.png";
import { useEffect } from "react";

export default function Features(){
    let featureData =[
        {icon:"fa-regular fa-square-check",title:"Visual Editor",para:"Theme provides a well designed and ergonomic visual editor for you to edit your notes and input data"},
        {icon:"fa-regular fa-gem",title:"Goal Setting",para:"Like any self improving process, everything starts with setting your goals and committing to them"},
        {icon:"fa-regular fa-clock",title:"Refined Options",para:"Each option packaged in the app's menus is provided in order to improve your personal development status"},
        {icon:"fa-solid fa-paper-plane",title:"Retina Ready",para:"Each option packaged in the app's menus is provided in order to improve your personal"},
        {icon:"fa-regular fa-calendar-days",title:"Calendar Input",para:"Schedule your appointments, meetings and periodical evaluations using the provided in-app calendar"},
        {icon:"fa-solid fa-bookmark",title:"Easy Reading",para:"Reading focus mode for long form articles, ebooks and other materials which involve large text areas"},
        {icon:"fa-solid fa-podcast",title:"Good Foundation",para:"Get a solid foundation for your self development efforts. Try Theme mobile app for any mobile platform"},
        {icon:"fa-solid fa-heart",title:"Responsive",para:"Get a solid foundation for your self development efforts. Try Theme mobile app"}];
    //the next part to toggle between three feature parts 
    let display=(e)=>{
        let sections = document.querySelectorAll(".feat-container .part");
        sections[0].style.display="none";
        sections[1].style.display="none";
        sections[2].style.display="none";
        let buttons = document.querySelectorAll(".feat-container .types div");
        buttons[0].className="";
        buttons[1].className="";
        buttons[2].className="";
        e.currentTarget.className += "active";
        document.querySelector
        (".feat-container ."+e.currentTarget.innerText.toLowerCase()+"").style.display=null;
    }
    useEffect(()=>{
        setTimeout(() => {
            document.querySelector(".feat-container").style.opacity=1;
        }, 100);
    })
    return(
        <section className="feat-container">
            <h3>features</h3>
            <p>Theme was designed based on input from personal development coaches<br/>
                and popular trainers so it offers all
            </p>
            <div className="types">
                <div className="active" onClick={(e)=>display(e)}>
                    <FontAwesomeIcon icon="fa-solid fa-gear" />
                    <p>configuring</p>
                </div>
                <div onClick={(e)=>display(e)} >
                    <FontAwesomeIcon icon="fa-solid fa-binoculars" />
                    <p>tracking</p>
                </div>
                <div onClick={(e)=>display(e)} >
                    <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
                    <p>monitoring</p>
                </div>
            </div>
            <div className="configuring part">
                {featureData.map((obj,i)=><div className={"feature"+" "+"feature"+i} key={i}>
                    <FontAwesomeIcon className="svg-style" icon={obj.icon}/>
                    <div className="text">
                        <h4>{obj.title}</h4>
                        <p>{obj.para}</p>
                    </div>
                </div>)
                }
            </div>
            <div className="tracking part" style={{display:"none"}}>
                <img src={img} alt=""/>
                <div className="text1">
                    <h3>Track Result Based on your</h3>
                    <p>After you've configured the app and settled on the data gathering 
                        techniques you can not start the information trackers and start 
                        collecting those interesting details. You can always change them.
                    </p>
                    <div className="features">
                        <div className="feature">
                            <FontAwesomeIcon className="svg-style" icon="fa-solid fa-cube" />
                            <div className="text2">
                                <h4>Good Foundation</h4>
                                <p>Get a solid foundation for your self development efforts. 
                                    Try Theme mobile app for any mobile platform
                                </p>
                            </div>
                        </div>
                        <div className="feature">
                            <FontAwesomeIcon className="svg-style" icon="fa-regular fa-calendar-days" />
                            <div className="text2">
                                <h4>Calendar Input</h4>
                                <p>Get a solid foundation for your self development efforts. 
                                    Try Theme mobile app for any mobile platform
                                </p>
                            </div>
                        </div>
                        <div className="feature">
                            <FontAwesomeIcon className="svg-style" icon="fa-solid fa-bookmark" />
                            <div className="text2">
                                <h4>Easy Reading</h4>
                                <p>Get a solid foundation for your self development efforts. 
                                    Try Theme mobile app for any mobile platform
                                </p>
                            </div>
                        </div>
                        <div className="feature">
                            <FontAwesomeIcon className="svg-style" icon="fa-solid fa-heart" />
                            <div className="text2">
                                <h4>Responsive</h4>
                                <p>Get a solid foundation for your self development efforts. 
                                    Try Theme mobile app for any mobile platform
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="monitoring part" style={{display:"none"}}>
                <div className="features">
                    <div className="feature">
                        <FontAwesomeIcon className="svg-style" icon="fa-regular fa-calendar-days" />
                        <div className="text2">
                            <h4>Calendar Input</h4>
                            <p>Schedule your appointments, meetings and periodical evaluations using 
                                the provided in-app calendar option
                            </p>
                        </div>
                    </div>
                    <div className="feature">
                        <FontAwesomeIcon className="svg-style" icon="fa-solid fa-file" />
                        <div className="text2">
                            <h4>Visual Editor</h4>
                            <p>Schedule your appointments, meetings and periodical evaluations using 
                                the provided in-app calendar option
                            </p>
                        </div>
                    </div>
                    <div className="feature">
                        <FontAwesomeIcon className="svg-style" icon="fa-solid fa-cube" />
                        <div className="text2">
                            <h4>Good Foundation</h4>
                            <p>Schedule your appointments, meetings and periodical evaluations using 
                                the provided in-app calendar option
                            </p>
                        </div>
                    </div>
                    <div className="feature">
                        <FontAwesomeIcon className="svg-style" icon="fa-solid fa-bookmark" />
                        <div className="text2">
                            <h4>Easy Reading</h4>
                            <p>Schedule your appointments, meetings and periodical evaluations using 
                                the provided in-app calendar option
                            </p>
                        </div>
                    </div>
                </div>
                <h3>Montioring Tool Evaluation</h3>
                <p>Monitor the evolution of your finances and health state using tools integrated in Theme. 
                    The generated real time reports can be filtered based on any desired criteria.</p>
            </div>
            {/*
                <FontAwesomeIcon icon="fa-solid fa-file" />
            */}
        </section>
    );
}