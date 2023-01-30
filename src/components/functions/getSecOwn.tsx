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

  // api key
  const url = process.env.REACT_APP_API;

  // hämta registrerade andra ägare
  useEffect(() => {
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
