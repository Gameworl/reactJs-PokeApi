import React, {useEffect,useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    StatusPagination,
    queryAllPokemonPagination,
    ResultPaginationPokemon,
    selectedPokemon
} from "../../redux/PaginationPokemonSlice";
import {
    statusPokemonDetails
} from "../../redux/DetailsPokemonSlice";
import Pagination from "react-js-pagination";
import "./styles/PageListPokemonStyle.scss"
import {Spinner} from "../Spinner/spinner";
import pokeLogo from "../../../assets/pokeIcon.jpg";
import {
    Link,
} from "react-router-dom";
export const PageListPokemon = () => {
    const dispatch = useDispatch()
    const statusList = useSelector(StatusPagination)
    const PokemonList = useSelector(ResultPaginationPokemon)
    const [Page, setpage] = useState(1);
    useEffect(()=>{
        if (statusList === "idle"){
            dispatch(
                queryAllPokemonPagination("https://pokeapi.co/api/v2/pokemon?offset=0&limit=10"),
            )
        }
    })

    function handlePageChange(pageNumber) {
        if (Page >= 1){
            if (pageNumber > Page){
                dispatch(
                    queryAllPokemonPagination(PokemonList.next),
                )
            }else {
                dispatch(
                    queryAllPokemonPagination(PokemonList.previous),
                )
            }
            setpage(pageNumber)
        }
    }
    const handleClick = (pokemon) => {
        dispatch(
            statusPokemonDetails({
                StatusDetails: "idle",
                StatusDetailsSpecie: "idle"
            }),
        )
        dispatch(
            selectedPokemon({
                selected : pokemon.url
            })
        )
    }


    return(
        <div className="d-flex ">
            {statusList === "succeeded"?
            <div className="row">
                {statusList === "succeeded" ? PokemonList.results.map((pokemon) => (
                    <div key={pokemon.name} className=" col-md-2 m-4 h-25 card align-items-center transparentB" >
                        <img className="pokeIcon " src={"https://img.pokemondb.net/sprites/home/normal/"+ pokemon.name+".png"} alt={"image de " + pokemon.name} />
                        <h5 className="card-title justify-content-center">{pokemon.name}</h5>
                        <Link to={"/details"} className="btn border-0 transparent" onClick={() =>handleClick(pokemon)}>
                            <img className="logo" src={pokeLogo} alt={"logo"}/>
                            Détails
                            <img className="logo" src={pokeLogo} alt={"logo"}/>
                        </Link>
                    </div>
                )) : ""}
                <div className="m-auto h-auto">
                    <Pagination
                        itemClass="page-item "
                        linkClass="page-link"
                        hideFirstLastPages
                        prevPageText='prev'
                        nextPageText='next'
                        activePage={Page}
                        itemsCountPerPage={10}
                        totalItemsCount={1118}
                        pageRangeDisplayed={3}
                        onChange={handlePageChange.bind(this)}
                    />
                </div>
            </div>: <Spinner/>}

        </div>

    )
}


