import axios from "axios";
import React, { ChangeEvent, useState } from "react";
import { useParams } from "react-router-dom";
import "./Registration.scss";

export function RegisterSecondOwner() {
  // hämta id från url
  const userId = useParams();
  let ID = userId.id;

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
      .post("http://localhost:8000/secondOwner/add", newSecondOwner, {
        headers,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    setTimeout(() => {
      console.log("Din extra ägare är nu registrerad");
      event.target.reset();
    }, 1000);
  }

  function handleDone() {
    // skicka till nästa sida
    // window.location.href = `http://localhost:3000/user/${ID}/userlogin`;
  }

  return (
    <div>
      <form className="newPetForm" onSubmit={handleSubmit}>
        <div>
          <label>Förnamn:</label>
          <input
            type="text"
            name="firstname"
            onChange={handleChange}
            placeholder="Förnamn.."
          />
        </div>
        <div>
          <label>Efternamn:</label>
          <input
            type="text"
            name="lastname"
            onChange={handleChange}
            placeholder="Efternamn.."
          />
        </div>
        <div>
          <label>Telefon:</label>
          <input
            type="number"
            name="phone"
            onChange={handleChange}
            placeholder="Telefon.."
          />
        </div>
        <div>
          <label>Adress:</label>
          <input
            type="text"
            name="address"
            onChange={handleChange}
            placeholder="Adress.."
          ></input>
        </div>
        <div>
          <label>Stad:</label>
          <input
            type="text"
            name="city"
            onChange={handleChange}
            placeholder="Stad.."
          />
        </div>
        <div>
          <label>Postnummer:</label>
          <input
            type="number"
            name="zip"
            onChange={handleChange}
            placeholder="Postnummer.."
          />
        </div>
        <button type="submit">Lägg till ägare</button>
        <button type="button" onClick={handleDone}>
          Klar
        </button>
      </form>
    </div>
  );
}
