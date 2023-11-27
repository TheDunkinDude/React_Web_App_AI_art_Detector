import NavBar from  "./Navbar"
import MainBody from "./mainbody"
import './App.css';
import HowBody from "./How2use";
import { useState } from "react";
import Report from "./Report";

function App() {
  const [howuse, sethowuse] = useState(false);
  const [report, setReport] = useState(false);

  function howUseSetter(val) {
    sethowuse(val)
  }

  function reportSetter(val) {
    setReport(val)
  }

  function mBodyRender(howuse,report){
     if(howuse === true) {
        return(
          <div> <HowBody/> </div>
        );
    }
    else if(report === true) {
      return(
        <div> <Report/> </div>
      );
    }
    else{
      return(
        <div> <MainBody/> </div>
      );
    }
  }

  return(
    <div className = 'container'>
        <div className = 'nbar'> <NavBar   how = {howUseSetter} Report = {reportSetter} /> </div>    
        <div>
            {mBodyRender(howuse,report)}
        </div>
    </div>
  );
}

export default App;
