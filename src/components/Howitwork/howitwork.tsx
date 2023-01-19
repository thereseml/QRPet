import dogQR from "../../img/dogQR.png";
import { HiDocumentAdd } from "react-icons/hi";
import { HiQrCode } from "react-icons/hi2";
import { FaDog, FaUserFriends, FaCat } from "react-icons/fa";
import "./howitwork.scss";

export function Howitwork({}) {
  return (
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
            Pellentesque facilisis enim id bibendum cursus. Morbi sem massa,
            consequat quis lacinia vel, gravida a sapien.
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
            Aenean vulputate, eros sit amet auctor condimentum, sapien arcu
            sollicitudin elit, sit amet vehicula turpis augue nec elit.
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
        <img src={dogQR} className="dogQR" alt="Dog whit QR code in collar" />
      </div>
    </div>
  );
}
