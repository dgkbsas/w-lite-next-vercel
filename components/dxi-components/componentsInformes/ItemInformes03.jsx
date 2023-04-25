import Image from "next/image";

//styles
//styles
import "@/styles/ver-mas.css";
import "@/styles/dxi-steps.css";
import "@/styles/globals.css";

//images
import iconEvoBuena from "@/assets/statics/icons/tipoEvolucionBuena.svg";
import iconEvoMala from "@/assets/statics/icons/tipoEvolucionMala.svg";
import wIcon from "@/assets/statics/logo.svg";

export default function ItemInformes02({ datos, dataDxI }) {
  return (
    <>
      {datos != undefined && (
        <div className="containerItemVerMas">
          <header>
            <p className="tituloPreguntaVerMas" id="tituloPreguntaVerMas-Mobile">
              {datos.pregunta}
            </p>
          </header>
          <br />
          <div
            className="containerInfoPreguntas-vermas"
            style={{
              backgroundColor: "#f8f8f8",
              display: "flex",
              alignItems: "flex-start",
              borderRadius: "5px",
              flexDirection: "column",
              width: "100%",
            }}
          >
            <p
              style={{
                margin: 1,
                fontSize: "14px",
                fontWeight: "400",
                marginBottom: "4px",
                marginTop: "12px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
              }}
            >
              <span>
                <strong>PRINCIPALES</strong> MÉDICOS FIRMANTES
              </span>
              <span style={{ fontSize: "11px", marginLeft: "16px", opacity: "0.5" }}>
                Datos pertenecientes al {datos.month}/{datos.year}
              </span>
            </p>
            <div
              className="containerVolumen02"
              style={{
                width: "100%",
                borderRadius: "5px",
                overflow: "hidden",
                marginTop: "4px",
                marginBottom: "4px",
                border: "solid 0.5px #1c1c1c20",
              }}
            >
              <div
                style={{
                  display: "grid",
                  alignItems: "center",
                  gridTemplateColumns: "1.1fr .5fr .5fr .7fr",
                  color: "#1c1c1c",
                  fontSize: "10px",
                  fontWeight: "500",
                }}
              >
                <p
                  style={{
                    margin: 0,
                    border: "solid 0.5px #1c1c1c20",
                    backgroundColor: "#D8D8D8",
                    height: "22px",
                    display: "flex",
                    alignItems: "center",
                    paddingLeft: "16px",
                  }}
                >
                  MÉDICO FIRMANTE
                </p>
                <p
                  style={{
                    margin: 0,
                    border: "solid 0.5px #1c1c1c20",

                    backgroundColor: "#D8D8D8",
                    height: "22px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  INFORMES FIRMADOS
                </p>
                <p
                  style={{
                    margin: 0,
                    border: "solid 0.5px #1c1c1c20",

                    textAlign: "center",
                    backgroundColor: "#D8D8D8",
                    height: "22px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  % CUMPLIMIENTO
                </p>
                <p
                  style={{
                    margin: 0,
                    border: "solid 0.5px #1c1c1c20",

                    textAlign: "center",
                    backgroundColor: "#D8D8D8",
                    height: "22px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  TIEMPO DE ELABORACIÓN PROMEDIO (Hs.)
                </p>
              </div>
              {datos.data != "" ? (
                <>
                  {datos.data.map((item, index) => (
                    <div
                      key={index}
                      style={{
                        display: "grid",
                        alignItems: "center",
                        gridTemplateColumns: "1.1fr .5fr .5fr .7fr",
                        color: "#1c1c1c",
                        fontSize: "12px",
                        fontWeight: "700",
                      }}
                    >
                      <p
                        style={{
                          margin: 0,
                          border: "solid 0.5px #1c1c1c20",
                          height: "26px",
                          display: "flex",
                          alignItems: "center",
                          paddingLeft: "16px",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                        }}
                      >
                        {item.medicoFirmante}
                      </p>
                      <p
                        style={{
                          margin: 0,
                          border: "solid 0.5px #1c1c1c20",
                          height: "26px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {item.firmados}
                      </p>
                      <p
                        style={{
                          margin: 0,
                          border: "solid 0.5px #1c1c1c20",
                          height: "26px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "16px",
                        }}
                      >
                        {item.cumplimiento}%
                      </p>
                      <p
                        style={{
                          margin: 0,
                          border: "solid 0.5px #1c1c1c20",
                          height: "26px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {item.tiempoElaboracion}
                      </p>
                    </div>
                  ))}
                </>
              ) : null}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
