import { Link, Outlet } from "react-router-dom";
import "./layout.scss";
import Sidebar from "./sidebar";
import QRLogo from "../../img/QRPetLogo.png";
import { FaInstagram, FaFacebookSquare } from "react-icons/fa";
import { useEffect, useState } from "react";

export function Layout() {
  // state för dölja/visa loginBtn/logoutBtn/registerBtn
  const [loginBtn, setLoginBtn] = useState(true);
  const [logoutBtn, setLogoutBtn] = useState(false);
  const [registerBtn, setRegisterBtn] = useState(true);
  const [mypage, setMyPage] = useState(false);

  // kolla om konto redan finns
  const ls = localStorage.getItem("OwnerID");

  // dölja loginBtn/logoutBtn
  useEffect(() => {
    if (ls) {
      setLoginBtn(false);
      setLogoutBtn(true);
      setRegisterBtn(false);
      setMyPage(true);
    } else {
      setLoginBtn(true);
      setLogoutBtn(false);
      setRegisterBtn(true);
      setMyPage(false);
    }
  }, [ls]);

  function handleImg() {
    window.location.href = "/";
  }
  function handleLogOut() {
    console.log("Du är nu utloggad");
    setLogoutBtn(false);
    setLoginBtn(true);

    localStorage.clear();
  }

  return (
    <>
      <Sidebar pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
      <header className="topHeader">
        <div className="topHeaderLeft">
          <img src={QRLogo} className="QRLogo" onClick={handleImg}></img>
        </div>
        <div className="topHeaderCenter">
          <nav className="desktopNav">
            <ul>
              <li>
                <Link to="/">Hem</Link>
              </li>
              <li>
                <Link to="/about">Om QRPet</Link>
              </li>
              <li>
                <Link to="/howitwork">Hur det funkar</Link>
              </li>
              <li>
                <Link to="/contact">Kontakt</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="topHeaderRight">
          {loginBtn && (
            <Link className="Btn" to="/userlogin">
              Logga In
            </Link>
          )}
          {logoutBtn && (
            <Link className="Btn" onClick={handleLogOut} to="/">
              Logga Ut
            </Link>
          )}
          {registerBtn && (
            <Link className="Btn" to="/register">
              Registrera
            </Link>
          )}
          {mypage && (
            <Link className="Btn" to="/register">
              Mina sidor
            </Link>
          )}
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="footerOne">
        <div className="footerLeft">
          <p>info@qrpet.se</p>
          <p>0701 234 567</p>
          {loginBtn && (
            <Link className="Btn" to="/userlogin">
              Logga In
            </Link>
          )}
          {logoutBtn && (
            <Link className="Btn" onClick={handleLogOut} to="/">
              Logga Ut
            </Link>
          )}
        </div>
        <div className="footerCenter">
          <p>Väljvägen 1</p>
          <p>123 45 Mamlö</p>
          {registerBtn && (
            <Link className="Btn" to="/register">
              Registrera
            </Link>
          )}
        </div>
        <div className="footerRight">
          <FaInstagram fontSize="50px" />
          <FaFacebookSquare fontSize="50px" />
        </div>
      </footer>
    </>
  );
}
