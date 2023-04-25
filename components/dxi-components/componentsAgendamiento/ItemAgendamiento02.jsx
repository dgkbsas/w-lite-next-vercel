import Image from "next/image";
import Plot from "react-plotly.js";

//styles
import "@/styles/ver-mas.css";
import "@/styles/dxi-steps.css";
import "@/styles/globals.css";

//images
import iconEvoBuena from "@/assets/statics/icons/tipoEvolucionBuena.svg";
import iconEvoMala from "@/assets/statics/icons/tipoEvolucionMala.svg";

export default function ItemAgendamiento02({ datos }) {
  return (
    <>
      {datos != undefined && (
        <>
          {datos.visible && (
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
                  padding: "8px 16px 8px 16px",
                  display: "flex",
                  alignItems: "flex-start",
                  borderRadius: "5px",
                  flexDirection: "column",
                }}
              >
                <Plot data={datos.data} layout={datos.layout} config={datos.config} />
                <br />
                <p style={{ fontSize: "12px" }}>
                  *Los datos utilizados para este gráfico son <strong>Acumulados anuales.</strong>
                </p>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}
