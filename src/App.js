import Services from "./components/services";
import Home from "./components/home" 
import MainBar from "./components/mainBar";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import Features from "./components/features";
import Team from "./components/team";
import Contact from "./components/contact";
import {Routes, Route} from "react-router-dom";
import { useEffect} from "react";

library.add(fas, far, fab); //to use font awesome icons without import it
function App() {
  //Next part for move from sction to another by scrolling
  let appSections =["home", "services", "features", "team", "contact"]
  let addtime = 0;// increase number of scroll that needed to change the page
  document.onwheel =(e)=>{
    var currentSection = document.querySelector(".menu ul a[class = active]").innerText.toLowerCase();
    if (window.scrollY + window.innerHeight + addtime  >= document.body.scrollHeight +3){//for scroll up
      for(var i = 0; i < appSections.length; i++){
        if(currentSection === appSections[i] && appSections[i+1]){
          document.querySelectorAll(".menu ul a")[i+1].click(); 
        }
      }
    }
    else if(window.scrollY + addtime  <= -3){//for scroll down
      for(var i = 0; i < appSections.length; i++){
        if(currentSection === appSections[i] && appSections[i-1]){
          document.querySelectorAll(".menu ul a")[i-1].click();
        }
      }
    }
    if(currentSection != "contact" 
      && e.deltaY == Math.abs(e.deltaY) 
      && window.scrollY + window.innerHeight >= document.body.scrollHeight) 
      ++addtime;
    else if(currentSection != "home" 
      && e.deltaY !== Math.abs(e.deltaY)
      && window.scrollY <= 0)
      --addtime;
  }
  useEffect(()=>{
    window.onresize = ()=>{
    //this part for display 3 dashed icon that contain menu links in mainBar component
      if(window.innerWidth < 650){
          document.querySelector(".main-bar .menu").style.display = "none";
          document.querySelector(".main-bar .bars").style.display = "block";
      }else{
          document.querySelector(".main-bar .menu").style.display = null;
          document.querySelector(".main-bar .bars").style.display = null; 
      }
    }//this part to give background-color to the menu --> (when reload the page) <--
    if(window.location.href.split("/")[3] == "services" || window.location.href.split("/")[3] == "team"){
        document.querySelector(".main-bar").style.backgroundColor = "dodgerblue";
    }else{
        document.querySelector(".main-bar").style.backgroundColor = null;
    }
    
  })
  return (
    <>
    <MainBar/>
    <Routes>
      <Route path="*" element={<Home />}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/features" element={<Features/>}/>
      <Route path="/team" element={<Team/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    </>
  );
}

export default App;
