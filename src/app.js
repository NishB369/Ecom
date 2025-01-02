import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <>
    <Header />
    <Footer />
    </>
  )
}

const root = ReactDOM.createRoot(document.querySelector("#root"))
root.render(<App />)