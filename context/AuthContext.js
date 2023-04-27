"use client";
import { createContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

//AuthContext
export const AuthContext = createContext();

//json
import institucionGeneral_CHSF from "../JSON/institucion-general-CHSF.json";
import dxiTC_CHSF from "../JSON/dxi-tc-CHSF.json";
import dxiRM_CHSF from "../JSON/dxi-rm-CHSF.json";
import institucionGeneral_HA from "../JSON/institucion-general-HA.json";
import dxiTC_HA from "../JSON/dxi-tc-HA.json";
import dxiRM_HA from "../JSON/dxi-rm-HA.json";

//FUNCTION PROVIDER
export const AuthContextProvider = ({ children }) => {
  const router = useRouter();

  //Variables user and log
  const [userLogged, setUserLogged] = useState(null);
  const [userName, setUserName] = useState("");
  const [dataDownloaded, setDataDownloaded] = useState(false);

  //signIn variables
  const [error, setError] = useState(false);

  //variables General Data
  const [dataInstitucion, setDataInstitucion] = useState(null);
  const [dataDxiRM, setDataDxiRM] = useState(null);
  const [dataDxiTC, setDataDxiTC] = useState(null);
  const [sitioSelected, setSitioSelected] = useState([]);
  const [sitiosInstitucion, setSitiosInstitucion] = useState([]);
  const [mesesAnalizados, setMesesAnalizados] = useState([]);
  const [mesSeleccionado, setMesSeleccionado] = useState([]);
  const [mesSeleccionadoNombre, setMesSeleccionadoNombre] = useState([]);
  const [homePage, setHomePage] = useState([]);
  const [modalidadDxI, setModalidadDxI] = useState("");
  const [dataItemsDxI, setDataItemsDxI] = useState([]);

  //variables Nav
  const [navLinksImg, setNavLinksImg] = useState([]);
  const [navLinksQx, setNavLinksQx] = useState([]);
  const [areaTabSelected, setAreaTabSelected] = useState("dxi");
  const [instiName, setInstiName] = useState("");
  const [sectionSelected, setSectionSelected] = useState("");
  const [tabName, setTabName] = useState("");
  const [actualRouteNav, setActualRouteNav] = useState("");

  useEffect(() => {
    console.log("reloaded");
    if (dataInstitucion !== null && dataDxiRM !== null && dataDxiTC !== null) {
      setSitiosInstitucion(dataInstitucion.sitios);
      setMesesAnalizados(dataInstitucion.sitios[0].mesAnalizado);
      setSitioSelected(dataInstitucion.sitios[0].id);
      setMesSeleccionado(dataInstitucion.sitios[0].mesAnalizado[0].mesValue);
      setMesSeleccionadoNombre(dataInstitucion.sitios[0].mesAnalizado[0].mesTitle);
      setHomePage(dataInstitucion.homePage);
      setModalidadDxI("rm");
      setDataItemsDxI(dataDxiRM[1][dataInstitucion.sitios[0].mesAnalizado[0].mesValue]);

      setNavLinksImg(dataInstitucion.navLinksImagenes);
      setNavLinksQx(dataInstitucion.navLinksQx);
      setAreaTabSelected("dxi");
      setInstiName(dataInstitucion.instiName);
      setSectionSelected(dataInstitucion.homePage.homeSection);
      setTabName(dataInstitucion.homePage.homeName);
      setActualRouteNav(dataInstitucion.homePage.homeNav);

      setDataDownloaded(true);
    }
  }, [dataInstitucion, dataDxiRM, dataDxiTC, userLogged]);

  //Set data depending of which modality and month its selected
  useEffect(() => {
    //Set data of selected "sitio"
    if (modalidadDxI === "tc") {
      setDataItemsDxI(dataDxiTC[1][mesSeleccionado]);
    } else if (modalidadDxI === "rm") {
      setDataItemsDxI(dataDxiRM[1][mesSeleccionado]);
    }
  }, [sitioSelected, modalidadDxI, mesSeleccionado, dataInstitucion, dataDxiRM, dataDxiTC]);

  async function getDataFromDB(cliente) {
    // const url = "https://dark-sky.p.rapidapi.com/%7Blatitude%7D,%7Blongitude%7D?units=auto&lang=en";
    // const options = {
    //   method: "GET",
    //   headers: {
    //     "content-type": "application/octet-stream",
    //     "X-RapidAPI-Key": "f4d83bd300msh9f43fd2ed5d828fp1f1b1fjsn09f463f7bf13",
    //     "X-RapidAPI-Host": "dark-sky.p.rapidapi.com",
    //   },
    // };

    // // Fetch the data asynchronously
    // const response = await fetch(url, options);
    // const jsonData = await response.json();
    // console.log(jsonData);

    if (cliente === "CHSF-cliente") {
      console.log("set CHSF");
      setDataInstitucion(institucionGeneral_CHSF);
      setDataDxiRM(dxiRM_CHSF);
      setDataDxiTC(dxiTC_CHSF);
      setUserLogged(true);
    }
    if (cliente === "HA-cliente") {
      console.log("set HA");
      setDataInstitucion(institucionGeneral_HA);
      setDataDxiRM(dxiRM_HA);
      setDataDxiTC(dxiTC_HA);
      setUserLogged(true);
    }
    console.log("get db");
  }

  //Sign in function
  const signIn = (email, password) => {
    if (email === process.env.NEXT_PUBLIC_USER_CHSF && password === process.env.NEXT_PUBLIC_ACCESS_KEY_CHSF) {
      console.log("true logged", "CHSF");
      sessionStorage.setItem("userLogged", true);
      sessionStorage.setItem("userMail", email);
      sessionStorage.setItem("token", process.env.NEXT_PUBLIC_ACCESS_TOKEN_CHSF);
      setUserName("Usuario CHSF");
      getDataFromDB("CHSF-cliente");
      router.push(`/inicio/dxivisualizaciones`);
    } else {
      setError(true);
    }
    if (email === process.env.NEXT_PUBLIC_USER_HA && password === process.env.NEXT_PUBLIC_ACCESS_KEY_HA) {
      console.log("true logged", "HA");
      sessionStorage.setItem("userLogged", true);
      sessionStorage.setItem("userMail", email);
      sessionStorage.setItem("token", process.env.NEXT_PUBLIC_ACCESS_TOKEN_HA);
      setUserName("Usuario HA");
      getDataFromDB("HA-cliente");
      router.push(`/inicio/dxivisualizaciones`);
    } else {
      setError(true);
    }
  };

  //logOut function
  const logOut = () => {
    console.log("logOut");
    sessionStorage.setItem("userLogged", false);
    sessionStorage.removeItem("userMail");
    sessionStorage.removeItem("userPass");
    setUserLogged(false);
    setDataDownloaded(false);
    router.push("/signin");
  };

  //function to set selected "Modalidad"
  function handleSetModalidad(event) {
    setModalidadDxI(event.target.value);
  }

  useEffect(() => {
    if (sessionStorage.getItem("userLogged") === "true") {
      console.log("true logged");
      if (
        sessionStorage.getItem("token") === process.env.NEXT_PUBLIC_ACCESS_TOKEN_CHSF ||
        sessionStorage.getItem("token") === process.env.NEXT_PUBLIC_ACCESS_TOKEN_HA
      ) {
        console.log("true token");
        if (sessionStorage.getItem("token") === process.env.NEXT_PUBLIC_ACCESS_TOKEN_CHSF) {
          console.log("token CHSF");
          setUserName("Usuario CHSF");
          getDataFromDB("CHSF-cliente");
          router.push("/inicio/dxivisualizaciones");
        }
        if (sessionStorage.getItem("token") === process.env.NEXT_PUBLIC_ACCESS_TOKEN_HA) {
          console.log("token HA");
          setUserName("Usuario HA");
          getDataFromDB("HA-cliente");
          router.push("/inicio/dxivisualizaciones");
        }
      } else {
        sessionStorage.setItem("userLogged", false);
        sessionStorage.removeItem("userMail");
        sessionStorage.removeItem("userPass");
        sessionStorage.removeItem("token");
        console.log("false token");
        router.push("/signin");
      }
    } else {
      console.log("false userLogged");
      router.push("/signin");
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        dataItemsDxI,
        dataInstitucion,

        sitioSelected,
        modalidadDxI,
        sitiosInstitucion,
        mesesAnalizados,
        homePage,
        navLinksImg,
        navLinksQx,
        instiName,
        sectionSelected,
        tabName,
        actualRouteNav,
        areaTabSelected,

        mesSeleccionado,
        mesSeleccionadoNombre,
        dataDownloaded,

        setAreaTabSelected,
        setSectionSelected,
        setTabName,
        setActualRouteNav,

        setDataInstitucion,
        setMesSeleccionadoNombre,
        setDataItemsDxI,
        setSitioSelected,
        setMesSeleccionado,
        setModalidadDxI,
        handleSetModalidad,

        userName,
        userLogged,
        signIn,
        logOut,
        error,
        setError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
