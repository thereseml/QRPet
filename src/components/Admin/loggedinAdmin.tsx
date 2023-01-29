import axios from "axios";
import { useEffect, useState } from "react";
import { IOwners } from "../models/IOwners";
import { IPetsId } from "../models/IPetsId";
import { ISecOwn } from "../models/ISecOwn";
import { ShowPet } from "../ShowPetAndOwner/showpet";
import { ShowSecondOwner } from "../ShowPetAndOwner/showSecondOwner";
import "./admin.scss";

export function LoggedinAdmin() {
  // state för alla djuren som hämtas/registreras
  const [pets, setPets] = useState<IPetsId[]>([]);
  // state för alla secondOwners
  const [SecondOwners, setSecondOwners] = useState<ISecOwn[]>([]);
  // state för alla owners
  const [allOwners, setAllOwners] = useState<IOwners[]>([]);

  // state för att visa/dölja djuren/anda ägare
  const [selectedPets, setSelectedPets] = useState(null);
  const [selectedSecOwn, setSelectedSecOwn] = useState(null);

  // api key
  let url = process.env.REACT_APP_API;

  // hämta alla ägare
  useEffect(() => {
    const getLocal = localStorage.getItem("AdminID");
    const localAdmin = JSON.parse(getLocal!);

    if (localAdmin === null) {
      window.location.href = "/adminlogin";

      return;
    }

    axios.get(`${url}users`).then((res) => {
      setAllOwners(res.data);
    });
  }, []);

  // hämta alla djur med ägarens ID
  function handlePets(props: string) {
    let id = props;

    axios.get<IPetsId[]>(`${url}pets/owner/${id}`).then((res) => {
      setPets(res.data);
      console.log(res.data);
    });
  }

  function handleSecOwn(props: string) {
    let id = props;

    axios.get<ISecOwn[]>(`${url}secondOwner/owner/${id}`).then((res) => {
      setSecondOwners(res.data);
      console.log(res.data);
    });
  }

  const togglePets = (i: any) => {
    if (selectedPets === i) {
      return setSelectedPets(null);
    }
    setSelectedPets(i);
  };

  const toggleSecOwn = (i: any) => {
    if (selectedSecOwn === i) {
      return setSelectedSecOwn(null);
    }
    setSelectedSecOwn(i);
  };

  async function deleteAll(ID: string) {
    await axios.delete(`${url}users/${ID}`).then((res) => {
      console.log(res.data);
    });

    // ta bort djur med ägarens ID
    await axios.delete(`${url}pets/owner/${ID}`).then((res) => {
      console.log(res.data);
    });

    // ta bort andra ägare med ägarens ID
    await axios.delete(`${url}secondOwner/owner/${ID}`).then((res) => {
      console.log(res.data);
    });

    window.location.reload();
  }

  return (
    <>
      <div className="AdminDiv">
        <h1>Admin</h1>

        <div className="allOwners">
          <h2>Registrerade användare</h2>
          <div className="tableDiv">
            <h4>Namn</h4>
            <h4>Telefon</h4>
            <h4>E-post</h4>
            <h4>Adress</h4>
            <h4>Djur</h4>
            <h4>Extra ägare</h4>
            <h4>Ta bort</h4>
          </div>
          {allOwners.map((owner, i) => {
            return (
              <>
                <div className="ownerDiv" key={i}>
                  <p>
                    {owner.firstname} {owner.lastname}
                  </p>
                  <p>0{owner.phone}</p>
                  <p>{owner.useremail}</p>
                  <p>
                    {owner.address}, <br /> {owner.zip}, {owner.city}
                  </p>
                  <button
                    onClick={() => {
                      togglePets(i);
                      handlePets(owner._id);
                    }}
                  >
                    {selectedPets === i ? "Dölj" : "Visa"}
                  </button>
                  <button
                    onClick={() => {
                      toggleSecOwn(i);
                      handleSecOwn(owner._id);
                    }}
                  >
                    {selectedSecOwn === i ? "Dölj" : "Visa"}
                  </button>
                  <button onClick={() => deleteAll(owner._id)}>Ta bort</button>
                </div>
                <div
                  className={selectedPets === i ? "showPetSec" : "hidePetSec"}
                >
                  {pets.length > 0 && (
                    <div className="tableDiv">
                      <h4>Namn</h4>
                      <h4>Djurtyp</h4>
                      <h4>Ras</h4>
                      <h4>Färg</h4>
                      <h4>Övriga detaljer</h4>
                      <h4>Ta bort</h4>
                    </div>
                  )}
                  <div className="OwnersPets">
                    {pets.map((pet) => {
                      return <ShowPet key={pet._id} {...pet} />;
                    })}
                  </div>
                </div>
                <div
                  className={selectedSecOwn === i ? "showPetSec" : "hidePetSec"}
                >
                  {SecondOwners.length > 0 && (
                    <div className="tableDiv">
                      <h4>Namn</h4>
                      <h4>Telefon</h4>
                      <h4>Adress</h4>
                      <h4>Stad</h4>
                      <h4>Postnummer</h4>
                      <h4>Ta bort</h4>
                    </div>
                  )}
                  <div className="OwnersPets">
                    {SecondOwners.map((secOwn) => {
                      return <ShowSecondOwner key={secOwn._id} {...secOwn} />;
                    })}
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
