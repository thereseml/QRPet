import axios from "axios";
import { useState } from "react";
import { IPetsId } from "./models/IPetsId";

export function ShowPet(props: IPetsId) {
  const [propsPet, setPropsPet] = useState<IPetsId>({
    name: props.name,
    image: props.image,
    petType: props.petType,
    breed: props.breed,
    color: props.color,
    chipNr: props.chipNr,
    details: props.details,
    ownerId: props.ownerId,
    _id: props._id,
  });

  function handleDelete() {
    setPropsPet(props);

    setTimeout(() => {
      deletePet();
    }, 500);
  }

  function deletePet() {
    // ta bort ett djur
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
