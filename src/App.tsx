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
import React from "react";

const App: React.FC = ()=> {

  return (
    <>
      <MainBar/>
      <Routes>
        <Route path="*" element={<Home/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/features" element={<Features/>}/>
        <Route path="/team" element={<Team/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </>
  );
}

library.add(fas, far, fab); //to use font awesome icons

export default App;