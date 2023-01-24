import axios from "axios";
import { ISecOwn } from "../models/ISecOwn";
import "./showpet.scss";

export function ShowSecondOwner(props: ISecOwn) {
  // funktion för att ta bort en extra ägare
  function handleDelete() {
    setTimeout(() => {
      deleteSecondOwner();
    }, 500);
  }

  // api key
  const url = process.env.REACT_APP_API;

  // ta bort en extra ägare
  function deleteSecondOwner() {
    axios
      .delete(`${url}secondOwner/${props._id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    window.location.reload();

    setTimeout(() => {
      console.log("Din extra ägare är nu borttagen!");
    }, 1000);
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
