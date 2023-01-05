import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/howitwork">How it work</a>ß
            </li>
            <li>
              <a href="/contact">Contact</a>
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
