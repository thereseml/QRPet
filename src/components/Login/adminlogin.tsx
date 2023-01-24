import axios from "axios";
import { ChangeEvent, useState } from "react";
import { ListFormat } from "typescript";
import { IAdminUser } from "../models/IadminUser";
import "./login.scss";

export function AdminLogin() {
  const [adminUser, SetAdminUser] = useState<IAdminUser>({
    username: "",
    password: "",
  });

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    let name = e.target.name;
    SetAdminUser({ ...adminUser, [name]: e.target.value });
  }
  // api key
  const url = process.env.REACT_APP_API;

  // funktion för att posta data
  async function postData() {
    //headers att skicka med
    const headers = {
      "Content-Type": "application/json",
    };

    // posta data till backend
    const response = await axios.post(`${url}admin/add`, adminUser, {
      headers,
    });

    // spara response/idt
    const ID = await response.data.id;
    // skicka till nästa sida
    window.location.href = `/admin/${ID}/loggedinadmin`;
  }

  function Login() {
    axios.post(`${url}admin/login`, adminUser).then((res) => {
      console.log(res);
      const ID = res.data.id;

      // spara som inloggad
      localStorage.setItem("AdminID", JSON.stringify(ID));

      // skicka till nästa sida
      // window.location.href = `/admin/${ID}/loggedinadmin`;
    });
  }

  function handleLogin() {
    Login();
    console.log("loggain!");
  }

  function handleRegister(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    //kalla på postfunction med timer
    setTimeout(() => {
      postData();
      event.target.reset();
    }, 500);
  }

  return (
    <>
      <h3>Logga in som Admin!</h3>
      <form className="loginForm">
        <div className="formDiv">
          <label>Användarnamn:</label>
          <input type="text" name="username" onChange={handleChange} />
        </div>
        <div className="formDiv">
          <label>Lösenord:</label>
          <input type="password" name="password" onChange={handleChange} />
        </div>
        <button type="button" onClick={handleLogin}>
          Logga in
        </button>
      </form>

      <div className="RegisterDiv">
        <h3>Registrera dig som Admin!</h3>
        <form className="loginForm" onSubmit={handleRegister}>
          <div className="formDiv">
            <label>Användarnamn:</label>
            <input type="text" name="username" onChange={handleChange} />
          </div>
          <div className="formDiv">
            <label>Lösenord:</label>
            <input type="password" name="password" onChange={handleChange} />
          </div>
          <button type="submit">Registrera</button>
        </form>
      </div>
    </>
  );
}
