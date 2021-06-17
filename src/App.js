import './App.css';
import React, { useState } from "react";

const App = () => {
   let time = new Date().toLocaleTimeString(); 
   const [ctime,setCtime] = useState(time);
   const UpdateTimes = () =>{
     time = new Date().toLocaleTimeString(); 
    setCtime(time);
   };
   setInterval(UpdateTimes, 1000);
  return (
    <div class="header">
    <h1> {ctime} </h1>
    </div>
  );
}
export default App;
