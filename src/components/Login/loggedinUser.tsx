import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetPetById } from "../functions/getPetbyId";
import { GetSecOwn } from "../functions/getSecOwn";
import { INewUser } from "../models/INewUser";
import { QRCodeCanvas } from "qrcode.react";
import "./login.scss";

export function LoggedInUser() {
  // hämta id från url
  const userId = useParams();
  let ID = userId.id;

  const [user, setUser] = useState<INewUser>();

  useEffect(() => {
    axios.get(`http://localhost:8000/users/${ID}`).then((res) => {
      console.log(res);
      setUser(res.data);
    });
  }, []);

  // ladda ner QR Koden
  const downloadQR = () => {
    const canvas = document.getElementById("123456") as HTMLCanvasElement;
    const pngUrl = canvas.toDataURL("image/png");
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = "123456.png";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <>
      <div className="LoggedinDiv">
        <h3>
          Välkommen {user?.firstname} {user?.lastname}!
        </h3>
        <div className="UpperDiv">
          <div className="OwnerDiv">
            <h5>Dina uppgifter:</h5>
            <p>Telefon: {user?.phone}</p>
            <p>E-post: {user?.useremail}</p>
            <p>
              Adress: {user?.address}, {user?.city} {user?.zip}
            </p>
          </div>
          <div className="QRDiv">
            <h5>Din QR Kod:</h5>
            <QRCodeCanvas
              value={`http://localhost:3000/QrInfo/${ID}`}
              size={200}
              bgColor={"#ffffff"}
              fgColor={"#000000"}
              level={"L"}
              includeMargin={false}
              id="123456"
            />
            <button type="button" onClick={downloadQR}>
              Ladda ner QR kod
            </button>
          </div>
        </div>
        <div className="PetDiv">
          <h5>Dina djur:</h5>
          <GetPetById />
        </div>
        <div className="SecOwnerDiv">
          <h5>Dina extra ägare:</h5>
          <GetSecOwn />
        </div>
      </div>
    </>
  );
}