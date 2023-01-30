import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IPetsId } from "../models/IPetsId";
import { ShowPet } from "../ShowPetAndOwner/showpet";

export function GetPetById() {
  // hämta id från url
  const userId = useParams();
  let ID = userId.id;

  // state för alla djuren som hämtas/registreras
  const [allpets, setAllPets] = useState<IPetsId[]>([]);

  // api key
  let url = process.env.REACT_APP_API;

  useEffect(() => {
    // hämtar djur function
    axios.get<IPetsId[]>(`${url}pets/owner/${ID}`).then((res) => {
      setAllPets([...res.data]);
    });
  }, [GetPetById]);

  // skapar lista för alla registrerade djur
  let showAllPets = allpets.map((pet, i) => {
    return (
      <>
        <ShowPet key={i} {...pet} />
      </>
    );
  });

  return <>{showAllPets}</>;
}
