import axios from "axios";
import { useState } from "react";
import { IPetsId } from "./models/IPetsId";

export function ShowPet(props: IPetsId) {
  // funktion för att ta bort ett djur
  function handleDelete() {
    setTimeout(() => {
      deletePet();
    }, 500);
  }

  // ta bort ett djur
  function deletePet() {
    axios
      .delete(`http://localhost:8000/pets/${props._id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    window.location.reload();

    setTimeout(() => {
      console.log("Ditt djur är nu borttaget!");
    }, 1000);
  }

  return (
    <>
      <div className="petsDiv" key={props._id}>
        <h2>{props.name}</h2>
        <p>{props.petType}</p>
        <p>{props.breed}</p>
        <p>{props.color}</p>
        <p>{props.chipNr}</p>
        <p>{props.details}</p>
        <p>{props._id}</p>
        <button type="button" onClick={handleDelete}>
          Ta bort
        </button>
      </div>
    </>
  );
}
