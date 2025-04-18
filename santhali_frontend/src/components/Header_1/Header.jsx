import "./Header.css" ;
import React from "react";

export default function Header(){
    return(
        <div>
            <i className="fa-solid fa-bars"></i>
            <h1>Santhali Translator</h1>
            <div className="logo">
            <img src="src/assets/jharkhand_logo.png" alt="Image" />
            <img src="src/assets/nit_logo.png" alt="Nit_logo"/>
            </div>
        </div>
    )
}