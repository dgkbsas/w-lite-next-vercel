"use client";
import { createContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

//AuthContext
export const AuthContext = createContext();

//json
import institucionGeneral from "../JSON/institucion-general.json";
import dxiTC from "../JSON/dxi-tc.json";
import dxiRM from "../JSON/dxi-rm.json";

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
  const [dataInstitucion, setDataInstitucion] = useState(institucionGeneral);
  const [sitiosInstitucion, setSitiosInstitucion] = useState(institucionGeneral.sitios);
  const [mesesAnalizados, setMesesAnalizados] = useState(institucionGeneral.sitios[0].mesAnalizado);
  const [sitioSelected, setSitioSelected] = useState(institucionGeneral.sitios[0].id);
  const [mesSeleccionado, setMesSeleccionado] = useState(institucionGeneral.sitios[0].mesAnalizado[0].mesValue);
  const [mesSeleccionadoNombre, setMesSeleccionadoNombre] = useState(institucionGeneral.sitios[0].mesAnalizado[0].mesTitle);
  const [homePage, setHomePage] = useState(institucionGeneral.homePage);
  const [modalidadDxI, setModalidadDxI] = useState("rm");
  const [dataItemsDxI, setDataItemsDxI] = useState(dxiRM[1][mesSeleccionado]);

  //variables Nav
  const [navLinksImg, setNavLinksImg] = useState(institucionGeneral.navLinksImagenes);
  const [navLinksQx, setNavLinksQx] = useState(institucionGeneral.navLinksQx);
  const [areaTabSelected, setAreaTabSelected] = useState("dxi");
  const [instiName, setInstiName] = useState(institucionGeneral.instiName);
  const [sectionSelected, setSectionSelected] = useState(institucionGeneral.homePage.homeSection);
  const [tabName, setTabName] = useState(institucionGeneral.homePage.homeName);
  const [actualRouteNav, setActualRouteNav] = useState(institucionGeneral.homePage.homeNav);

  //FULL REQUEST
  const [fullRequest, setFullRequest] = useState({});

  //set request
  useEffect(() => {
    fullRequest.institucion = institucionGeneral.instiValue;
    fullRequest.sitio = sitioSelected;
    fullRequest.modalidad = modalidadDxI;
    fullRequest.mes = mesSeleccionado;
    console.log(fullRequest);
  }, [sitioSelected, modalidadDxI, mesSeleccionado]);

  //Verify from sessionStorage on reload
  useEffect(() => {
    let userStorage = sessionStorage.getItem("userLogged");
    let userMail = sessionStorage.getItem("userMail");
    let token = sessionStorage.getItem("token");

    setDataItemsDxI(dxiRM[1][mesSeleccionado]);
    setUserName("Diego");

    if (userStorage === "true") {
      router.push(`${homePage.homeNav}`);
      setUserLogged(true);
    } else {
      router.push("/signin");
      setUserLogged(false);
    }
  }, [userLogged]);

  //Sign in function
  const signIn = (email, password) => {
    //Check email and password, and verify Client
    if (email === "" && password === "") {
      //ACA HACEMOS EL FETCH O LA CONSULTA A LA BASE DATOS
      console.log("loggedIn");
      sessionStorage.setItem("userLogged", true);
      sessionStorage.setItem("userMail", email);
      sessionStorage.setItem("token", process.env.NEXT_PUBLIC_ACCESS_TOKEN_CHSF);
      router.push(`${homePage.homeNav}`);
      setUserLogged(true);
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
    router.push("/signin");
  };

  //function to set selected "Modalidad"
  function handleSetModalidad(event) {
    setModalidadDxI(event.target.value);
  }

  //Set data depending of which modality and month its selected
  useEffect(() => {
    //Set data of selected "sitio"
    if (modalidadDxI === "tc") {
      setDataItemsDxI(dxiTC[1][mesSeleccionado]);
    } else if (modalidadDxI === "rm") {
      setDataItemsDxI(dxiRM[1][mesSeleccionado]);
    }
    setDataDownloaded(true);
  }, [sitioSelected, modalidadDxI, mesSeleccionado]);

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
