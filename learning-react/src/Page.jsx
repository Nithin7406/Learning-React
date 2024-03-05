import React, { useState } from "react";
import About from "./Components/About";
import NavBar from "./Components/NavBar";
import Text from "./Components/Text";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function Page() {
  const [mode, setMode] = useState("light");

  const toggle = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#202020";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <Router>
      <div>
        <NavBar title="TextUtils" mode={mode} toggle={toggle} />
        <Routes>
          <Route path="/about" element={<About mode={mode} />} />
          <Route path="/" element={<Text mode={mode} />} />
        </Routes>
      </div>
    </Router>
  );
}
