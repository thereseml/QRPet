import dogQR from "../../img/dogQR.png";
import { HiDocumentAdd } from "react-icons/hi";
import { HiQrCode } from "react-icons/hi2";
import { FaDog, FaUserFriends, FaCat } from "react-icons/fa";
import "./howitwork.scss";

export function Howitwork({}) {
  return (
    <>
      <h1>Hur fungerar QR Pet?</h1>
      <div className="aboutDiv">
        <div className="stepOne">
          <div className="LogosDiv">
            <FaUserFriends fontSize="50px" />
            <FaDog fontSize="50px" />
            <FaCat fontSize="50px" />
          </div>
          <div className="aboutDivText">
            <h3>1</h3>
            <p>
              Samla hela familjen framför datorn, surfplattan eller mobilen. Läs
              igenom vår hemsida för att få förståelse för konceptet.
            </p>
          </div>
        </div>
        <div className="stepTwo">
          <div className="LogosDiv">
            <HiDocumentAdd fontSize="80px" />
          </div>
          <div className="aboutDivText">
            <h3>2</h3>
            <p>
              Du registrerar dig och dina husdjur genom att klicka på{" "}
              <a href="/register">registrera</a>, det går även att registrera
              fler vänner eller familjemedlemmar ifall det önskas.
            </p>
          </div>
        </div>
        <div className="stepThree">
          <div className="LogosDiv">
            <HiQrCode fontSize="80px" />
          </div>
          <div className="aboutDivText">
            <h3>3</h3>
            <p>
              När registreringen är klar får du en QR Kod som du enkelt kan
              ladda ner och sätta i ditt husdjurs halsband. Du kan även{" "}
              <a href="userlogin">logga in</a> och ändra eller ta bort dina
              uppgifter.
            </p>
          </div>
        </div>
        <div className="stepFour">
          <div className="aboutDivText">
            <h3>4</h3>
            <p>
              Om något händer med ditt husdjur och någon hittar det kan de
              enkelt skanna QR koden och komma i kontakt med dig, om de inte får
              kontakt med dig så kan de enkelt kontakta någon av de andra ägarna
              du fyllt i.
            </p>
          </div>
          <img src={dogQR} className="dogQR" alt="Dog whit QR code in collar" />
        </div>
      </div>
    </>
  );
}
