import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        {/* <BrowserRouter>
          <Routes>
            <Route path="/"  />
          
          </Routes>
        </BrowserRouter> */}
        <Header />
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
