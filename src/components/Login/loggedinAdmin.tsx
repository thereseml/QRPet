import axios from "axios";
import { useEffect, useState } from "react";
import { IOwners } from "../models/IOwners";
import { IPetsId } from "../models/IPetsId";
import { ISecOwn } from "../models/ISecOwn";

export function LoggedinAdmin() {
  // state för alla djuren som hämtas/registreras
  const [allpets, setAllPets] = useState<IPetsId[]>([]);
  // state för alla secondOwners
  const [allSecondOwners, setAllSecondOwners] = useState<ISecOwn[]>([]);
  // state för alla owners
  const [allOwners, setAllOwners] = useState<IOwners[]>([]);

  // api key
  let url = process.env.REACT_APP_API;

  // hämta alla ägare
  useEffect(() => {
    axios.get(`${url}users`).then((res) => {
      setAllOwners(res.data);
      console.log(res.data);
    });

    // hämta alla djur
    axios.get<IPetsId[]>(`${url}pets`).then((res) => {
      setAllPets([...res.data]);
      console.log(res.data);
    });

    // hämta alla andra ägare
    axios.get<ISecOwn[]>(`${url}secondOwner`).then((res) => {
      setAllSecondOwners(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <>
      <h1>Admin</h1>

      <h2>Ägare</h2>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Förnamn</th>
            <th>Efternamn</th>
            <th>Telefon</th>
            <th>E-post</th>
            <th>Adress</th>
            <th>Postnummer</th>
            <th>Ort</th>
          </tr>
        </thead>
        <tbody>
          {allOwners.map((owner) => {
            return (
              <tr key={owner._id}>
                <td>{owner._id}</td>
                <td>{owner.firstname}</td>
                <td>{owner.lastname}</td>
                <td>0{owner.phone}</td>
                <td>{owner.useremail}</td>
                <td>{owner.address}</td>
                <td>{owner.zip}</td>
                <td>{owner.city}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <h2>Djur</h2>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Ägare ID</th>
            <th>Namn</th>
            <th>Djurtyp</th>
            <th>Ras</th>
            <th>Detaljer</th>
          </tr>
        </thead>
        <tbody>
          {allpets.map((pet) => {
            return (
              <tr key={pet._id}>
                <td>{pet._id}</td>
                <td>{pet.ownerId}</td>
                <td>{pet.name}</td>
                <td>{pet.petType}</td>
                <td>{pet.breed}</td>
                <td>{pet.details}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <h2>Andra ägare</h2>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Ägare ID</th>
            <th>Förnamn</th>
            <th>Efternamn</th>
            <th>Telefon</th>
            <th>Adress</th>
            <th>Postnummer</th>
            <th>Ort</th>
          </tr>
        </thead>
        <tbody>
          {allSecondOwners.map((secOwn) => {
            return (
              <tr key={secOwn._id}>
                <td>{secOwn._id}</td>
                <td>{secOwn.ownerId}</td>
                <td>{secOwn.firstname}</td>
                <td>{secOwn.lastname}</td>
                <td>0{secOwn.phone}</td>
                <td>{secOwn.address}</td>
                <td>{secOwn.zip}</td>
                <td>{secOwn.city}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
