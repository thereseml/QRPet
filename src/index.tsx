import React from "react";
import ReactDOM from "react-dom/client";
import "normalize.css";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home/home";
import { UserLogin } from "./components/Login/userlogin";
import { Layout } from "./components/Layout/layout";
import { NotFound } from "./components/notfound";
import { About } from "./components/About/about";
import { Howitwork } from "./components/Howitwork/howitwork";
import { Contact } from "./components/Contact/contact";
import { RegisterUser } from "./components/Registration/registrerUser";
import { RegisterSecondOwner } from "./components/Registration/RegisterSecondOwner";
import { RegisterPets } from "./components/Registration/registerPets";
import { LoggedInUser } from "./components/Login/loggedinUser";
import { AdminLogin } from "./components/Admin/adminlogin";
import { QRInfo } from "./components/QRInfo/QRInfo";
import { LoggedinAdmin } from "./components/Admin/loggedinAdmin";
import { GDPR } from "./components/gdpr";

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
          <Route path="howitwork" element={<Howitwork />} />
          <Route path="contact" element={<Contact />} />
          <Route path="register" element={<RegisterUser />} />
          <Route path="userlogin" element={<UserLogin />} />
          <Route path="user/:id" element={<RegisterPets />} />
          <Route
            path="user/:id/secondowner"
            element={<RegisterSecondOwner />}
          />
          <Route path="user/:id/userlogedin" element={<LoggedInUser />} />

          <Route path="adminlogin" element={<AdminLogin />} />
          <Route path="admin/:id/loggedinadmin" element={<LoggedinAdmin />} />
          <Route path="qrinfo/:id" element={<QRInfo />} />
          <Route path="gdpr" element={<GDPR />} />
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
