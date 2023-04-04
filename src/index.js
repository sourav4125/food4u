import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BiMicrophone } from "react-icons/bi";

const Logo = () => {
  return (
    <img
      className="gimage" 

      src="https://www.google.co.in/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
      
      alt="google"
    />
  );
};

const WordBox = () => {
  return <div className="searchbar">
      <input className="search"></input>
      <BiMicrophone className="mic"/>
  </div>
};

const Buttons = () => {
  return (
    <div id="buttons">
      <button className="Search">Google Search</button>
      <button className="Lucky">I'm Feeling Lucky</button>
    </div>
  );
};

const LanguageNote=()=>{
  return <h4>Google.co.offered.in:<span id="russian">Francais</span></h4>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Logo />
    <WordBox />
    <Buttons />
    <LanguageNote/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
