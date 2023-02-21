import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Projects from "./components/Projects";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from "react";

function App() {
  const notify = (x) => {
    switch (x) {
      case 1:
        toast.error("Sorry DB is not connected", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        break;
      default:
        toast.info("Soon My MERN - Ecommerce project will be uploaded", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        break;
    }
  };

  return (
    <div className="App">
      {/* <button onClick={notify}>Notify!</button> */}
      <ToastContainer />
      <div className="container-fluid">
        {/* <BrowserRouter>
          <Routes>
            <Route path="/"  />
          
          </Routes>
        </BrowserRouter> */}
        <Header />
        <About />
        <Projects showNotify={notify} />
        <Contact dbnotNotify={notify} />
      </div>
    </div>
  );
}

export default App;
