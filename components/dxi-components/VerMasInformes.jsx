import { useContext } from "react";

//components
import { AuthContext } from "@/context/AuthContext";
import ItemInformes01 from "./componentsInformes/ItemInformes01";
import ItemInformes02 from "./componentsInformes/ItemInformes02";
import ItemInformes03 from "./componentsInformes/ItemInformes03";
import ItemInformes04 from "./componentsInformes/ItemInformes04";

export default function VerMasEspera({ ubicacion }) {
  //get Context values and functions
  const { dataItemsDxI } = useContext(AuthContext);

  return (
    <>
      <ItemInformes01 datos={dataItemsDxI[ubicacion].verMas[0]} dataDxI={dataItemsDxI[ubicacion].verMas} />
      <ItemInformes02 datos={dataItemsDxI[ubicacion].verMas[1]} dataDxI={dataItemsDxI[ubicacion].verMas} />
      <ItemInformes03 datos={dataItemsDxI[ubicacion].verMas[2]} dataDxI={dataItemsDxI[ubicacion].verMas} />
      <ItemInformes04 datos={dataItemsDxI[ubicacion].verMas[3]} dataDxI={dataItemsDxI[ubicacion].verMas} />
    </>
  );
}
