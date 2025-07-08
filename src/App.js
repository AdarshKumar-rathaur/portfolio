import { Routes, Route } from "react-router";
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Navbar from "./components/Navbar";
import Notes from "./components/Notes";

function App() {
  return (
    <> 
      <Routes>
        <Route exact path="/" element={<><Navbar title="Portfolio" searchbar={false} /><Home /></>} />
        <Route exact path="/about" element={<><Navbar title="Portfolio" searchbar={false} /><About /></>} />
        <Route exact path="/notes" element={<Notes />} />
      </Routes>
    </>
  );
}

export default App;
