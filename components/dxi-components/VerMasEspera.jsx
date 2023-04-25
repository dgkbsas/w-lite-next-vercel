import { useContext } from "react";

//components
import { AuthContext } from "@/context/AuthContext";
import ItemEspera01 from "./componentsEspera/ItemEspera01";
import ItemEspera02 from "./componentsEspera/ItemEspera02";

export default function VerMasEspera({ ubicacion }) {
  //get Context values and functions
  const { dataItemsDxI } = useContext(AuthContext);

  return (
    <>
      <ItemEspera01 datos={dataItemsDxI[ubicacion].verMas[0]} dataDxI={dataItemsDxI[ubicacion].verMas} />
      <ItemEspera02 datos={dataItemsDxI[ubicacion].verMas[1]} dataDxI={dataItemsDxI[ubicacion].verMas} />
    </>
  );
}
