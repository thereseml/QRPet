import { ChangeEvent, useState } from "react";
import { IAdminUser } from "./models/IadminUser";

export function AdminLogin() {
  const [adminUser, SetAdminUser] = useState<IAdminUser>({
    username: "",
    password: "",
  });

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    let name = e.target.name;
    SetAdminUser({ ...adminUser, [name]: e.target.value });
  }

  function handleSubmit() {
    console.log("loggain!");
  }

  return (
    <>
      <h3>Logga in som Admin!</h3>
      <div>
        <form>
          <div>
            <label>Användarnamn:</label>
            <input type="text" name="username" />
          </div>
          <div>
            <label>Lösenord:</label>
            <input type="password" name="password" />
          </div>
          <button type="button" onChange={handleSubmit}>
            Logga in
          </button>
        </form>
      </div>
    </>
  );
}
