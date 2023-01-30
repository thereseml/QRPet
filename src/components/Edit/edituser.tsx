import axios from "axios";
import { useEffect, useState } from "react";
import { INewUser } from "../models/INewUser";

export function EditUser(user: any) {
  // state för felmedelanden
  const [showEmailError, setShowEmailError] = useState(false);
  const [showPassWordError, setShowPassWordError] = useState(false);
  const [newUser, setNewUser] = useState<INewUser>({
    firstname: "",
    lastname: "",
    useremail: "",
    password: "",
    phone: 0,
    address: "",
    city: "",
    zip: 0,
  });

  useEffect(() => {
    setNewUser(user);
  }, []);

  // api key
  const url = process.env.REACT_APP_API;

  async function handleEditUser(e: any) {
    e.preventDefault();

    // kolla om email är korrekt
    if (!/\S+@\S+\.\S+/.test(newUser.useremail)) {
      setShowEmailError(true);

      return;
    }
    // kolla om lösenordet är korrekt
    if (newUser.password.length < 6) {
      setShowPassWordError(true);
      return;
    }

    //headers att skicka med
    const headers = {
      "Content-Type": "application/json",
    };

    await axios
      .put(`${url}users/update/${user._id}`, newUser, { headers })
      .then((res) => {
        console.log(res.data);
      });

    window.location.reload();
  }

  return (
    <>
      <div>
        <h3>Ändra dina uppgifter</h3>
        <form className="newUserForm" onSubmit={handleEditUser}>
          <div className="formDiv">
            <label>Förnamn:</label>
            <input
              type="text"
              value={newUser.firstname}
              onChange={(e) => {
                setNewUser({ ...newUser, firstname: e.target.value });
              }}
            />
          </div>
          <div className="formDiv">
            <label>Efternamn:</label>
            <input
              type="text"
              value={newUser.lastname}
              onChange={(e) => {
                setNewUser({ ...newUser, lastname: e.target.value });
              }}
            />
          </div>
          <div className="formDiv">
            <label>E-post:</label>
            <input
              type="e-mail"
              value={newUser.useremail}
              onChange={(e) => {
                setNewUser({ ...newUser, useremail: e.target.value });
              }}
            />
          </div>
          <div className="formDiv">
            <label>Telefon:</label>
            <input
              type="number"
              value={newUser.phone}
              onChange={(e) => {
                setNewUser({ ...newUser, phone: e.target.valueAsNumber });
              }}
            />
          </div>
          <div className="formDiv">
            <label>Adress:</label>
            <input
              type="text"
              value={newUser.address}
              onChange={(e) => {
                setNewUser({ ...newUser, address: e.target.value });
              }}
            />
          </div>
          <div className="formDiv">
            <label>Stad:</label>
            <input
              type="text"
              value={newUser.city}
              onChange={(e) => {
                setNewUser({ ...newUser, city: e.target.value });
              }}
            />
          </div>
          <div className="formDiv">
            <label>Postnummer:</label>
            <input
              type="number"
              value={newUser.zip}
              onChange={(e) => {
                setNewUser({ ...newUser, zip: e.target.valueAsNumber });
              }}
            />
          </div>
          <button type="submit">Ändra</button>
        </form>
        {showEmailError && (
          <div className="ErrorMsg">Vänligen ange en giltlig e-post!</div>
        )}
        {showPassWordError && (
          <div className="ErrorMsg">
            Lösenord måste bestå av minst 6 tecken!
          </div>
        )}
      </div>
    </>
  );
}
