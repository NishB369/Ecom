import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import HeroSection from "./Components/HeroSection/HeroSection";

const App = () => {
  return (
    <>
    <Header />
    <HeroSection />
    <Footer />
    </>
  )
}

const root = ReactDOM.createRoot(document.querySelector("#root"))
root.render(<App />)