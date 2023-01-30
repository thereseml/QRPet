import axios from "axios";
import { useState } from "react";
import { EditSecOwn } from "../Edit/editsecown";
import { ISecOwn } from "../models/ISecOwn";
import "./showpet.scss";

export function ShowSecondOwner(props: ISecOwn) {
  // state för visa redigera extra ägare
  const [showSecOwnEdit, setShowSecOwnEdit] = useState(false);

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

  function handleEdit() {
    setShowSecOwnEdit(!showSecOwnEdit);
  }

  return (
    <>
      <div className="secondOwnerDiv" key={props._id}>
        <p className="pName">
          {props.firstname} {props.lastname}
        </p>
        <p>0{props.phone}</p>
        <p>
          {props.address},<br /> {props.city}, {props.zip}
        </p>
        <button type="button" onClick={handleEdit}>
          Ändra
        </button>
        <button type="button" onClick={handleDelete}>
          Ta bort
        </button>
      </div>
      {showSecOwnEdit && <EditSecOwn {...props} />}
    </>
  );
}
