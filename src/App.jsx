import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Work from "./components/Work";
// import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import AppBanner from "./components/AppBanner";
import FAQ from "./components/Faq";

function App() {

 

  return (
    <div className="mainPage">
      <div className="App">
        <Home />
        <About />
        
        <Work />
        {/* <Testimonial /> */}
        <AppBanner/>
        <Contact />
        <FAQ/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
