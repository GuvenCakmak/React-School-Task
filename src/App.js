import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Components/pages/About";
import ContactMe from "./Components/pages/ContactMe";
import Cv from "./Components/pages/CV";
import HomePage from "./Components/pages/MyPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/CV" element={<Cv />} />
          <Route path="/About" element={<About />} />
          <Route path="/ContactMe" element={<ContactMe />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
