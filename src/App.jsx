import React from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Accordian from "./Accordian/Accordian";
import Home from "./Home/Home";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/accordion" element={<Accordian />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
