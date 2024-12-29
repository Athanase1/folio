import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import LayOut from "./components/layout/layout";
import Home from "../src/components/pages/home"
import About from "../src/components/pages/about"
import Projects from  "../src/components/pages/projets"
import Profiles from "../src/components/pages/portfolio"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LayOut />} >
        <Route index element={<Home />}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/projets" element={<Projects/>}/>
        <Route path="/profile" element={<Profiles/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
