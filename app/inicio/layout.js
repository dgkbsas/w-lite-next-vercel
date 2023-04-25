"use client";
import { useContext } from "react";

//context
import { AuthContext } from "@/context/AuthContext";

//components
import TopBarHeader from "@/components/topHeader/TopBarHeader";
import NavigationBar from "@/components/navBar/NavigationBar";
import Loading from "@/components/loader/Loading";

export default function HomeLayout({ children }) {
  const { userLogged } = useContext(AuthContext);
  return (
    <>
      {userLogged === null ? (
        <Loading />
      ) : (
        <>
          <NavigationBar />
          <div className="mainContainer" id="mainContainer">
            <TopBarHeader />
            {children}
          </div>
        </>
      )}
    </>
  );
}
