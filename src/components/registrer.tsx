import { ChangeEvent, useState } from "react";
import { INewUser } from "./models/INewUser";
import { RegisterPets } from "./registerPets";

export function Register() {
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

  function handleSubmit() {
    console.log("registrering!");
  }

  function handleRegister() {
    console.log("registrering klar!");
  }

  return (
    <>
      <h3>Registrera dig & dina djur!</h3>

      <div>
        <form className="newUserForm">
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
          <button type="button" onChange={handleSubmit}>
            Lägg till ägare
          </button>
        </form>
      </div>

      <RegisterPets />
      <button type="button" onChange={handleRegister}>
        Klar med registrering
      </button>
    </>
  );
}
