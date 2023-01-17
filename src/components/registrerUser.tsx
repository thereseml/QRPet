import axios from "axios";
import { ChangeEvent, useState } from "react";
import { INewUser } from "./models/INewUser";

export function RegisterUser() {
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

  // funktion för att posta data och spara responset
  async function postData() {
    //headers att skicka med
    const headers = {
      "Content-Type": "application/json",
    };

    // posta data till backend
    const response = await axios.post(
      "http://localhost:8000/users/add",
      newUser,
      { headers }
    );

    // spara response/idt
    const ID = response.data.id;
    // skicka till nästa sida
    window.location.href = `http://localhost:3000/user/${ID}`;
  }

  // funktion för att hantera knappen registrera
  function handleRegister(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
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
          <div>
            <label>Förnamn:</label>
            <input
              type="text"
              name="firstname"
              onChange={handleChange}
              placeholder="Förnamn.."
            />
          </div>
          <div>
            <label>Efternamn:</label>
            <input
              type="text"
              name="lastname"
              onChange={handleChange}
              placeholder="Efternamn.."
            />
          </div>
          <div>
            <label>E-post:</label>
            <input
              type="e-mail"
              name="useremail"
              onChange={handleChange}
              placeholder="E-post.."
            />
          </div>
          <div>
            <label>Lösenord</label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              placeholder="Lösenord.."
            />
          </div>
          <div>
            <label>Telefon:</label>
            <input
              type="number"
              name="phone"
              onChange={handleChange}
              placeholder="Telefon.."
            />
          </div>
          <div>
            <label>Adress:</label>
            <input
              type="text"
              name="address"
              onChange={handleChange}
              placeholder="Adress.."
            />
          </div>
          <div>
            <label>Stad:</label>
            <input
              type="text"
              name="city"
              onChange={handleChange}
              placeholder="Stad.."
            />
          </div>
          <div>
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
      </div>
    </>
  );
}