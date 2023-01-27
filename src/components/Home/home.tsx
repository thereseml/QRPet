import { Howitwork } from "./../Howitwork/howitwork";
import { About } from "../About/about";
import "./home.scss";
import CatDogCat from "../../img/CatDogCat.png";
import { FaPaw, FaUserAlt } from "react-icons/fa";

export function Home() {
  return (
    <>
      <div className="home">
        <div className="homeHero">
          <div className="homeText">
            <h1>Välkommen till vår hemsida för husdjursägare!</h1>
            <h5>
              Skydda din hund eller katt med vår unika
              QR-kodregistreringsservice. Registrera din hund eller katt idag
              och ge dem en chans att återförenas med dig om de skulle bli
              förlorade.
              <br />
              Enkel, säker och effektiv - välkommen till vår hemsida!
            </h5>
          </div>
          <div className="homeImg">
            <img
              className="CatDogImg"
              src={CatDogCat}
              alt="Two Cats And One Dog"
            />
          </div>
        </div>
        <div className="UserStats">
          <h3>Antalet nöjda kunder</h3>
          <div className="statOne">
            <FaPaw fontSize="30px" />
            <h2>+12K</h2>
          </div>
          <hr />
          <div className="statTwo">
            <FaUserAlt fontSize="30px" />
            <h2>+8K</h2>
          </div>
        </div>
        <About />
        <Howitwork />
      </div>
    </>
  );
}
