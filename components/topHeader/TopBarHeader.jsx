"use client";
import Image from "next/image";
import { useContext } from "react";

//components
import { AuthContext } from "@/context/AuthContext";

// styles
import "./top-bar-header.css";

// images
import logoPrint from "@/assets/statics/icons/print_FILL0_wght400_GRAD0_opsz48.svg";
import logoShare from "@/assets/statics/icons/share_FILL0_wght400_GRAD0_opsz48.svg";

export default function TopBarHeader() {
  const { sitios, setSitioSelected, sitioSelected, sectionSelected, tabName } = useContext(AuthContext);

  // Print and Share functions
  function functionPrint(event) {
    alert("print " + event.target.name);
  }
  function functionShare(event) {
    alert("share " + event.target.name);
  }

  // Function to check which "sitio" its selected on localStorage, and set radioButton as defaultChecked
  function checkSitio(id) {
    if (id === sitioSelected) {
      return true;
    }
  }

  // get selection and store it on localStorage
  function handleClickSitioSelector(event) {
    setSitioSelected(event.target.id);
  }

  return (
    <div className="containerTopBar " id="display-none-mobile">
      <div className="leftHeaderpart">
        {sectionSelected ? <h5 className="tituloTab">{sectionSelected}</h5> : <h5 className="tituloTab">INICIO</h5>}
        {tabName ? <h1 className="tituloSubTab">{tabName}</h1> : <h1 className="tituloSubTab">Página de Inicio</h1>}
        <div className="selectorSitio">
          {sitios.map((item, index) => (
            <div key={index} className="containerSitio">
              <label htmlFor={item.label}>
                <input
                  onClick={handleClickSitioSelector}
                  type="radio"
                  name="sitiosBar"
                  value={item.value}
                  className="radioButtonSitio"
                  defaultChecked={checkSitio(item.id)}
                  id={item.id}
                />
                {item.titleSitio}
              </label>
            </div>
          ))}
        </div>
      </div>
      <div className="rightHeaderpart">
        <button className="btnTopBar" disabled={true} onClick={functionPrint}>
          <Image className="logoTopBar" name="Print BTN" src={logoPrint} alt="/" />
        </button>
        <button className="btnTopBar" disabled={true} onClick={functionShare}>
          <Image className="logoTopBar" name="Share BTN" src={logoShare} alt="/" />
        </button>
      </div>
    </div>
  );
}
