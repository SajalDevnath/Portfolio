import logo from "./logo.svg";
import "./App.css";
import Home from "./views/Home";
import About from "./views/about";
import Contact from "./views/contact";
import Projects from "./views/projects";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Home />
            </div>
          }
        ></Route>
        <Route
          path="/about"
          element={
            <div>
              <About />
            </div>
          }
        ></Route>
        <Route
          path="/contact"
          element={
            <div>
              <Contact />
            </div>
          }
        ></Route>
        <Route
          path="/projects"
          element={
            <div>
              <Projects />
            </div>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
