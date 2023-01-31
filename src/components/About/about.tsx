import { useEffect, useState } from "react";
import phoneSite from "../../img/PhoneSite.png";
import "./about.scss";

export function About({}) {
  return (
    <div className="siteInfo">
      <img className="phoneImg" src={phoneSite} />
      <div className="textDiv">
        <h1>Vad är QR Pet?</h1>
        <p>
          Vår hemsida är ett verktyg för djurägare att registrera deras husdjur
          och kontaktinformation för att hjälpa till att återförena förlorade
          djur med deras ägare. Genom att registrera din hund eller katt och
          lägga till deras information, genererar vår hemsida en unik QR-kod som
          du kan placera på deras halsband. På så sätt kan vem som helst som
          hittar din förlorade hund eller katt enkelt skanna QR-koden för att få
          tillgång till din kontaktinformation och returnera din hund eller katt
          till dig. Vår hemsida är enkel att använda och har säkerhet som
          prioriteras för att skydda din och din hund eller katts information.
        </p>
      </div>
    </div>
  );
}
