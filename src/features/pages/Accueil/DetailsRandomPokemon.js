import React, {useEffect, useState} from "react";
import {ResultRandomPokemon,ResultRandomSpeciePokemon} from "../../redux/RandomPokemonSlice";
import { useSelector} from "react-redux";
import './styles/DetailFocusPokemonStyle.scss';


export const DetailsRandomPokemon = () => {
    const pokemonInfo = useSelector(ResultRandomPokemon)
    const pokemonSpecie = useSelector(ResultRandomSpeciePokemon)
    const [description, setDescription] = useState("");
    const [name, setName] = useState("");
    const [version, setVersion] = useState("");

    useEffect(()=>{
       getResume()
       getName()
    })

    /**
     * recupere le resumé d'un pokemon en Français
     */
    const getResume = () =>{
        pokemonSpecie.flavor_text_entries.forEach(texte => {
            if (texte.language.name === "fr" ){
                if (texte.flavor_text.length !== 0){
                        setDescription(texte.flavor_text)
                        setVersion(texte.version.name)

                    }
                }
        })
    }

    /**
     * Récupère le nom français du pokemon
     */
    const getName = () => {
        pokemonSpecie.names.forEach(name => {
            if(name.language.name === "fr"){
                setName(name.name)
            }
        })

    }



    return(

        <div className="card border-0" style={{width: 18+"rem", height: "fit-content"}}>
            <img
                src={pokemonInfo.sprites.front_default}
                className="card-img-top"
                alt={"image de " + pokemonInfo.name}
            />
            <div className="card-body rounded">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">
                    {description}
                </p>
                <p className="font-italic">Pokedex {version}</p>
            </div>
        </div>

    );
}
