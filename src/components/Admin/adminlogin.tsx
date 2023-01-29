import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";
import { IAdminUser } from "../models/IadminUser";
import "../../index.scss";
import "./admin.scss";

export function AdminLogin() {
  // state för felmedelanden
  const [wrongLogin, setWrongLogin] = useState(false);

  // state för att spara in data från formuläret
  const [adminUser, SetAdminUser] = useState<IAdminUser>({
    adminemail: "",
    password: "",
  });

  useEffect(() => {
    const getLocal = localStorage.getItem("AdminID");
    const localAdmin = JSON.parse(getLocal!);

    if (localAdmin !== null) {
      window.location.href = `/admin/${localAdmin}/loggedinadmin`;

      return;
    }
  }, []);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    let name = e.target.name;
    SetAdminUser({ ...adminUser, [name]: e.target.value });
  }
  // api key
  const url = process.env.REACT_APP_API;

  async function Login() {
    await axios.post(`${url}admin/login`, adminUser).then((res) => {
      const ID = res.data.id;
      // spara som inloggad
      localStorage.setItem("AdminID", JSON.stringify(ID));

      console.log(res.data);

      if (res.data.status === "error") {
        setWrongLogin(true);
      } else {
        // skicka till nästa sida
        window.location.href = `/admin/${ID}/loggedinadmin`;
      }
    });
  }

  function handleLogin() {
    Login();
    console.log("loggain!");
  }

  return (
    <>
      <div className="adminLogin">
        <h3>Logga in som Admin!</h3>
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
      </div>
    </>
  );
}
