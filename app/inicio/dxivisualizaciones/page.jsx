"use client";
import Image from "next/image";
import { useContext } from "react";

//styles
import "@/styles/visualizaciones.css";

//components455
import DxiSteps from "../../../components/dxi-components/dxi-steps/DxiSteps";
import { AuthContext } from "@/context/AuthContext";

//images
import dotIcon from "@/assets/statics/icons/radio_button_checked_FILL0_wght400_GRAD0_opsz48.svg";

export default function DxiPage() {
  //get Context values and functions
  const { sitioSelected, dataItemsDxI, modalidadDxI, sectionSelected, tabName, mesSeleccionadoNombre } = useContext(AuthContext);

  console.log(dataItemsDxI);

  return (
    <>
      {dataItemsDxI !== null ? (
        <>
          {modalidadDxI === "rm" && (
            <p className="tituloModalidad" id="titulo-modalidad-mobile" style={{ marginBottom: "8px" }}>
              RESONANCIA MAGNÉTICA <span style={{ color: "#b2b2b2", marginLeft: "8px" }}>{mesSeleccionadoNombre}</span>
            </p>
          )}
          {modalidadDxI === "tc" && (
            <p className="tituloModalidad" id="titulo-modalidad-mobile" style={{ marginBottom: "8px" }}>
              TOMOGRAFÍA COMPUTADA <span style={{ color: "#b2b2b2", marginLeft: "8px" }}>{mesSeleccionadoNombre}</span>
            </p>
          )}
          <div className="containerStepCard">
            <div className="lineVertical" id="line-vertical-mobile"></div>
            <p className="startLine">▼</p>
            <p className="endLine" id="end-line-mobile">
              ▲
            </p>
            <div className="pasosFlecha" id="pasos-flecha-mobile">
              <p className="middleLine">▼</p>
              <p className="middleLine">▼</p>
              <p className="middleLine">▼</p>
              <p className="middleLine">▼</p>
              <p className="middleLine">▼</p>
            </div>
            <div className="stepCard" id="step-card-mobile">
              <DxiSteps
                dataItem={dataItemsDxI[0]}
                itemIndex="0"
                btn={true}
                title={tabName}
                seccion={sectionSelected}
                modalidad={modalidadDxI}
                sitio={sitioSelected}
              />
            </div>
            <div className="stepCard" id="step-card-mobile">
              <Image className="dotIconStep" src={dotIcon} alt="step" />
              <DxiSteps
                dataItem={dataItemsDxI[1]}
                itemIndex="1"
                btn={true}
                title={tabName}
                seccion={sectionSelected}
                modalidad={modalidadDxI}
                sitio={sitioSelected}
              />
            </div>
            <div className="stepCard" id="step-card-mobile">
              <Image className="dotIconStep" src={dotIcon} alt="step" />
              <DxiSteps
                dataItem={dataItemsDxI[2]}
                itemIndex="2"
                btn={true}
                title={tabName}
                seccion={sectionSelected}
                modalidad={modalidadDxI}
                sitio={sitioSelected}
              />
              <br />
              <DxiSteps
                dataItem={dataItemsDxI[3]}
                itemIndex="3"
                btn={false}
                title={tabName}
                seccion={sectionSelected}
                modalidad={modalidadDxI}
                sitio={sitioSelected}
              />
            </div>
            <div className="stepCard" id="step-card-mobile">
              <Image className="dotIconStep" src={dotIcon} alt="step" />
              <DxiSteps
                dataItem={dataItemsDxI[4]}
                itemIndex="4"
                btn={true}
                title={tabName}
                seccion={sectionSelected}
                modalidad={modalidadDxI}
                sitio={sitioSelected}
              />
              <br />
              <DxiSteps
                dataItem={dataItemsDxI[5]}
                itemIndex="5"
                btn={false}
                title={tabName}
                seccion={sectionSelected}
                modalidad={modalidadDxI}
                sitio={sitioSelected}
              />
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
