import { useState } from "react";
// import './App.css'
import Navbar from "./components/Navbar.jsx"
import Home from "./pages/Home.jsx"
import Footer from "./components/Footer.jsx";
// import Outlet from 'react-router-dom'
import { Outlet } from "react-router-dom";
function App() {

  return (
    <>
     <div> 
      <Navbar />
      <Outlet  style={{paddingLeft:50}}/>
      <Footer />
    </div>
      {/* <Home />old */}
    </>
  );
}

export default App;
