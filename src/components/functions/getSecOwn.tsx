import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ISecOwn } from "../models/ISecOwn";
import { ShowSecondOwner } from "../ShowPetAndOwner/showSecondOwner";

export function GetSecOwn() {
  // spara alla secondOwners
  const [allSecondOwners, setAllSecondOwners] = useState<ISecOwn[]>([]);

  // hämta id från url
  const userId = useParams();
  const ID = userId.id;

  // hämta registrerade andra ägare
  useEffect(() => {
    // api key
    const url = process.env.REACT_APP_API;

    axios.get<ISecOwn[]>(`${url}secondOwner/owner/${ID}`).then((res) => {
      setAllSecondOwners(res.data);
    });
  }, [GetSecOwn]);

  // skapar lista för alla second owners
  let showAllSecondOwners = allSecondOwners.map((secondOwner, i) => {
    return (
      <>
        <ShowSecondOwner key={i} {...secondOwner} />
      </>
    );
  });

  return <>{showAllSecondOwners}</>;
}
