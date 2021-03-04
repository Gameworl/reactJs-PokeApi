import React, {useEffect,useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    StatusPagination,
    queryAllPokemonPagination,
    ResultPaginationPokemon,
    selectedPage,
    Page
} from "../../redux/PaginationPokemonSlice";
import Pagination from "react-js-pagination";
import "./styles/PageListPokemonStyle.scss"
import {Spinner} from "../Spinner/spinner";
import {PokemonCard} from "./pokemonCard";

/**
 * Page contenant la liste de tout les pokemons
 * @returns {*}
 * @constructor
 */
export const PageListPokemon = () => {
    const dispatch = useDispatch()
    const statusList = useSelector(StatusPagination)
    const PokemonList = useSelector(ResultPaginationPokemon)
    const pageNumber = useSelector(Page)
    const [page, setpage] = useState(pageNumber);
    useEffect(()=>{
        if (statusList === "idle"){
            dispatch(
                queryAllPokemonPagination("https://pokeapi.co/api/v2/pokemon?offset=0&limit=10"),
            )
        }
    })
    /**
     * fait des appels en fonction du bouton cliqué sur la pagination
     * @param pageNumber
     */
    const handlePageChange = (pageNumber) =>{
        if (page >= 1){
            if (pageNumber > page){
                dispatch(
                    queryAllPokemonPagination(PokemonList.next),
                )
            }else {
                dispatch(
                    queryAllPokemonPagination(PokemonList.previous),
                )
            }
            dispatch(
                selectedPage({
                    page : pageNumber
                })
            )
            setpage(pageNumber)
        }
    }



    return(
        <div className="d-flex ">
            {statusList === "succeeded"?
            <div  className="row">
                {statusList === "succeeded" ? PokemonList.results.map((pokemon) => (
                    <PokemonCard pokemon={pokemon}/>
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
                        totalItemsCount={1118}
                        pageRangeDisplayed={3}
                        onChange={handlePageChange.bind(this)}
                    />
                </div>
            </div>: <Spinner/>}
        </div>
    )
}


