"use client";
import { useContext } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";

//dynamic import
const VerMasVolumenDynamic = dynamic(() => import("../../../../components/dxi-components/VerMasVolumen"), {
  loading: () => <p>Loading ...</p>,
  ssr: false,
});

const VerMasEsperaDynamic = dynamic(() => import("../../../../components/dxi-components/VerMasEspera"), {
  loading: () => <p>Loading ...</p>,
  ssr: false,
});
const VerMasAgendamientoDynamic = dynamic(() => import("../../../../components/dxi-components/VerMasAgendamiento"), {
  loading: () => <p>Loading ...</p>,
  ssr: false,
});
const VerMasInformesDynamic = dynamic(() => import("../../../../components/dxi-components/VerMasInformes"), {
  loading: () => <p>Loading ...</p>,
  ssr: false,
});

//styles
import "@/styles/ver-mas.css";

//components
import { AuthContext } from "@/context/AuthContext";
// import VerMasVolumen from "../../../../components/dxi-components/VerMasVolumen";
// import VerMasEspera from "../../../../components/dxi-components/VerMasEspera";
// import VerMasAgendamiento from "../../../../components/dxi-components/VerMasAgendamiento";
// import VerMasInformes from "../../../../components/dxi-components/VerMasInformes";

//images
import goBackLogo from "@/assets/statics/icons/arrow_back_FILL0_wght400_GRAD0_opsz48.svg";

export default function VerMasPage() {
  //get Context values and functions
  const { modalidadDxI, mesSeleccionadoNombre } = useContext(AuthContext);

  const searchParams = useSearchParams();
  const title = searchParams.get("titulo");
  const seccion = searchParams.get("seccion");
  const step = searchParams.get("step");
  const ubicacion = searchParams.get("index");

  return (
    <>
      <div className="containerStepCard">
        {modalidadDxI === "rm" && (
          <p className="tituloModalidad itemsTituloVermas" style={{ marginBottom: "8px" }}>
            <Link
              title="Volver Atras"
              className="btnVolver"
              href={{
                pathname: "/inicio/dxivisualizaciones",
                query: { titulo: title, seccion: seccion },
              }}
            >
              <Image className="goBackLogo" src={goBackLogo} alt="Volver Atras"></Image>
              <span id="display-none-mobile">RESONANCIA MAGNÉTICA</span>
            </Link>
            <span className="tituloStep">⏐ {step}</span>
            <span style={{ color: "#b2b2b2", marginLeft: "8px" }}>{mesSeleccionadoNombre}</span>
          </p>
        )}
        {modalidadDxI === "tc" && (
          <p className="tituloModalidad itemsTituloVermas" style={{ marginBottom: "8px" }}>
            <Link
              title="Volver Atras"
              className="btnVolver"
              href={{
                pathname: "/inicio/dxivisualizaciones",
                query: { titulo: title, seccion: seccion },
              }}
            >
              <Image className="goBackLogo" src={goBackLogo} alt="Volver Atras"></Image>
              <span id="display-none-mobile">TOMOGRAFÍA COMPUTADA</span>
            </Link>
            <span className="tituloStep">⏐ {step}</span>
            <span style={{ color: "#b2b2b2", marginLeft: "8px" }}>{mesSeleccionadoNombre}</span>
          </p>
        )}
        <div className="containerVerMas">
          {ubicacion === "0" && <VerMasAgendamientoDynamic ubicacion={ubicacion} />}
          {ubicacion === "1" && <VerMasEsperaDynamic ubicacion={ubicacion} />}
          {ubicacion === "2" && <VerMasVolumenDynamic ubicacion={ubicacion} />}
          {ubicacion === "4" && <VerMasInformesDynamic ubicacion={ubicacion} />}
        </div>
      </div>
    </>
  );
}
