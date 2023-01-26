import axios from "axios";
import { IPetsId } from "../models/IPetsId";
import "./showpet.scss";

export function ShowPet(props: IPetsId) {
  // api key
  const url = process.env.REACT_APP_API;

  // funktion för att ta bort ett djur
  async function handleDelete() {
    await axios
      .delete(`${url}pets/${props._id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    setTimeout(() => {
      console.log("Ditt djur är nu borttaget!");
      window.location.reload();
    }, 500);
  }

  return (
    <>
      <li className="petsDiv">
        <p className="pName">{props.name}</p>
        <p>{props.petType}</p>
        <p>{props.breed}</p>
        <p>{props.color}</p>
        <p>{props.details}</p>
        <button type="button" onClick={handleDelete}>
          Ta bort
        </button>
      </li>
    </>
  );
}
