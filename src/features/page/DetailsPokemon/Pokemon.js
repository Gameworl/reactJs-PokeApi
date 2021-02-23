import React, {useEffect} from "react";
import {
     queryDetailsPokemonUrl,
    queryDetailsSpeciePokemon,
    StatusDetails,
    StatusDetailsSpecie,
    ResultDetailsPokemon,
} from "../../redux/DetailsPokemonSlice";

import {
    selectedUrl,
} from "../../redux/PaginationPokemonSlice";

import {useDispatch,useSelector} from "react-redux";
import {DetailsPokemon} from "./DetailsPokemon";
import {Spinner} from "../Spinner/spinner";

/**
 * Page contenant le pokemon
 * @returns {*}
 * @constructor
 */
export const Pokemon = () => {
    const dispatch = useDispatch()
    const pokemonInfo = useSelector(ResultDetailsPokemon)
    const statusDetails = useSelector(StatusDetails)
    const statusSpecie = useSelector(StatusDetailsSpecie)
    const urlpokemon = useSelector(selectedUrl)

    useEffect(() => {
        if (statusDetails === "idle") {
            dispatch(
                queryDetailsPokemonUrl(urlpokemon),
            )
        }
        if (statusDetails === "succeeded" && statusSpecie === "idle"){
            dispatch(
                queryDetailsSpeciePokemon(pokemonInfo.species.url)
            )
        }
    })
    return(
        <div className="col d-flex justify-content-center ">
            {statusSpecie === "succeeded"? <DetailsPokemon/> : <Spinner/>}
        </div>
    );

}
