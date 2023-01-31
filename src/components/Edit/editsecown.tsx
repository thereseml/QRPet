import axios from "axios";
import { useEffect, useState } from "react";
import { ISecOwn } from "../models/ISecOwn";

export function EditSecOwn(secOwn: ISecOwn) {
  // state för att ändra extra ägare
  const [newSecOwn, setNewSecOwn] = useState<ISecOwn>({
    _id: secOwn._id,
    firstname: "",
    lastname: "",
    phone: 0,
    address: "",
    city: "",
    zip: 0,
    ownerId: secOwn.ownerId,
  });

  useEffect(() => {
    setNewSecOwn(secOwn);
  }, []);

  // api key
  const url = process.env.REACT_APP_API;

  // funktion för att ändra extra ägare
  async function handleEditSecOwn(e: any) {
    e.preventDefault();
    //headers att skicka med
    const headers = {
      "Content-Type": "application/json",
    };

    await axios
      .put(`${url}secondOwner/update/${secOwn._id}`, newSecOwn, {
        headers,
      })
      .then((res) => {
        console.log(res.data);
        console.log(newSecOwn);
      });

    window.location.reload();
  }

  return (
    <>
      <form className="changeSecOwnForm" onSubmit={handleEditSecOwn}>
        <label>Förnamn:</label>
        <input
          type="text"
          value={newSecOwn.firstname}
          onChange={(e) => {
            setNewSecOwn({ ...newSecOwn, firstname: e.target.value });
          }}
        />
        <label>Efternamn:</label>
        <input
          type="text"
          value={newSecOwn.lastname}
          onChange={(e) => {
            setNewSecOwn({ ...newSecOwn, lastname: e.target.value });
          }}
        />
        <label>Telefon:</label>
        <input
          type="number"
          value={newSecOwn.phone}
          onChange={(e) => {
            setNewSecOwn({ ...newSecOwn, phone: e.target.valueAsNumber });
          }}
        />
        <label>Adress:</label>
        <input
          type="text"
          value={newSecOwn.address}
          onChange={(e) => {
            setNewSecOwn({ ...newSecOwn, address: e.target.value });
          }}
        />
        <label>Ort:</label>
        <input
          type="text"
          value={newSecOwn.city}
          onChange={(e) => {
            setNewSecOwn({ ...newSecOwn, city: e.target.value });
          }}
        />
        <label>Postnummer:</label>
        <input
          type="number"
          value={newSecOwn.zip}
          onChange={(e) => {
            setNewSecOwn({ ...newSecOwn, zip: e.target.valueAsNumber });
          }}
        />
        <button type="submit">Ändra</button>
      </form>
    </>
  );
}
