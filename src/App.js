import { Routes, Route } from "react-router";
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar title="Portfolio" searchbar={false} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
