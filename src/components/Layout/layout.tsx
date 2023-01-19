import { Link, Outlet } from "react-router-dom";
import "./layout.scss";
import Sidebar from "./sidebar";
import QRLogo from "../../img/QRPetLogo.png";
import { FaInstagram, FaFacebookSquare } from "react-icons/fa";

function handleImg() {
  window.location.href = "/";
}

export function Layout() {
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
          <button>
            <Link to="/userlogin">Logga In</Link>
          </button>

          <button>
            <Link to="/register">Registrera</Link>
          </button>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="footerOne">
        <div className="footerLeft">
          <p>info@qrpet.se</p>
          <p>0701 234 567</p>
          <button>
            <Link to="/userlogin">Logga In</Link>
          </button>
        </div>
        <div className="footerCenter">
          <p>Väljvägen 1</p>
          <p>123 45 Mamlö</p>
          <button>
            <Link to="/register">Registrera</Link>
          </button>
        </div>
        <div className="footerRight">
          <FaInstagram fontSize="50px" />
          <FaFacebookSquare fontSize="50px" />
        </div>
      </footer>
    </>
  );
}
