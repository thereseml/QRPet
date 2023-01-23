import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetPetById } from "./functions/getPetbyId";
import { GetSecOwn } from "./functions/getSecOwn";
import { INewUser } from "./models/INewUser";

export function LoggedInUser() {
  // hämta id från url
  const userId = useParams();
  let ID = userId.id;

  const [user, setUser] = useState<INewUser>();

  useEffect(() => {
    axios.get(`http://localhost:8000/users/${ID}`).then((res) => {
      console.log(res);
      setUser(res.data);
    });
  }, []);

  return (
    <>
      <h3>
        Välkommen {user?.firstname} {user?.lastname}!
      </h3>
      <h5>Dina uppgifter</h5>
      <p>{user?.address}</p>
      <p>{user?.city}</p>
      <p>{user?.zip}</p>
      <p>{user?.phone}</p>
      <p>{user?.useremail}</p>
      <h5>Mina djur:</h5>
      <GetPetById />
      <h5>Fler registrerade ägare:</h5>
      <GetSecOwn />

      <h5>Din QR Kod:</h5>
    </>
  );
}
