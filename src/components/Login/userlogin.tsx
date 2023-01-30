import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";
import "./login.scss";

export function UserLogin() {
  // state för felmedelanden
  const [wrongLogin, setWrongLogin] = useState(false);

  const [loginUser, SetAdminUser] = useState({
    useremail: "",
    password: "",
  });

  useEffect(() => {
    const getLocal = localStorage.getItem("OwnerID");
    const localOwner = JSON.parse(getLocal!);

    if (localOwner !== null) {
      window.location.href = `/user/${localOwner}/userlogedin`;
      return;
    }
  }, []);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    let name = e.target.name;
    SetAdminUser({ ...loginUser, [name]: e.target.value });
  }

  function handleSubmit() {
    Login();
    console.log("loggain!");
  }

  // api key
  const url = process.env.REACT_APP_API;

  function Login() {
    axios.post(`${url}users/login`, loginUser).then((res) => {
      const ID = res.data.id;

      if (res.data.status === "error") {
        setWrongLogin(true);
        return;
      }

      // spara som inloggad
      localStorage.setItem("OwnerID", JSON.stringify(ID));

      // skicka till nästa sida
      window.location.href = `/user/${ID}/userlogedin`;
    });
  }

  return (
    <>
      <div className="loginDiv">
        <h3>Logga in som användare!</h3>
        <form className="loginForm">
          <div className="formDiv">
            <label>E-post:</label>
            <input
              type="text"
              name="useremail"
              placeholder="E-post..."
              onChange={handleChange}
            />
          </div>
          <div className="formDiv">
            <label>Lösenord:</label>
            <input
              type="password"
              name="password"
              placeholder="Lösenord.."
              onChange={handleChange}
            />
          </div>
          <button type="button" onClick={handleSubmit}>
            Logga in
          </button>
        </form>
        {wrongLogin && (
          <div className="ErrorMsg">Fel e-post eller lösenord!</div>
        )}
      </div>
    </>
  );
}
