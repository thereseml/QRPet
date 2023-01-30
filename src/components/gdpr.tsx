import { Link } from "react-router-dom";
import "../index.scss";

export function GDPR() {
  return (
    <>
      <div className="gdpr">
        <div className="gdprInfo">
          <h3>GDPR Policy</h3>
          <p>
            Vi tar din integritet och säkerhet av din information på största
            allvar. Vår hemsida är fullt kompatibel med EU:s General Data
            Protection Regulation (GDPR) och vi följer alla riktlinjer för att
            säkerställa att din information hanteras på ett säkert och
            ansvarsfullt sätt.{" "}
          </p>

          <p>
            När du registrerar dig på vår hemsida och lägger till information om
            dig eller ditt djur, (namn, epost, telefonnummer, adressuppgifter).
            Denna information används för att generera en unik QR-kod som du kan
            placera på halsbandet för din hund eller katt. Den informationen
            delas endast med den som hittar ditt husdjur, för att ni lättast ska
            få kontakt.
          </p>

          <p>
            Vi förvarar alltid din information säkert och krypterat på våra
            servrar och vi har implementerat flera säkerhetsåtgärder för att
            skydda mot obehörig åtkomst och dataläckage. Vi delar inte din
            information med någon annan tredje part, förutom i de fall där det
            är absolut nödvändigt för att tillhandahålla vår tjänst. Du har rätt
            att få tillgång till, ändra eller radera din information när som
            helst. Du kan också när som helst välja att avsluta din registrering
            på vår hemsida och ta bort all din information. Vi förbehåller oss
            rätten att ändra denna GDPR-policy när som helst. Så se till att
            läsa igenom den regelbundet för att vara uppdaterad om eventuella
            ändringar.
          </p>
          <p>
            Om du har några frågor eller funderingar om vår GDPR-policy,
            vänligen kontakta oss. Vi står alltid till tjänst för att hjälpa
            dig.
          </p>
          <button className="gdpr__button">
            <Link to="/register">tillbaka</Link>
          </button>
        </div>
      </div>
    </>
  );
}
