import { ChangeEvent, useState } from "react";

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
    console.log("loggain!");
  }

  return (
    <>
      <h3>Logga in som användare!</h3>
      <div>
        <form>
          <div>
            <label>E-post:</label>
            <input type="text" name="useremail" onChange={handleChange} />
          </div>
          <div>
            <label>Lösenord:</label>
            <input type="password" name="password" onChange={handleChange} />
          </div>
          <button type="button" onChange={handleSubmit}>
            Logga in
          </button>
        </form>
      </div>
    </>
  );
}
