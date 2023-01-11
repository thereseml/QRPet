import React, { ChangeEvent, useState } from "react";
import { IPets } from "./models/IPets";
export function RegisterPets({}) {
  const [newPet, setNewPet] = useState<IPets>({
    name: "",
    petType: "",
    breed: "",
    color: "",
    chipNr: 0,
    image: "",
    details: "",
  });

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    let name = e.target.name;
    setNewPet({ ...newPet, [name]: e.target.value });
  }

  function handleSubmit() {
    console.log("registrering!");
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
            type="number"
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
        <button type="button" onChange={handleSubmit}>
          Lägg till djur
        </button>
      </form>
    </div>
  );
}
