import axios from "axios";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ISecOwn } from "../models/ISecOwn";
import { ShowSecondOwner } from "../ShowPetAndOwner/showSecondOwner";
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

  // spara alla secondOwners
  const [allSecondOwners, setAllSecondOwners] = useState<ISecOwn[]>([]);

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
      getRegisteredSecondOwner();
      event.target.reset();
    }, 1000);
  }

  //hämta registrerade second Owners i lista
  useEffect(() => {
    getRegisteredSecondOwner();
  }, []);

  // hämta registrerade second owners
  function getRegisteredSecondOwner() {
    axios
      .get<ISecOwn[]>(`http://localhost:8000/secondOwner/owner/${ID}`)
      .then((res) => {
        setAllSecondOwners(res.data);
      });
  }

  // skapar lista för alla second owners
  let showAllSecondOwners = allSecondOwners.map((secondOwner) => {
    return (
      <>
        <ShowSecondOwner {...secondOwner} />
      </>
    );
  });

  function handleDone() {
    // skicka till nästa sida
    // window.location.href = `http://localhost:3000/user/${ID}/userlogin`;
  }

  return (
    <div>
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
        <button type="button" onClick={handleDone}>
          Klar
        </button>
      </form>

      <div className="allSecondOwners">
        <h3>Registrerade extra ägare</h3>
        <div className="tableDiv">
          <h4>Namn</h4>
          <h4>Telefon</h4>
          <h4>Adress</h4>
          <h4>Stad</h4>
          <h4>Postnummer</h4>
          <h4>Ta bort</h4>
        </div>
        {showAllSecondOwners}
      </div>
    </div>
  );
}
