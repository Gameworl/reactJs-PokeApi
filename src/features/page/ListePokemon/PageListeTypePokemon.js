import React, {useEffect,useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    StatusListeTypePokemon,
    ResultListeTypePokemon,
    queryListeTypePokemon, StatusTypePokemon, ResultTypePokemon,queryTypePokemon
} from "../../redux/PaginationPokemonSlice";
import Pagination from "react-js-pagination";
import "./styles/PageListPokemonStyle.scss"
import {Spinner} from "../Spinner/spinner";

import {PokemonCard} from "./pokemonCard";
import {SelectionTypeBar} from "./SelectionTypeBar";
export const PageListeTypePokemon = () => {
    const dispatch = useDispatch()
    const statusList = useSelector(StatusListeTypePokemon)
    const statusType = useSelector(StatusTypePokemon)
    const TypeList = useSelector(ResultTypePokemon)
    const PokemonList = useSelector(ResultListeTypePokemon)
    const [page, setpage] = useState(1);

    useEffect(()=>{
        if (statusType === "idle"){
            dispatch(
                queryTypePokemon(),
            )
        }
    })

    const handlePageChange = (pageNumber) => {
        if (page >= 1){
            setpage(pageNumber)
        }
    }


    const maRecherche= (texte) => {
        if (texte.lenght !== 0){
            dispatch(
                queryListeTypePokemon(texte),
            )
        }
    }

    return(
        <div className="d-flex ">
            <div className="col">
                { statusType === "succeeded" ?<div className="row justify-content-center m-3" style={{ height: "fit-content"}}>
                    <SelectionTypeBar types={TypeList} recherche={maRecherche}/>
                </div>: ""}

            {statusList === "succeeded"?
                <div className="row"  style={{ height: "fit-content"}}>
                    {statusList === "succeeded" ? PokemonList[page-1].map((pokemon) => (
                        <PokemonCard pokemon={pokemon.pokemon}/>
                    )) : ""}
                    <div className="m-auto h-auto">
                        <Pagination
                            itemClass="page-item "
                            linkClass="page-link"
                            hideFirstLastPages
                            prevPageText='prev'
                            nextPageText='next'
                            activePage={page}
                            itemsCountPerPage={10}
                            totalItemsCount={PokemonList.length*10}
                            pageRangeDisplayed={3}
                            onChange={handlePageChange.bind(this)}
                        />
                    </div>
                </div>: <Spinner/>}
            </div>
        </div>

    )
}


