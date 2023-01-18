import "./home.scss";
import CatDogCat from "../../img/CatDogCat.png";
import { FaPaw, FaUserAlt, FaDog, FaUserFriends, FaCat } from "react-icons/fa";
import phoneSite from "../../img/PhoneSite.png";
import dogQR from "../../img/dogQR.png";
import { HiDocumentAdd } from "react-icons/hi";
import { HiQrCode } from "react-icons/hi2";

export function Home() {
  return (
    <>
      <div className="home">
        <div className="homeText">
          <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h1>
          <h5>
            In at dictum felis. Vestibulum cursus, purus in tincidunt suscipit,
            nibh tellus fringilla enim, eu condimentum tortor nisl sit amet
            augue.
          </h5>
        </div>
        <div className="homeImg">
          <img
            className="CatDogImg"
            src={CatDogCat}
            alt="Two Cats And One Dog"
          />
        </div>
        <div className="UserStats">
          <h3>In nec dapibus massa</h3>
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
        <div className="siteInfo">
          <h1>
            Nunc finibus sit amet
            <br /> nunc ut viverra.
          </h1>
          <div className="sidebysideHome">
            <img className="phoneImg" src={phoneSite} />
            <p>
              Maecenas maximus tristique convallis. Praesent at sodales erat.
              Proin ac posuere eros, et vestibulum diam. Vestibulum dictum
              imperdiet urna vulputate porta. Nunc ultrices quam in dui
              consectetur, a condimentum turpis malesuada. Nam condimentum, elit
              nec varius elementum, dui enim gravida augue, ut pulvinar leo ex
              consectetur risus. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.
            </p>
          </div>
          <hr />
        </div>
        <div className="aboutDiv">
          <div className="stepOne">
            <FaUserFriends fontSize="50px" />
            <FaDog fontSize="50px" />
            <FaCat fontSize="50px" />
            <div className="aboutDivText">
              <h3>1</h3>
              <p>
                Pellentesque facilisis enim id bibendum cursus. Morbi sem massa,
                consequat quis lacinia vel, gravida a sapien.
              </p>
            </div>
          </div>
          <div className="stepTwo">
            <HiDocumentAdd fontSize="80px" />
            <div className="aboutDivText">
              <h3>2</h3>
              <p>
                Aenean vulputate, eros sit amet auctor condimentum, sapien arcu
                sollicitudin elit, sit amet vehicula turpis augue nec elit.
              </p>
            </div>
          </div>
          <div className="stepThree">
            <HiQrCode fontSize="80px" />
            <div className="aboutDivText">
              <h3>3</h3>
              <p>
                Phasellus consequat leo at dignissim porta. Nullam pharetra
                efficitur dictum.
              </p>
            </div>
          </div>
          <div className="stepFour">
            <div className="aboutDivText">
              <h3>4</h3>
              <p>
                Suspendisse id elementum ex, eget sollicitudin ipsum. Nam felis
                neque, ornare nec lacinia sit amet, scelerisque quis justo.
              </p>
            </div>
            <img
              src={dogQR}
              className="dogQR"
              alt="Dog whit QR code in collar"
            />
          </div>
        </div>
      </div>
    </>
  );
}
