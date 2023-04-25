"use client";
import { useContext, useEffect, useState } from "react";

//styles
import "@/styles/visualizaciones.css";

//context
import { AuthContext } from "@/context/AuthContext";

export default function DxiPage({ children }) {
  //get Context values and functions
  const { dataItemsDxI, mesesAnalizados, mesSeleccionado, setMesSeleccionado, setMesSeleccionadoNombre, handleSetModalidad, dataDownloaded } =
    useContext(AuthContext);

  const [selectMesDisbled, setSelectMesDisabled] = useState(true);
  const [ultimoMes, setUltimoMes] = useState(mesesAnalizados[0]);
  const [restoMeses, setRestoMeses] = useState([]);
  const [saveMesSeleccionado, setSaveMesSeleccionado] = useState(mesesAnalizados[1].mesValue);
  const [saveMesSeleccionadoNombre, setSaveMesSeleccionadoNombre] = useState(mesesAnalizados[1].mesTitle);

  useEffect(() => {
    //Split "meses"
    let cantMeses = mesesAnalizados.length;
    let mesesRestantes = mesesAnalizados.slice(1, cantMeses);
    setRestoMeses(mesesRestantes);
  }, [mesesAnalizados]);

  //Enable or disable Select
  function handleClickMes(event) {
    {
      event.target.id === "otromes"
        ? (setSelectMesDisabled(false), setMesSeleccionado(saveMesSeleccionado), setMesSeleccionadoNombre(saveMesSeleccionadoNombre))
        : (setSelectMesDisabled(true), setMesSeleccionado(ultimoMes.mesValue), setMesSeleccionadoNombre(ultimoMes.mesTitle));
    }
  }

  //Set data by month
  function handleSelectMes(event) {
    setSaveMesSeleccionado(event.target.value);
    setSaveMesSeleccionadoNombre(event.target[event.target.options.selectedIndex].text);
    setMesSeleccionadoNombre(event.target[event.target.options.selectedIndex].text);
    setMesSeleccionado(event.target.value);
  }

  return (
    <>
      <section className="mainSection">
        {dataDownloaded ? (
          <div className="innerContainerPrincipal">
            <div className="containerSettingsResponsive  margenesLaterales">
              <div className="containerLineaSet">
                <p>Última carga de datos: </p>
                {dataItemsDxI[0] ? <p>{dataItemsDxI[0].ultimaCarga}</p> : null}
              </div>
            </div>
            <div className="containerSettings">
              <div className="containerLineaSet">
                <p>Modalidad:</p>
                <label htmlFor="rm">
                  <input type="radio" name="modalidad" id="rm" value="rm" className="radioButtonSitio" defaultChecked onChange={handleSetModalidad} />
                  RESONANCIA MAGNÉTICA
                </label>
                <label htmlFor="tc">
                  <input type="radio" name="modalidad" id="tc" value="tc" className="radioButtonSitio" onChange={handleSetModalidad} />
                  TOMOGRAFÍA COMPUTADA
                </label>
              </div>
              <div className="containerLineaSet">
                <p>Rango temporal analizado:</p>
                <label htmlFor="ultimo">
                  <input
                    type="radio"
                    name="mesAnalizado"
                    id="ultimo"
                    value={ultimoMes.mesValue}
                    className="radioButtonSitio"
                    defaultChecked
                    onClick={handleClickMes}
                  />
                  ÚLTIMO MES
                </label>
                <label htmlFor="otromes">
                  <input type="radio" name="mesAnalizado" id="otromes" className="radioButtonSitio" onClick={handleClickMes} />
                  OTRO MES:
                  <select
                    className="selectMes"
                    name="selectMes"
                    id="selectMes"
                    disabled={selectMesDisbled}
                    onChange={handleSelectMes}
                    defaultValue={mesSeleccionado}
                  >
                    {restoMeses.map((item, index) => (
                      <option value={item.mesValue} name={item.mesTitle} key={index}>
                        {item.mesTitle}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
              <div className="containerLineaSet">
                <p>Última carga de datos: </p>
                {dataItemsDxI[0] ? <p>{dataItemsDxI[0].ultimaCarga}</p> : null}
              </div>
            </div>
            <br />
            {children}
            <br />
          </div>
        ) : null}
      </section>
    </>
  );
}
