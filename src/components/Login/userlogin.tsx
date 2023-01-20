import axios from "axios";
import { ChangeEvent, useState } from "react";
import "./login.scss";

export function UserLogin() {
  const [loginUser, SetAdminUser] = useState({
    useremail: "",
    password: "",
  });

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    let name = e.target.name;
    SetAdminUser({ ...loginUser, [name]: e.target.value });
  }

  function handleSubmit() {
    Login();
    console.log("loggain!");
  }

  function Login() {
    axios.post("http://localhost:8000/users/login", loginUser).then((res) => {
      console.log(res);
      // skicka till nästa sida
      //   window.location.href = `http://localhost:3000/user/${ID}`;
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
      </div>
    </>
  );
}
