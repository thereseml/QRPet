import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ISecOwn } from "../models/ISecOwn";
import { ShowSecondOwner } from "../ShowPetAndOwner/showSecondOwner";

export function GetSecOwn() {
  // hämta id från url
  const userId = useParams();
  let ID = userId.id;

  // spara alla secondOwners
  const [allSecondOwners, setAllSecondOwners] = useState<ISecOwn[]>([]);

  // hämta registrerade andra ägare
  useEffect(() => {
    axios
      .get<ISecOwn[]>(`http://localhost:8000/secondOwner/owner/${ID}`)
      .then((res) => {
        setAllSecondOwners(res.data);
      });
  }, []);

  // skapar lista för alla second owners
  let showAllSecondOwners = allSecondOwners.map((secondOwner) => {
    return (
      <>
        <ShowSecondOwner key={secondOwner._id} {...secondOwner} />
      </>
    );
  });

  return <>{showAllSecondOwners}</>;
}
