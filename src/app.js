import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./Components/Header/Header";

const App = () => {
  return (
    <Header />
  )
}

const root = ReactDOM.createRoot(document.querySelector("#root"))
root.render(<App />)