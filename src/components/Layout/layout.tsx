import { Link, Outlet } from "react-router-dom";
import "./layout.scss";
import Sidebar from "./sidebar";
import QRLogo from "../../img/QRPetLogo.png";
import { FaInstagram, FaFacebookSquare } from "react-icons/fa";
import { useEffect, useState } from "react";
import { BiHappyAlt } from "react-icons/bi";

export function Layout() {
  // state för dölja/visa loginBtn/logoutBtn/registerBtn
  const [loginBtn, setLoginBtn] = useState(true);
  const [logoutBtn, setLogoutBtn] = useState(false);
  const [registerBtn, setRegisterBtn] = useState(true);
  const [mypage, setMyPage] = useState(false);
  const [adminLogin, setAdminLogin] = useState(false);
  const [noAdmin, setNoAdmin] = useState(true);

  // kolla om konto redan finns
  const ls = JSON.parse(localStorage.getItem("OwnerID") || "null");
  const als = JSON.parse(localStorage.getItem("AdminID") || "null");

  const loginRoute = `/user/${ls}/userlogedin`;

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
    if (als) {
      setAdminLogin(true);
      setNoAdmin(false);
    } else {
      setAdminLogin(false);
      setNoAdmin(true);
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

  function handleAdminLogout() {
    setAdminLogin(false);
    setNoAdmin(true);

    localStorage.clear();
  }

  const [alert, setAlert] = useState(true);

  function handleX() {
    setAlert(false);
  }

  return (
    <>
      {alert && (
        <div className="alertMsg">
          <h3>Hej!</h3>
          <p>
            Jag studerar till Front End Utvecklare på Medieinstitutet, och detta
            är mitt examensarbete.
            <br /> Detta är endast en prototyp och bör ej användas!
          </p>
          <p>Ta gärna en titt!</p>
          <BiHappyAlt />
          <h5>Mvh Therese Lindholm</h5>

          <button onClick={handleX}>X</button>
        </div>
      )}
      <Sidebar pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
      <header className="topHeader">
        <div className="topHeaderLeft">
          <img
            src={QRLogo}
            alt="QR Pets Logga"
            className="QRLogo"
            onClick={handleImg}
          ></img>
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
            <Link className="Btn" to={loginRoute}>
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
          {mypage && (
            <Link className="Btn" to={loginRoute}>
              Mina sidor
            </Link>
          )}
        </div>
        <div className="footerRight">
          <div className="footerIcon">
            <FaInstagram fontSize="50px" />
            <FaFacebookSquare fontSize="50px" />
          </div>
          {adminLogin && (
            <Link className="Btn" onClick={handleAdminLogout} to="/adminlogin">
              Logga ut
            </Link>
          )}
          <Link className="Btn" to="/adminlogin">
            Admin
          </Link>
        </div>
      </footer>
    </>
  );
}
