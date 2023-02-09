import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { INewUser } from "../models/INewUser";
import { IPetsId } from "../models/IPetsId";
import { ISecOwn } from "../models/ISecOwn";
import "./qrinfo.scss";

export function QRInfo() {
  // hämta id från url
  const userId = useParams();
  let ID = userId.id;

  // spara hämtade kontaktuppgifter ägaren
  const [user, setUser] = useState<INewUser>();

  // spara alla secondOwners
  const [allSecondOwners, setAllSecondOwners] = useState<ISecOwn[]>([]);

  // state för alla djuren som ägaren har
  const [allpets, setAllPets] = useState<IPetsId[]>([]);

  useEffect(() => {
    // api key
    const url = process.env.REACT_APP_API;

    axios.get(`${url}users/${ID}`).then((res) => {
      console.log(res);
      setUser(res.data);
    });

    // hämta registrerade andra ägare
    axios.get<ISecOwn[]>(`${url}secondOwner/owner/${ID}`).then((res) => {
      setAllSecondOwners(res.data);
      console.log(res.data);
    });

    axios.get<IPetsId[]>(`${url}pets/owner/${ID}`).then((res) => {
      setAllPets([...res.data]);
      console.log(res.data);
    });
  }, []);

  return (
    <>
      <h3>Kontaktuppgifter:</h3>
      <div className="QRInfo">
        <div className="OwnerQRInfo">
          <h3>{user?.firstname}</h3>
          <div className="OwnerQRShortInfo">
            <h5>Telefon:</h5>
            <p>+46 {user?.phone}</p>
            <h5>Adress:</h5>
            <p>
              {user?.address}, {user?.zip} {user?.city}
            </p>
          </div>
        </div>
        <div className="PetQRInfo">
          {allpets.map((pet) => {
            return (
              <>
                <h3>{pet.name}</h3>
                <div className="PetQRShortInfo">
                  <p>{pet.breed}</p>
                  <p>{pet.color}</p>
                  <p>{pet.details}</p>
                </div>
              </>
            );
          })}
        </div>
        <div className="SecOwnQRInfo">
          <h2>Andra ägare:</h2>
          <div className="SecOwnQRShortInfo">
            {allSecondOwners.map((secondOwner) => {
              return (
                <>
                  <h3>{secondOwner.firstname}</h3>
                  <h5>Telefon:</h5>
                  <p>+46 {secondOwner.phone}</p>
                  <h5>Adress:</h5>
                  <p>
                    {secondOwner.address}, {secondOwner.zip} {secondOwner.city}
                  </p>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
