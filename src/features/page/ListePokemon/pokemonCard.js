import React from "react";
import {Link} from "react-router-dom";
import {statusPokemonDetails} from "../../redux/DetailsPokemonSlice";
import {selectedPokemon} from "../../redux/PaginationPokemonSlice";
import {useDispatch} from "react-redux";
export const PokemonCard = (props) => {
    const dispatch = useDispatch()
    const image = (urlImage) => {
        let image = urlImage.split('/');
        let imagePokemon = image[6];
        return imagePokemon
    };
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
        <div key={image(props.pokemon.url)} className=" col-md-2 m-4 h-25 card align-items-center transparentB" >
            <img className="pokeIcon " src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+image(props.pokemon.url)+".png"} alt={"image de " + props.pokemon.name} />
            <h5 className="card-title justify-content-center">{props.pokemon.name}</h5>
            <Link to={"/details"} className="btn border-0 transparent" onClick={() =>handleClick(props.pokemon)}>
                <img className="logo" src={"/assets/pokeIcon.jpg"} alt={"logo"}/>
                Détails
                <img className="logo" src={"/assets/pokeIcon.jpg"} alt={"logo"}/>
            </Link>
        </div>
        );
}
