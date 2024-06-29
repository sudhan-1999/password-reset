import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registerform from "./register";
import Login from "./login";
import Logged from './loggedin';
import ForgotPassword from './forgotpassword';
import Reset from './reset';
import Page from "./Page";

function App() {
  
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Registerform />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logedin" element={<Logged />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/reset" element={<Reset />} />
            <Route path="/page" element={<Page />} />


          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
