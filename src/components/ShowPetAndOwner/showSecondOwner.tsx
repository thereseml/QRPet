import axios from "axios";
import { ISecOwn } from "../models/ISecOwn";
import "./showpet.scss";

export function ShowSecondOwner(props: ISecOwn) {
  // api key
  const url = process.env.REACT_APP_API;

  // funktion för att ta bort en extra ägare
  async function handleDelete() {
    await axios
      .delete(`${url}secondOwner/${props._id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    setTimeout(() => {
      console.log("Din extra ägare är nu borttagen!");
      window.location.reload();
    }, 500);
  }

  return (
    <>
      <div className="secondOwnerDiv" key={props._id}>
        <p className="pName">
          {props.firstname} {props.lastname}
        </p>
        <p>{props.phone}</p>
        <p>{props.address}</p>
        <p>{props.city}</p>
        <p>{props.zip}</p>
        <button type="button" onClick={handleDelete}>
          Ta bort
        </button>
      </div>
    </>
  );
}
