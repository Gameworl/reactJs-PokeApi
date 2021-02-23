import React from "react";

/**
 * Gif faisant office de spinner
 * @returns {*}
 * @constructor
 */
export const Spinner = () => {

    return(
        <div className={"col d-flex justify-content-center align-items-center"}>
                <img src={"/assets/pokeball.gif"} alt={"Chargement de votre pokemon"}/>
        </div>
    );
}
