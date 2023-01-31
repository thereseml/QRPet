import axios from "axios";
import { useEffect, useState } from "react";
import { IPetsId } from "../models/IPetsId";
import "./edit.scss";

export function EditPet(pet: IPetsId) {
  const [newPet, setNewPet] = useState<IPetsId>({
    _id: pet._id,
    name: "",
    petType: "",
    breed: "",
    color: "",
    details: "",
    ownerId: pet.ownerId,
  });

  useEffect(() => {
    setNewPet(pet);
  }, []);

  // api key
  const url = process.env.REACT_APP_API;

  // funktion för att ändra ett djur
  async function handleEditPet(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    //headers att skicka med
    const headers = {
      "Content-Type": "application/json",
    };

    await axios
      .put(`${url}pets/update/${pet._id}`, newPet, { headers })
      .then((res) => {
        console.log(res.data);
      });

    window.location.reload();
  }

  return (
    <>
      <form className="changePetForm" onSubmit={handleEditPet}>
        <label>Namn</label>
        <input
          type="text"
          value={newPet.name}
          onChange={(e) => {
            setNewPet({ ...newPet, name: e.target.value });
          }}
        />
        <label>Djurtyp</label>
        <input
          type="text"
          value={newPet.petType}
          onChange={(e) => {
            setNewPet({ ...newPet, petType: e.target.value });
          }}
        />
        <label>Ras</label>
        <input
          type="text"
          value={newPet.breed}
          onChange={(e) => {
            setNewPet({ ...newPet, breed: e.target.value });
          }}
        />
        <label>Färg</label>
        <input
          type="text"
          value={newPet.color}
          onChange={(e) => {
            setNewPet({ ...newPet, color: e.target.value });
          }}
        />
        <label>Övrigt</label>
        <input
          type="text"
          value={newPet.details}
          onChange={(e) => {
            setNewPet({ ...newPet, details: e.target.value });
          }}
        />
        <button type="submit">Ändra</button>
      </form>
    </>
  );
}
