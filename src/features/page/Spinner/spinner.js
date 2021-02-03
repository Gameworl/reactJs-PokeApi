import React from "react";
export const Spinner = () => {

    return(
        <div className={"col d-flex justify-content-center align-items-center"}>
                <img src={"/assets/pokeball.gif"} alt={"Chargement de votre pokemon"}/>
        </div>
    );
}