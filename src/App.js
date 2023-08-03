import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Services from "./components/services/Services";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Extra from "./components/extra/Extra";
import Footer from "./components/footer/Footer";
import ScrollUp from "./components/scroll/Scrollup";
function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Extra />
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;
