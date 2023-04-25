import { useContext } from "react";

//components
import { AuthContext } from "@/context/AuthContext";
import ItemVolumen01 from "./componentsVolumen/ItemVolumen01";
import ItemVolumen02 from "./componentsVolumen/ItemVolumen02";
import ItemVolumen03 from "./componentsVolumen/ItemVolumen03";

export default function VerMasVolumen({ ubicacion }) {
  //get Context values and functions
  const { dataItemsDxI } = useContext(AuthContext);

  return (
    <>
      <ItemVolumen01 datos={dataItemsDxI[ubicacion].verMas[0]} dataDxI={dataItemsDxI[ubicacion].verMas} />
      <ItemVolumen02 datos={dataItemsDxI[ubicacion].verMas[1]} dataDxI={dataItemsDxI[ubicacion].verMas} />
      <ItemVolumen03 datos={dataItemsDxI[ubicacion].verMas[2]} dataDxI={dataItemsDxI[ubicacion].verMas} />
    </>
  );
}
