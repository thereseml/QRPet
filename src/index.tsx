import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/home";
import { UserLogin } from "./components/userlogin";
import { AdminLogin } from "./components/adminlogin";
import { Layout } from "./components/Layout/layout";
import { NotFound } from "./components/notfound";
import { About } from "./components/about";
import { HowItWork } from "./components/howitwork";
import { Contact } from "./components/contact";
import { Register } from "./components/registrer";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="howitwork" element={<HowItWork />} />
          <Route path="contact" element={<Contact />} />
          <Route path="userlogin" element={<UserLogin />} />
          <Route path="register" element={<Register />} />

          <Route path="adminlogin" element={<AdminLogin />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
