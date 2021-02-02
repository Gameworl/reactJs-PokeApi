import React from "react";
import loading from "../../../assets/pokeball.gif"
export const Spinner = () => {

    return(
        <div className={"col d-flex justify-content-center align-items-center"}>
                <img src={loading} alt={"Chargement de votre pokemon"}/>
        </div>
    );
}