import { Link, Outlet } from "react-router-dom";
import "./layout.scss";
import Sidebar from "./sidebar";

export function Layout() {
  return (
    <>
      <Sidebar pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
      <header className="topHeader">
        <h1>QR Pet</h1>
        <nav className="">
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
            <li>
              <Link to="/adminlogin">Admin</Link>
            </li>
            <li>
              <button className="lightBtn">
                <Link to="/userlogin">Logga In</Link>
              </button>
            </li>
            <li>
              <button className="darkBtn">
                <Link to="/register">Registrera</Link>
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
