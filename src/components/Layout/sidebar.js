import React from "react";
import { bubble as Menu } from "react-burger-menu";
import "./sidebar.css";

export default (props) => {
  return (
    <Menu right>
      <a className="menu-item" href="/">
        Hem
      </a>
      <a className="menu-item" href="/about">
        Om QRPet
      </a>
      <a className="menu-item" href="/howitwork">
        Hur det funkar
      </a>
      <a className="menu-item" href="/contact">
        Kontakt
      </a>
      <a className="menu-item" href="/userlogin">
        Logga in
      </a>
      <a className="menu-item" href="/register">
        Registrera
      </a>
    </Menu>
  );
};
