import { useEffect, useState } from "react";
import phoneSite from "../../img/PhoneSite.png";
import "./about.scss";

export function About({}) {
  // state för ändra h1s position
  const [hideh1, setHideH1] = useState(true);
  const [showh1, setShowH1] = useState(false);

  useEffect(() => {
    // när sidan ändras storlek
    if (window.innerWidth > 1024) {
      setHideH1(false);
      setShowH1(true);

      return;
    }
  }, []);

  return (
    <div className="siteInfo">
      {hideh1 && (
        <h1>
          Genom att använda vår hemsida för att registrera ditt husdjur och dess
          kontaktuppgifter, får du många fördelar:
        </h1>
      )}
      <div className="sidebysideHome">
        <img className="phoneImg" src={phoneSite} />
        <div className="textDiv">
          {showh1 && <h1>Vad är QR Pet?</h1>}
          <p>
            Vår hemsida är ett verktyg för djurägare att registrera deras
            husdjur och kontaktinformation för att hjälpa till att återförena
            förlorade djur med deras ägare. Genom att registrera din hund eller
            katt och lägga till deras information, genererar vår hemsida en unik
            QR-kod som du kan placera på deras halsband. På så sätt kan vem som
            helst som hittar din förlorade hund eller katt enkelt skanna
            QR-koden för att få tillgång till din kontaktinformation och
            returnera din hund eller katt till dig. Vår hemsida är enkel att
            använda och har säkerhet som prioriteras för att skydda din och din
            hund eller katts information.
          </p>
        </div>
      </div>
      <hr />
    </div>
  );
}
