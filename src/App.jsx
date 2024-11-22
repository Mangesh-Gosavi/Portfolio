import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Pages/Header";
import About from "./Pages/About";
import Skill from './Pages/Skill';
import Project from './Pages/Project';
import Contact from './Pages/Contact'

function App() {

  return (
    <>
      <BrowserRouter>
      <div className=" h-20 bg-blue-950 w-full">
        <Header />
        <Routes>
          <Route path="/" element={<About/>}/>
          <Route path="/Skill" element={<Skill/>}/>
          <Route path="/Project" element={<Project/>}/>
          <Route path="/Contact" element={<Contact/>}/>         
        </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
