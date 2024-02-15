import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react';
//import About from './components/About';
//import React from "react";
//import {
 {/* BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";*/}

function App() {
  const[mode,setMode]=useState('light');
  const toogleMode=()=>{
    if( mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#17063a';
    }else{
      
      setMode('light');
      document.body.style.backgroundColor='white';
    }
    
  }
  
  return (
    
    <>
  {/*<Router>*/}
  <Navbar title="Textutils" About="About Us" mode={mode} toogleMode={toogleMode}/>
  <div className="container my-3">
{/*<Routes>
          
          <Route path='/' element={<TextForm heading="enter the text" mode={mode}/>}></Route>
           <Route path='/about' element={<About/>}></Route> 
          
          
  </Routes>*/}
  <TextForm heading="Enter The Text" mode={mode}></TextForm>
   </div>
  
  {/*</Router>*/}
  </>
  );
}

export default App;
