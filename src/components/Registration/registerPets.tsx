import axios from "axios";
import { ChangeEvent, useState } from "react";
import { useParams } from "react-router-dom";
import { GetPetById } from "../functions/getPetbyId";
import { IPets } from "../models/IPets";
import "./Registration.scss";

export function RegisterPets() {
  // hämta id från url
  const userId = useParams();
  let ID = userId.id;

  // api key
  const url = process.env.REACT_APP_API;

  // state för att spara in data från formuläret
  const [newPet, setNewPet] = useState<IPets>({
    name: "",
    petType: "",
    breed: "",
    color: "",
    details: "",
    ownerId: ID,
  });

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    let name = e.target.name;
    setNewPet({ ...newPet, [name]: e.target.value });
  }

  function handleSubmit(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    //headers att skicka med
    const headers = {
      "Content-Type": "application/json",
    };
    // posta data till backend
    axios
      .post(`${url}pets/add`, newPet, { headers })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    // töm formuläret
    event.target.reset();
    window.location.reload();
  }

  function handleDone() {
    // skicka till nästa sida
    window.location.href = `/user/${ID}/secondowner`;
  }

  return (
    <div>
      <h3>Registrera dina djur!</h3>
      <form className="newPetForm" onSubmit={handleSubmit}>
        <div className="formDiv">
          <label>Namn:</label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            placeholder="Namn.."
          />
        </div>
        <div className="formDivType">
          <label>Djurtyp:</label>
          <div className="RadioInput">
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
        </div>
        <div className="formDiv">
          <label>Ras:</label>
          <input
            type="text"
            name="breed"
            onChange={handleChange}
            placeholder="Ras.."
          />
        </div>
        <div className="formDiv">
          <label>Färg:</label>
          <input
            type="text"
            name="color"
            onChange={handleChange}
            placeholder="Färg.."
          />
        </div>
        <div className="formDiv">
          <label>Övriga detaljer:</label>
          <input
            type="text"
            name="details"
            onChange={handleChange}
            placeholder="Överiga detaljer..."
          ></input>
        </div>
        <button type="submit">Lägg till djur</button>
      </form>

      <div className="allPets">
        <h4>Dina registrerade djur</h4>
        <div className="tableDiv">
          <h4>Namn</h4>
          <h4>Djurtyp</h4>
          <h4>Ras</h4>
          <h4>Färg</h4>
          <h4>Övriga detaljer</h4>
          <h4>Ta bort</h4>
        </div>
        <GetPetById />
      </div>
      <div className="doneButton">
        <button type="button" onClick={handleDone}>
          Klar
        </button>
      </div>
    </div>
  );
}
