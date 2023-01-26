import axios from "axios";
import { setMaxIdleHTTPParsers } from "http";
import { useEffect, useState } from "react";
import { IOwners } from "../models/IOwners";
import { IPetsId } from "../models/IPetsId";
import { ISecOwn } from "../models/ISecOwn";
import { ShowPet } from "../ShowPetAndOwner/showpet";
import { ShowSecondOwner } from "../ShowPetAndOwner/showSecondOwner";
import "./login.scss";

export function LoggedinAdmin() {
  // state för alla djuren som hämtas/registreras
  const [pets, setPets] = useState<IPetsId[]>([]);
  // state för alla secondOwners
  const [SecondOwners, setSecondOwners] = useState<ISecOwn[]>([]);
  // state för alla owners
  const [allOwners, setAllOwners] = useState<IOwners[]>([]);

  // state för dölja och visa djuren/andra ägare
  const [showPets, setShowPets] = useState(false);
  const [showSecondOwners, setShowSecondOwners] = useState(false);

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
        if (res.data.length > 0) {
          setShowSecondOwners(false);
          setShowPets(true);
        } else {
          setShowPets(false);
        }
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
        if (res.data.length > 0) {
          setShowPets(false);
          setShowSecondOwners(true);
        } else {
          setShowSecondOwners(false);
        }
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
            <h4>Ta bort</h4>
          </div>
          {allOwners.map((owner) => {
            return (
              <>
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
                  <button>Ta bort</button>
                </div>
              </>
            );
          })}
          {showPets && (
            <>
              <h5>Registrerade djur</h5>
              <div className="tableDiv">
                <h4>Namn</h4>
                <h4>Djurtyp</h4>
                <h4>Ras</h4>
                <h4>Färg</h4>
                <h4>Övriga detaljer</h4>
                <h4>Ta bort</h4>
              </div>
              <div className="OwnersPets">
                {pets.map((pet) => {
                  return <ShowPet key={pet._id} {...pet} />;
                })}
              </div>
            </>
          )}

          {showSecondOwners && (
            <>
              <h5>Registrerade extra ägare</h5>
              <div className="tableDiv">
                <h4>Namn</h4>
                <h4>Telefon</h4>
                <h4>Adress</h4>
                <h4>Stad</h4>
                <h4>Postnummer</h4>
                <h4>Ta bort</h4>
              </div>
              <div className="OwnersPets">
                {SecondOwners.map((secOwn) => {
                  return <ShowSecondOwner key={secOwn._id} {...secOwn} />;
                })}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
