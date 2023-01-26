import axios from "axios";
import { useEffect, useState } from "react";
import { GetPetById } from "../functions/getPetbyId";
import { IOwners } from "../models/IOwners";
import { IPetsId } from "../models/IPetsId";
import { ISecOwn } from "../models/ISecOwn";

export function LoggedinAdmin() {
  // state för alla djuren som hämtas/registreras
  const [pets, setPets] = useState<IPetsId[]>([]);
  // state för alla secondOwners
  const [SecondOwners, setSecondOwners] = useState<ISecOwn[]>([]);
  // state för alla owners
  const [allOwners, setAllOwners] = useState<IOwners[]>([]);

  // api key
  let url = process.env.REACT_APP_API;

  // hämta alla ägare
  useEffect(() => {
    axios.get(`${url}users`).then((res) => {
      setAllOwners(res.data);
    });
  }, []);

  // hämta alla djur med ägarens ID
  function handlePets(props: string) {
    let id = props;

    console.log(id);

    setTimeout(() => {
      axios.get<IPetsId[]>(`${url}pets/owner/${id}`).then((res) => {
        setPets(res.data);
        console.log(res.data);
      });
    }, 500);
  }

  function handleSecOwn(props: string) {
    let id = props;
    console.log(id);

    setTimeout(() => {
      axios.get<ISecOwn[]>(`${url}secondOwner/owner/${id}`).then((res) => {
        setSecondOwners(res.data);
        console.log(res.data);
      });
    }, 500);
  }

  return (
    <>
      <div className="AdminDiv">
        <h1>Admin</h1>

        <div className="allOwners">
          <h2>Registrerade användare</h2>
          <div className="tableDiv">
            <h4>Id</h4>
            <h4>Förnamn</h4>
            <h4>Efternman</h4>
            <h4>Telefon</h4>
            <h4>E-post</h4>
            <h4>Adress</h4>
            <h4>Postnummer</h4>
            <h4>Ort</h4>
            <h4>Djur</h4>
            <h4>Extra ägare</h4>
          </div>
          {allOwners.map((owner) => {
            return (
              <div className="ownerDiv" key={owner._id}>
                <p className="ownerID">{owner._id}</p>
                <p>{owner.firstname}</p>
                <p>{owner.lastname}</p>
                <p>0{owner.phone}</p>
                <p>{owner.useremail}</p>
                <p>{owner.address}</p>
                <p>{owner.zip}</p>
                <p>{owner.city}</p>
                <button onClick={() => handlePets(owner._id)}>Djur</button>
                <button onClick={() => handleSecOwn(owner._id)}>Ägare</button>
              </div>
            );
          })}
        </div>
        <div></div>
      </div>
    </>
  );
}
