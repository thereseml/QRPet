import axios from "axios";
import { ChangeEvent, useState } from "react";
import { INewUser } from "../models/INewUser";
import "./Registration.scss";

export function RegisterUser() {
  // state för felmedelanden
  const [showEmailError, setShowEmailError] = useState(false);
  const [showPassWordError, setShowPassWordError] = useState(false);

  // state för att spara in data från formuläret
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

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    let name = e.target.name;
    setNewUser({ ...newUser, [name]: e.target.value });
  }

  // api key
  const url = process.env.REACT_APP_API;

  // funktion för att posta data och spara responset
  async function postData() {
    //headers att skicka med
    const headers = {
      "Content-Type": "application/json",
    };

    // posta data till backend
    const response = await axios.post(`${url}users/add`, newUser, { headers });

    // spara response/idt
    const ID = await response.data.id;

    // skicka till nästa sida
    window.location.href = `/user/${ID}`;
  }

  // funktion för att hantera knappen registrera
  function handleRegister(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
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

    //kalla på postfunction med timer
    setTimeout(() => {
      postData();
      event.target.reset();
    }, 3000);
  }

  return (
    <>
      <h3>Registrera dig & dina djur!</h3>

      <div>
        <form className="newUserForm" onSubmit={handleRegister}>
          <div className="formDiv">
            <label>Förnamn:</label>
            <input
              type="text"
              name="firstname"
              onChange={handleChange}
              placeholder="Förnamn.."
            />
          </div>
          <div className="formDiv">
            <label>Efternamn:</label>
            <input
              type="text"
              name="lastname"
              onChange={handleChange}
              placeholder="Efternamn.."
            />
          </div>
          <div className="formDiv">
            <label>E-post:</label>
            <input
              type="e-mail"
              name="useremail"
              onChange={handleChange}
              placeholder="E-post.."
            />
          </div>
          <div className="formDiv">
            <label>Lösenord</label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              placeholder="Lösenord.."
            />
          </div>
          <div className="formDiv">
            <label>Telefon:</label>
            <input
              type="number"
              name="phone"
              onChange={handleChange}
              placeholder="Telefon.."
            />
          </div>
          <div className="formDiv">
            <label>Adress:</label>
            <input
              type="text"
              name="address"
              onChange={handleChange}
              placeholder="Adress.."
            />
          </div>
          <div className="formDiv">
            <label>Stad:</label>
            <input
              type="text"
              name="city"
              onChange={handleChange}
              placeholder="Stad.."
            />
          </div>
          <div className="formDiv">
            <label>Postnummer:</label>
            <input
              type="number"
              name="zip"
              onChange={handleChange}
              placeholder="Postnummer.."
            />
          </div>
          <button type="submit">Registrera</button>
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
