"use client";
import React, { useState, useContext } from "react";
import Image from "next/image";

//style
import "./signin-style.css";

//context
import { AuthContext } from "@/context/AuthContext";

//images
import LogoWuru from "../../assets/statics/logo.svg";
import visibleIcon from "../..//assets/statics/icons/visible.svg";
import notVisibleIcon from "../..//assets/statics/icons/notvisible.svg";

export default function SignIn() {
  const { signIn, error } = useContext(AuthContext);
  const [visiblePass, setVisiblePass] = useState(false);

  return (
    <>
      <div className="containerLogIn">
        <div className="cardLogIn">
          <Image src={LogoWuru} alt="" className="logoWuru" />
          {error && <p className="errorMsg">Email o constraseña incorrectos</p>}
          <form
            action=""
            className="formSignIn"
            onSubmit={(e) => {
              {
                e.preventDefault();
                signIn(e.target.mailInput.value, e.target.passInput.value);
              }
            }}
          >
            <div className="inputDiv">
              <label htmlFor="mailInput" className="inputTitle">
                Email
              </label>
              <input type="email" name="mailInput" id="mailInput" className="input" />
            </div>
            <div className="inputDiv">
              <label htmlFor="passInput" className="inputTitle">
                Contraseña
              </label>
              <input type="password" name="passInput" id="passInput" className="input" />
              <Image
                src={visiblePass ? notVisibleIcon : visibleIcon}
                alt=""
                className="vibilityIcon"
                onClick={() => {
                  visiblePass ? setVisiblePass(false) : setVisiblePass(true);
                  visiblePass
                    ? document.getElementById("passInput").setAttribute("type", "password")
                    : document.getElementById("passInput").setAttribute("type", "text");
                }}
              />
            </div>
            <button type="submit" className="btnIngresar">
              INGRESAR
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
