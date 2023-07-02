// rfce +(tab)   to create a functional component

import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import  Alert from "./components/Alert";
import About from "./components/About";
// import {NavLink} from "react-router-dom";


// Using react router dom to create a single page application 
// npm install react-router-dom
//import { BrowserRouter as Router, Switch, Route , link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg : message,
      type : type,

    })

    // if we dont  setTimeout function then the alert will be shown only one time
    
    setTimeout(() => {
      setAlert(null);
    },1200);
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled");
      document.title = "WordPlaYer - Dark Mode";  // tp change the title of the page dynamically not required everytime used in facebook for
      // showing the number of notifications
      

      // creating ads like bloopers in the title
      // no need just for fun

      // setInterval(() =>{
      //   document.title = "WordPlaYer is amazing";
      // }, 2000);

      // setInterval(() =>{
      //   document.title = "Install WordPlaYer now";
      // }, 1500);



    } 
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled");
      document.title = "WordPlaYer - Light Mode";
    }
  };



  return (
    
<BrowserRouter>
     
     <Routes>
          
          <Route
            // path="/"
            path="/React_project"
            element={<>
              <Navbar title="WordPlaYer" mode={mode} toggleMode={toggleMode} />
                <Alert alert={alert}/>
                <div className="container">
                  <TextForm heading="WordPlaYer: Your Text Helper " mode={mode} showAlert={showAlert} />
                </div>
         </> } />
          <Route path="/about" element={<>
              <Navbar title="WordPlaYer" mode={mode} toggleMode={toggleMode} />
                <Alert alert={alert}/>
                <div className="container"  >
                  <About mode={mode} />
                </div>
         </> } />
          <Route path="*" element={<h1>404 Page Not Found</h1>} />

        </Routes>
  
    </BrowserRouter>
  );
}

export default App;