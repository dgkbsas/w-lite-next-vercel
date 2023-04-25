import Image from "next/image";
import Link from "next/link";

//styles
import "@/styles/dxi-steps.css";

//images
import iconEvoBuena from "@/assets/statics/icons/tipoEvolucionBuena.svg";
import iconEvoMala from "@/assets/statics/icons/tipoEvolucionMala.svg";
import wIcon from "@/assets/statics/logo.svg";
import alertIcon from "@/assets/statics/icons/report_FILL0_wght400_GRAD0_opsz48.svg";

export default function DxiSteps(props) {
  const { dataItem, btn, title, seccion, itemIndex } = props;

  return (
    <>
      {dataItem ? (
        <>
          <header>
            <div>
              {dataItem.subtitle !== "" && <p className="subtitulo">{dataItem.subtitle}</p>}
              <div className="containerTituloStep ">
                <p className="titulo" id="titulo-mobile">
                  {dataItem.title}
                </p>
                {dataItem.quality != "" && (
                  <>
                    <span className="tooltip">
                      <Image className="alertLogo " src={alertIcon} alt="logo alert" />
                      <span className="tooltiptext" style={{ width: "150px" }}>
                        {dataItem.quality}
                      </span>
                    </span>
                  </>
                )}
              </div>

              {dataItem.info01 !== "" && <p className="info01">{dataItem.info01}</p>}
              {dataItem.info02 !== "" && <p className="info02">{dataItem.info02}</p>}
            </div>
            {btn ? (
              <Link
                className="btnVerMas"
                href={{
                  pathname: "inicio/dxivisualizaciones/vermas",
                  query: { titulo: title, seccion: seccion, step: dataItem.subtitle, index: itemIndex },
                }}
              >
                Ver más
              </Link>
            ) : null}
          </header>
          <div className="innerCardItems" id="inner-card-items-mobile">
            <div className="primerContainerCard" id="primer-container-card-mobile">
              {dataItem.tipoEvolucion01 === "buena" && (
                <div className="containerDato01 verde">
                  <span className="valor01">{dataItem.valor01}</span>
                </div>
              )}
              {dataItem.tipoEvolucion01 === "mala" && (
                <div className="containerDato01 roja">
                  <span className="valor01">{dataItem.valor01}</span>
                </div>
              )}
              {dataItem.tipoEvolucion01 === "neutra" && (
                <div className="containerDato01 neutra">
                  <span className="valor01">{dataItem.valor01}</span>
                </div>
              )}
              <div className="containerInfo01">
                <span className="infoValor01" style={{ width: " 160px" }}>
                  {dataItem.infoValor01}
                </span>{" "}
                <span className="infoValor02">{dataItem.infoValor02}</span>
              </div>
            </div>

            <div className="containerEvolucion" id="container-evolucion-mobile">
              {dataItem.tipoEvolucion02 === "buena" && (
                <div>
                  <span className="valor02evolucion verde">{dataItem.valor02evolucion}</span>
                  {dataItem.tipoIcono === "sube" && <Image className="logoEvo" src={iconEvoBuena} alt="buena Evolución" />}
                  {dataItem.tipoIcono === "baja" && <Image className="logoEvo" src={iconEvoMala} alt="mala Evolución" />}
                </div>
              )}

              {dataItem.tipoEvolucion02 === "mala" && (
                <div>
                  <span className="valor02evolucion roja">{dataItem.valor02evolucion}</span>
                  {dataItem.tipoIcono === "sube" && <Image className="logoEvo" src={iconEvoBuena} alt="buena Evolución" />}
                  {dataItem.tipoIcono === "baja" && <Image className="logoEvo" src={iconEvoMala} alt="mala Evolución" />}
                </div>
              )}
              {dataItem.tipoEvolucion02 === "neutra" && (
                <div>
                  <span className="valor02evolucion neutra">{dataItem.valor02evolucion}</span>
                  {dataItem.tipoIcono === "sube" && <Image className="logoEvo" src={iconEvoBuena} alt="buena Evolución" />}
                  {dataItem.tipoIcono === "baja" && <Image className="logoEvo" src={iconEvoMala} alt="mala Evolución" />}
                </div>
              )}
              <span className="inforValor02evolucion">{dataItem.inforValor02evolucion}</span>
            </div>
            <div className="benchmark" id="benchmark-mobile">
              <span className="valor03benchmark">{dataItem.valor03benchmark}</span>
              <div className="infoBenchmark">
                <div className="containerSupInfoBench">
                  <Image className="wlogo" src={wIcon} alt="logo W" />
                  <p className="txtBenchmark">BENCHMARK</p>
                </div>
                <span className="info01valor03benchmark">{dataItem.info01valor03benchmark}</span>
                <span className="info02valor03benchmark">{dataItem.info02valor03benchmark}</span>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
