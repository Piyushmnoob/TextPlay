// import logo from './logo.svg';
import "./App.css";
import About from "./custom_component/About";
import Navbar from "./custom_component/Navbar";
import Textarea from "./custom_component/Textarea";

import Alert from "./custom_component/Alert";


import React, { useState } from "react";

import { Route, Routes } from "react-router-dom"; // react router dom

function App() {
  // state --> normal sa state h   --> dark ya light mode k liye
  const [Mode, setMode] = useState("light");

  const [alertObj, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1750);
  };

  // arrow function
  let toggleBtn = () => {
    if (Mode === "light") {
      setMode("dark");

      document.body.style.backgroundColor = "rgb(8 49 68)";

      showAlert("Dark Mode has been Enabled", "success");

      document.title = "TextPlay - Darkmode";
    } else {
      setMode("light");

      document.body.style.backgroundColor = "white";

      showAlert("Light Mode has been Enabled", "success");

      document.title = "TextPlay - Lightmode";
    }
  };

  // palette

  return (
    <>
      <Navbar
        title="TextPlay"
        about="About TextPlay"
        mode={Mode}
        toggleMode={toggleBtn}

        shAlert={showAlert}   // jb about link pe click krenge tb msg show krne k liye. 
      />
     
      <Alert alert={alertObj} />{" "}
      {/* hm object pass kr rhe h as a argument to the alert component*/}
      <div className="container my-3">
        <Routes>
          <Route
            path="/"
            element={
              <Textarea
                title="Enter the text to analyze"
                mode={Mode}
                shAlert={showAlert}
              ></Textarea>
            }
          ></Route>

          <Route path="/about" element={<About mode={Mode}  ></About>}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
