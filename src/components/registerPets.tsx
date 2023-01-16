import axios from "axios";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IPets } from "./models/IPets";

export function RegisterPets() {
  // hämta id från url
  const userId = useParams();
  let ID = userId.id;

  // state för att spara in data från formuläret
  const [newPet, setNewPet] = useState<IPets>({
    name: "",
    petType: "",
    breed: "",
    color: "",
    chipNr: 0,
    image: "",
    details: "",
    ownerId: ID,
  });

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    let name = e.target.name;
    setNewPet({ ...newPet, [name]: e.target.value });
  }
  function handleSubmit() {
    //headers att skicka med
    const headers = {
      "Content-Type": "application/json",
    };

    axios
      .post("http://localhost:8000/pets/add", newPet, { headers })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    setTimeout(() => {
      console.log("Ditt djur är nu registrerat" + newPet.ownerId);

      // skicka till nästa sida
      // window.location.href = `http://localhost:3000/user/${ID}/secondowner`;
    }, 3000);
  }

  return (
    <div>
      <form className="newPetForm">
        <div>
          <label>Namn:</label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            placeholder="Namn.."
          />
        </div>
        <div>
          <label>Djurtyp:</label>
          <input
            type="radio"
            name="petType"
            onChange={handleChange}
            value="Hund"
          />
          <label>Hund</label>
          <input
            type="radio"
            name="petType"
            onChange={handleChange}
            value="Katt"
          />
          <label>Katt</label>
        </div>
        <div>
          <label>Ras:</label>
          <input
            type="text"
            name="breed"
            onChange={handleChange}
            placeholder="Ras.."
          />
        </div>
        <div>
          <label>Färg:</label>
          <input
            type="text"
            name="color"
            onChange={handleChange}
            placeholder="Färg.."
          />
        </div>
        <div>
          <label>Chip Nummer:</label>
          <input
            type="number"
            name="chipNr"
            onChange={handleChange}
            placeholder="Chip nummer.."
          ></input>
        </div>
        <div>
          <label>Bild:</label>
          <input type="file" name="image" onChange={handleChange} />
        </div>
        <div>
          <label>Övriga detaljer:</label>
          <input
            type="text"
            name="details"
            onChange={handleChange}
            placeholder="Överiga detaljer..."
          ></input>
        </div>
        <button type="button" onClick={handleSubmit}>
          Lägg till djur
        </button>
      </form>
    </div>
  );
}
