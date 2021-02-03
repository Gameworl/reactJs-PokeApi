import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RemovePokemon, resultsFavoriePokemon} from "../../redux/FavoriePokemonSlice";
import {SearchBar} from "./searchBar";



export const Mespokemon = () => {
   const pokemons = useSelector(resultsFavoriePokemon)
    const [texte,setTexte] = useState("")

    const dispatch = useDispatch()

    const favorie = pokemon => {
            dispatch(
                RemovePokemon({
                    resultsFavorie: pokemon
                })
            )
    }

    const maRecherche= (texte) => {
       setTexte(texte)
    }

    return(
        <div className="d-flex ">
                <div className="col">
                    <div className="row justify-content-center m-3" style={{ height: "fit-content"}}>
                        <SearchBar fontion={maRecherche}/>
                    </div>
                    <div className="row" style={{ height: "fit-content"}}>
                        {
                            pokemons.filter(pokemon => pokemon.name.toUpperCase().includes(texte.toUpperCase()))
                            .map((pokemon) => (
                                <div key={pokemon.name} className=" col-md-2 m-4 h-25 card align-items-center transparent" style={{width: 35+"em"}}>
                                    <span className="badge badge-danger badge-pill m-1 " style={{cursor: "pointer"}} onClick={() => favorie(pokemon)}>
                                        Relacher
                                    </span>
                                    <img className="pokeIcon " src={"https://img.pokemondb.net/sprites/home/normal/"+ pokemon.name+".png"} alt={"image de " + pokemon.name} />
                                    <h5 className="card-title justify-content-center">{pokemon.name}</h5>
                                </div>
                            ))
                        }
                    </div>

                </div>
        </div>
    );
}
