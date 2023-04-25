"use client";
import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";

//components
import { AuthContext } from "@/context/AuthContext";

// styles
import "./navigation-bar.css";

// images
import logoWuru from "@/assets/statics/logo.svg";
import logoAnalytics from "@/assets/statics/icons/analytics.svg";
import lockIcon from "@/assets/statics/icons/lockIcon.svg";
import logOutIcon from "@/assets/statics/icons/logout.svg";

export default function NavigationBar() {
  const {
    userName,
    navLinksImg,
    navLinksQx,
    instiName,
    setSectionSelected,
    setTabName,
    logOut,
    actualRouteNav,
    setActualRouteNav,
    areaTabSelected,
    setAreaTabSelected,
  } = useContext(AuthContext);

  return (
    <div className="navBar " id="display-none-mobile">
      <Image className="logoNav" src={logoWuru} alt="/" />
      <div className="instiDiv">
        <p className="instiTitle">INSTITUCIÓN</p>
        <p className="instiName">{instiName}</p>
      </div>
      <div className="navigation">
        <div className="titleMenu">
          <Image className="logoTab logoActive" src={logoAnalytics} alt="/" />
          <h1 className="titleTab mainTab">ANALYTICS</h1>
        </div>
        <h2 className={`titleTab ${areaTabSelected === "qx" ? "tabActive" : "tabInActive"}`}>QUIRÓFANOS</h2>
        {navLinksQx.map((link, index) => (
          <span key={index}>
            {!link.disabled ? (
              <Link
                href={{ pathname: link.route }}
                className={`titleTab  ${actualRouteNav === link.route ? "selectedTab" : "innerTab"}`}
                onClick={() => {
                  setSectionSelected(link.section), setTabName(link.title), setActualRouteNav(link.route), setAreaTabSelected("qx");
                }}
              >
                {link.label}
              </Link>
            ) : (
              <Link
                href={{ pathname: link.route }}
                className={`titleTab  innerTab disabledTab`}
                onClick={() => {
                  setSectionSelected(link.section), setTabName(link.title), setActualRouteNav(link.route), setAreaTabSelected("qx");
                }}
              >
                {link.label}
                <Image src={lockIcon} alt="" className="lockIcon" />
              </Link>
            )}
          </span>
        ))}
        <h2 className={`titleTab  ${areaTabSelected === "dxi" ? "tabActive" : "tabInActive"}`}>IMÁGENES</h2>
        {navLinksImg.map((link, index) => (
          <span key={index}>
            {!link.disabled ? (
              <Link
                href={{ pathname: link.route }}
                className={`titleTab  ${actualRouteNav === link.route ? "selectedTab" : "innerTab"}`}
                onClick={() => {
                  setSectionSelected(link.section), setTabName(link.title), setActualRouteNav(link.route), setAreaTabSelected("dxi");
                }}
              >
                {link.label}
              </Link>
            ) : (
              <Link
                href={{ pathname: link.route }}
                className={`titleTab innerTab disabledTab`}
                onClick={() => {
                  setSectionSelected(link.section), setTabName(link.title), setActualRouteNav(link.route), setAreaTabSelected("dxi");
                }}
              >
                {link.label}
                <Image src={lockIcon} alt="" className="lockIcon" />
              </Link>
            )}
          </span>
        ))}
      </div>
      <div className="userDiv">
        <p className="userName">Hola {userName}!</p>
        <button className="logoutBtn" onClick={() => logOut()}>
          <Image src={logOutIcon} alt="salir" className="logOutIcon" />
          CERRAR SESIÓN
        </button>
      </div>
    </div>
  );
}
