import React, {useEffect} from "react";
import {
    queryRandomPokemon,
    queryRandomSpeciePokemon,
    ResultRandomPokemon,
    statusPokemonRandom,
    StatusRandom,
    StatusRandomSpecie
} from "../../redux/RandomPokemonSlice";
import {
    ResultsPokemonList,
    StatusList,
    queryAllPokemon
} from "../../redux/AllPokemonSlice";
import {useDispatch,useSelector} from "react-redux";
import {DetailsRandomPokemon} from "./DetailsRandomPokemon";
import './styles/FocusOnePokemonStyle.scss';
import {Spinner} from "../Spinner/spinner";
import refreshIcon from "../../../assets/refresh.png";


export const FocusPokemon = () => {
    const dispatch = useDispatch()
    const pokemonUrl = useSelector(ResultsPokemonList)
    const statusList = useSelector(StatusList)
    const statusOne = useSelector(StatusRandom)
    const statusSpecie = useSelector(StatusRandomSpecie)
    const pokemonInfo = useSelector(ResultRandomPokemon)

    useEffect(() => {
        if (statusList === "idle") {
            dispatch(
                queryAllPokemon(),
            )
        }
        if (statusList === "succeeded" && statusOne === "idle"){
            dispatch(
                queryRandomPokemon(pokemonUrl[Math.floor(Math.random() * 1118)].url),
            )
        }
        if (statusOne === "succeeded" && statusSpecie === "idle"){
            dispatch(
                queryRandomSpeciePokemon(pokemonInfo.species.url)
            )
        }
    })
    function refreshPage() {
        dispatch(
            statusPokemonRandom({
                statusRandomPokemonQuery: "idle",
                statusRandomSpeciePokemonQuery: "idle"
            }),
        )
    }
    return(
        <div className="col d-flex justify-content-center background align-items-center">
            {statusSpecie === "succeeded"? <button onClick={refreshPage} className="float-right transparentB border-0" style={{ cursor: "pointer"}}>
                <img src={refreshIcon} style={{height : 2+"rem", width: 2+"rem"}} alt={"refreshIcon"}/>
            </button>:""}
            {statusSpecie === "succeeded"? <DetailsRandomPokemon/> : <Spinner/>}
        </div>
    );

}