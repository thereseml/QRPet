import axios from "axios";
import { ChangeEvent, useState } from "react";
import { IAdminUser } from "../models/IadminUser";
import "../../index.scss";

export function AdminLogin() {
  // state för felmedelanden
  const [showEmailError, setShowEmailError] = useState(false);
  const [showPassWordError, setShowPassWordError] = useState(false);
  const [wrongLogin, setWrongLogin] = useState(false);
  const [loginMsg, setLoginMsg] = useState(false);

  // state för att spara in data från formuläret
  const [adminUser, SetAdminUser] = useState<IAdminUser>({
    firstname: "",
    lastname: "",
    adminemail: "",
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
    await axios
      .post(`${url}admin/add`, adminUser, {
        headers,
      })
      .then((res) => {
        if (res.status === 200) {
          setLoginMsg(true);
        }
      });
  }

  async function Login() {
    await axios.post(`${url}admin/login`, adminUser).then((res) => {
      const ID = res.data.id;
      console.log(res.data);

      if (res.data.status === "error") {
        setWrongLogin(true);
      } else {
        // spara som inloggad
        localStorage.setItem("AdminID", JSON.stringify(ID));

        // skicka till nästa sida
        window.location.href = `/admin/${ID}/loggedinadmin`;
      }
    });
  }

  function handleLogin() {
    Login();
    console.log("loggain!");
  }

  function handleRegister(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();

    // kolla om email är korrekt
    if (!/\S+@\S+\.\S+/.test(adminUser.adminemail)) {
      setShowEmailError(true);

      return;
    }
    // kolla om lösenordet är korrekt
    if (adminUser.password.length < 6) {
      setShowPassWordError(true);
      return;
    }
    //kalla på postfunction med timer
    setTimeout(() => {
      postData();
      event.target.reset();
    }, 500);
  }

  return (
    <>
      <h3>Logga in som Admin!</h3>
      {loginMsg && (
        <div className="AcceptMsg">Du är registrerad, vänligen logga in!</div>
      )}
      <form className="loginForm">
        <div className="formDiv">
          <label>E-post:</label>
          <input type="e-mail" name="adminemail" onChange={handleChange} />
        </div>
        <div className="formDiv">
          <label>Lösenord:</label>
          <input type="password" name="password" onChange={handleChange} />
        </div>
        <button type="button" onClick={handleLogin}>
          Logga in
        </button>
      </form>
      {wrongLogin && <div>Fel e-post eller lösenord!</div>}

      <div className="RegisterDiv">
        <h3>Registrera dig som Admin!</h3>
        <form className="loginForm" onSubmit={handleRegister}>
          <div className="formDiv">
            <label>Förnamn:</label>
            <input type="text" name="firstname" onChange={handleChange} />
          </div>
          <div className="formDiv">
            <label>Efternamn:</label>
            <input type="text" name="lastname" onChange={handleChange} />
          </div>
          <div className="formDiv">
            <label>E-post:</label>
            <input type="e-mail" name="adminemail" onChange={handleChange} />
          </div>
          <div className="formDiv">
            <label>Lösenord:</label>
            <input type="password" name="password" onChange={handleChange} />
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
