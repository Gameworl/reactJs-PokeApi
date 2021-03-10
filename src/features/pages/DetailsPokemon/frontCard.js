import React from "react";
import {AddPokemon,RemovePokemon, resultsFavoriePokemon} from "../../redux/FavoriePokemonSlice";
import {useDispatch, useSelector} from "react-redux";
import data from "../../../images.json";
export const FrontCard = (props) => {
    const dispatch = useDispatch()
    const ListFavorie = useSelector(resultsFavoriePokemon)

    /**
     * gestion de la mise en favorie du pokemon
     */
    const favorite= () =>{
        if (!ListFavorie.map(pokemon => pokemon.name === props.pokemonInfo.name).includes(true)){
            console.log("ADD")
            dispatch(
                AddPokemon({
                    resultsFavorie: props.pokemonInfo
                })
            )
        }else{
            console.log("REMOVE")
            dispatch(
                RemovePokemon({
                    resultsFavorie: props.pokemonInfo
                })
            )
        }
    }

    /**
     * check si le pokemon est dans la liste des favories
     * @returns {boolean}
     */
    const listFavorie = () => {
        let fav = false
        ListFavorie.forEach(element => {
            if (element.name === props.pokemonInfo.name){
                fav = true
            }
        })
        return fav
    }

    /**
     * Affiche l'image du type en fontion de ceux du pokemon
     */
    const imgType = props.pokemonInfo.types.map(type => {
        return <img className={"type"} key={type.type.name} src={data[type.type.name]} alt={type.type.name}/>
    })

    return(
        <div>
            <div className="text-center transparent rounded p-1">
                <div className="text-left ">
                    {
                        listFavorie() ?
                            <span className="badge badge-danger badge-pill " style={{cursor: "pointer"}} onClick={() => favorite()}>
                        Relacher
                        </span>
                        :
                            <span className="badge badge-success badge-pill " style={{cursor: "pointer"}} onClick={() => favorite()}>
                        Capturer
                        </span>
                    }
                </div>
                <h5 className="card-title "> {props.name}</h5>
                {imgType}
            </div>
            <div className={"row justify-content-center"}>
                <div>
                    <div id="carousel" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={props.pokemonInfo.sprites.front_default} className="d-block card-img-top" alt={"img front"}/>
                            </div>
                            <div className="carousel-item">
                                <img src={props.pokemonInfo.sprites.back_default} className="d-block card-img-top" alt={"img back"} />
                            </div>
                            <div className="carousel-item">
                                <img src={props.pokemonInfo.sprites.front_shiny} className="d-block card-img-top" alt={"img front shiny"} />
                            </div>
                            <div className="carousel-item">
                                <img src={props.pokemonInfo.sprites.back_shiny} className="d-block card-img-top" alt={"img back shiny"}/>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"/>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carousel" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"/>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="card-body rounded-top">
                <p className="card-text">
                    {props.description}
                </p>
                <p className="font-italic">Pokedex {props.version}</p>
            </div>
        </div>
    );
}
