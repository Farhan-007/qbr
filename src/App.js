// import { Route, Routes, HashRouter } from "react-router-dom";
// import CommonContainer from "./CommonContainer"
import LandingPage from "./pages/LandingPage"
import './App.css';
import About from "./pages/AboutPage";
import MyGallery from "./pages/GalleryPage";
import Exhibition from "./pages/ExhibitionPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useRef } from "react";

function App() {
  const AboutRef = useRef(null);

  return (
    <>
      <Header ref={AboutRef} />
      <LandingPage />
      <About ref={AboutRef} />
      <MyGallery />
      <Exhibition />
      <Footer />
    </>
  );
}

export default App;