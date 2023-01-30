import axios from "axios";
import { ChangeEvent, useState } from "react";
import { useParams } from "react-router-dom";
import { GetSecOwn } from "../functions/getSecOwn";
import "./Registration.scss";

export function RegisterSecondOwner() {
  // hämta id från url
  const userId = useParams();
  let ID = userId.id;

  // api key
  const url = process.env.REACT_APP_API;

  // state för att spara in data från formuläret
  const [newSecondOwner, setNewSecondOwner] = useState({
    firstname: "",
    lastname: "",
    phone: 0,
    address: "",
    city: "",
    zip: 0,
    ownerId: ID,
  });

  // state för att visa alla ägare
  const [showSecOwn, setShowSecOwn] = useState(false);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    let name = e.target.name;
    setNewSecondOwner({ ...newSecondOwner, [name]: e.target.value });
  }

  function handleSubmit(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    //headers att skicka med
    const headers = {
      "Content-Type": "application/json",
    };

    axios
      .post(`${url}secondOwner/add`, newSecondOwner, {
        headers,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    // töm formuläret
    event.target.reset();
    setShowSecOwn(true);
  }

  function handleDone() {
    localStorage.setItem("OwnerID", JSON.stringify(ID));

    // skicka till nästa sida
    window.location.href = `/user/${ID}/userlogedin`;
  }

  return (
    <div>
      <h3>Registrera fler ägare</h3>
      <form className="secondOwnerForm" onSubmit={handleSubmit}>
        <div className="formDiv">
          <label>Förnamn:</label>
          <input
            type="text"
            name="firstname"
            onChange={handleChange}
            placeholder="Förnamn.."
          />
        </div>
        <div className="formDiv">
          <label>Efternamn:</label>
          <input
            type="text"
            name="lastname"
            onChange={handleChange}
            placeholder="Efternamn.."
          />
        </div>
        <div className="formDiv">
          <label>Telefon:</label>
          <input
            type="number"
            name="phone"
            onChange={handleChange}
            placeholder="Telefon.."
          />
        </div>
        <div className="formDiv">
          <label>Adress:</label>
          <input
            type="text"
            name="address"
            onChange={handleChange}
            placeholder="Adress.."
          ></input>
        </div>
        <div className="formDiv">
          <label>Stad:</label>
          <input
            type="text"
            name="city"
            onChange={handleChange}
            placeholder="Stad.."
          />
        </div>
        <div className="formDiv">
          <label>Postnummer:</label>
          <input
            type="number"
            name="zip"
            onChange={handleChange}
            placeholder="Postnummer.."
          />
        </div>
        <button type="submit">Lägg till ägare</button>
      </form>
      {showSecOwn && (
        <div className="allSecondOwners">
          <h4>Dina registrerade ägare</h4>
          <div className="tableDiv">
            <h4>Namn</h4>
            <h4>Telefon</h4>
            <h4>Adress</h4>
            <h4>Ta bort</h4>
          </div>
          <GetSecOwn />
        </div>
      )}
      <div className="doneButton">
        <button type="button" onClick={handleDone}>
          Klar
        </button>
      </div>
    </div>
  );
}
