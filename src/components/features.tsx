import "../Sass/features.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img from "../images/features.png";
import React, { useEffect, useRef, useState } from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

type feature = {
    icon: IconProp,
    title: string,
    para: string
}

let features: Array<feature>=[
    {icon:"fa-regular fa-square-check" as IconProp,title:"Visual Editor",para:"Theme provides a well designed and ergonomic visual editor for you to edit your notes and input data"},
    {icon:"fa-regular fa-gem" as IconProp,title:"Goal Setting",para:"Like any self improving process, everything starts with setting your goals and committing to them"},
    {icon:"fa-regular fa-clock" as IconProp,title:"Refined Options",para:"Each option packaged in the app's menus is provided in order to improve your personal development status"},
    {icon:"fa-solid fa-paper-plane" as IconProp,title:"Retina Ready",para:"Each option packaged in the app's menus is provided in order to improve your personal"},
    {icon:"fa-regular fa-calendar-days" as IconProp,title:"Calendar Input",para:"Schedule your appointments, meetings and periodical evaluations using the provided in-app calendar"},
    {icon:"fa-solid fa-bookmark" as IconProp,title:"Easy Reading",para:"Reading focus mode for long form articles, ebooks and other materials which involve large text areas"},
    {icon:"fa-solid fa-podcast" as IconProp,title:"Good Foundation",para:"Get a solid foundation for your self development efforts. Try Theme mobile app for any mobile platform"},
    {icon:"fa-solid fa-heart" as IconProp,title:"Responsive",para:"Get a solid foundation for your self development efforts. Try Theme mobile app"}
];

const Configuring: React.FC = ()=><div className="configuring part">
        {features.map((obj: feature,i: number)=><div className={"feature"+" feature"+i} key={i}>
            <FontAwesomeIcon className="svg-style" icon={obj.icon}/>
            <div className="text">
                <h4>{obj.title}</h4>
                <p>{obj.para}</p>
            </div>
        </div>)
        }
    </div>;

const Tracking: React.FC = ()=> <div className="tracking part">
        <img src={img} alt=""/>
        <div className="text1">
            <h3>Track Result Based on your</h3>
            <p>After you've configured the app and settled on the data gathering 
                techniques you can not start the information trackers and start 
                collecting those interesting details. You can always change them.
            </p>
            <div className="features">
                <div className="feature">
                    <FontAwesomeIcon className="svg-style" icon={"fa-solid fa-cube" as IconProp} />
                    <div className="text2">
                        <h4>Good Foundation</h4>
                        <p>Get a solid foundation for your self development efforts. 
                            Try Theme mobile app for any mobile platform
                        </p>
                    </div>
                </div>
                <div className="feature">
                    <FontAwesomeIcon className="svg-style" icon={"fa-regular fa-calendar-days" as IconProp} />
                    <div className="text2">
                        <h4>Calendar Input</h4>
                        <p>Get a solid foundation for your self development efforts. 
                            Try Theme mobile app for any mobile platform
                        </p>
                    </div>
                </div>
                <div className="feature">
                    <FontAwesomeIcon className="svg-style" icon={"fa-solid fa-bookmark" as IconProp} />
                    <div className="text2">
                        <h4>Easy Reading</h4>
                        <p>Get a solid foundation for your self development efforts. 
                            Try Theme mobile app for any mobile platform
                        </p>
                    </div>
                </div>
                <div className="feature">
                    <FontAwesomeIcon className="svg-style" icon={"fa-solid fa-heart" as IconProp} />
                    <div className="text2">
                        <h4>Responsive</h4>
                        <p>Get a solid foundation for your self development efforts. 
                            Try Theme mobile app for any mobile platform
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>;

const Monitoring: React.FC = ()=> <div className="monitoring part">
        <div className="features">
            <div className="feature">
                <FontAwesomeIcon className="svg-style" icon={"fa-regular fa-calendar-days" as IconProp} />
                <div className="text2">
                    <h4>Calendar Input</h4>
                    <p>Schedule your appointments, meetings and periodical evaluations using 
                        the provided in-app calendar option
                    </p>
                </div>
            </div>
            <div className="feature">
                <FontAwesomeIcon className="svg-style" icon={"fa-solid fa-file" as IconProp} />
                <div className="text2">
                    <h4>Visual Editor</h4>
                    <p>Schedule your appointments, meetings and periodical evaluations using 
                        the provided in-app calendar option
                    </p>
                </div>
            </div>
            <div className="feature">
                <FontAwesomeIcon className="svg-style" icon={"fa-solid fa-cube" as IconProp} />
                <div className="text2">
                    <h4>Good Foundation</h4>
                    <p>Schedule your appointments, meetings and periodical evaluations using 
                        the provided in-app calendar option
                    </p>
                </div>
            </div>
            <div className="feature">
                <FontAwesomeIcon className="svg-style" icon={"fa-solid fa-bookmark" as IconProp} />
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

const Features:React.FC= ()=>{
    const featuresRef = useRef<HTMLElement | null>(null);

    type ActiveTabType = "configuring" | "tracking" | "monitoring";
    const [activeTab, setActiveTab] = useState<ActiveTabType>("configuring");

    //the next part to toggle between three feature parts 
    let display=(e: React.MouseEvent<HTMLDivElement>) :void=>{
        const target: EventTarget= e.currentTarget;
        if(target instanceof HTMLElement)
            setActiveTab(target.classList[0] as ActiveTabType)
    }
    useEffect(()=>{
        if(featuresRef.current) featuresRef.current.style.opacity= "1";
    })
    return(
        <section className="feat-container" ref={featuresRef}>
            <h3>features</h3>
            <p>Theme was designed based on input from personal development coaches<br/>
                and popular trainers so it offers all
            </p>
            <div className="types">
                <div className={"configuring "+ (activeTab === "configuring"? "active":"")} onClick={display}>
                    <FontAwesomeIcon icon={"fa-solid fa-gear" as IconProp}/>
                    <p>configuring</p>
                </div>
                <div className={"tracking "+ (activeTab === "tracking"? "active":"")} onClick={display} >
                    <FontAwesomeIcon icon={"fa-solid fa-binoculars" as IconProp} />
                    <p>tracking</p>
                </div>
                <div className={"monitoring "+ (activeTab === "monitoring"? "active":"")} onClick={display} >
                    <FontAwesomeIcon icon={"fa-solid fa-magnifying-glass" as IconProp} />
                    <p>monitoring</p>
                </div>
            </div>
            {activeTab === "configuring"? <Configuring/>
            : activeTab === "tracking"? <Tracking/>
            : activeTab === "monitoring" && <Monitoring/>
            }
        </section>
    );
}

export default Features;