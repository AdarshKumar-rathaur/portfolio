import { Routes, Route } from "react-router";
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import video from "./components/images/background.webm"

function App() {
  return (
    <>
      <video className="back-vid" autoPlay muted loop playsInline src={video} type="video/mp4" />
      <Navbar title="Portfolio" />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/Projects" element={<Projects />} />
      </Routes>
    </>
  );
}

export default App;
