import axios from "axios";
import { ChangeEvent, useState } from "react";
import { useParams } from "react-router-dom";
import "../../index.scss";

export function DeleteUser() {
  // state för radera knapp
  const [changeButton, setChangeButton] = useState(true);
  // hämta id från url
  const userId = useParams();
  let ID = userId.id;

  // hämta url
  const url = process.env.REACT_APP_API;

  function handleCheck(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.checked) {
      setChangeButton(false);
    } else {
      setChangeButton(true);
    }
  }

  async function handleDelete() {
    await axios.delete(`${url}users/${ID}`).then((res) => {
      console.log(res);
    });

    // ta bort djur med ägarens ID
    await axios.delete(`${url}pets/owner/${ID}`).then((res) => {
      console.log(res.data);
    });

    // ta bort andra ägare med ägarens ID
    await axios.delete(`${url}secondOwner/owner/${ID}`).then((res) => {
      console.log(res.data);
    });

    setTimeout(() => {
      window.location.href = "/";
      localStorage.removeItem("OwnerID");
    }, 100);
  }

  return (
    <>
      <div className="DeleteDiv">
        <input
          type="checkbox"
          className="deleteCheckBox"
          onChange={handleCheck}
        />
        <label>Är du säker på att du vill ta bort ditt konto?</label>
      </div>
      <button onClick={handleDelete} disabled={changeButton}>
        Ta bort
      </button>
    </>
  );
}
