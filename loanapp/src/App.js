import React from "react";

import {BrowserRouter,Routes,Route}from 'react-router-dom';
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import ReactDOM from "react-dom/client";
import Service from "./Pages/Services";
import ApplicationForm from "./ApplicationForm";
import Dashboard  from "./Dashboard";
import LoginForm from "./LoginForm";
import Button from "./Pages/Button";
import Button2 from "./Pages/Button2";
import Signup from "./Signup";
import Homepage from "./Homepage";

const App = () => {
  return ( 
    <>
  
     <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/Service" element={<Service/>}/>
      <Route path="/ApplicationForm" element={<ApplicationForm/>}/>
      <Route path ="/Dashboard" element={<Dashboard/>}/>
      <Route path ="/LoginForm" element ={<LoginForm/>}/>
      <Route path ="/Button" element ={<Button/>}/>
      <Route path ="/Button" element ={<Button2/>}/>
      <Route path ="/Signup" element ={<Signup/>}/>
      <Route path ="/Homepage" element ={<Homepage/>}/>

    </Routes>
   
    </BrowserRouter>
    </>
   );
   
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
 
export default App;