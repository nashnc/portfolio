import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Works from "./Works";
import Contact from "./Contact";
import contact from "./Contact";
import DarkModeToggle from "./DarkModeToggle";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Works />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
