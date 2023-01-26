import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { INewUser } from "../models/INewUser";
import { IPetsId } from "../models/IPetsId";
import { ISecOwn } from "../models/ISecOwn";

export function QRInfo() {
  // hämta id från url
  const userId = useParams();
  let ID = userId.id;

  // api key
  const url = process.env.REACT_APP_API;

  // spara hämtade kontaktuppgifter ägaren
  const [user, setUser] = useState<INewUser>();

  // spara alla secondOwners
  const [allSecondOwners, setAllSecondOwners] = useState<ISecOwn[]>([]);

  // state för alla djuren som ägaren har
  const [allpets, setAllPets] = useState<IPetsId[]>([]);

  useEffect(() => {
    axios.get(`${url}/users/${ID}`).then((res) => {
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
      <div className="QRInfo">
        <h3>Kontaktuppgifter:</h3>
        <div className="PetQRInfo">
          <h5>Du har hittat:</h5>
          {allpets.map((pet) => {
            return (
              <>
                <p>{pet.name}</p>
                <p>{pet.breed}</p>
                <p>{pet.color}</p>
                <p>{pet.details}</p>
              </>
            );
          })}
        </div>
        <div className="OwnerQRInfo">
          <h5>{user?.firstname}</h5>
          <p>Telefon: +46 {user?.phone}</p>
          <p>
            Adress: {user?.address}, {user?.zip} {user?.city}
          </p>
        </div>
        <div className="SecOwnInfo">
          <h5>Andra ägare:</h5>
          {allSecondOwners.map((secondOwner) => {
            return (
              <>
                <p>{secondOwner.firstname}</p>
                <p>Telefon: +46 {secondOwner.phone}</p>
                <p>
                  Adress: {secondOwner.address}, {secondOwner.zip}{" "}
                  {secondOwner.city}
                </p>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
