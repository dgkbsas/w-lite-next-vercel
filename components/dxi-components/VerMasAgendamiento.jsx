import { useContext } from "react";

//components
import { AuthContext } from "@/context/AuthContext";
import ItemAgendamiento01 from "./componentsAgendamiento/ItemAgendamiento01";
import ItemAgendamiento02 from "./componentsAgendamiento/ItemAgendamiento02";
import ItemAgendamiento03 from "./componentsAgendamiento/ItemAgendamiento03";
import ItemAgendamiento04 from "./componentsAgendamiento/ItemAgendamiento04";

export default function VerMasEspera({ ubicacion }) {
  //get Context values and functions
  const { dataItemsDxI } = useContext(AuthContext);

  return (
    <>
      <ItemAgendamiento01 datos={dataItemsDxI[ubicacion].verMas[0]} dataDxI={dataItemsDxI[ubicacion].verMas} />
      <ItemAgendamiento04 datos={dataItemsDxI[ubicacion].verMas[3]} dataDxI={dataItemsDxI[ubicacion].verMas} />
      <ItemAgendamiento02 datos={dataItemsDxI[ubicacion].verMas[2]} dataDxI={dataItemsDxI[ubicacion].verMas} />
      <ItemAgendamiento03 datos={dataItemsDxI[ubicacion].verMas[1]} dataDxI={dataItemsDxI[ubicacion].verMas} />
    </>
  );
}
