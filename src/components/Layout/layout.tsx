import { Link, Outlet } from "react-router-dom";

export function Layout() {
  return (
    <>
      <header className="">
        <nav>
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
              <Link to="/register">Registrera</Link>
            </li>
            <li>
              <Link to="/userlogin">Logga In</Link>
            </li>
            <li>
              <Link to="/adminlogin">Admin</Link>
            </li>
          </ul>
        </nav>
        <p>Hello from Layout</p>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
